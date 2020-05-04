import React, { useState } from 'react';
import styled from 'styled-components';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import { useSwipeable } from 'react-swipeable';
import {
  BigBen,
  Navigation,
  Slide,
} from 'components/';
import Reset from 'utils/reset';

const Container = styled.main`
  position: relative;
  overflow: hidden;
  width: 100vw;
  max-width: 100%;
  height: 100vh;
  max-height: 100%;
`;

const slides = [
  {
    content: 'lorem ipsum',
    title: 'first slide',
  },
  {
    content: 'dolor sit amet',
    title: 'second slide',
  },
  {
    content: 'foobar',
    title: 'third slide',
  },
  {
    Component: BigBen,
    title: 'big ben',
  },
];

const keyDownHandler = (key, currentIndex, numberOfSlides, setCurrentIndex) => {
  switch (key) {
    case 'left':
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }

      break;

    case 'right':
      if (currentIndex !== numberOfSlides - 1) {
        setCurrentIndex(currentIndex + 1);
      }

      break;

    default:
      break;
  }
};

const App = () => {
  const [
    currentIndex,
    setCurrentIndex,
  ] = useState(0);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => currentIndex !== slides.length - 1 && setCurrentIndex(currentIndex + 1),
    onSwipedRight: () => currentIndex > 0 && setCurrentIndex(currentIndex - 1),
  });

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Container {...swipeHandlers}>
      <KeyboardEventHandler
        handleKeys={[
          'right',
          'left',
        ]}
        onKeyEvent={(key) => keyDownHandler(key, currentIndex, slides.length, setCurrentIndex)}
      />
      <Reset />
      {slides.map((slide, index) => {
        const { Component } = slide;

        return (
          <Slide
            key={slide.title}
            current={index === currentIndex}
            next={index === currentIndex + 1}
            previous={index === currentIndex - 1}
          >
            {slide.title && !Component && <h2>{slide.title}</h2>}
            {slide.content && !Component && <h3>{slide.content}</h3>}
            {slide.Component && <Component />}
          </Slide>
        );
      })}
      <Navigation
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        numberOfSlides={slides.length}
      />
    </Container>
  );
};

export default App;
