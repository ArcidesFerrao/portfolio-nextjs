// import Link from "next/link";
import db from "@/db/db";
import Link from "next/link";
import React from "react";

export default async function BlogPage() {
  const posts = getPosts();

  return (
    <div className="blog-page adjustPadding">
      {/* <PostCategories /> */}
      <section className="blog-posts flexDis">
        <div className="blog-head">
          <h2>Blog</h2>
          <h4>
            Welcome to my blog. This is a space for me to share some of the
            stuff I learn overtime and some of my thoughts on certain topics...
            feel free to leave your thought in the comments.
          </h4>
        </div>

        <div className="posts">
          {posts &&
            (await posts).map((post, index) => (
              <div className="post cont" key={index}>
                <div className="post-img">
                  <img src={post.imagePath} alt="" className="post-image" />
                </div>

                <div className="post-detail">
                  <div className="post-title">
                    <Link href={`/post/${post.id}`}>
                      <h3>{post.title}</h3>
                    </Link>
                  </div>

                  <div className="post-description">
                    <p className="post-preview-text">{post.description}</p>
                  </div>

                  <div className="post-date">
                    <div className="date-posted">
                      <h4>
                        {post.createdAt.toDateString()}
                        {/* {format(post.publishAt, "PPP")} */}
                        {/* { datePost => {setDatePost(format(post.publishAt, "PPP"))} } */}
                      </h4>
                    </div>
                    <div className="post-share">
                      <a href="#">
                        <span className="quill--share"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
}

async function getPosts() {
  const posts = await db.post.findMany({
    select: {
      id: true,
      title: true,
      createdAt: true,
      description: true,
      intro: true,
      outro: true,
      imagePath: true,
      references: true,
    },
  });

  return posts;
}
