import * as React from "react";
import Animated from "react-native-reanimated";

import Bubble from "./Bubble";
import { Container, ContainerBubblies } from './chatBubbleStyles'

interface SimpleActivityIndicatorProps {
  progress: Animated.SharedValue<number>;
}

const SimpleActivityIndicator = ({
  progress,
}: SimpleActivityIndicatorProps) => {
  const bubbles = [0, 1, 2];
  const delta = 1 / bubbles.length;

  return (
    <Container>
      <ContainerBubblies>
        {bubbles.map((i) => {
          const start = i * delta;
          const end = start + delta;
          return <Bubble key={i} {...{ start, end, progress }} />;
        })}
      </ContainerBubblies>
    </Container>
  );
};

export default SimpleActivityIndicator;