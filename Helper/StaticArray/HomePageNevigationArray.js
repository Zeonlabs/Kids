import React from "react";
import EnglishNumber from "../Svg/HomePageBackgroung/EnglishNumber";
import EnglishBigWord from "../Svg/HomePageBackgroung/EnglishBigWord";
import EnglishSmallWord from "../Svg/HomePageBackgroung/EnglishSmallWord";
import GujratiWord from "../Svg/HomePageBackgroung/GujWord";
import GujratiNumber from "../Svg/HomePageBackgroung/GujNumber";
import ShareApp from "../Svg/HomePageBackgroung/ShareApp";
import VideoBg from "../Svg/HomePageBackgroung/VideoBg";
import Drawing from "../Svg/HomePageBackgroung/Drawing";
import { GujLatter } from "./InnerArray/GujNevigation";
import { GujNumberNevigation } from "./InnerArray/GujNumberNevigation";
import { EngCapitalLatter } from "./InnerArray/A2ZNevigation";
import { EngSmallLatter } from "./InnerArray/EnglishSmall";
import { EngNumberNevigation } from "./InnerArray/EnglishNumber";
import GujratiWordNote from "../Svg/Heading/GujratiWordNote";

export const HomePageNevigationArray = [
  {
    id: 1,
    backGroundImage: <GujratiWord />,
    innerNevigation: GujLatter,
    headerNote: <GujratiWordNote />,
    label: "Gujrati",
  },
  {
    id: 2,
    backGroundImage: <GujratiNumber />,
    innerNevigation: GujNumberNevigation,
    headerNote: <GujratiWordNote />,
    label: "Gujrati",
  },
  {
    id: 3,
    backGroundImage: <EnglishBigWord />,
    innerNevigation: EngCapitalLatter,
    headerNote: <GujratiWordNote />,
    label: "English",
  },
  {
    id: 4,
    backGroundImage: <EnglishSmallWord />,
    innerNevigation: EngSmallLatter,
    headerNote: <GujratiWordNote />,
    label: "English",
  },
  {
    id: 5,
    backGroundImage: <EnglishNumber />,
    innerNevigation: EngNumberNevigation,
    headerNote: <GujratiWordNote />,
    label: "English",
  },
  {
    id: 6,
    backGroundImage: <Drawing />,
    innerNevigation: "",
    headerNote: <GujratiWordNote />,
    label: "Drawing",
  },
  {
    id: 7,
    backGroundImage: <VideoBg />,
    innerNevigation: "",
    headerNote: <GujratiWordNote />,
    label: "Video",
  },
  {
    id: 8,
    backGroundImage: <ShareApp />,
    innerNevigation: "",
    headerNote: <GujratiWordNote />,
    label: "Share",
  },
];
