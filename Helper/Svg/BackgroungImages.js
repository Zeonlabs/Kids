import * as React from "react";
import Svg, { G, Path, Defs, LinearGradient, Stop } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */

export function GujratiWord(props) {
  return (
    <Svg width={164} height={115} viewBox="0 0 164 115" fill="none" {...props}>
      <G filter="url(#filter0_d)">
        <Path
          d="M4 21C4 9.402 13.402 0 25 0h114c11.598 0 21 9.402 21 21V85.32c0 11.598-9.402 21-21 21H25c-11.598 0-21-9.402-21-21V21z"
          fill="#4CC63F"
        />
      </G>
      <Path
        d="M140.353 11.77c5.444 3.732 7.926 12.122 6 18.554-1.963 6.468-8.334 10.94-13.778 14.858-5.482 3.918-9.964 7.281-16.075 8.87-6.111 1.59-13.815 1.442-19-2.476-5.149-3.918-7.742-11.606-7.482-19.035.259-7.429 3.37-14.6 8.555-18.332 5.149-3.733 12.334-4.066 20.112-4.657 7.815-.592 16.223-1.516 21.668 2.217z"
        fill="url(#paint0_linear)"
      />
      <Path
        d="M58.434 91.552c-2.107 2.008-6.845 2.927-10.478 2.22-3.654-.72-6.182-3.066-8.397-5.07-2.214-2.019-4.115-3.669-5.015-5.92-.9-2.252-.819-5.092 1.393-7.005 2.21-1.9 6.552-2.859 10.748-2.767 4.196.092 8.247 1.235 10.357 3.145 2.11 1.895 2.3 4.543 2.637 7.41.337 2.88.861 5.978-1.245 7.987z"
        fill="url(#paint1_linear)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear"
          x1={138.5}
          y1={13.0002}
          x2={85}
          y2={60.5002}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#74D36A" />
          <Stop offset={1} stopColor="#74D36A" stopOpacity={0} />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear"
          x1={35}
          y1={78.5002}
          x2={65}
          y2={99.5002}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#74D36A" />
          <Stop offset={1} stopColor="#74D36A" stopOpacity={0} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}
