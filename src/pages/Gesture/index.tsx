import React from "react";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withDecay } from "react-native-reanimated";

import { Card, Cards, CARD_HEIGHT, CARD_WIDTH } from "../../components";
import { Container } from './styles';

interface GestureProps {
  width: number;
  height: number;
}

const Gesture: React.FC<GestureProps> = ({ width, height }) => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const onGestureEvent = useAnimatedGestureHandler({
    onStart: (event, ctx) => {
      ctx.offsetX = translateX.value;
      ctx.offsetY = translateY.value;
    },
    onActive: (event, ctx) => {
      translateX.value = ctx.offsetX + event.translationX;
      translateY.value = ctx.offsetY + event.translationY;
    },
    onEnd: (event, ctx) => {
      translateX.value = withDecay({ 
        velocity: event.velocityX, 
        clamp: [0, width - CARD_WIDTH] 
      })
      translateY.value = withDecay({ 
        velocity: event.velocityY, 
        clamp: [0, height - CARD_HEIGHT] 
      })
    }
  });

  const style = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value }
      ]
    }
  })

  return (
    <Container>
      <PanGestureHandler {... { onGestureEvent }}>
        <Animated.View {...{ style }}>
          <Card card={Cards.Card1} />
        </Animated.View>
      </PanGestureHandler>
    </Container>
  );
};

export default Gesture;