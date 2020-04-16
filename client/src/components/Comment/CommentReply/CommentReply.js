import React, { useState, useRef, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { formatDateDistance } from '../../../utils/timeUtils';
import { Link } from 'react-router-dom';

import Icon from '../../Icon/Icon';

import {
  voteCommentReply,
  deleteCommentReply,
} from '../../../services/commentService';

import Avatar from '../../Avatar/Avatar';
import PulsatingIcon from '../../Icon/PulsatingIcon/PulsatingIcon';

const CommentReply = ({
  comment,
  parentComment,
  post,
  token,
  currentUser,
  dialogDispatch,
  profileDispatch,
  showModal,
  hideModal,
}) => {
  const commentReplyRef = useRef();
  const [commentPostTime, setCommentPostTime] = useState(() =>
    formatDateDistance(comment.date)
  );

  useEffect(() => {
    const commentPostTimeInterval = setInterval(() => {
      setCommentPostTime(formatDateDistance(comment.date));
    }, 60000);
    return () => clearInterval(commentPostTimeInterval);
  }, [setCommentPostTime, comment]);

  const handleCommentReplyVote = async () => {
    try {
      dialogDispatch({
        type: 'VOTE_COMMENT_REPLY',
        payload: { commentReplyId: comment._id, currentUser },
      });
      await voteCommentReply(comment._id, token);
    } catch (err) {
      console.warn(err);
    }
  };

  const handleCommentReplyDelete = async () => {
    try {
      dialogDispatch({
        type: 'REMOVE_COMMENT_REPLY',
        payload: {
          commentReplyId: comment._id,
          parentCommentId: parentComment._id,
        },
      });
      profileDispatch({
        type: 'DECREMENT_POST_COMMENTS_COUNT',
        payload: { decrementCount: 1, postId: post._id },
      });
      await deleteCommentReply(comment._id, token);
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <div
      style={{ marginLeft: '5rem' }}
      className="comment"
      ref={commentReplyRef}
    >
      <Link
        onClick={() => hideModal('PostDialog')}
        to={`/${comment.author.username}`}
      >
        <Avatar
          size="4rem"
          imageSrc={comment.author.avatar}
          className="avatar--small"
        />
      </Link>
      <div className="comment__content">
        <p className="heading-4">
          <Link
            onClick={() => hideModal('PostDialog')}
            style={{ textDecoration: 'none', color: 'currentColor' }}
            to={`/${comment.author.username}`}
          >
            <b>{comment.author.username}</b> {comment.message}
          </Link>
        </p>
        {comment.author.username === currentUser.username ? (
          <div
            onClick={() =>
              showModal(
                {
                  options: [
                    {
                      warning: true,
                      text: 'Delete',
                      onClick: () => handleCommentReplyDelete(),
                    },
                  ],
                },
                'OptionsDialog'
              )
            }
            className="comment__menu-dots"
            style={{ marginRight: '0' }}
          >
            <Icon
              className="icon--small icon--button color-grey"
              icon="ellipsis-horizontal"
              style={{ height: '3rem' }}
            />
          </div>
        ) : null}
        <div className="comment__stats">
          <p className="heading-5 color-light">{commentPostTime}</p>
          <Fragment>
            {comment.commentReplyVotes.length > 0 && (
              <p className="heading-5 color-light">
                {comment.commentReplyVotes.length}{' '}
                {comment.commentReplyVotes.length === 1 ? 'like' : 'likes'}
              </p>
            )}
            <button
              onClick={() =>
                // Telling the PostDialogCommentForm that we want to reply to the parent comment
                dialogDispatch({
                  type: 'SET_REPLYING',
                  payload: {
                    username: comment.author.username,
                    commentId: parentComment._id,
                  },
                })
              }
              className="heading-5 heading--button color-light"
            >
              reply
            </button>
          </Fragment>
        </div>
      </div>
      <div className="comment__like">
        <PulsatingIcon
          toggle={
            !!comment.commentReplyVotes.find(
              (vote) => vote.author === currentUser._id
            )
          }
          constantProps={{
            onClick: () => handleCommentReplyVote(),
          }}
          toggledProps={[
            { icon: 'heart', className: 'icon--tiny color-red' },
            { icon: 'heart-outline', className: 'icon--tiny' },
          ]}
          elementRef={commentReplyRef}
        />
      </div>
    </div>
  );
};

export default CommentReply;