"use client";
import Image from "next/image";
import React, { ChangeEvent, useState, useTransition } from "react";
import { useRef } from "react";
import { convertBlobUrlToFile } from "../lib/utils";
import { uploadImage } from "../supabase/storage/client";

export default function Home() {
  const [imageUrls, setImageUrls] = useState([]);
  const imageInputRef = useRef(null);
  const handleImageChange = (e) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      const newImageUrls = filesArray.map((file) => URL.createObjectURL(file));

      setImageUrls([...imageUrls, ...newImageUrls]);
    }
  };

  const [isPending, startTransition] = useTransition();

  const handleClickUploadImageButton = async () => {
    startTransition(async () => {
      let urls = [];
      for (const url of imageUrls) {
        const imageFile = await convertBlobUrlToFile(url);

        const { imageUrl, error } = await uploadImage({
          file: imageFile,
          bucket: "cilukba",
        });

        if (error) {
          console.log(error);
          return;
        }

        urls.push(imageUrl);
      }
      console.log(urls);
      setImageUrls([]);
    });
  };
  return (
    <div className="bg-slate-500 min-h-screen flex justify-center items-center flex-col gap-8">
      <input type="file" multiple hidden ref={imageInputRef} onChange={handleImageChange} disabled={isPending} />
      <button className="bg-slate-600 py-2 w-40 rounded-lg" onClick={() => imageInputRef.current?.click()}>
        Select Images
      </button>
      <div className="flex gap-4">
        {imageUrls.map((url, i) => (
          <Image key={url} src={url} width={300} height={300} alt={`img-${i}`} />
        ))}
      </div>
      <button className="bg-slate-600 py-2 w-40 rounded-lg" onClick={handleClickUploadImageButton} disabled={isPending}>
        {isPending ? "Uploading..." : "Upload Image"}
      </button>
    </div>
  );
}
