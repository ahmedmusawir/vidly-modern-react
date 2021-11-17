import React from 'react';
import PropTypes from 'prop-types';
import { BsSuitHeart } from 'react-icons/bs';
import { FaHeartBroken } from 'react-icons/fa';

function Like({ like, onLike }) {
  return (
    <span onClick={onLike}>
      {like ? <FaHeartBroken color='pink' /> : <BsSuitHeart color='pink' />}
    </span>
  );
}

Like.propTypes = {
  like: PropTypes.bool.isRequired,
};

export default Like;
