import React from 'react';
import styled from 'styled-components';
import Grid from './Grid';
import Row from './Row';
import Column from './Column';
import Image from './Image';
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
 * Avaliable Image Roll Wrapper
 */
const ImageRollWrapper = styled(Row)`
  flex: 6 0;
  align-items: center;
  justify-content: flex-start;
`;

/**
 * Layout Control Wrapper
 */
const LayoutInputWrapper = styled(Column)`
  flex: 4 0;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

/**
 * Content Component, responsible for rendering the main UI skeleton
 */
const Content = () => (
  <Grid>
    <SheetWrapper>
      <Image imageIndex={1} />
    </SheetWrapper>
    <Row height="25vh">
      <ImageRollWrapper>
        Image Roll Here
      </ImageRollWrapper>
      <LayoutInputWrapper>
        <Layout />
      </LayoutInputWrapper>
    </Row>
  </Grid>
);

export default Content;
