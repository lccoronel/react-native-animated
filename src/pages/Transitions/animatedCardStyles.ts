import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';

import { StyleGuide } from '../../components';

export const AnimatedContainer = styled(Animated.View)`
  justify-content: center;
  align-items: center;
  padding: ${StyleGuide.spacing * 4}px;
`;

export const absoluteStyleCards = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
  },
})

