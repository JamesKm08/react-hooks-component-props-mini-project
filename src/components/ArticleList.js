import React from "react";
import blogData from "../data/blog";
import Article from "./Article";

console.log(blogData);

function ArticleList({posts}) {
  return (
    <main>{posts.map((post) =>
        <Article key = {post.id} title = {post.title} date = {post.date} preview= {post.preview} minutes={post.minutes}/>)}
    </main>
  );
}

export default ArticleList;
