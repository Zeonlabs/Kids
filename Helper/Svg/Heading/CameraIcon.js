import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";

function CameraIcon(props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M17.537 8.294h-3.294l-.665-1.118a.36.36 0 00-.31-.176h-2.092a.36.36 0 00-.31.176l-.665 1.118h-1.08v-.247a.36.36 0 00-.362-.36H7.425a.36.36 0 00-.36.36v.247h-.158A.907.907 0 006 9.2v6.567c0 .5.406.907.907.907h10.63a.907.907 0 00.907-.907V9.2c0-.501-.406-.907-.907-.907zm-5.315 6.772a2.582 2.582 0 110-5.164 2.582 2.582 0 010 5.164zm4.75-4.902h-1.13a.36.36 0 010-.722h1.13a.36.36 0 010 .722z"
        fill="#000"
      />
      <Path
        d="M12.222 14.288a1.804 1.804 0 100-3.607 1.804 1.804 0 000 3.607z"
        fill="#00EFD1"
      />
      <Path
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="70 70"
        d="M1 1H23V23H1z"
      />
    </Svg>
  );
}

export default CameraIcon;
