import React, { useEffect, useState } from "react";
import {
  withTiming,
  withRepeat,
  useSharedValue,
  Easing,
} from "react-native-reanimated";
import { withPause } from "react-native-redash";

import { Button } from "../../components";
import ChatBubble from "./ChatBubble";
import { Container } from './animationStyles';

const easing = Easing.inOut(Easing.ease);

const Timing = () => {
  const [play, setPlay] = useState(false);
  
  const paused = useSharedValue(!play);
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withPause(
      withRepeat(withTiming(1, { duration: 1000, easing }), -1, true),
      paused
    );
  }, [paused, progress]);

  function handlePlay() {
    setPlay((oldValue) => !oldValue);
    paused.value = !paused.value
  }
  
  return (
    <Container>
      <ChatBubble progress={progress} />
      <Button
        label={play ? "Pause" : "Play"}
        primary
        onPress={handlePlay}
      />
    </Container>
  );
};

export default Timing;