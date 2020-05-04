import React from 'react';
import styled from 'styled-components';
import { PlayButton } from 'components';

const Paragraph = styled.p`
  color: burgundy;
  font-size: 24px;
  font-family: sans-serif;
`;

const BigBen = () => (
  <>
    <PlayButton
      src="http://localhost/"
      type="video"
    >
      foo
    </PlayButton>
    <Paragraph>plom plom tralala</Paragraph>
  </>
);

export default BigBen;
