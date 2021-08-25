import { factory } from "typescript";

declare let _WORKLET: Boolean;

interface AnimationState {
  current: number; 
}

interface PhysicsAnimationState extends AnimationState {
  velocity: number;
}

type Animation<
  State extends AnimationState = AnimationState,
  PrevState = State
> = {
  animation: (animation: State, now: number) => boolean;
  start: (
    animation: State,
    value: number,
    now: number,
    lastAnimation: PrevState,
  ) => void;
} & State;

type AnimationParameter<State extends AnimationState = AnimationState> =
  | Animation<State>
  | (() => Animation<State>)
  | number;

const animationParameter = <State extends AnimationState = AnimationState>(
  animationParam: AnimationParameter<State>
) => {
  "worklet";
  if (typeof animationParam === "number") {
    throw new Error("Expected animation as parameter");
  }
  return typeof animationParam === "function" 
    ? animationParam()
    : animationParam;
}

const defineAnimation = <
  S extends AnimationState = AnimationState,
  Prev extends AnimationState = AnimationState
>(
  factory: () => Omit<Animation<S, Prev> keyof S>
) => {
  "worklet"
  if (_WORKLET) {
    return (factory() as unknown) as number;
  }
  return (factory as unknown) as number;
}

const withDecay = (initialVelocity: number) => {
  "worklet"
  return defineAnimation<DecayAnimationState>(() => {})
}