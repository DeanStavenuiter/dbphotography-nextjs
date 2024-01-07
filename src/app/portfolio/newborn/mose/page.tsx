"use client";;
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import React, { useEffect, useState } from "react";
import styles from "@/styles/album.module.css";
import Image from "next/image";
import {
  S3Client,
  ListObjectsCommand,
  ListObjectsOutput,
} from "@aws-sdk/client-s3";

const Page = () => {
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
    const prefix = "Mose/";

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
  }, []);

  return (
    <>
    <Header />
    <main className={styles.main}>
      <div className={styles.album}>
        <div className={styles.col}>
          {bucketItems.slice(0, 5).map((item, index) => {
            return (
              <Image
                key={index}
                alt={`Mose ${index}`}
                src={`https://dbphotography-nextjs.s3.eu-north-1.amazonaws.com/${item}`}
                width={500}
                height={500}
                priority
              />
            );
          })}
        </div>
        <div className={styles.col}>
        {bucketItems.slice(5, 9).map((item, index) => {
            return (
              <Image
                key={index}
                alt={`Mose ${index}`}
                src={`https://dbphotography-nextjs.s3.eu-north-1.amazonaws.com/${item}`}
                width={500}
                height={500}
                priority
              />
            );
          })}
        </div>
        <div className={styles.col}>
        {bucketItems.slice(9, 13).map((item, index) => {
            return (
              <Image
                key={index}
                alt={`Mose ${index}`}
                src={`https://dbphotography-nextjs.s3.eu-north-1.amazonaws.com/${item}`}
                width={500}
                height={500}
                priority
              />
            );
          })}
        </div>
      </div>
    </main>
    <Footer />
  </>
  )
}

export default Page