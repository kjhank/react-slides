import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { NavButton } from 'components';

const Wrapper = styled.nav`
  position: fixed;
  right: 5vw;
  bottom: 5vh;
  z-index: 2;
  width: 250px;
  height: 75px;
`;

const Navigation = ({
  currentIndex,
  setCurrentIndex,
  numberOfSlides,
}) => (
  <Wrapper>
    {currentIndex > 0 && (
      <NavButton
        currentIndex={currentIndex}
        direction="left"
        setCurrentIndex={setCurrentIndex}
      />
    )}
    {currentIndex !== numberOfSlides - 1 && (
      <NavButton
        currentIndex={currentIndex}
        direction="right"
        setCurrentIndex={setCurrentIndex}
      />
    )}
  </Wrapper>
);

Navigation.propTypes = {
  currentIndex: PropTypes.number.isRequired,
  numberOfSlides: PropTypes.number.isRequired,
  setCurrentIndex: PropTypes.func.isRequired,
};

export default Navigation;
