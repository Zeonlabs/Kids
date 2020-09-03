import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";

function UndoIcon(props) {
  return (
    <Svg width={22} height={22} viewBox="0 0 22 22" fill="none" {...props}>
      <Path
        d="M6.132 12.596L2.093 7.973l4.04-4.624a.9.9 0 00-1.355-1.183L.222 7.381a.899.899 0 000 1.183l4.556 5.216a.899.899 0 101.354-1.184z"
        fill="#000"
      />
      <Path
        d="M15.466 7.073H.899a.9.9 0 100 1.799h14.567a4.741 4.741 0 014.736 4.735 4.741 4.741 0 01-4.736 4.736h-4.368a.9.9 0 100 1.798h4.368A6.542 6.542 0 0022 13.607a6.542 6.542 0 00-6.534-6.534z"
        fill="#000"
      />
    </Svg>
  );
}

export default UndoIcon;
