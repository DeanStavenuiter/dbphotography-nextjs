"use client";

import { useEffect, useState } from "react";
import AWS from "aws-sdk";
import Image from "next/image";

export default function S3BucketList() {
  const [bucketItems, setBucketItems] = useState([]);

  useEffect(() => {
    // Configure AWS
    AWS.config.update({
      region: "eu-north-1",
      accessKeyId: process.env.NEXT_PUBLIC_ACCESS_KEY,
      secretAccessKey: process.env.NEXT_PUBLIC_SECRET_KEY,
    });

    // Create an S3 instance
    const s3 = new AWS.S3();

    // Specify your bucket name
    const bucketName = process.env.NEXT_PUBLIC_BUCKET_NAME;
    const prefix = "Mose";

    // List objects in the bucket
    s3.listObjects({ Bucket: bucketName, Prefix: prefix }, (err, data) => {
      if (err) {
        console.error("Error listing bucket items:", err);
      } else {
        console.log(data.Contents)
        const itemKeys = data.Contents?.map((item) => item.Key || "") || [];
        setBucketItems(itemKeys);
      }
    });
  }, []);

  return (
    (<div>
      <h1>S3 Bucket Items</h1>
      <ul>
        {bucketItems.map((item, index) => (
          // <li key={index}>{item}</li>
          (<li key={index}>
            <Image
              alt="mose"
              src={`https://dbphotography-nextjs.s3.eu-north-1.amazonaws.com/${item}`}
              width={500}
              height={500}
            />
          </li>)
        ))}
      </ul>
    </div>)
  );
}
