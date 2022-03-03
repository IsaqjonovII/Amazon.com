import React from "react";

const Pagination = ({ last, totalPosts }) => {
  const posts = [];

  for (let i = 1; i <= Math.ceil(last / totalPosts); i++) {
    posts.push(i);
  }

  return (
    <div>
      <h1>Hello, world</h1>
    </div>
  );
};

export default Pagination;
