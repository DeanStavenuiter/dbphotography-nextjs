"use client";

import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import React, { useEffect, useState } from "react";
import styles from "@/styles/album.module.css";
import Image from "next/image";
import AWS from "aws-sdk";

const Page = () => {
  const [bucketItems, setBucketItems] = useState<string[]>([]);

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
    const bucketName = process.env.NEXT_PUBLIC_BUCKET_NAME!;
    const prefix = "family:zomer/";

    // List objects in the bucket
    s3.listObjects({ Bucket: bucketName, Prefix: prefix }, (err, data) => {
      if (err) {
        console.error("Error listing bucket items:", err);
      } else {
        // console.log(data.Contents);
        const itemKeys = data.Contents?.map((item) => item.Key || "") || [];
        setBucketItems(itemKeys);
      }
    });
  }, []);

  return (
    <>
    <Header />
    <main className={styles.main}>
      <div className={styles.album}>
        <div className={styles.col}>
          {bucketItems.slice(0, 8).map((item, index) => {
            return (
              <Image
                key={index}
                alt={`zomer avond ${index}`}
                src={`https://dbphotography-nextjs.s3.eu-north-1.amazonaws.com/${item}`}
                width={500}
                height={500}
              />
            );
          })}
        </div>
        <div className={styles.col}>
        {bucketItems.slice(8, 16).map((item, index) => {
            return (
              <Image
                key={index}
                alt={`zomer avond ${index}`}
                src={`https://dbphotography-nextjs.s3.eu-north-1.amazonaws.com/${item}`}
                width={500}
                height={500}
              />
            );
          })}
        </div>
        <div className={styles.col}>
        {bucketItems.slice(16, 23).map((item, index) => {
            return (
              <Image
                key={index}
                alt={`zomer avond ${index}`}
                src={`https://dbphotography-nextjs.s3.eu-north-1.amazonaws.com/${item}`}
                width={500}
                height={500}
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