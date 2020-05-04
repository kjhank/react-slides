import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';
import { transitions } from 'utils/vars';

const {
  duration,
  durationShort: shortDuration,
} = transitions;

const Wrapper = styled.section`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: opacity ${shortDuration}, transform ${duration};
  ${({ current }) => current && css`
    z-index: 1;
    opacity: 1;
    transform: translate3d(0, 0, 0);
  `}
  ${({ previous }) => previous && css`
    z-index: 0;
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  `}
  ${({ next }) => next && css`
    z-index: 0;
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  `}
  ${({
    current,
    next,
    previous,
  }) => !current && !next && !previous && css`
    z-index: -1;
    opacity: 0;
  `}
`;

const Slide = ({
  children,
  current,
  next,
  previous,
}) => (
  <Wrapper
    current={current}
    next={next}
    previous={previous}
  >
    {children}
  </Wrapper>
);

Slide.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.bool,
    PropTypes.element,
  ]).isRequired,
  current: PropTypes.bool,
  next: PropTypes.bool,
  previous: PropTypes.bool,
};

Slide.defaultProps = {
  current: false,
  next: false,
  previous: false,
};

export default Slide;
