import React from 'react';

const PostDetail = ({ post, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
    <div className="bg-white p-4 rounded-lg w-full max-w-2xl mx-auto">
      <button className="mb-4 p-2 bg-red-500 text-white rounded" onClick={onClose}>Close</button>
      <img src={post.image} alt={post.text} className="w-full h-96 object-cover mb-4" />
      <h2 className="text-lg font-semibold">{post.text}</h2>
      <p>{post.likes} likes</p>
      <p>Published on: {new Date(post.publishDate).toLocaleDateString()}</p>
      <p>Owner: {post.owner.firstName} {post.owner.lastName}</p>
    </div>
  </div>
);

export default PostDetail;
