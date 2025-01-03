import {
    // generateUploadButton,
    generateUploadDropzone,
  } from "@uploadthing/react";
import { generateReactHelpers } from "@uploadthing/react";
import type { OurFileRouter } from "../api/uploadthing/core";
  
//   import type { OurFileRouter } from "~/app/api/uploadthing/core";
  
  // export const UploadButton = generateUploadButton<OurFileRouter>();
  
export const { useUploadThing, uploadFiles } = generateReactHelpers<OurFileRouter>();

export const UploadDropzone = generateUploadDropzone<OurFileRouter>();
  
