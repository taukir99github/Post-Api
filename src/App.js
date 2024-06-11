import React, { useState, useEffect, useCallback } from 'react';
import PostCard from './Components/PostCards';
import PostDetail from './Components/PostDetails';
import { fetchPosts } from './api';
import './App.css';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await fetchPosts();
        setPosts(response.data.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    getPosts();
  }, []);

  const handlePostClick = useCallback((post) => {
    setSelectedPost(post);
  }, []);

  const handleClose = useCallback(() => {
    setSelectedPost(null);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className='text-center text-[40px] mb-8'>All Posts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {posts.map(post => (
          <PostCard key={post.id} post={post} onClick={handlePostClick} />
        ))}
      </div>
      {selectedPost && <PostDetail post={selectedPost} onClose={handleClose} />}
    </div>
  );
};

export default App;
