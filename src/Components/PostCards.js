import React from 'react';

const PostCard = React.memo(({ post, onClick }) => (
  <div className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer" onClick={() => onClick(post)}>
    <img src={post.image} alt={post.text} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h2 className="text-lg font-semibold">{post.text}</h2>
      <p>{post.likes} likes</p>
    </div>
  </div>
));

export default PostCard;
