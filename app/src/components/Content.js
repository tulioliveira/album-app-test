import React from 'react';
import styled from 'styled-components';
import Grid from './Grid';
import Row from './Row';
import Column from './Column';
import { colors } from '../providers/styles';

const SheetWrapper = styled(Row)`
  height: 60vh;
  width: calc(100vw - 20vw);
  padding: 10vh 10vw;
  align-items: center;
  justify-content: center;
`;

const ImageRollWrapper = styled(Row)`
  flex: 6 0;
  overflow-x: scroll;
  white-space: nowrap;
  background-color: ${colors.gray};
  align-items: center;
  justify-content: flex-start;
`;

const LayoutInputWrapper = styled(Column)`
  flex: 4 0;
  background-color: ${colors.gray};
  align-items: center;
  justify-content: center;
`;

const Content = () => (
  <Grid>
    <SheetWrapper>
      Sheet Here
    </SheetWrapper>
    <Row height="40vh">
      <ImageRollWrapper>
        Image Roll Here
      </ImageRollWrapper>
      <LayoutInputWrapper>
        Layout Input Here
      </LayoutInputWrapper>
    </Row>
  </Grid>
);

export default Content;
