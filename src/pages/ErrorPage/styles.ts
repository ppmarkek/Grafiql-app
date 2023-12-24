import styled, { keyframes } from 'styled-components';

export const random = (min: number, max: number) =>
  Math.random() * (max - min) + min;

// Keyframes
export const blink = keyframes`
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(0.4);
    opacity: 0.5;
  }
`;

export const floating = keyframes`
  0%, 100% {
    transform: translate(${random(-3, 3)}px, ${random(
      -3,
      3
    )}px) rotate(${random(-2, 2)}deg);
  }
  20%, 40%, 60%, 80% {
    transform: translate(${random(-3, 3)}px, ${random(
      -3,
      3
    )}px) rotate(${random(-2, 2)}deg);
  }
`;

export const StarWrapper = styled.div<{ size: number }>`
  position: absolute;
  z-index: 1;

  &:before,
  &:after {
    position: absolute;
    content: '';
    background-color: white;
    border-radius: 10px;
    animation: ${blink} 1.5s infinite;
  }

  &:before {
    top: ${(props) => props.size / 2}px;
    left: -${(props) => props.size / 2}px;
    width: ${(props) => 3 * props.size}px;
    height: ${(props) => props.size}px;
  }

  &:after {
    top: -${(props) => props.size / 2}px;
    left: ${(props) => props.size / 2}px;
    width: ${(props) => props.size}px;
    height: ${(props) => 3 * props.size}px;
  }
`;

export const CircleOuter = styled.div`
  width: 550px;
  height: 550px;
  background-image: linear-gradient(to right bottom, #802b89, #5631a1);
  box-shadow: 0px 0px 20px -8px black;
`;

export const CircleInner = styled.div`
  width: 355px;
  height: 355px;
  background-image: linear-gradient(to right bottom, #75278b, #5530a2);
  box-shadow: 0px 0px 20px -8px black;
`;

export const Four = styled.div`
  position: absolute;
  font-size: 150px;
  font-weight: 900;
  text-shadow: 0px 2px 10px rgba(0, 0, 0, 0.5);
  user-select: none;
`;

export const AstronautWrapper = styled.div`
  position: absolute;
  top: -115px;
  left: -30px;
  transform: rotate(17deg);
`;

export const AstronautAntena = styled.div`
  position: absolute;
  top: -7px;

  .ear-down,
  .ear-up,
  .antena,
  .antena-tip {
    position: absolute;
  }

  .ear-down {
    bottom: -5px;
    width: 15px;
    height: 20px;
    border-radius: 5px;
    background-color: #afafaf;
    z-index: 1;
  }

  .ear-up {
    width: 15px;
    height: 20px;
    border-radius: 5px;
    background-color: #c3c3c3;
    z-index: 2;
  }

  .antena {
    top: -29px;
    width: 2px;
    height: 30px;
    border-radius: 5px;
    background-color: #c3c3c3;
  }

  .antena-tip {
    top: -33px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #c3c3c3;
  }
`;

export const AstronautHelmet = styled.div`
  position: absolute;
  top: -30px;
  left: 50%;
  width: 66px;
  height: 66px;
  border-radius: 50%;
  background-color: white;
  box-shadow: 0px 5px 1px -3px gray;
  transform: translateX(-50%);
  z-index: 3;
  overflow: hidden;
`;

export const AstronautGlass = styled.div`
  position: absolute;
  top: 13px;
  left: 5px;
  width: 56px;
  height: 56px;
  background: #00202e;
  border-radius: 10px;
`;

export const Glow = styled.div`
  position: absolute;
  border-radius: 50%;
  background-color: #334d57;
`;

export const Glow1 = styled(Glow)`
  top: 25px;
  left: 15px;
  width: 17px;
  height: 17px;
`;

export const Glow2 = styled(Glow)`
  top: 44px;
  left: 13px;
  width: 7px;
  height: 7px;
`;

export const AstronautBody = styled.div`
  position: absolute;
  top: 30px;
  left: 50%;
  width: 50px;
  height: 50px;
  background-color: #c3c3c3;
  transform: translateX(-50%);
`;

export const AstronautWire = styled.svg`
  position: absolute;
  top: -40px;
  left: -260px;
`;

export const AstronautHands = styled.div`
  position: absolute;
  top: -89px;
  left: -23px;
  width: 100px;
  transform: rotate(17deg);
  z-index: 3;

  .astronaut-hand {
    position: absolute;
  }

  .hand--left {
    left: -3px;
  }

  .hand--right {
    transform: scaleX(-1);
    right: -3px;
  }
`;

export const OhWrapper = styled.div`
  transition: all 0.1s linear;
  animation: ${floating} 4s linear infinite;
  z-index: 2;
`;

export const Planet = styled.div`
  background-color: #ff4980;
  box-shadow:
    inset -6px -10px 0px 1px #cc3b6b,
    0px 2px 10px rgba(0, 0, 0, 0.4);
  width: 155px;
  height: 155px;
`;

export const Crater = styled.div`
  position: absolute;
  border-radius: 50%;
  background-color: #c93667;
`;

export const Button = styled.div`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  padding: 8px 12px;
  border: 1px solid white;
  border-radius: 3px;
  cursor: pointer;
  z-index: 999;

  &:active {
    transform: translateX(-50%) scale(0.95);
  }
`;

export const Sorry = styled.div`
  position: absolute;
  top: 210px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 15px;
`;

export const InspirationLink = styled.a`
  position: fixed;
  bottom: 0;
  right: 0;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  font-family: 'Gill Sans', sans-serif;
  font-size: 14px;
  color: #ff487f;
`;
