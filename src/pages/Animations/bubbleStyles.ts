import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';
import { StyleGuide } from '../../components';

const bubbleSize = 32;
export const Container = styled(Animated.View)`
  width: ${bubbleSize}px;
  height: ${bubbleSize}px;
  border-radius: ${bubbleSize / 2}px;
  background-color: ${StyleGuide.palette.primary};
`;
