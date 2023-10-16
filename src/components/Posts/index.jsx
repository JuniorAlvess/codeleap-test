import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';

import Form from '../Form';
import InputGroup from '../InputGroup';
import Button from '../Button';
import TextareaGroup from '../textareaGroup';
import Post from './Post';

import axios from '../../services/axios';

function Posts() {
  const user = useSelector((state) => state.auth.user);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [nextPageUrl, setNextPageUrl] = useState(null);
  const handleCreatePost = async (e) => {
    e.preventDefault();

    try {
      const data = {
        username: user,
        title,
        content,
      };

      await axios.post('/careers/', data);
      handleGetPosts('/careers/');
      toast.success('Post created successfully');
    } catch (err) {
      console.log(err);
    }
  };

  const handleGetPosts = async (url) => {
    setIsLoading(true);
    try {
      const response = await axios.get(url);
      setPosts((prevPosts) => [...prevPosts, ...response.data.results]);
      if (response.data.next) {
        setNextPageUrl(response.data.next);
      } else {
        setNextPageUrl(null);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  const loadMore = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      isLoading
    ) {
      return;
    }

    nextPageUrl && handleGetPosts(nextPageUrl);
  };

  useEffect(() => {
    handleGetPosts('/careers/');
  }, []);

  useEffect(() => {
    nextPageUrl && window.addEventListener('scroll', loadMore);
    return () => window.removeEventListener('scroll', loadMore);
  }, [isLoading, nextPageUrl]);

  return (
    <>
      <Form title="What’s on your mind?" onSubmit={handleCreatePost}>
        <InputGroup
          label="Title"
          placeholder="Hello world"
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextareaGroup
          label="Content"
          placeholder="Content here"
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
      {isLoading && <p>Loading...</p>}
    </>
  );
}

export default Posts;
