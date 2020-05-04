import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.button`
  position: absolute;
  top: 50%;
  width: 100px;
  height: 100px;
  border: 2px solid blue;
  border-radius: 100%;
  background-color: #fff;
  transform: translate3d(0, -50%, 0);
  cursor: pointer;
  ${({ direction }) => (direction === 'left' && css`left: 0;`)}
  ${({ direction }) => (direction === 'right' && css`right: 0;`)}

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 75px;
    height: 6px;
    border-radius: 3px;
    background-color: blue;
    transform: translate3d(-50%, -50%, 0);
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    width: 50px;
    height: 50px;
    border: 6px solid blue;
    border-radius: 3px;
    ${({ direction }) => (direction === 'left' && css`
      transform: translate3d(-50%, -50%, 0) rotate(-45deg);
      border-right: none;
      border-bottom: none;
    `)}
    ${({ direction }) => (direction === 'right' && css`
      transform: translate3d(-50%, -50%, 0) rotate(45deg);
      border-left: none;
      border-bottom: none;
    `)}
  }
`;

const NavButton = ({
  currentIndex,
  direction,
  setCurrentIndex,
}) => {
  const handleClick = () => {
    if (direction === 'left') {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <Wrapper
      direction={direction}
      onClick={() => handleClick(direction)}
    />
  );
};

NavButton.propTypes = {
  currentIndex: PropTypes.number.isRequired,
  direction: PropTypes.string.isRequired,
  setCurrentIndex: PropTypes.func.isRequired,
};

export default NavButton;
