import React from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import styled from 'styled-components';
import Grid from './Grid';
import Row from './Row';
import Column from './Column';
import ImageRoll from './ImageRoll';
import Flash from '../containers/Flash';
import Sheet from '../containers/Sheet';
import Layout from '../containers/Layout';

/**
 * Sheet Wrapper, upper screen
 */
const SheetWrapper = styled(Row)`
  height: 40vw;
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
  height: calc(90vh - 40vw);
`;

/**
 * Content Component, responsible for rendering the main UI skeleton
 */
const Content = () => (
  <Grid>
    <Flash />
    <SheetWrapper>
      <Sheet />
    </SheetWrapper>
    <Footer>
      <ImageRoll />
      <LayoutInputWrapper>
        <Layout />
      </LayoutInputWrapper>
    </Footer>
  </Grid>
);

export default DragDropContext(HTML5Backend)(Content);
