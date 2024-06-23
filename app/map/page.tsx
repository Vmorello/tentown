import React from 'react';
import {GotPage} from '../../components/representation_page'


export default function MapPage()
{

  const iconList = ["alter", "camp", "cave", "dock","dungeon","forge","fort","graveyard",
  "house","mine","ruines","sheild","stable","tavern","temple","town1","town2","village","cover"]

  return (
  <GotPage height={900} width={1400} startIcon={"village"} title={"TenTowns"} pageRepList={iconList}/>
  )
}
