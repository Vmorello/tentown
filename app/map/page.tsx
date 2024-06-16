import React from 'react';
import {GotPage} from '../../components/representation_page'


export default function SendPage()
{
  const iconList = ["alter", "camp", "cave", "dock","dungeon","forge","fort","graveyard",
  "house","mine","ruines","sheild","stable","tavern","temple","town1","town2","village","cover"]

  //Add theme here and that will be different between pages 

  return (
  <GotPage length={900} width={1400} startIcon={"village"} title={"TenTowns"} 
  background={undefined} pageRepList={iconList}/>
  )
}
