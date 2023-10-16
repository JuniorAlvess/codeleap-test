import { useState } from 'react';
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';

import Form from '../Form';
import InputGroup from '../InputGroup';
import Button from '../Button';
import TextareaGroup from '../textareaGroup';
import Post from './Post';

import axios from '../../services/axios';

import { usePosts, PostsProvider } from '../../contexts/PostsContext';

function AllPosts() {
  const user = useSelector((state) => state.auth.user);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const { posts, isLoading, handleGetPosts } = usePosts();

  const handleCreatePost = async (e) => {
    e.preventDefault();

    try {
      const data = {
        username: user,
        title,
        content,
      };

      await axios.post('/careers/', data);
      toast.success('Post created successfully');
    } catch (err) {
      console.log(err);
    } finally {
      handleGetPosts('/careers/');
      setTitle('');
      setContent('');
    }
  };

  return (
    <>
      <Form title="What’s on your mind?" onSubmit={handleCreatePost}>
        <InputGroup
          label="Title"
          placeholder="Hello world"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextareaGroup
          label="Content"
          placeholder="Content here"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button type="submit" text="Create" isDisabled={!title.trim() || !content.trim()} />
      </Form>
      {posts &&
        posts.map((post, index) => (
          <Post
            key={index}
            id={post.id}
            user={post.username}
            title={post.title}
            content={post.content}
            dateTime={post.created_datetime}
          />
        ))}
      {isLoading && (
        <>
          <Post />
          <Post />
          <Post />
        </>
      )}
    </>
  );
}

const Posts = () => {
  return (
    <PostsProvider>
      <AllPosts />
    </PostsProvider>
  );
};

export default Posts;
