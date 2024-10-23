import Link from "next/link";
import React from "react";

export default function Blog() {
  return (
    <div className="blog-container flexDisplay">
      <div className="title-blog">
        <Link href="/blog">
          <h2>Blog</h2>
        </Link>
      </div>

      <div className="blog-detail">
        <p>
          This is a space for me to share some of the stuff I learn overtime and
          some of my thoughts on certain topics... feel free to leave your's in
          the comments.
        </p>
      </div>

      {/* <Posts /> */}
    </div>
  );
}
