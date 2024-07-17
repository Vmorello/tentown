type StaticImageData = { src: string; height: number; width: number; blurDataURL?: string; }

const iconStore: { [key: string]: any } = {
  "-none-": undefined,
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

  // openmoji
  //love 
  "red_heart": red_heart,
  "catus": catus,
  "plant_branch": plant_branch,
  "kissy_lips": kissy_lips,
  "love_letter": love_letter,
  "wedding_ring": wedding_ring,
  "heart_ribbon": heart_ribbon,
  "deco_heart": deco_heart,
  "smiling_face_heart_eyed": smiling_face_heart_eyed,
  "cat_face_heart_eyed": cat_face_heart_eyed,
  "cat_face_kissing": cat_face_kissing,
  "sapling": sapling,
  "ribbon": ribbon,
  "present": present,
  "cat": cat,
  "bouquet": bouquet,
  "sparkling_heart": sparkling_heart,
  "growing_heart": growing_heart,
  "heart_arrow": heart_arrow,
  "kissing_face_heart": kissing_face_heart,
  "smiling_face_hearts": smiling_face_hearts,
  "lavender": lavender,
  "star": star,
  "shamrock": shamrock,
  "sparkles": sparkles,
  "heart_exclamation": heart_exclamation,
  "wounded_heart": wounded_heart,
  "flaming_heart": flaming_heart,
  "heart_hands": heart_hands_2,
  "man_dance_1": man_dance_1,
  "woman_dance_2": woman_dance_2,

  //common
  "back_button": back_button,
  "cover": cover,
  "cover_s": cover_s,
}

export function get_image(input_value: string) {
  const pngImage = iconStore[input_value]
  if (pngImage == undefined) {
    return undefined
  }
  //  console.log(pngImage)
  return pngImage.src
}

export function get_icon_list() {
  return Object.keys(iconStore)
}

export function getRadius(input_value: string) {
  const image = iconStore[input_value];
  // console.log(`this icon is h:${image!.height} & w ${image!.width}`)
  // console.log(`gonna say the radius is ${image!.width/2}`)
  return image!.width / 2
}

// import Image from "next/future/image";
import back_button from "/public/common/back_button.png";
import cover from "/public/common/black_cover.png";
import cover_s from "/public/common/black_cover_s.png";
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
// openmoji
// love

import red_heart from "/public/love/2764.svg";
import catus from "/public/love/1F335.svg";
import plant_branch from "/public/love/1F33F.svg";
import kissy_lips from "/public/love/1F48B.svg";
import love_letter from "/public/love/1F48C.svg";
import wedding_ring from "/public/love/1F48D.svg";
import heart_ribbon from "/public/love/1F49D.svg";
import deco_heart from "/public/love/1F49F.svg";
import smiling_face_heart_eyed from "/public/love/1F60D.svg";
import cat_face_heart_eyed from "/public/love/1F63B.svg";
import cat_face_kissing from "/public/love/1F63D.svg";
import sapling from "/public/love/1F331.svg";
import ribbon from "/public/love/1F380.svg";
import present from "/public/love/1F381.svg";
import cat from "/public/love/1F431.svg";
import bouquet from "/public/love/1F490.svg";
import sparkling_heart from "/public/love/1F496.svg";
import growing_heart from "/public/love/1F497.svg";
import heart_arrow from "/public/love/1F498.svg";
import kissing_face_heart from "/public/love/1F618.svg";
import smiling_face_hearts from "/public/love/1F970.svg";
import lavender from "/public/love/1FABB.svg";
import star from "/public/love/2B50.svg";
import shamrock from "/public/love/2618.svg";
import sparkles from "/public/love/2728.svg";
import heart_exclamation from "/public/love/2763.svg";
import wounded_heart from "/public/love/2764-FE0F-200D-1FA79.svg";
import flaming_heart from "/public/love/2764-FE0F-200D-1F525.svg";
import heart_hands_2 from "/public/love/heart_hands/1FAF6-1F3FC.svg";
import man_dance_1 from "/public/love/dancing/1F57A-1F3FB.svg";
import woman_dance_2 from "/public/love/dancing/1F483-1F3FC.svg";

//DnD