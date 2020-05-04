import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Element = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 100%;
`;

const PlayButton = ({
  children,
  src,
  type,
}) => (
  <Element onClick={() => console.log(type, src)}>
    {children}
  </Element>
);

PlayButton.propTypes = {
  children: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default PlayButton;
