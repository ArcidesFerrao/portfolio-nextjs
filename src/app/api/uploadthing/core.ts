import { createUploadthing, type FileRouter } from "uploadthing/next";
// import { UploadThingError } from "uploadthing/server";

const f = createUploadthing(); // initialize uploadthing

// const auth = (req: Request) => ({ id: "fakeId" }); // Fake auth function

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  imageUploader: f({ image: { maxFileSize: "4MB", maxFileCount: 4 } })
    // Set permissions and file types for this FileRoute
    // .middleware(async ({ req }) => {
      // This code runs on your server before upload
    //   const user = await auth(req);

    //   If you throw, the user will not be able to upload
    //   if (!user) throw new UploadThingError("Unauthorized");

      // Whatever is returned here is accessible in onUploadComplete as `metadata`
    //   return { userId: user.id };
    // })
    // .onUploadComplete(async ({ metadata, file }) => {
    .onUploadComplete(async ({ file }) => {
      // This code RUNS ON YOUR SERVER after upload
      // console.log("Upload complete for:", metadata);
      console.log("file url", file.url);

      // !!! Whatever is returned here is sent to the clientside `onClientUploadComplete` callback
      return { url: file.url };
    }),

    bannerImageRoute: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
    // .onUploadComplete(async ({ metadata, file }) => {
    .onUploadComplete(async ({ file }) => {
      console.log("file url", file.url);
      // console.log(metadata);
      return { url: file.url }
    })

} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
