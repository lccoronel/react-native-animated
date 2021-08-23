import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { width: wWidth } = Dimensions.get("window");
const width = wWidth * 0.8;

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ContainerBubblies = styled.View`
  height: ${width}px;
  width: ${width}px;;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background-color: #d3d3d3;
  border-top-left-radius: ${width / 2}px;
  border-top-right-radius: ${width / 2}px;
  border-bottom-left-radius: ${width / 2}px;
`;
