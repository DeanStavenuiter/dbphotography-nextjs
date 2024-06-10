"use client";

import { useEffect, useState } from "react";
import {
  S3Client,
  ListObjectsCommand,
  ListObjectsOutput,
} from "@aws-sdk/client-s3";
import Image from "next/image";
import styles from "@/styles/album.module.css";

interface GetImagesProps {
  prefix: string;
  name: string;
  start?: number;
  indexEndFirstCol: number;
  indexEndSecondCol: number;
  indexEndThirdCol: number;
}

const GetImages = (props: GetImagesProps) => {
  const [bucketItems, setBucketItems] = useState<string[]>([]);

  useEffect(() => {
    // Create an S3 instance
    const s3 = new S3Client({
      region: "eu-north-1",
      credentials: {
        accessKeyId: process.env.NEXT_PUBLIC_ACCESS_KEY!,
        secretAccessKey: process.env.NEXT_PUBLIC_SECRET_KEY!,
      },
    });

    // Specify your bucket name
    const bucketName = process.env.NEXT_PUBLIC_BUCKET_NAME!;
    const prefix = props.prefix;

    (async () => {
      try {
        // List objects in the bucket
        const command = new ListObjectsCommand({
          Bucket: bucketName,
          Prefix: prefix,
        });
        const data: ListObjectsOutput = await s3.send(command);

        const itemKeys = data.Contents?.map((item) => item.Key || "") || [];
        // console.log(itemKeys); // Do something with the item keys
        setBucketItems(itemKeys);
      } catch (err) {
        console.error("Error listing bucket items:", err);
      }
    })();
  }, [props.prefix]);

  console.log("Length bucketitems",bucketItems.length)
  return (
    <div className={styles.album}>
      <div className={styles.col}>
        {bucketItems.slice(bucketItems.length > 3 ? 1 : props.start, props.indexEndFirstCol).map((item, index) => {
          return (
            <Image
              key={index}
              alt={`${props.name} ${index}`}
              src={`https://dbphotography-nextjs.s3.eu-north-1.amazonaws.com/${item}`}
              width={500}
              height={500}
              priority
            />
          );
        })}
      </div>
      <div className={styles.col}>
        {bucketItems
          .slice(bucketItems.length > 3 ? props.indexEndFirstCol + 1 : props.indexEndFirstCol, props.indexEndSecondCol)
          .map((item, index) => {
            return (
              <Image
                key={index}
                alt={`${props.name} ${index}`}
                src={`https://dbphotography-nextjs.s3.eu-north-1.amazonaws.com/${item}`}
                width={500}
                height={500}
                priority
              />
            );
          })}
      </div>
      <div className={styles.col}>
        {bucketItems
          .slice(bucketItems.length > 3 ? props.indexEndSecondCol + 1 : props.indexEndSecondCol, props.indexEndThirdCol)
          .map((item, index) => {
            return (
              <Image
                key={index}
                alt={`${props.name} ${index}`}
                src={`https://dbphotography-nextjs.s3.eu-north-1.amazonaws.com/${item}`}
                width={500}
                height={500}
                priority
              />
            );
          })}
      </div>
    </div>
  );
};

export default GetImages;
