import styled, { keyframes } from "styled-components";

const load = keyframes`
    100% {transform: rotate(1turn)}
`;

const Loader = styled.div`
  --d: 27px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  color: #fff;
  box-shadow: calc(1 * var(--d)) calc(0 * var(--d)) 0 0,
    calc(0.707 * var(--d)) calc(0.707 * var(--d)) 0 1px,
    calc(0 * var(--d)) calc(1 * var(--d)) 0 2px,
    calc(-0.707 * var(--d)) calc(0.707 * var(--d)) 0 3px,
    calc(-1 * var(--d)) calc(0 * var(--d)) 0 4px,
    calc(-0.707 * var(--d)) calc(-0.707 * var(--d)) 0 5px,
    calc(0 * var(--d)) calc(-1 * var(--d)) 0 6px;
  margin: 60px auto 30px;
  animation: ${load} 1s infinite steps(8);
`;

export default Loader;
