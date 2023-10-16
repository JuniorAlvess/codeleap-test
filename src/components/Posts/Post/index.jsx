import { useState } from 'react';
import { useSelector } from 'react-redux';
import { usePosts } from '../../../contexts/PostsContext';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import Form from '../../Form';
import Button from '../../Button';
import Modal from '../../Modal';
import InputGroup from '../../InputGroup';
import TextareaGroup from '../../textareaGroup';
import toast from 'react-hot-toast';

import { MdDeleteForever } from 'react-icons/md';
import { BiEdit } from 'react-icons/bi';

import axios from '../../../services/axios';
import colors from '../../../styles/colors';
import * as S from './styles';

// eslint-disable-next-line react/prop-types
const Post = ({ user, id, title, content, dateTime }) => {
  const [isOpenDeletePostModal, setIsOpenDeletePostModal] = useState(false);
  const [isOpenEditPostModal, setIsOpenEditPostModal] = useState(false);
  const [titleEdit, setTitleEdit] = useState('');
  const [contentEdit, setContentEdit] = useState('');
  const username = useSelector((state) => state.auth.user);
  const { handleGetPosts, isLoading } = usePosts();

  const targetDate = new Date(dateTime);
  function getTimeDifference(targetDate) {
    const timeDifference = Math.floor((Date.now() - targetDate) / 1000);

    switch (true) {
      case timeDifference >= 86400: {
        const daysAgo = Math.floor(timeDifference / 86400);
        return `${daysAgo} day${daysAgo !== 1 ? 's' : ''} ago`;
      }
      case timeDifference >= 3600: {
        const hoursAgo = Math.floor(timeDifference / 3600);
        return `${hoursAgo} hour${hoursAgo !== 1 ? 's' : ''} ago`;
      }
      case timeDifference >= 60: {
        const minutesAgo = Math.floor(timeDifference / 60);
        return `${minutesAgo} minute${minutesAgo !== 1 ? 's' : ''} ago`;
      }
      default:
        return `${timeDifference} second${timeDifference !== 1 ? 's' : ''} ago`;
    }
  }

  const handleEditPost = async (e) => {
    e.preventDefault();
    if (user !== username) throw 'You are not authorized to edit this post.';

    if (!titleEdit.trim() && !contentEdit.trim())
      throw 'Please fill in the title or content field.';

    const data = {
      title: titleEdit || title,
      content: contentEdit || content,
    };

    try {
      await axios.patch(`/careers/${id}/`, data);
      toast.success('Post updated successfully!');
      setIsOpenEditPostModal(false);
      handleGetPosts('/careers/');
    } catch (err) {
      toast.error(err);
      setIsOpenEditPostModal(false);
    }
  };

  const handleDeletePost = async (e) => {
    e.preventDefault();
    if (user !== username) throw 'You are not authorized to delete this post.';

    try {
      await axios.delete(`/careers/${id}/`);
      toast.success('Post deleted successfully!');
      setIsOpenDeletePostModal(false);
      handleGetPosts('/careers/');
    } catch (err) {
      toast.error(err);
      setIsOpenDeletePostModal(false);
    }
  };

  return (
    <S.Container>
      <S.Header>
        <h2>{isLoading ? <Skeleton width={70} /> : title}</h2>
        {username === user && (
          <span>
            <MdDeleteForever
              color={colors.primary}
              onClick={() => setIsOpenDeletePostModal(true)}
            />
            <BiEdit color={colors.primary} onClick={() => setIsOpenEditPostModal(true)} />
          </span>
        )}
      </S.Header>
      <S.Content>
        {user && (
          <span>
            <strong>{isLoading ? <Skeleton width={50} /> : `@${user}`}</strong>
            <b>{isLoading ? <Skeleton width={30} /> : getTimeDifference(targetDate)}</b>
          </span>
        )}

        <S.Paragraph>
          {isLoading ? <Skeleton count={3} containerClassName="post-skeleton" /> : content}
        </S.Paragraph>
      </S.Content>

      {isOpenDeletePostModal && (
        <Modal>
          <Form title="Are you sure you want to delete this item?">
            <span>
              <Button text="Cancel" onClick={() => setIsOpenDeletePostModal(false)} />
              <Button
                type="submit"
                text="Delete"
                style={{
                  backgroundColor: colors.quaternary,
                  border: `1px solid ${colors.quaternary}`,
                }}
                onClick={handleDeletePost}
              />
            </span>
          </Form>
        </Modal>
      )}

      {isOpenEditPostModal && (
        <Modal>
          <Form title="Edit item" onSubmit={handleEditPost}>
            <InputGroup
              label="Title"
              placeholder="Hello world"
              defaultValue={title}
              onChange={(e) => setTitleEdit(e.target.value.trim())}
            />
            <TextareaGroup
              label="Content"
              placeholder="Content here"
              defaultValue={content}
              onChange={(e) => setContentEdit(e.target.value.trim())}
            />
            <span>
              <Button text="Cancel" onClick={() => setIsOpenEditPostModal(false)} />
              <Button
                type="submit"
                text="Save"
                style={{
                  backgroundColor: colors.tertiary,
                  border: `1px solid ${colors.tertiary}`,
                }}
                isDisabled={!titleEdit.trim() && !contentEdit.trim()}
                onClick={handleEditPost}
              />
            </span>
          </Form>
        </Modal>
      )}
    </S.Container>
  );
};

export default Post;
