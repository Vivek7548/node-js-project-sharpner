import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function SocialMediaApp() {
  const [postLink, setPostLink] = useState('');
  const [postDescription, setPostDescription] = useState('');
  const [posts, setPosts] = useState([]);

  const handleCreatePost = () => {
    if (postLink && postDescription) {
      const newPost = {
        link: postLink,
        description: postDescription
      };
      setPosts([...posts, newPost]);
      setPostLink('');
      setPostDescription('');
    } else {
      alert('Please enter both post link and description');
    }
  };

  const isImageLink = (url) => {
    const imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'webp'];
    const ext = url.split('.').pop();
    return imageExtensions.includes(ext.toLowerCase());
  };

  return (
    <div className="container-fluid p-0">
      <div className="background-overlay">
        <div className="container">
          <h1 className="text-center mb-5">Social Media App</h1>
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="card input-card">
                <div className="card-body">
                  <div className="mb-3">
                    <label htmlFor="postLink" className="form-label">Post Link</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="postLink" 
                      value={postLink} 
                      onChange={(e) => setPostLink(e.target.value)} 
                      placeholder="Enter post link" 
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="postDescription" className="form-label">Post Description</label>
                    <textarea 
                      className="form-control" 
                      id="postDescription" 
                      value={postDescription} 
                      onChange={(e) => setPostDescription(e.target.value)} 
                      rows="3" 
                      placeholder="Enter post description" 
                    />
                  </div>
                  <button className="btn btn-primary" onClick={handleCreatePost}>Create Post</button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5">
            <h2 className="text-center mb-3">Posts</h2>
            {posts.map((post, index) => (
              <div key={index} className="card post-card">
                <div className="card-body">
                  {isImageLink(post.link) ? (
                    <img src={post.link} className="img-fluid mb-3" alt="Post" />
                  ) : (
                    <React.Fragment>
                      <h5 className="card-title">Post Link</h5>
                      <p className="card-text">{post.link}</p>
                    </React.Fragment>
                  )}
                  <h5 className="card-title">Post Description</h5>
                  <p className="card-text">{post.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SocialMediaApp;
