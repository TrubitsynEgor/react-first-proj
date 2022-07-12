import React, { useState, useRef } from 'react';
import './styles/app.css';
import PostList from './components/PostList';

import PostForm from './components/PostForm';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript - 1', body: 'some description about JavaScript - 1' },
    { id: 2, title: 'JavaScript - 2', body: 'some description about JavaScript - 2' },
    { id: 3, title: 'JavaScript - 3', body: 'some description about JavaScript - 3' },
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  //Получаем post из дочернего компанента
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }




  return (
    <div className="App">
      <PostForm create={createPost} />
      {posts.length
        ? <PostList remove={removePost} posts={posts} title='Post list about JavaScript' />
        : <h1 style={{ textAlign: 'center' }}>Posts not defined!</h1>
      }


    </div >
  );
}

export default App;
