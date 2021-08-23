import React from "react";
import Animated, {
  useAnimatedStyle,
  interpolate,
  Extrapolate,
} from "react-native-reanimated";

import { Container } from './bubbleStyles';

interface BubbleProps {
  progress: Animated.SharedValue<number>;
  start: number;
  end: number;
}

const Bubble = ({ progress, start, end }: BubbleProps) => {
  const style = useAnimatedStyle(() => {
    const opacity = interpolate(
      progress.value,
      [start, end],
      [0.5, 1],
      Extrapolate.CLAMP
    );
    const scale = interpolate(
      progress.value,
      [start, end],
      [1, 1.5],
      Extrapolate.CLAMP
    );
    
    return { opacity, transform: [{ scale }] };
  });

  return <Container style={style} />;
};

export default Bubble;