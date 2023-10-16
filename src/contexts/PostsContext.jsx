import { createContext, useContext, useEffect, useState } from 'react';
import axios from '../services/axios';
import toast from 'react-hot-toast';

const PostsContext = createContext();

export const usePosts = () => {
  return useContext(PostsContext);
};

// eslint-disable-next-line react/prop-types
export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [nextPageUrl, setNextPageUrl] = useState(null);

  const handleGetPosts = async (url) => {
    setIsLoading(true);
    try {
      const response = await axios.get(url);
      setPosts(response.data.results);
      setNextPageUrl(response.data.next);
    } catch (err) {
      toast.error('Something went wrong!');
    } finally {
      setIsLoading(false);
    }
  };

  const getMorePosts = async (url) => {
    setIsLoading(true);
    try {
      const response = await axios.get(url);
      setNextPageUrl(response.data.next);
      setPosts((prevPosts) => [...prevPosts, ...response.data.results]);
    } catch (err) {
      toast.error('Something went wrong!');
    } finally {
      setIsLoading(false);
    }
  };

  const loadMore = () => {
    if (!isLoading && nextPageUrl && isNearBottom()) {
      getMorePosts(nextPageUrl);
    }
  };

  const isNearBottom = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    const scrollTop = document.documentElement.scrollTop;
    return scrollHeight - clientHeight - scrollTop < 200;
  };

  useEffect(() => {
    handleGetPosts('/careers/');
  }, []);

  useEffect(() => {
    if (nextPageUrl === null) {
      window.removeEventListener('scroll', loadMore);
    } else {
      window.addEventListener('scroll', loadMore);
    }
    return () => {
      window.removeEventListener('scroll', loadMore);
    };
  }, [isLoading, nextPageUrl]);

  return (
    <PostsContext.Provider value={{ posts, isLoading, handleGetPosts }}>
      {children}
    </PostsContext.Provider>
  );
};
