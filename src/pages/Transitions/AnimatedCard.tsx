import React from "react";
import { Dimensions } from "react-native";
import { useAnimatedStyle } from "react-native-reanimated";
import { mix } from "react-native-redash";

import { Card, Cards, StyleGuide } from "../../components";
import { AnimatedContainer, absoluteStyleCards } from './animatedCardStyles'

interface AnimatedCardProps {
  transition: any;
  index: number;
  card: Cards;
}

const AnimatedCard = ({ card, transition, index }: AnimatedCardProps) => {
  const { width } = Dimensions.get("window");
  const origin = -(width / 2 - StyleGuide.spacing * 2);

  const style = useAnimatedStyle(() => {
    const rotate = mix(transition.value, 0, ((index - 1) * Math.PI) / 6);

    return {
      transform: [
        { translateX: origin },
        { rotate, },
        { translateX: -origin },
      ]
    }
  });

  return (
    <AnimatedContainer key={card} style={[absoluteStyleCards.overlay, style]}>
      <Card {...{ card }} />
    </AnimatedContainer>
  );
};

export default AnimatedCard;