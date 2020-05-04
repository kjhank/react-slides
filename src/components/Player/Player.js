import PropTypes from 'prop-types';
import React from 'react';
import ReactPlayer from 'react-player';

const Player = ({
  src,
  type,
}) => (
  <>
    {type}
    <ReactPlayer src={src} />
  </>
);

Player.propTypes = {
  src: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Player;
