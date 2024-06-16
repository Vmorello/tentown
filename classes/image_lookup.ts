// import Image from "next/future/image";
import back_button from "/public/common/back_button.png";
import cover from "/public/common/black_cover.png";
// icons
import alter from "/public/icons/alter.png";
import camp from "/public/icons/camp.png";
import cave from "/public/icons/cave.png";
import dock from "/public/icons/dock.png";
import dungeon from "/public/icons/dungeon.png";
import forge from "/public/icons/forge.png";
import fort from "/public/icons/fort.png";
import graveyard from "/public/icons/graveyard.png";
import house from "/public/icons/house.png";
import mine from "/public/icons/mine.png";
import ruines from "/public/icons/ruines.png";
import sheild from "/public/icons/sheild.png";
import stable from "/public/icons/stable.png";
import tavern from "/public/icons/tavern.png";
import temple from "/public/icons/temple.png";
import town1 from "/public/icons/town1.png";
import town2 from "/public/icons/town2.png";
import village from "/public/icons/village.png";

type StaticImageData = { src: string; height: number; width: number; blurDataURL?: string; }

const dict:{ [key: string]: StaticImageData } = {
  "back_button":back_button,
  "cover":cover,
  //icons
  "alter": alter,
  "camp": camp,
  "cave": cave,
  "dock": dock,
  "dungeon": dungeon,
  "forge": forge,
  "fort": fort,
  "graveyard": graveyard,
  "house": house,
  "mine": mine,
  "ruines": ruines,
  "sheild": sheild,
  "stable": stable,
  "tavern": tavern,
  "temple": temple,
  "town1": town1,
  "town2": town2,
  "village": village,
};

export function get_image(input_value:string) {
  const image = dict[input_value];

  return image.src;
}
