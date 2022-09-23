import React from "react";

function BlogContent(props) {
  console.log(props)
  return <div id="blog-content">{props.articleText}{props.isPublished}{props.minutesToRead}</div>;
}

export default BlogContent;
