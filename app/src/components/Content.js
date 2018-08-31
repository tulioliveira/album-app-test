import React from 'react';
import styled from 'styled-components';
import Grid from './Grid';
import Row from './Row';
import Column from './Column';
import Image from './Image';
import ImageRoll from './ImageRoll';
import Layout from '../containers/Layout';

/**
 * Sheet Wrapper, upper screen
 */
const SheetWrapper = styled(Row)`
  height: 65vh;
  width: calc(100vw - 20vw);
  margin: 5vh 10vw;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

/**
 * Layout Control Wrapper
 */
const LayoutInputWrapper = styled(Column)`
  flex: 4 0;
  height: calc(100% - 1rem);
  align-items: center;
  justify-content: center;
  padding-top: 1rem;
`;

/**
 * Footer
 */
const Footer = styled(Row)`
  background: linear-gradient(to bottom, #282828 0%,#252525 100%);
  height: 25vh;
`;

/**
 * Content Component, responsible for rendering the main UI skeleton
 */
const Content = () => (
  <Grid>
    <SheetWrapper>
      <Image imageIndex={1} />
    </SheetWrapper>
    <Footer>
      <ImageRoll />
      <LayoutInputWrapper>
        <Layout />
      </LayoutInputWrapper>
    </Footer>
  </Grid>
);

export default Content;
