/* eslint-disable sort-keys */
const transitions = {
  duration: '0.4s',
  durationShort: '0.2s',
};

const sizes = {
  xLarge: '1600px',
  large: '1300px',
  medium: '1100px',
  small: '800px',
  xsmall: '600px',
  xxsmall: '350px',
};

const mediaQueries = Object.keys(sizes).map((size) => ({
  [size]: `(max-width: ${sizes[size]})`,
}));

export {
  mediaQueries,
  transitions,
};
