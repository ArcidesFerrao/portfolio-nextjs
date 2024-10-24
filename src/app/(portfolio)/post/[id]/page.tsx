import db from "@/db/db";
import { notFound } from "next/navigation";
import React from "react";

export default async function BlogPost({ params }: { params: { id: string } }) {
  const { id } = await params;
  const postData = await db.post.findUnique({ where: { id } });

  if (postData == null) return notFound();

  return (
    <section className="blog-post-container">
      <div className="blog-block">
        <div className="posted-date">
          <span className="lets-icons--date-today-duotone"></span>
          {postData.createdAt.toDateString()}
        </div>

        <div className="title-post shorten">
          <h1 className="blog-title">{postData.title}</h1>
        </div>

        <div className="description-post shorten">
          <p>{postData.description}</p>
        </div>
        <img className="blog-image" src={postData.imagePath} alt="" />

        {/* <BlockContent 
                className='post-block'
                blocks={postData.body}
                projectId={createClient.config.projectId}
                dataset={createClient.config.dataset}
            /> */}
      </div>

      <div className="author">
        <div className="writtenBy down-border">
          <h4>Written by: Arcides Ferrao</h4>
        </div>

        <div className="tags down-border">
          <h3 className="auth-title">Tags</h3>
          <div className="tag-container contain">
            <div className="tags-post cont">
              <p>Sanity</p>
            </div>
          </div>
        </div>

        <div className="share-post down-border">
          <h3 className="auth-title">Share Post</h3>

          <div className="icon-share contain">
            <div className="icon-container cont">
              <span className="bi--github icon-size"></span>
            </div>
            <div className="icon-container cont">
              <span className="pajamas--twitter icon-size"></span>
            </div>
            <div className="icon-container cont">
              <span className="bi--linkedin icon-size"></span>
            </div>
          </div>
        </div>
      </div>

      <div className="post-reference">
        <h2>References</h2>
        <div className="ref-link">
          <ul>
            <li></li>
          </ul>
        </div>
      </div>
    </section>
  );
}
