import "./CustomDropzone.css";
import { useCallback, useState } from "react";
import { useUploadThing } from "../../lib/uploadthing";
import { useDropzone } from "@uploadthing/react";
import { generateClientDropzoneAccept } from "uploadthing/client";

export function MultiUploader({
  onImagesUploaded,
}: {
  onImagesUploaded: (urls: string[]) => void;
}) {
  const [files, setFiles] = useState<File[]>([]);
  const [images, setImages] = useState<string[]>([]);
  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles(acceptedFiles);
  }, []);

  const { startUpload, isUploading, permittedFileInfo } = useUploadThing(
    "imageUploader",
    {
      onClientUploadComplete: (res) => {
        if (res && Array.isArray(res)) {
          const urls: string[] = res.map((file) => file.url);
          setImages((prevImages) => [...prevImages, ...urls]);
          onImagesUploaded(urls);
          setFiles([]);
        }
        alert("uploaded successfully!");
      },
      onUploadError: () => {
        alert("error occured while uploading");
      },
      onUploadBegin: () => {
        alert("upload has begun");
      },
    }
  );

  const fileTypes = permittedFileInfo?.config
    ? Object.keys(permittedFileInfo?.config)
    : [];

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: fileTypes ? generateClientDropzoneAccept(fileTypes) : undefined,
  });

  return (
    <div {...getRootProps()} className="dropzoneCustom">
      <input {...getInputProps()} multiple />
      {files.length > 0 && (
        <div className="dropzoneButton">
          <button
            onClick={(e) => {
              e.preventDefault();
              if (!files) return;

              void startUpload(files);
            }}
            disabled={isUploading}
          >
            Upload {files.length} {files.length === 1 ? "file" : "files"}
          </button>
        </div>
      )}
      <p>{isUploading ? "Upoading" : "Drop files here!"}</p>

      {images &&
        images.map((url, index) => <img src={url} alt="" key={index} />)}
    </div>
  );
}
