import React, { useState, useEffect } from "react";
import { useDerivedValue, useSharedValue, withSpring, withTiming } from "react-native-reanimated";

import { Button, cards } from "../../components";
import AnimatedCard from "./AnimatedCard";
import { Container } from './transitionsStyles';

const useTiming = (state: any, config: any) => {
  const value = useSharedValue(0);

  useEffect(() => {
    value.value = typeof state === "number" ? state : (state ? 1 : 0)
  }, [state, value]);

  return useDerivedValue(() => withTiming(value.value, config));
}

const UseTransition = () => {
  const [toggled, setToggle] = useState(false);

  const transition = useTiming(toggled, { duration: 600 });

  return (
    <Container>
      {cards.slice(0, 3).map((card, index) => (
        <AnimatedCard key={card} {...{ index, card, transition }} />
      ))}
      <Button
        label={toggled ? "Reset" : "Start"}
        primary
        onPress={() => setToggle((prev) => !prev)}
      />
    </Container>
  );
};

export default UseTransition