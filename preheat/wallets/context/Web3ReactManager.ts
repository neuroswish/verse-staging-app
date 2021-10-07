/*
 * Thanks Uniswap ❤️🦄
 * https://github.com/Uniswap/uniswap-interface/blob/main/src/components/Web3ReactManager/index.tsx
 */

import { useEagerConnect } from "../hooks/useEagerConnect";
import { useInactiveListener } from "../hooks/useInactiveListener";

const Web3ReactManager = ({ children }: { children: JSX.Element }) => {
  // returns whether we've tried to reconnect or not. should return as true
  const triedEager = useEagerConnect();
  // if we tried eager connecting, then we don't suppress the inactive listener
  useInactiveListener(!triedEager);
  return children;
};

export default Web3ReactManager;