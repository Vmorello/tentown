const iconStore: { [key: string]: any } = {
  "-none-": undefined,
  //icons
  alter: alter,
  camp: camp,
  cave: cave,
  dock: dock,
  dungeon: dungeon,
  forge: forge,
  fort: fort,
  graveyard: graveyard,
  house: house,
  mine: mine,
  ruines: ruines,
  sheild: sheild,
  stable: stable,
  tavern: tavern,
  temple: temple,
  town1: town1,
  town2: town2,
  village: village,

  // openmoji
  //love 
  red_heart: red_heart,
  cactus: cactus,
  plant_branch: plant_branch,
  kissy_lips: kissy_lips,
  love_letter: love_letter,
  wedding_ring: wedding_ring,
  heart_ribbon: heart_ribbon,
  deco_heart: deco_heart,
  smiling_face_heart_eyed: smiling_face_heart_eyed,
  cat_face_heart_eyed: cat_face_heart_eyed,
  cat_face_kissing: cat_face_kissing,
  sapling: sapling,
  ribbon: ribbon,
  present: present,
  cat: cat,
  bouquet: bouquet,
  sparkling_heart: sparkling_heart,
  growing_heart: growing_heart,
  heart_arrow: heart_arrow,
  kissing_face_heart: kissing_face_heart,
  smiling_face_hearts: smiling_face_hearts,
  lavender: lavender,
  star: star,
  shamrock: shamrock,
  sparkles: sparkles,
  heart_exclamation: heart_exclamation,
  wounded_heart: wounded_heart,
  flaming_heart: flaming_heart,
  heart_hands: heart_hands_2,
  // man_dance_1: dancing_m_1,
  man_dance_2: dancing_m_2,
  woman_dance_1: dancing_f_1,
  // woman_dance_2: dancing_f_2,

  cat_grey_face_heart_eyed: cat_grey_face_heart_eyed,
  cat_grey_face_kissing: cat_grey_face_kissing,
  cat_grey: cat_grey,

  //DndS
  //    troll :troll,
  //  tiger :tiger,
  dragon: dragon,
  //  dragon_ice:dragon_ice,
  //  elephant :elephant,
  bird_black: bird_black,
  //  ogre  :ogre,
  //  fire  :fire,
  //  robot  :robot,
  //  genie_blue  :genie_blue, 
  //  genie_green :genie_green,
  //  genie_rose :genie_rose,

  //  mage_f_0 :mage_f_0,
  //  mage_m_0 :mage_m_0,
  //  mage_f_2 :mage_f_2,
  //  mage_m_2 :mage_m_2,
  //  mage_3 :mage_3,
  //  mage_f_4 :mage_f_4,
  //  mage_m_5 :mage_m_5,

  //  vampire_m_1 :vampire_m_1,

  //  elf_0 :elf_0,
  //  elf_f_0 :elf_f_0,
  //  elf_m_0 :elf_m_0,
  //  elf_1 :elf_1,
  //  elf_f_1 :elf_f_1,
  //  elf_m_1 :elf_m_1,
  //  elf_2 :elf_2,
  //  elf_f_2 :elf_f_2,
  //  elf_m_2 :elf_m_2,
  //  elf_3 :elf_3,
  //  elf_f_3 :elf_f_3,
  //  elf_m_3 :elf_m_3,
  //  elf_4 :elf_4,
  //  elf_f_4 :elf_f_4,
  //  elf_m_4 :elf_m_4,
  //  elf_5 :elf_5,
  //  elf_f_5 :elf_f_5,
  //  elf_m_5 :elf_m_5,
  rat: rat,
  music_note: music_note,
  music_notes: music_notes,
  sleeping_note: sleeping_note,
  water_drop: water_drop,
  cheese: cheese,
  garlic: garlic,
  cookie: cookie,
  lady_bug: lady_bug,
  pancake: pancake,
  dumpling: dumpling,
  leafy_green: leafy_green,
  eggplant: eggplant,
  pizza: pizza,
  egg_pan: egg_pan,
  tea_cup: tea_cup,
  tea_pot: tea_pot,
  hot_mug: hot_mug,
  cake: cake,
  avocado: avocado,
  broccoli: broccoli,

  left_arrow: left_arrow,
  right_arrow: right_arrow,

  DnD_temple_dog: DnD_temple_dog,
  //common
  //   back_button: back_button,
  cover: cover,
  // cover_s: cover_s,
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

export function getSize(input_value: string){
  const image = iconStore[input_value]!

  return {w:image.width, h:image.height}

}

// import Image from "next/future/image";
// import back_button from "/public/common/back_button.png";
import cover from "/public/common/black_cover.png";
// import cover_s from "/public/common/black_cover_s.png";
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

import red_heart from "/public/openmoji/2764.svg";
import cactus from "/public/openmoji/1F335.svg";
import plant_branch from "/public/openmoji/1F33F.svg";
import kissy_lips from "/public/openmoji/1F48B.svg";
import love_letter from "/public/openmoji/1F48C.svg";
import wedding_ring from "/public/openmoji/1F48D.svg";
import heart_ribbon from "/public/openmoji/1F49D.svg";
import deco_heart from "/public/openmoji/1F49F.svg";
import smiling_face_heart_eyed from "/public/openmoji/1F60D.svg";
import cat_face_heart_eyed from "/public/openmoji/1F63B.svg";
import cat_face_kissing from "/public/openmoji/1F63D.svg";
import sapling from "/public/openmoji/1F331.svg";
import ribbon from "/public/openmoji/1F380.svg";
import present from "/public/openmoji/1F381.svg";
import cat from "/public/openmoji/1F431.svg";
import bouquet from "/public/openmoji/1F490.svg";
import sparkling_heart from "/public/openmoji/1F496.svg";
import growing_heart from "/public/openmoji/1F497.svg";
import heart_arrow from "/public/openmoji/1F498.svg";
import kissing_face_heart from "/public/openmoji/1F618.svg";
import smiling_face_hearts from "/public/openmoji/1F970.svg";
import lavender from "/public/openmoji/1FABB.svg";
import star from "/public/openmoji/2B50.svg";
import shamrock from "/public/openmoji/2618.svg";
import sparkles from "/public/openmoji/2728.svg";
import heart_exclamation from "/public/openmoji/2763.svg";
import wounded_heart from "/public/openmoji/2764-FE0F-200D-1FA79.svg";
import flaming_heart from "/public/openmoji/2764-FE0F-200D-1F525.svg";
import heart_hands_2 from "/public/openmoji/heart_hands/1FAF6-1F3FC.svg";
// import dancing_m_1 from "/public/openmoji/dancing/1F57A-1F3FB.svg";
import dancing_m_2 from "/public/openmoji/dancing/1F57A-1F3FC.svg";
import dancing_f_1 from "/public/openmoji/dancing/1F483-1F3FB.svg";
// import dancing_f_2 from "/public/openmoji/dancing/1F483-1F3FC.svg";

import music_note from "/public/openmoji/1F3B5.svg";
import music_notes from "/public/openmoji/1F3B5.svg";
import sleeping_note from "/public/openmoji/1F4A4.svg";
import water_drop from "/public/openmoji/1F4A7.svg";
import cheese from "/public/openmoji/1F9C0.svg";
import garlic from "/public/openmoji/1F9C4.svg";
import cookie from "/public/openmoji/1F36A.svg";
import lady_bug from "/public/openmoji/1F41E.svg";
import pancake from "/public/openmoji/1F95E.svg";
import dumpling from "/public/openmoji/1F95F.svg";
import leafy_green from "/public/openmoji/1F96C.svg";
import eggplant from "/public/openmoji/1F346.svg";
import pizza from "/public/openmoji/1F355.svg";
import egg_pan from "/public/openmoji/1F373.svg";
import tea_cup from "/public/openmoji/1F375.svg";
import cake from "/public/openmoji/1F382.svg";
import rat from "/public/openmoji/1F400.svg";
import avocado from "/public/openmoji/1F951.svg";
import broccoli from "/public/openmoji/1F966.svg";
import tea_pot from "/public/openmoji/1FAD6.svg";
import left_arrow from "/public/openmoji/2B05.svg";
import right_arrow from "/public/openmoji/27A1.svg";
import hot_mug from "/public/openmoji/2615.svg";

import cat_grey_face_heart_eyed from "/public/openmoji/custom/1F63B-grey.svg";
import cat_grey_face_kissing from "/public/openmoji/custom/1F63D-grey.svg";
import cat_grey from "/public/openmoji/custom/1F431-grey.svg";

import dragon from "/public/openmoji/1F409.svg";
import bird_black from "/public/openmoji/1F426-200D-2B1B.svg";
// //DnD
import DnD_temple_dog from "/public/DnD/Temple Dog.webp";

// import troll from "/public/DnD/1F9CC.svg";
// import tiger from "/public/DnD/1F42F.svg";

// import elephant from "/public/DnD/1F418.svg";
// import bird_black from "/public/DnD/1F426-200D-2B1B.svg";
// import ogre from "/public/DnD/1F479.svg";
// import fire from "/public/DnD/1F525.svg";
// import robot from "/public/DnD/1F916.svg";
// import genie_blue from  "/public/DnD/genie/1F9DE-200D-2642-FE0F.svg";
// import genie_green from  "/public/DnD/genie/1F9DE.svg";
// import genie_rose from  "/public/DnD/genie/1F9DE-200D-2640-FE0F.svg";

// import mage_f_0 from  "/public/DnD/mage/1F9D9-200D-2640-FE0F.svg";
// import mage_m_0 from  "/public/DnD/mage/1F9D9-200D-2642-FE0F.svg";
// import mage_f_2 from  "/public/DnD/mage/1F9D9-1F3FC-200D-2640-FE0F.svg";
// import mage_m_2 from  "/public/DnD/mage/1F9D9-1F3FC-200D-2642-FE0F.svg";
// import mage_3 from  "/public/DnD/mage/1F9D9-1F3FD.svg";
// import mage_f_4 from  "/public/DnD/mage/1F9D9-1F3FE-200D-2642-FE0F.svg";
// import mage_m_5 from  "/public/DnD/mage/1F9D9-1F3FF-200D-2642-FE0F.svg";

// import vampire_m_1 from "/public/DnD/Vampire/1F9DB-1F3FB-200D-2642-FE0F.svg";

// import elf_0 from  "/public/DnD/elf/1F9DD.svg";
// import elf_f_0 from  "/public/DnD/elf/1F9DD-200D-2640-FE0F.svg";
// import elf_m_0 from  "/public/DnD/elf/1F9DD-200D-2642-FE0F.svg";
// import elf_1 from  "/public/DnD/elf/1F9DD-1F3FB.svg";
// import elf_f_1 from  "/public/DnD/elf/1F9DD-1F3FB-200D-2640-FE0F.svg";
// import elf_m_1 from  "/public/DnD/elf/1F9DD-1F3FB-200D-2642-FE0F.svg";
// import elf_2 from  "/public/DnD/elf/1F9DD-1F3FC.svg";
// import elf_f_2 from  "/public/DnD/elf/1F9DD-1F3FC-200D-2640-FE0F.svg";
// import elf_m_2 from  "/public/DnD/elf/1F9DD-1F3FC-200D-2642-FE0F.svg";
// import elf_3 from  "/public/DnD/elf/1F9DD-1F3FD.svg";
// import elf_f_3 from  "/public/DnD/elf/1F9DD-1F3FD-200D-2640-FE0F.svg";
// import elf_m_3 from  "/public/DnD/elf/1F9DD-1F3FD-200D-2642-FE0F.svg";
// import elf_4 from  "/public/DnD/elf/1F9DD-1F3FE.svg";
// import elf_f_4 from  "/public/DnD/elf/1F9DD-1F3FE-200D-2640-FE0F.svg";
// import elf_m_4 from  "/public/DnD/elf/1F9DD-1F3FE-200D-2642-FE0F.svg";
// import elf_5 from  "/public/DnD/elf/1F9DD-1F3FF.svg";
// import elf_f_5 from  "/public/DnD/elf/1F9DD-1F3FF-200D-2640-FE0F.svg";
// import elf_m_5 from  "/public/DnD/elf/1F9DD-1F3FF-200D-2642-FE0F.svg";


// import ghost from "/public/openmoji/1F47B.svg";

// import dragon_ice from "/public/openmoji/custom/1F409-ice.svg";
// import angel_bald from "/public/openmoji/custom/1F47C-bald.svg";

