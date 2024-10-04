import { noSelectionString } from "./constants"


export function get_image(input_value: string) {
  const image = iconStore[input_value]
  if (image == undefined) {
    return undefined
  }
  return image.src
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

export function getSize(input_value: string) {
  console.log(input_value)
  const image = iconStore[input_value]!

  console.log(image)

  return { w: image.width, h: image.height }

}


const iconStore: { [key: string]: any } = {
  "-none-": undefined,// tryed to put noSelectionString here 
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

  //common
  cover: cover,
  icon_frame: icon_frame,


  // DnD 
  firemane_angel: firemane_angel,
  gremorly_ghost: gremorly_ghost,
  kenna: kenna,
  snow_queen: snow_queen,
  captain_xendros: captain_xendros,
  gertrube: gertrube,
  grung_green: grung_green,
  mezzoloth: mezzoloth,
  temple_dog: temple_dog,
  dandelion: dandelion,
  giff: giff,
  grung_red: grung_red,
  mind_eye: mind_eye,
  vampire: vampire,
  duodrone: duodrone,
  githyanki: githyanki,
  grung_yellow: grung_yellow,
  oni: oni,
  shemeshka: shemeshka,
  vecna_impersonator: vecna_impersonator,
  gnome_ceremorph: gnome_ceremorph,



  // Custom Openmoji
  star_empty: star_empty,
  blue_drake: blue_drake,

  cat_grey_face_heart_eyed: cat_grey_face_heart_eyed,
  cat_grey_face_kissing: cat_grey_face_kissing,
  cat_grey: cat_grey,



  "#️⃣": JfpCaPDAen,
  "*️⃣": gUFIjABSyP,
  "-": zbIdQLlQgM,
  "0️⃣": KTVsiKUKWw,
  "1️⃣": uCdERYopxN,
  "2️⃣": WNPViHDkkg,
  "3️⃣": kqGGaGCCEx,
  "4️⃣": nNEDCmxQFY,
  "5️⃣": EumrJqJDMd,
  "6️⃣": eJgTvcANxM,
  "7️⃣": TjGrxUpsLY,
  "8️⃣": TtMMcIsmii,
  "9️⃣": LXzUyokyXT,
  "©": mrEDYdfuyf,
  "®": EYJRybQIPB,
  "🀄": VFYZJjXEvo,
  "🃏": ZoBGlVnXgD,
  "🄍": QeRCHxhSSN,
  "🄎": DbrvvjyCqZ,
  "🄏": iFakCxqCOe,
  "🄯": QZmunxZmBb,
  "🅭": sPNxZRovht,
  "🅮": ZVulHlnIrr,
  "🅯": iWStORXNbb,
  "🅰": DoOavCYNpd,
  "🅱": MFpkDaxvUk,
  "🅾": yeLIHxCvbj,
  "🅿": ddpLvAnnKl,
  "🆎": UrDxtuDcQl,
  "🆑": TinTfwkkuB,
  "🆒": TcePrQNydI,
  "🆓": ONRxuPYNXR,
  "🆔": zLAphnOgLW,
  "🆕": rEbbmlMSFE,
  "🆖": cCHWRpLLmW,
  "🆗": YaicEiuTrt,
  "🆘": RYSJetADKy,
  "🆙": yXQfjbjOzS,
  "🆚": ECGZQTISta,
  "🇦🇨": SnpPJsOCXs,
  "🇦🇩": xmtoXMdHwS,
  "🇦🇪": oAuXJKIRgP,
  "🇦🇫": RekMFElQrB,
  "🇦🇬": nzVOCzJJqB,
  "🇦🇮": dKTiJlAeVF,
  "🇦🇱": FTXzetyOGl,
  "🇦🇲": UBRQFziODH,
  "🇦🇴": SwnVmitGVt,
  "🇦🇶💎": BwZPNorqkO,
  "🇦🇶": OXyZnhBrrH,
  "🇦🇷": PsaCVWCFPW,
  "🇦🇸": bmwJyaBaDL,
  "🇦🇹": ffnpJfqJaF,
  "🇦🇺": VxGNugfhXK,
  "🇦🇼": zYeqhfvPRq,
  "🇦🇽": BbTBIyuePi,
  "🇦🇿": UUZgDdHClt,
  "🇦": DsebswDaLN,
  "🇧🇦": weBDzjLWRw,
  "🇧🇧": btpEmLYDjX,
  "🇧🇩": jnBjssLsVo,
  "🇧🇪": QpeGvYJSNG,
  "🇧🇫": HhCUgSJTWx,
  "🇧🇬": KQpYgKBMzD,
  "🇧🇭": haJoKcXQfz,
  "🇧🇮": USIqQYeCIH,
  "🇧🇯": LAtiQVwTGi,
  "🇧🇱": exCVttwDPL,
  "🇧🇲": XivgRbEAKH,
  "🇧🇳": HdacfxMlht,
  "🇧🇴": GUvlFBnblK,
  "🇧🇶": AscbjGxSwl,
  "🇧🇷": VmQIeabeBQ,
  "🇧🇸": kBxjxTkJIn,
  "🇧🇹": whLHTUgyna,
  "🇧🇻": aOgHMUasnX,
  "🇧🇼": ipHJLenVvI,
  "🇧🇾": sqcNHSeuqa,
  "🇧🇿": oGtFERmciF,
  "🇧": HEIIKLSNkq,
  "🇨🇦": JjIBnGoYqT,
  "🇨🇨": ETnVQBeEbT,
  "🇨🇩": SzMmVemlAt,
  "🇨🇫": DQgEDLINdN,
  "🇨🇬": DNlSynzNwm,
  "🇨🇭": ddELXexRoR,
  "🇨🇮": VLofxbJDBW,
  "🇨🇰": UTAFdRarbn,
  "🇨🇱": tzMkfjjFOI,
  "🇨🇲": CbBNcVKdPb,
  "🇨🇳": QXFYndBFyr,
  "🇨🇴": uxvvJHMSrD,
  "🇨🇵": TLiWcZDCCZ,
  "🇨🇷": OMfUmDeymu,
  "🇨🇺": vHgdwQlSXR,
  "🇨🇻": zSGnaRYdsm,
  "🇨🇼": BwuHuVAPnp,
  "🇨🇽": rwkQrsAzxr,
  "🇨🇾": nEuiweBUxL,
  "🇨🇿": nRvSfnOUbM,
  "🇨": YsdAVlzjqE,
  "🇩🇪": fPRLmlyYet,
  "🇩🇬": lPcaocNBFY,
  "🇩🇯": cZFehErPPw,
  "🇩🇰": QzTFTPKkOT,
  "🇩🇲": vtXItVvlFK,
  "🇩🇴": LUymdvLprv,
  "🇩🇿": viNcuiiAtU,
  "🇩": YdDjImdDAn,
  "🇪🇦": oEFKkIMCog,
  "🇪🇨": XNttXWpiJu,
  "🇪🇪": uLnHlTCHWA,
  "🇪🇬": eNbXDOdOIF,
  "🇪🇭": yuALPwwtDj,
  "🇪🇷": hkNhRRPVfu,
  "🇪🇸": RqkxCmYAOI,
  "🇪🇹": ZcBBJCVlOJ,
  "🇪🇺": uuaCddTGUI,
  "🇪": fNaTZiNgmP,
  "🇫🇮": sUbYFWtPDf,
  "🇫🇯": TAgiWeoNEH,
  "🇫🇰": UhHhuNqIMl,
  "🇫🇲": cEeOSfgWsG,
  "🇫🇴": thpMJdSbcJ,
  "🇫🇷": YxeXEuBYQR,
  "🇫": CzLRDqOfCM,
  "🇬🇦": WwzpbunfAW,
  "🇬🇧": jznQfNapeb,
  "🇬🇩": wmmAodLJvy,
  "🇬🇪": XjJvnNUgUr,
  "🇬🇫": BZLBgwPNUA,
  "🇬🇬": lIpIsBtvcQ,
  "🇬🇭": TqoxxWEfGf,
  "🇬🇮": uVzFzMrfVF,
  "🇬🇱": mSKrgDKRWY,
  "🇬🇲": jRKntdRxdx,
  "🇬🇳": LKVIHJOWio,
  "🇬🇵": NzZpgwXgSG,
  "🇬🇶": utMwKfneVI,
  "🇬🇷": tSLHVfncsJ,
  "🇬🇸": ivgjZIhMFA,
  "🇬🇹": MbvlIKbsDL,
  "🇬🇺": xPFdTgpQuN,
  "🇬🇼": hioAkOIBkI,
  "🇬🇾": qZlfGlFzCb,
  "🇬": ZhHChKzAJl,
  "🇭🇰": iRyrAdWOel,
  "🇭🇲": EGLKGvyjGy,
  "🇭🇳": lQlOMOVBBb,
  "🇭🇷": ZLEUrPWRik,
  "🇭🇹": hVFscLTdpe,
  "🇭🇺": JJxuWPTnJd,
  "🇭": CyjRLVokbs,
  "🇮🇨": DKHxOuSNIN,
  "🇮🇩": nNpZQvepjX,
  "🇮🇪": hqXvTAPOxi,
  "🇮🇱": QHioztvbhO,
  "🇮🇲": bBtnROwniH,
  "🇮🇳": xMurKNtOLk,
  "🇮🇴": RaLvsrKomC,
  "🇮🇶": CHApLkQPlY,
  "🇮🇷": wTgLoXMQvB,
  "🇮🇸": jtVlcgJdnI,
  "🇮🇹": QnvKzWqXKO,
  "🇮": DrtdxBWXmN,
  "🇯🇪": KmKGEtVswd,
  "🇯🇲": JejSoZkaan,
  "🇯🇴": SCWCBHwnux,
  "🇯🇵": lonejGbhqE,
  "🇯": uaSqbFyQWB,
  "🇰🇪": wHYEHwJelJ,
  "🇰🇬": mpeReMvaDf,
  "🇰🇭": teEdxfdEjQ,
  "🇰🇮": EvEwdLHMBM,
  "🇰🇲": ylpjUvxkZg,
  "🇰🇳": rDGgUhepYC,
  "🇰🇵": GrdobCsceE,
  "🇰🇷": dZYeCImaOZ,
  "🇰🇼": nwObXlLRWD,
  "🇰🇾": vNNCSqHeHs,
  "🇰🇿": IjKzpzmeJc,
  "🇰": YkibTLjkhd,
  "🇱🇦": DxHFwyokoV,
  "🇱🇧": WUQdBQOblk,
  "🇱🇨": ajgqMmgXEU,
  "🇱🇮": TOBkRcGJYo,
  "🇱🇰": udZDHJVBDH,
  "🇱🇷": sxAVlxnmBg,
  "🇱🇸": IIZsbSYWtM,
  "🇱🇹": DxquToHBaW,
  "🇱🇺": nRRcztLYpv,
  "🇱🇻": gBDvRWwpHX,
  "🇱🇾": DVpCZVaAtW,
  "🇱": lLqhBGelbU,
  "🇲🇦": saezrUaYaA,
  "🇲🇨": rfEtyfQVbh,
  "🇲🇩": guspsalzQO,
  "🇲🇪": dhKpMZBVuH,
  "🇲🇫": GnbiJGPfcf,
  "🇲🇬": MymMLNlwvI,
  "🇲🇭": EPXpBXBxZJ,
  "🇲🇰": BJLOpsmWMM,
  "🇲🇱": bvnXALFvQp,
  "🇲🇲": lvbFFKwfby,
  "🇲🇳": boQIWGrmrB,
  "🇲🇴": SjZbMYMBAD,
  "🇲🇵": NGiicnKEfV,
  "🇲🇶": UMkZoiYdHw,
  "🇲🇷": WUmAvznisC,
  "🇲🇸": tCocdrNoeh,
  "🇲🇹": NNmbRaGVvS,
  "🇲🇺": qnuDOqsWvC,
  "🇲🇻": JKEcankARK,
  "🇲🇼": cYKLBmpTgg,
  "🇲🇽": lFRdXFCCoh,
  "🇲🇾": yQzPgFjPuo,
  "🇲🇿": QCFCqsnhyi,
  "🇲": yepDuAgvdK,
  "🇳🇦": KrHmleXPzF,
  "🇳🇨": ZGvBDdDVDG,
  "🇳🇪": lRqylvyXGd,
  "🇳🇫": zWHeqGgwyo,
  "🇳🇬": jukqNOcnAF,
  "🇳🇮": UtQgFEHOrI,
  "🇳🇱": SiWalMotzo,
  "🇳🇴": qAcbtxkSuB,
  "🇳🇵": IZbInPMCZQ,
  "🇳🇷": oNKOdbjspg,
  "🇳🇺": iBbMkXAtOr,
  "🇳🇿": EPGFgtWvZn,
  "🇳": rVbpShSynm,
  "🇴🇲": JElWHZjiCZ,
  "🇴": qeNPDaJuWQ,
  "🇵🇦": IWGVWiIMTH,
  "🇵🇪": BrjjOyyWyt,
  "🇵🇫": uNfHyAaZGr,
  "🇵🇬": TwSJJGeQyu,
  "🇵🇭": PEeUasWKyn,
  "🇵🇰": tdwoVqJwRP,
  "🇵🇱": ZBpZgeWcfu,
  "🇵🇲": JyUQYgpgEE,
  "🇵🇳": rNncZPjxzC,
  "🇵🇷": YBKYKqeBtZ,
  "🇵🇸": wWPQGVdgmm,
  "🇵🇹": HSaqsbVshX,
  "🇵🇼": PwgdzARsBg,
  "🇵🇾": kodkBuFWsX,
  "🇵": KElVqAnpSq,
  "🇶🇦": xhUWtuIHfX,
  "🇶": VTCcrPjHQA,
  "🇷🇪": evzltRyYhr,
  "🇷🇴": yLbXbJrZGl,
  "🇷🇸": cuxfVUIYLA,
  "🇷🇺": mDcewsWzYe,
  "🇷🇼": pvEKxyrZMX,
  "🇷": tiGKLqwGZG,
  "🇸🇦": CSPrPCfRgN,
  "🇸🇧": CrJNmjvMmx,
  "🇸🇨": RNyHVvAoKD,
  "🇸🇩": tnUAIGSowE,
  "🇸🇪": HnSbIdCupR,
  "🇸🇬": BzHGSQXIcX,
  "🇸🇭": ewUdVKAkGG,
  "🇸🇮": eDnzqSyMds,
  "🇸🇯": dZdJnJUILQ,
  "🇸🇰": EbUznOcHsz,
  "🇸🇱": sKXdquNrYN,
  "🇸🇲": zrUrbXFrEV,
  "🇸🇳": UfCJyVqpcb,
  "🇸🇴": hKRewzPlrj,
  "🇸🇷": NnvmugdpEN,
  "🇸🇸": TVmCuNbcmH,
  "🇸🇹": wAQRnnTmJm,
  "🇸🇻": HhybBznqZd,
  "🇸🇽": vsEKFhvOLg,
  "🇸🇾": MEbIEYCAaA,
  "🇸🇿": GTkaeqXUWV,
  "🇸": mzXsWkkHHy,
  "🇹🇦": shmFTyVKDe,
  "🇹🇨": VXxdvMUivC,
  "🇹🇩": FuMjNsdvnk,
  "🇹🇫": QiBtDldgCD,
  "🇹🇬": AkGBwvgyqD,
  "🇹🇭": QVANPPjpUt,
  "🇹🇯": UEpZkMdFYn,
  "🇹🇰": EhkFuLoQyu,
  "🇹🇱": cBQLEhhBWQ,
  "🇹🇲": PmQXACHHKG,
  "🇹🇳": rppwOPDbMF,
  "🇹🇴": pWVEBEMkTE,
  "🇹🇷": oLusaFLQzy,
  "🇹🇹": SqmrosrOWl,
  "🇹🇻": tPLtpzIwAG,
  "🇹🇼": DoYlMGghvZ,
  "🇹🇿": JYMiAQksxT,
  "🇹": DvfhBLxLPw,
  "🇺🇦": GUXjcVbEzy,
  "🇺🇬": AcaqCgfgyO,
  "🇺🇲": moQKjHaQbZ,
  "🇺🇳": bHpowgsqBK,
  "🇺🇸": AIFajpBMYS,
  "🇺🇾": LczcrccOxR,
  "🇺🇿": gvADmjLnYR,
  "🇺": phfWscwQsL,
  "🇻🇦": AqYpXjidBR,
  "🇻🇨": PNHCFRRWlS,
  "🇻🇪": QdiYVDpwcK,
  "🇻🇬": xtaHgiUScU,
  "🇻🇮": SsZSFFANkf,
  "🇻🇳": WyEncurkcC,
  "🇻🇺": zdMrvWgmpS,
  "🇻": xldxPwxkKd,
  "🇼🇫": ZeqjYNcada,
  "🇼🇸": vUMzZQNcub,
  "🇼": dPFFwgUtVd,
  "🇽🇰": lXvLsuEnqx,
  "🇽": ceXsdzgjpU,
  "🇾🇪": SiCgXnZOtv,
  "🇾🇹": eWWtHhYFMb,
  "🇾": GCtOsKriTc,
  "🇿🇦": MvzIJlmoui,
  "🇿🇲": vcrrzyPmzf,
  "🇿🇼": VnnRVWZbst,
  "🇿": coEgdEjllA,
  "🈁": sjjsOnCOyI,
  "🈂": kbHcEbQFdY,
  "🈚": YfxUIvgcpv,
  "🈯": atfBfAEIYi,
  "🈲": OeAyonxepd,
  "🈳": cpNSurWJuA,
  "🈴": kWvphWMwLd,
  "🈵": pHHtTczodS,
  "🈶": KVGOjrWLsY,
  "🈷": ILREfdgsoS,
  "🈸": CpblLKqRtM,
  "🈹": KxixHCigGH,
  "🈺": anDtzpJfTP,
  "🉐": lxqDhHSJrh,
  "🉑": aGyVnovcFZ,
  "🉠": OqlwdkQiBk,
  "🉡": ZlCBtmKwlc,
  "🉢": HxrVXzbuvd,
  "🉣": aLcMNKHXBi,
  "🉤": XNdxdGNMrI,
  "🉥": SLIjmxUcMF,
  "🌀": IydgpUGjyQ,
  "🌁": XnwBIWqnWC,
  "🌂": AXVIcpNBDt,
  "🌃": fKjSLUZTpu,
  "🌄": SOlDrikDbp,
  "🌅": DFoEdEOPSK,
  "🌆": UNuIivNocG,
  "🌇": btdgHyjTqj,
  "🌈": TBJgQYajZZ,
  "🌉": VGBuDpHJMP,
  "🌊": uHHcXdCbzv,
  "🌋": XdmvRlOAhM,
  "🌌": uzKbSzoHyZ,
  "🌍": NuRgAsOAHe,
  "🌎": xxFIthELCU,
  "🌏": XUnMRAOrFD,
  "🌐": pIMqUZVVdP,
  "🌑": faLmTuEUuZ,
  "🌒": dcVAFpnLWw,
  "🌓": jCfxBvBnMh,
  "🌔": stcgPCYIMK,
  "🌕": FIHLMrMXMo,
  "🌖": prOGTdkDZc,
  "🌗": MgOMDLnDRr,
  "🌘": KmCYaBnBkv,
  "🌙": zDyNVwtALe,
  "🌚": LSMraCtWFR,
  "🌛": YELjyMCUUB,
  "🌜": MaKhdAbcBj,
  "🌝": lfanXrNdBO,
  "🌞": jTZWBFNrsi,
  "🌟": bSoDOWdekt,
  "🌠": iNwGNszmbZ,
  "🌡": CqgZrZmnJN,
  "🌤": uGafLPgZlP,
  "🌥": aTpEjhEovu,
  "🌦": fCJHlsxtrT,
  "🌧": lRiTvDOulg,
  "🌨": ayzMiMpujo,
  "🌩": gMzSfqlqTu,
  "🌪": DIlOsvtAuJ,
  "🌫": BXuWFZbOxb,
  "🌬": amslaaGQOG,
  "🌭": lmFPTUzZnQ,
  "🌮": sihZjaSDAL,
  "🌯": anqJtTKgHX,
  "🌰": jdpahgkRIZ,
  "🌱": YZJZCsMLfd,
  "🌲": AtYKGnkLDQ,
  "🌳": pnhdsAqVfg,
  "🌴": qkFQyLhRBR,
  "🌵": ibfcrZVZDh,
  "🌶": MoNEQjlpjU,
  "🌷": wuOnzOwZCo,
  "🌸": epBJArIeMp,
  "🌹": JzyPQypUVy,
  "🌺": xEXFJSGMfs,
  "🌻": kmtSjVdTDW,
  "🌼": HSBHzwhCNl,
  "🌽": bWJNfWuNRl,
  "🌾": AMKubXgtsJ,
  "🌿": JiBpwviFXM,
  "🍀": SjvtxWbveo,
  "🍁": EXQtgfqXdI,
  "🍂": kVvfyyeYRO,
  "🍃": MThLMXzhkc,
  "🍄": AQkgIGQGMg,
  "🍅": SahYAsvjuU,
  "🍆": KqqKNzTwLV,
  "🍇": RwDJrUBrFP,
  "🍈": zlPrHWbopK,
  "🍉": BMzorOdCeN,
  "🍊": iSRrfRTpBN,
  "🍋": XkzxfGkqob,
  "🍌": AwfZQoHnhB,
  "🍍": sOkwxINyja,
  "🍎": ZmxUjTypRz,
  "🍏": FhSWyGbolv,
  "🍐": dHUOPEuhbI,
  "🍑": MelMJLcCUp,
  "🍒": AQDTZEldBY,
  "🍓": MtDiNjDCwP,
  "🍔": ralZSGzoyd,
  "🍕": ORBGKqPBFZ,
  "🍖": epibjZpdgm,
  "🍗": kNRFXZMQum,
  "🍘": ghHeuNuYqH,
  "🍙": EAZMSwEWfN,
  "🍚": UrNtWQdVFh,
  "🍛": oSHnugPUDw,
  "🍜": SXcRETBVjk,
  "🍝": eZeIZaNItY,
  "🍞": jKQYVrbMPL,
  "🍟": qQQvssOyBO,
  "🍠": NmGaqLVFyP,
  "🍡": ecnZXOUuya,
  "🍢": zYHsXrCIBM,
  "🍣": uaOaKmzfgX,
  "🍤": SbSMWgIHiQ,
  "🍥": HaytjybPgj,
  "🍦": hasSkaqOZP,
  "🍧": vVKbnfHMNL,
  "🍨": UHupVtxSBv,
  "🍩": aXJheHTRtx,
  "🍪": uXlIgjKMwG,
  "🍫": IXNJDUrObQ,
  "🍬": uBLUCHUgzn,
  "🍭": UIyayQyGwh,
  "🍮": BJyeALzYYn,
  "🍯": uCRRyBXluL,
  "🍰": dwYdVDWLaK,
  "🍱": zcvVDDPnnj,
  "🍲": pfSAZFxKLX,
  "🍳": VuNfagaAAb,
  "🍴": RhDdlLlTRx,
  "🍵": YMXhleRKam,
  "🍶": gzeSrxjpNN,
  "🍷": aWJuebKbMR,
  "🍸": qeWioNSATF,
  "🍹": qIgYlfLNQU,
  "🍺": GbDREfOCKA,
  "🍻": EjJXkNDlaQ,
  "🍼": xIMMRsqwas,
  "🍽": HqlxXgbjKS,
  "🍾": DRCTQWjqlN,
  "🍿": PPrXhmcQxG,
  "🎀": kJlObnAZLP,
  "🎁": IGpkudQePv,
  "🎂": kmpVPaqxOP,
  "🎃": efakwVJLvJ,
  "🎄": PjKddDjvEj,
  "🎅🏻": msBMdBSWgd,
  "🎅🏼": ZTrtLlUVyn,
  "🎅🏽": PXuTHajHnB,
  "🎅🏾": LkWiwcITer,
  "🎅🏿": qRxaHvDESJ,
  "🎅": ArmjpGNFqf,
  "🎆": UwIKGPgHXU,
  "🎇": MFGVkIfpLN,
  "🎈": HHqSURkFEJ,
  "🎉": gfqnwoWjyY,
  "🎊": QMDqrJnRDL,
  "🎋": McgTFqETUU,
  "🎌": AmxdIvlFYk,
  "🎍": mVquBdloBD,
  "🎎": RXQvkLuUlc,
  "🎏": vjBHGYXBhy,
  "🎐": UbJFGyHFkP,
  "🎑": VJIbGaEwMs,
  "🎒": HconeMtvdJ,
  "🎓": ueVNbtzZFk,
  "🎖": PTZMcOOnGu,
  "🎗": EKQAWfPxiG,
  "🎙": TzVdalYRMN,
  "🎚": ajAajfdVoI,
  "🎛": vXdMriauIM,
  "🎞": sBVtGiQkZx,
  "🎟": KeuWVOWMEE,
  "🎠": SLoTHCqDGj,
  "🎡": oENtnkWVTz,
  "🎢": QZzIyRIldD,
  "🎣": zfjNrbAwOO,
  "🎤": JBCaiwNHrO,
  "🎥": sYFRuJfZmW,
  "🎦": mumgWUbOdK,
  "🎧": DWLYWqXEvi,
  "🎨": ekyUoWktOy,
  "🎩": SrwdpnPfJy,
  "🎪": rIcCUKcNuA,
  "🎫": XBzBsjlXBV,
  "🎬": goRJeiyoEc,
  "🎭": bUYFZJLhdo,
  "🎮": BrthppAiCy,
  "🎯": zquPmUyNHG,
  "🎰": XYPEuxAPXt,
  "🎱": QzeuXrxoSM,
  "🎲": WHEOLwgMtn,
  "🎳": gFCdqzjMEr,
  "🎴": arOxMKWZBv,
  "🎵": qUIWhIaZmj,
  "🎶": XNseNxWNxe,
  "🎷": qCHgSVaOFg,
  "🎸": JGybdmabJZ,
  "🎹": aVxTBVvdPp,
  "🎺": uhLtghblYb,
  "🎻": zfPbUoOZPg,
  "🎼": lzBreqVMiB,
  "🎽": kOhZAMpoMz,
  "🎾": xZGNsqVraz,
  "🎿": hQWdcNaCwn,
  "🏀": PSxByKHEwS,
  "🏁": BibcJQbwQP,
  "🏂🏻": UUeCqZUOkT,
  "🏂🏼": XIMXkHrSYv,
  "🏂🏽": mBEpWnqMLL,
  "🏂🏾": DmmpjXMSwY,
  "🏂🏿": qDMtRrRQhm,
  "🏂": eUWWxJimgX,
  "🏃🏻‍♀️": NpUwjjPWYn,
  "🏃🏻‍♂️": ZhRraFPPyY,
  "🏃🏻": tHaGlkQmzk,
  "🏃🏼‍♀️": TSptoWCLSW,
  "🏃🏼‍♂️": MzQPzTevqZ,
  "🏃🏼": zqcheskpQR,
  "🏃🏽‍♀️": sxVqAcGZan,
  "🏃🏽‍♂️": MkOcrAbche,
  "🏃🏽": FDdNvlyBLo,
  "🏃🏾‍♀️": sdzDnHXyBG,
  "🏃🏾‍♂️": zzvenLCdTT,
  "🏃🏾": NxwBGRVlaB,
  "🏃🏿‍♀️": uoyMQdcKrF,
  "🏃🏿‍♂️": OqWHLjXEvs,
  "🏃🏿": IviVbZdyps,
  "🏃‍♀️": BumJjjFcKN,
  "🏃‍♂️": ozOEYHBAjb,
  "🏃": jJnnxwRPar,
  "🏄🏻‍♀️": fLKKxkZlqk,
  "🏄🏻‍♂️": xAlqaEUDPe,
  "🏄🏻": ylWkqhOJXI,
  "🏄🏼‍♀️": IsklGqThjF,
  "🏄🏼‍♂️": pjvPxaFOyc,
  "🏄🏼": tfJmACqiwq,
  "🏄🏽‍♀️": UdqnMJgtCw,
  "🏄🏽‍♂️": BxoVtOseUI,
  "🏄🏽": ZgoOFYmrxh,
  "🏄🏾‍♀️": glsjgweFID,
  "🏄🏾‍♂️": fmgpRbeVxy,
  "🏄🏾": BUJAyYNjJi,
  "🏄🏿‍♀️": tRylnmvIGB,
  "🏄🏿‍♂️": uhmQlavYll,
  "🏄🏿": zdfxoYWudw,
  "🏄‍♀️": lgnoltYslK,
  "🏄‍♂️": tUIystosTt,
  "🏄": eZfoOnrttA,
  "🏅": ofYCgVfHRL,
  "🏆": eCkiNLkQKh,
  "🏇🏻": WXKVmmdDHJ,
  "🏇🏼": jprGKeyrbo,
  "🏇🏽": QEHDWVBjrA,
  "🏇🏾": pdmXQMAszH,
  "🏇🏿": yfwJuIsAUG,
  "🏇": iYMwHWjdek,
  "🏈": FSeNPoYMSe,
  "🏉": BzSEIFYORY,
  "🏊🏻‍♀️": wQgFmNKjbi,
  "🏊🏻‍♂️": SYsmChxnve,
  "🏊🏻": XHAgGudaqC,
  "🏊🏼‍♀️": IMSovsMPJc,
  "🏊🏼‍♂️": pLoHMjDsKY,
  "🏊🏼": VqaJWAtYGT,
  "🏊🏽‍♀️": DyOTWcxjBs,
  "🏊🏽‍♂️": ZcoWCVDFND,
  "🏊🏽": aAcPgBWwVi,
  "🏊🏾‍♀️": SulahxAZhZ,
  "🏊🏾‍♂️": poDxFeuYnT,
  "🏊🏾": OYHuDByPSA,
  "🏊🏿‍♀️": pYtTsOprIx,
  "🏊🏿‍♂️": AJhsrQKJzx,
  "🏊🏿": OcGqvZUTLS,
  "🏊‍♀️": pebZqtnvNn,
  "🏊‍♂️": CGcOOCIvSY,
  "🏊": fYrROHtTeT,
  "🏋🏻‍♀️": ITUzLrQPPP,
  "🏋🏻‍♂️": mjcmFdsEHR,
  "🏋🏻": HiRZpeJmXF,
  "🏋🏼‍♀️": IOiFzOqAMz,
  "🏋🏼‍♂️": yFWBPLnpLA,
  "🏋🏼": CFiLxFuMFk,
  "🏋🏽‍♀️": tjmAlSzTqY,
  "🏋🏽‍♂️": hFntGDFBpO,
  "🏋🏽": rDmfHGVFTu,
  "🏋🏾‍♀️": qQjTVdTrgF,
  "🏋🏾‍♂️": kyYFgDeGmi,
  "🏋🏾": pCytkPxJqr,
  "🏋🏿‍♀️": isszQuwSpF,
  "🏋🏿‍♂️": ipUDAgaIlc,
  "🏋🏿": fkWBOQOOvc,
  "🏋️‍♀️": TBVDoYIdIx,
  "🏋️‍♂️": nrbZdZVJvz,
  "🏋": jldJvpgRHo,
  "🏌🏻‍♀️": bSnksnBUxm,
  "🏌🏻‍♂️": HGEqDVuSig,
  "🏌🏻": SVsCBCFpTC,
  "🏌🏼‍♀️": OAZJANBpZE,
  "🏌🏼‍♂️": tPneMJdmtC,
  "🏌🏼": bsCVyxRJUD,
  "🏌🏽‍♀️": MxDGtyaevD,
  "🏌🏽‍♂️": cQRHYlYSqR,
  "🏌🏽": nsvIdbBLHB,
  "🏌🏾‍♀️": MGRoslzevw,
  "🏌🏾‍♂️": YxniMCphbC,
  "🏌🏾": jZVekbEpWD,
  "🏌🏿‍♀️": GUBHOuOogE,
  "🏌🏿‍♂️": QspTNoFUjR,
  "🏌🏿": GziaEdwrLT,
  "🏌️‍♀️": ljkdyULYSz,
  "🏌️‍♂️": nYUmUnalDt,
  "🏌": HUxvNUOBSB,
  "🏍": aumNTSstNL,
  "🏎": qiSDyJRxVK,
  "🏏": ibZpjAwMBI,
  "🏐": QELodkwAGr,
  "🏑": SNhuWGCyXP,
  "🏒": IRGufXOqwD,
  "🏓": xjZyhzvRrS,
  "🏔": uNTdNJicxh,
  "🏕": bJcKOfXKYl,
  "🏖": rwLfIudWtf,
  "🏗": FjlZYppBvI,
  "🏘": dIxZCesaAl,
  "🏙": JcctJXFiTZ,
  "🏚": DoExJEVXvM,
  "🏛": VIGhAJzPDH,
  "🏜": HPfeQdLIar,
  "🏝": loyrBKNbZG,
  "🏞": bayRciipJK,
  "🏟": VQZOJSoxnj,
  "🏠": YrJIDKDaMA,
  "🏡": RuyXvVjJfI,
  "🏢": ladBecHmqn,
  "🏣": JWRDRkSpki,
  "🏤": fxQPrbywJR,
  "🏥": FnUeqaWtwr,
  "🏦": PPlHWqSuPN,
  "🏧": oGPVuYZJdc,
  "🏨": kfZatbyQoI,
  "🏩": lHboNmyfze,
  "🏪": oVwkAtzWkz,
  "🏫": OeDnGGgEGg,
  "🏬": ebhbfNRuRA,
  "🏭": aSleiMDclz,
  "🏮": FFgfPtUTCD,
  "🏯": ipFQEkaJMu,
  "🏰": zLjqpHpvTd,
  "🏳🟦🟩🟨": eQrlRtOtDb,
  "🏳️‍🌈": BYzRcjhLEX,
  "🏳️‍📌‍⚙️": nhArlAUdMI,
  "🏳️‍🟥": SqvpClFpQc,
  "🏳️‍🟦‍🌌": CvXwxVQHdd,
  "🏳️‍🟦": DXIwFMCXzT,
  "🏳️‍🟧": JRKTelPhxi,
  "🏳️‍🟨": NuYaTRPHcO,
  "🏳️‍🟩‍⭐‍🟩": kcNzwkbtXv,
  "🏳️‍🟩": RTiHzsuCLC,
  "🏳️‍🟪": cdHtBKNPuz,
  "🏳️‍🟫": GvsBCNvqmr,
  "🏳️‍⚧️": IPyTvzHcjo,
  "🏳️": yqlNJnHpUU,
  "🏳": ngdTUjEPvU,
  "🏴‍☠️": fzkjTKcPyG,
  "🏴󠁣󠁡󠁱󠁣󠁿- Quebec": ndcSucuGoh,
  "🏴󠁤󠁥󠁢󠁥󠁿": wGXCLDnQBV,
  "🏴󠁤󠁥󠁢󠁹󠁿": jnDklflxIz,
  "🏴󠁥󠁳󠁡󠁲󠁿": HPbumLdVEN,
  "🏴󠁥󠁳󠁡󠁳󠁿": KDEBbkUZcr,
  "🏴󠁥󠁳󠁣󠁴󠁿": NuSyisHWJK,
  "🏴󠁥󠁳󠁩󠁢󠁿": bDiMPuZufQ,
  "🏴󠁥󠁳󠁭󠁣󠁿": HLlRlcoLAk,
  "🏴󠁥󠁳󠁰󠁶󠁿": iboeSTEUfx,
  "🏴󠁥󠁳󠁶󠁣󠁿": dABMdVNdgM,
  "🏴󠁦󠁲󠁢󠁲󠁥󠁿": HuEsDyVonG,
  "🏴󠁧󠁢󠁥󠁮󠁧󠁿": qTGrXNvzuD,
  "🏴󠁧󠁢󠁳󠁣󠁴󠁿": GMwiRryUzU,
  "🏴󠁧󠁢󠁷󠁬󠁳󠁿": FwHJiGAhtN,
  "🏴󠁵󠁳󠁣󠁡󠁿": akOBCyssXs,
  "🏴󠁵󠁳󠁴󠁸󠁿": VwUpGfOFYH,
  "🏴️‍🅰️": cVFLOxZCvT,
  "🏴": TWVanPzRDF,
  "🏵": IDNSiqrQfy,
  "🏷": wLdplguJaq,
  "🏸": biylnCnzsH,
  "🏹": azEdtCTXXF,
  "🏺": rthfEtoUqD,
  "🏻": wfSFtFqjIX,
  "🏼": djXxERjhYJ,
  "🏽": IJBJWFpsty,
  "🏾": hRokrpVyfn,
  "🏿": tvOXrnOBop,
  "🐀": snMxyinJtP,
  "🐁": plDiJLFvAr,
  "🐂": KIWZYxBYYG,
  "🐃": uEUqtvULUd,
  "🐄": wZSjVaWzDA,
  "🐅": PMQdoptwmi,
  "🐆": vPHJEDLCVf,
  "🐇": uGUgIWpQug,
  "🐈‍⬛": bcEsAdCuVm,
  "🐈": uUsarYPwtm,
  "🐉": OQgnFBQigb,
  "🐊": IwucUsVINV,
  "🐋": wfKVDrHJRr,
  "🐌": GQKicWurwL,
  "🐍": BPMUugxGff,
  "🐎": nqsbMHkPuc,
  "🐏": sWvApYFbrx,
  "🐐": EuDflDwCdI,
  "🐑": HpXcKcAGZk,
  "🐒": xnrLRHVwra,
  "🐓": kJPFczrEAm,
  "🐔": kUgiJFNcXW,
  "🐕‍🦺": mRJlxaHUba,
  "🐕": LBYtUwamTA,
  "🐖": GklGcCaOeY,
  "🐗": cgxyKIZhtL,
  "🐘": ELKxuUTTMF,
  "🐙": dolkitJBDt,
  "🐚": PlqTBCtMHX,
  "🐛": jHZeGhvMpi,
  "🐜": fTFXeGXKFw,
  "🐝": efVNGDdItd,
  "🐞": AbcindNphq,
  "🐟": eaBjelSnjo,
  "🐠": iURpUFNxgb,
  "🐡": OqeTXOhawY,
  "🐢": DeZMQeBVVf,
  "🐣": ZvQICizLfY,
  "🐤": YkWzjJdaBD,
  "🐥": oraNchYLMI,
  "🐦‍⬛": uDiwaAUopF,
  "🐦": GzyCJMSMkN,
  "🐧": wmAmuzhIKC,
  "🐨": BBiEYOABem,
  "🐩": rdvQnmhZOa,
  "🐪": qbHeVhqtUc,
  "🐫": OomgslbRpW,
  "🐬": UGFjvQrjKb,
  "🐭": JlGmTwkqMD,
  "🐮": ScccFWVbMp,
  "🐯": NlyDTPuENu,
  "🐰": DGizwqUpRF,
  "🐱‍💻": GFQBlrazcK,
  "🐱": YavpBqBYKL,
  "🐲": jlCDexdvvh,
  "🐳": kDjOlECjQo,
  "🐴": NTmhaWLtSX,
  "🐵": rMyTTnFkVg,
  "🐶": fPkMAWohKg,
  "🐷": HavDMZWzrf,
  "🐸": zMZbJxtxMx,
  "🐹": KGLrJUoDSM,
  "🐺": bqjyeySHKr,
  "🐻‍❄️": OFhhBjxlnD,
  "🐻": WXRUoWTWpZ,
  "🐼": SdknuGVjZq,
  "🐽": bDPaMkSixD,
  "🐾": qWiSwqldsh,
  "🐿": MBIxjuuySt,
  "👀": PQgQKBYsUl,
  "👁️‍🗨️": kTnCOwyQJc,
  "👁": RJhiTYZISW,
  "👂🏻": IGPDFtsPpI,
  "👂🏼": VmpHeWpspx,
  "👂🏽": YERTcOxXGm,
  "👂🏾": WolKzNlZvB,
  "👂🏿": LUyWJnNAQO,
  "👂": geKzzmWEnV,
  "👃🏻": nMRizDCdLv,
  "👃🏼": CzicBidGdM,
  "👃🏽": cgleRMxCmF,
  "👃🏾": SyVDjxvPit,
  "👃🏿": vpcQDmKFRH,
  "👃": sYfNfgHviU,
  "👄": mYkFshQYwn,
  "👅": YrvAteDvIr,
  "👆🏻": rycbnoYYRO,
  "👆🏼": zhZZEiFXOR,
  "👆🏽": vhqpiEZZZS,
  "👆🏾": RQZbBAkRUR,
  "👆🏿": OEwCNUDZPI,
  "👆": WKqepDGERM,
  "👇🏻": ymPvqftqwB,
  "👇🏼": MYAGOPVSGO,
  "👇🏽": qCGYzkgwVR,
  "👇🏾": pDiJkZKwdi,
  "👇🏿": GvjkruNcwr,
  "👇": EOlDOXBbCT,
  "👈🏻": vhdnddLeSC,
  "👈🏼": TWlydoJCAA,
  "👈🏽": dHsvhKwWVP,
  "👈🏾": AXsDYLlrpN,
  "👈🏿": SnpVLqUiOR,
  "👈": XPTPaCbnvy,
  "👉🏻": xVGpgXlxMh,
  "👉🏼": HCiWtWSiiG,
  "👉🏽": ffZGoOXssG,
  "👉🏾": CvYfrxYiqi,
  "👉🏿": YNKiBwdSvV,
  "👉": AoIgzshifT,
  "👊🏻": zgKjGfuaYV,
  "👊🏼": lwktlmXNoe,
  "👊🏽": BxhKURXquO,
  "👊🏾": HFmzmNFzxx,
  "👊🏿": OptYovChoR,
  "👊": YcICZSKyPN,
  "👋🏻": jnQDdreWWD,
  "👋🏼": fVkFAIeXFC,
  "👋🏽": NQrhbiguMC,
  "👋🏾": AQbqDEHBbT,
  "👋🏿": sagWcAVZrX,
  "👋": nFgtGrCial,
  "👌🏻": DEJNjbiEyC,
  "👌🏼": qSnFSAFvKO,
  "👌🏽": EOhpdZxdHA,
  "👌🏾": fgCnDnmFqP,
  "👌🏿": kOiNjihmjo,
  "👌": kwAMnDizJF,
  "👍🏻": JSzxhdDfFa,
  "👍🏼": VkFARlpmLp,
  "👍🏽": bMhcQIuiem,
  "👍🏾": qNAZAlLXPd,
  "👍🏿": ypVRXcXapK,
  "👍": QNrvAaAjVm,
  "👎🏻": oZFrCcEFct,
  "👎🏼": HreHEuBvsu,
  "👎🏽": GwdEbnDlLU,
  "👎🏾": GcRPedqjbp,
  "👎🏿": qJIvvTCaZf,
  "👎": cRqUwlAARg,
  "👏🏻": RijJdtPDrg,
  "👏🏼": wXnyemXkjs,
  "👏🏽": iWrIdhVUOt,
  "👏🏾": ZCvPrpKrLs,
  "👏🏿": AmUlDEPQbf,
  "👏": frcKntktWR,
  "👐🏻": MpeuybNIIp,
  "👐🏼": uhKPkIXdaG,
  "👐🏽": NdkWgjTYlT,
  "👐🏾": NflCxdqQZR,
  "👐🏿": lzAEFAvCgO,
  "👐": mQsFuXwZpj,
  "👑": cYDUfWSekE,
  "👒": zyUeblOnFE,
  "👓": hwWNvlgAhC,
  "👔": ejCCbxvmXZ,
  "👕": oqOzwuONAv,
  "👖": UgsKmeWBBB,
  "👗": WaCgdPbwLf,
  "👘": iQsuIbJnuH,
  "👙": dcauIuBSth,
  "👚": UIGYmKMrrZ,
  "👛": pKnUuvyobX,
  "👜": cGShPAuVXw,
  "👝": OqnlrVzYPf,
  "👞": yihlRusFwS,
  "👟": OcwdDLgPvO,
  "👠": FlgESeGHKy,
  "👡": pgsHmsvpcV,
  "👢": IdJNzpFNdJ,
  "👣": BjhmhtLema,
  "👤": toRZqUUKfy,
  "👥": yhHLbcriek,
  "👦🏻": ESoHqRkOVx,
  "👦🏼": yAgjgyDnFb,
  "👦🏽": qZXywvoMkT,
  "👦🏾": TDJjBgEfZS,
  "👦🏿": HeNHxZiVCT,
  "👦": IgXlziubYb,
  "👧🏻": nEIdPHnmBo,
  "👧🏼": CdANwVUigd,
  "👧🏽": iFzCLLRrLB,
  "👧🏾": mQgBRXfYur,
  "👧🏿": EShpPCPDrH,
  "👧": dWHmoqaYnu,
  "👨🏻‍🌾": nSBMLupynT,
  "👨🏻‍🍳": LAlgjlcDjH,
  "👨🏻‍🍼": OoysKEESej,
  "👨🏻‍🎓": ZaCBgvNBeF,
  "👨🏻‍🎤": lcwkiDoIHc,
  "👨🏻‍🎨": StBjJlCwLU,
  "👨🏻‍🏫": LIlnDokHLX,
  "👨🏻‍🏭": hcGmTdGgLF,
  "👨🏻‍💻": uBsqADphNf,
  "👨🏻‍💼": JqunZzKMuO,
  "👨🏻‍🔧": TobwBurEtg,
  "👨🏻‍🔬": QfexiukbCO,
  "👨🏻‍🚀": uSqqLElVrk,
  "👨🏻‍🚒": SdOMVWgGLS,
  "👨🏻‍🤝‍👨🏼": dcFNpAqqHK,
  "👨🏻‍🤝‍👨🏽": XnpBJjtJHl,
  "👨🏻‍🤝‍👨🏾": FYSklOgqao,
  "👨🏻‍🤝‍👨🏿": nEKbFRUoFc,
  "👨🏻‍🦯": uZLiukROGz,
  "👨🏻‍🦰": oiDkpiDQIj,
  "👨🏻‍🦱": myzYFGpdfP,
  "👨🏻‍🦲": TurkJRtKEm,
  "👨🏻‍🦳": zIjVohvFbt,
  "👨🏻‍🦼": WYsAcaztNP,
  "👨🏻‍🦽": dNvCbZbxnu,
  "👨🏻‍⚕️": hyhqUSFLoP,
  "👨🏻‍⚖️": qemMwpyVmi,
  "👨🏻‍✈️": gCvJExQAiK,
  "👨🏻‍❤️‍👨🏻": lAXvLehqrD,
  "👨🏻‍❤️‍👨🏼": lmVqmiePys,
  "👨🏻‍❤️‍👨🏽": sSMjUvHURK,
  "👨🏻‍❤️‍👨🏾": vZuPXDmblr,
  "👨🏻‍❤️‍👨🏿": KDpqHtxTKA,
  "👨🏻‍❤️‍💋‍👨🏻": fGEeRsUBkH,
  "👨🏻‍❤️‍💋‍👨🏼": TTmgTHmKHS,
  "👨🏻‍❤️‍💋‍👨🏽": FGsENNTSJw,
  "👨🏻‍❤️‍💋‍👨🏾": VFaiDTCUuC,
  "👨🏻‍❤️‍💋‍👨🏿": nMnhPUYXaj,
  "👨🏻": QYUesmSHtL,
  "👨🏼‍🌾": brKYPezzUr,
  "👨🏼‍🍳": wPutXAqgqm,
  "👨🏼‍🍼": MfQTcYwwdH,
  "👨🏼‍🎓": JUDnQBaIbp,
  "👨🏼‍🎤": usfznMOJGj,
  "👨🏼‍🎨": lXePyLORPT,
  "👨🏼‍🏫": FbyaXZRVSL,
  "👨🏼‍🏭": zKYABaebCN,
  "👨🏼‍💻": SEzIJqZbJF,
  "👨🏼‍💼": YxPZATwjZC,
  "👨🏼‍🔧": lmjHQJznde,
  "👨🏼‍🔬": tXhomctRTb,
  "👨🏼‍🚀": tAXszQJqgI,
  "👨🏼‍🚒": ihqJhPNMxR,
  "👨🏼‍🤝‍👨🏻": ovUPIHtYZp,
  "👨🏼‍🤝‍👨🏽": PfnGJfcajo,
  "👨🏼‍🤝‍👨🏾": drxWAvsVlu,
  "👨🏼‍🤝‍👨🏿": GEIvLHKiOY,
  "👨🏼‍🦯": ckDkkjgAAT,
  "👨🏼‍🦰": TjEyJfWYtk,
  "👨🏼‍🦱": uzRwKRskNV,
  "👨🏼‍🦲": CEkzxkMzzE,
  "👨🏼‍🦳": SRSXOiCzdP,
  "👨🏼‍🦼": sFYWxFjmSm,
  "👨🏼‍🦽": oEToLgMVBp,
  "👨🏼‍⚕️": UHYdygeTFb,
  "👨🏼‍⚖️": OoKEGEdilR,
  "👨🏼‍✈️": tODwsLQIlR,
  "👨🏼‍❤️‍👨🏻": hkpNicgZKl,
  "👨🏼‍❤️‍👨🏼": NjEHmilqxt,
  "👨🏼‍❤️‍👨🏽": UEmcmAvIQD,
  "👨🏼‍❤️‍👨🏾": oqcRkwvJEI,
  "👨🏼‍❤️‍👨🏿": NdrpurksyX,
  "👨🏼‍❤️‍💋‍👨🏻": aLmBhdhKFC,
  "👨🏼‍❤️‍💋‍👨🏼": vtKOfAAVZx,
  "👨🏼‍❤️‍💋‍👨🏽": eYTHaoOohQ,
  "👨🏼‍❤️‍💋‍👨🏾": vCjYtGMYVY,
  "👨🏼‍❤️‍💋‍👨🏿": sVPLZDpMdj,
  "👨🏼": KrLIpwwKQV,
  "👨🏽‍🌾": vQqMmgvgsh,
  "👨🏽‍🍳": zCqMfvwaCJ,
  "👨🏽‍🍼": hghHYgEjXx,
  "👨🏽‍🎓": sjfldqtLQS,
  "👨🏽‍🎤": brMmWyFITQ,
  "👨🏽‍🎨": McqjGBnlWP,
  "👨🏽‍🏫": JqSRWXnZFK,
  "👨🏽‍🏭": cSUdUGphZm,
  "👨🏽‍💻": IDHiMEfgte,
  "👨🏽‍💼": DFriyzNost,
  "👨🏽‍🔧": SBeQLmhwKu,
  "👨🏽‍🔬": wyUFkiDCWD,
  "👨🏽‍🚀": vRVKdkvZSQ,
  "👨🏽‍🚒": FlrOFHSJAC,
  "👨🏽‍🤝‍👨🏻": FiiOXfIfsP,
  "👨🏽‍🤝‍👨🏼": ZDaDCoIoHU,
  "👨🏽‍🤝‍👨🏾": dxjilQxjAJ,
  "👨🏽‍🤝‍👨🏿": nkIcyffNfT,
  "👨🏽‍🦯": jmUGLdHNwc,
  "👨🏽‍🦰": vUSMvYoeLf,
  "👨🏽‍🦱": avpfWNIQPy,
  "👨🏽‍🦲": eAAOnakmqB,
  "👨🏽‍🦳": EuNHEXFBju,
  "👨🏽‍🦼": HyCiWyWOGn,
  "👨🏽‍🦽": gMwBebypPB,
  "👨🏽‍⚕️": foMAYjHxLn,
  "👨🏽‍⚖️": PuXrNewSWz,
  "👨🏽‍✈️": lDbjCPqRRM,
  "👨🏽‍❤️‍👨🏻": DwyviPqGwU,
  "👨🏽‍❤️‍👨🏼": XLYDgrllMd,
  "👨🏽‍❤️‍👨🏽": WVRtaMDOYB,
  "👨🏽‍❤️‍👨🏾": qEVGIndNnA,
  "👨🏽‍❤️‍👨🏿": JInKbyoQax,
  "👨🏽‍❤️‍💋‍👨🏻": aLEgLhLyoK,
  "👨🏽‍❤️‍💋‍👨🏼": JpvFOiUXBd,
  "👨🏽‍❤️‍💋‍👨🏽": lPdvdxjhXk,
  "👨🏽‍❤️‍💋‍👨🏾": vQeNzFjHgz,
  "👨🏽‍❤️‍💋‍👨🏿": ARnxDwPikF,
  "👨🏽": cZspNvvBvK,
  "👨🏾‍🌾": rvafULcTDf,
  "👨🏾‍🍳": cHhZVtBXEi,
  "👨🏾‍🍼": VMQucqtmMm,
  "👨🏾‍🎓": pcJcfVSaVT,
  "👨🏾‍🎤": ymJIMmNxPH,
  "👨🏾‍🎨": uenIHvtOzw,
  "👨🏾‍🏫": StoLSpYTuH,
  "👨🏾‍🏭": KIhXKFwPHe,
  "👨🏾‍💻": QRQZaBigqp,
  "👨🏾‍💼": aDecldtQtW,
  "👨🏾‍🔧": YxtvMJHpvN,
  "👨🏾‍🔬": EFkYjVAwnr,
  "👨🏾‍🚀": xcgnVyirYC,
  "👨🏾‍🚒": LPtqAycpHh,
  "👨🏾‍🤝‍👨🏻": VvniHhYWyU,
  "👨🏾‍🤝‍👨🏼": eDPweqWBGV,
  "👨🏾‍🤝‍👨🏽": CyLTGfufMp,
  "👨🏾‍🤝‍👨🏿": gFocWjsgpo,
  "👨🏾‍🦯": IbzETVAJEV,
  "👨🏾‍🦰": icWthDImyj,
  "👨🏾‍🦱": QaDqfvKZXt,
  "👨🏾‍🦲": aFygwPOAGh,
  "👨🏾‍🦳": GfHFBtDVhU,
  "👨🏾‍🦼": GCMOEephhA,
  "👨🏾‍🦽": wMsKtxjPhe,
  "👨🏾‍⚕️": qABoDRCUje,
  "👨🏾‍⚖️": aNZlIhKKQM,
  "👨🏾‍✈️": hzkfVlEhrQ,
  "👨🏾‍❤️‍👨🏻": xmaVqqqulL,
  "👨🏾‍❤️‍👨🏼": mBGpNfdpTD,
  "👨🏾‍❤️‍👨🏽": PtLcFHMyVN,
  "👨🏾‍❤️‍👨🏾": TzIhLMSrSs,
  "👨🏾‍❤️‍👨🏿": qfABKsbMMb,
  "👨🏾‍❤️‍💋‍👨🏻": lgFDsRCwdb,
  "👨🏾‍❤️‍💋‍👨🏼": DjUCaUHImu,
  "👨🏾‍❤️‍💋‍👨🏽": FNYGxAaTBf,
  "👨🏾‍❤️‍💋‍👨🏾": jDvKjOJGEY,
  "👨🏾‍❤️‍💋‍👨🏿": PQERQgVhzJ,
  "👨🏾": HjMhALXSeh,
  "👨🏿‍🌾": LavYsYTJYP,
  "👨🏿‍🍳": CKSuyPDlbj,
  "👨🏿‍🍼": wojqnAHmYI,
  "👨🏿‍🎓": vARrdMgkFF,
  "👨🏿‍🎤": BaKduIjIEO,
  "👨🏿‍🎨": sHElQLuVto,
  "👨🏿‍🏫": DCNzLPGLro,
  "👨🏿‍🏭": odGXtiPWGB,
  "👨🏿‍💻": kObdGbrnLF,
  "👨🏿‍💼": qNAtCXtvYW,
  "👨🏿‍🔧": UosCsEPIsb,
  "👨🏿‍🔬": scShzdTEbD,
  "👨🏿‍🚀": FqXRNoHBKS,
  "👨🏿‍🚒": GIHhmmbrmg,
  "👨🏿‍🤝‍👨🏻": HGcVHjfGQp,
  "👨🏿‍🤝‍👨🏼": GzGScuaYTl,
  "👨🏿‍🤝‍👨🏽": MlMuWQmFPL,
  "👨🏿‍🤝‍👨🏾": XwZEqHFxZt,
  "👨🏿‍🦯": bGldrDTGHQ,
  "👨🏿‍🦰": EFyTHmMUcr,
  "👨🏿‍🦱": azNQmFUZPz,
  "👨🏿‍🦲": FCeBxScsRR,
  "👨🏿‍🦳": qqsXgAOXSq,
  "👨🏿‍🦼": suwDXiWnot,
  "👨🏿‍🦽": pvNJdOKAVv,
  "👨🏿‍⚕️": HWtWdSMbwM,
  "👨🏿‍⚖️": kzuJaCahRt,
  "👨🏿‍✈️": wpBBmfadLo,
  "👨🏿‍❤️‍👨🏻": ocOVwHkgRk,
  "👨🏿‍❤️‍👨🏼": UuPoWbvEyC,
  "👨🏿‍❤️‍👨🏽": rQBaEzSCiR,
  "👨🏿‍❤️‍👨🏾": kCXjrYSikO,
  "👨🏿‍❤️‍👨🏿": hadIiQfMYX,
  "👨🏿‍❤️‍💋‍👨🏻": YpkBFXShJu,
  "👨🏿‍❤️‍💋‍👨🏼": LMEWIOXojP,
  "👨🏿‍❤️‍💋‍👨🏽": PDClyqnyEr,
  "👨🏿‍❤️‍💋‍👨🏾": kaycqGKtiF,
  "👨🏿‍❤️‍💋‍👨🏿": LGNRpoRfwV,
  "👨🏿": rhJVfQKUvX,
  "👨‍🌾": qNYurwlvam,
  "👨‍🍳": PGcTknLAiG,
  "👨‍🍼": EfQUcoyFhq,
  "👨‍🎓": ykdZTmOLfG,
  "👨‍🎤": hqAvAOxfgA,
  "👨‍🎨": eHSWOgkQbq,
  "👨‍🏫": OYwImIbXAF,
  "👨‍🏭": kApdnvBIEu,
  "👨‍👦‍👦": QQUvnTGfSG,
  "👨‍👦": TBeBuAgvlY,
  "👨‍👧‍👦": mUtVjzUDxe,
  "👨‍👧‍👧": akfZqeaIKd,
  "👨‍👧": UgawmBBAhK,
  "👨‍👨‍👦‍👦": MgSpnlKqna,
  "👨‍👨‍👦": bIJCtaPAFR,
  "👨‍👨‍👧‍👦": vRjxiyCHTR,
  "👨‍👨‍👧‍👧": pYcYyRygPE,
  "👨‍👨‍👧": FznVjzEpJK,
  "👨‍👩‍👦‍👦": xcOKtwoUao,
  "👨‍👩‍👦": PvxUjfkzgI,
  "👨‍👩‍👧‍👦": ZAmXfOiRDz,
  "👨‍👩‍👧‍👧": HXeKLIInZf,
  "👨‍👩‍👧": qzHaDYAJYy,
  "👨‍💻": ifXBdfLaPw,
  "👨‍💼": GMrjpzFjeT,
  "👨‍🔧": htGjLRXXra,
  "👨‍🔬": MQKpUwpfBR,
  "👨‍🚀": HjpMtFwoWX,
  "👨‍🚒": yPWzcZLjUB,
  "👨‍🦯": qKmXcmLFdp,
  "👨‍🦰": UDyBjAYvpT,
  "👨‍🦱": iiAnPdmCes,
  "👨‍🦲": qBBMZxpaFY,
  "👨‍🦳": EFTKQXQKKZ,
  "👨‍🦼": zYRqjTUmwm,
  "👨‍🦽": pTrrkxmKcb,
  "👨‍🪩": OrGDawNFAb,
  "👨‍⚕️": zedsjlAALa,
  "👨‍⚖️": BprHRFSesg,
  "👨‍✈️": fjBfNNPmLV,
  "👨‍❤️‍👨": rLqgTukGue,
  "👨‍❤️‍💋‍👨": nGLQhueMME,
  "👨": WlqcITFXqa,
  "👩🏻‍🌾": JjsNbWnEOF,
  "👩🏻‍🍳": lYZyyUwkZx,
  "👩🏻‍🍼": ZDotEgxoDW,
  "👩🏻‍🎓": GexspKDVsv,
  "👩🏻‍🎤": hSLcgPLYCD,
  "👩🏻‍🎨": LaxcMyVOZB,
  "👩🏻‍🏫": qjfWSOPMbL,
  "👩🏻‍🏭": emmGodFkxS,
  "👩🏻‍💻": hKCDQqjpNL,
  "👩🏻‍💼": HEFlHeuIAQ,
  "👩🏻‍🔧": SMnqoymsbT,
  "👩🏻‍🔬": dNuQeknpZT,
  "👩🏻‍🚀": vAQlNKtcDz,
  "👩🏻‍🚒": EfYWCNjJBR,
  "👩🏻‍🤝‍👨🏼": fKlBvsPKBI,
  "👩🏻‍🤝‍👨🏽": LcakgZfkpL,
  "👩🏻‍🤝‍👨🏾": uZWYiaIxuv,
  "👩🏻‍🤝‍👨🏿": MepfYtIlyG,
  "👩🏻‍🤝‍👩🏼": WBGRljyjTM,
  "👩🏻‍🤝‍👩🏽": BmglQCJmFJ,
  "👩🏻‍🤝‍👩🏾": frSgAaZdna,
  "👩🏻‍🤝‍👩🏿": kLvqcTBJzJ,
  "👩🏻‍🦯": FNoKnoHYvk,
  "👩🏻‍🦰": DEAMAfZRrT,
  "👩🏻‍🦱": YJOpvGMpRw,
  "👩🏻‍🦲": hSUSfxTQZn,
  "👩🏻‍🦳": LhFsjMXwGU,
  "👩🏻‍🦼": AfHOxVtqQT,
  "👩🏻‍🦽": yPWEMwFZkT,
  "👩🏻‍⚕️": GNdvgyCVoc,
  "👩🏻‍⚖️": SYCGzwLQSq,
  "👩🏻‍✈️": LEGxQZxDMR,
  "👩🏻‍❤️‍👨🏻": AhSfhpOyQO,
  "👩🏻‍❤️‍👨🏼": woJXjDHsKy,
  "👩🏻‍❤️‍👨🏽": olSJeStopr,
  "👩🏻‍❤️‍👨🏾": gBanUHleSm,
  "👩🏻‍❤️‍👨🏿": NUHTfCuDqT,
  "👩🏻‍❤️‍👩🏻": KFuckzdmVg,
  "👩🏻‍❤️‍👩🏼": MebvupmNSn,
  "👩🏻‍❤️‍👩🏽": vBWVMdFGLI,
  "👩🏻‍❤️‍👩🏾": xkwUXkclwA,
  "👩🏻‍❤️‍👩🏿": uFQagWRBdf,
  "👩🏻‍❤️‍💋‍👨🏻": vvTqGiXmfZ,
  "👩🏻‍❤️‍💋‍👨🏼": BaIkgBHTIs,
  "👩🏻‍❤️‍💋‍👨🏽": GTcJfRXORU,
  "👩🏻‍❤️‍💋‍👨🏾": oTZHqDTBVU,
  "👩🏻‍❤️‍💋‍👨🏿": QdMmPVqYOh,
  "👩🏻‍❤️‍💋‍👩🏻": vQIvHtMgrq,
  "👩🏻‍❤️‍💋‍👩🏼": UnrGBRShMa,
  "👩🏻‍❤️‍💋‍👩🏽": GfcwRLHRqN,
  "👩🏻‍❤️‍💋‍👩🏾": exxomXjNCu,
  "👩🏻‍❤️‍💋‍👩🏿": khxKGIqnyd,
  "👩🏻": mOAwvtmClI,
  "👩🏼‍🌾": xeTPezRoXM,
  "👩🏼‍🍳": hmWPsfzBBj,
  "👩🏼‍🍼": kwfimisbsQ,
  "👩🏼‍🎓": XwFvaKMNRM,
  "👩🏼‍🎤": ZNdWvXQNpz,
  "👩🏼‍🎨": KgPnVUGKOf,
  "👩🏼‍🏫": SaXEoatIHw,
  "👩🏼‍🏭": PDfcnkTgxs,
  "👩🏼‍💻": UifhVfertF,
  "👩🏼‍💼": IyrOLPkvKq,
  "👩🏼‍🔧": GytvNYpIEG,
  "👩🏼‍🔬": tsTxezCGeH,
  "👩🏼‍🚀": YCcZCipSUd,
  "👩🏼‍🚒": TUJQDvTTmO,
  "👩🏼‍🤝‍👨🏻": ySdsBOsJyV,
  "👩🏼‍🤝‍👨🏽": YLouPqUmpx,
  "👩🏼‍🤝‍👨🏾": eVQuLHHjSQ,
  "👩🏼‍🤝‍👨🏿": TxDvQOVOZN,
  "👩🏼‍🤝‍👩🏻": traKkufLWN,
  "👩🏼‍🤝‍👩🏽": GsykQPrBdN,
  "👩🏼‍🤝‍👩🏾": nmJdNdgRgR,
  "👩🏼‍🤝‍👩🏿": XoAyXlACoD,
  "👩🏼‍🦯": IwHbXIJBpw,
  "👩🏼‍🦰": tdoVbcHxLS,
  "👩🏼‍🦱": GLSYqChRkj,
  "👩🏼‍🦲": mHpAQQUkHQ,
  "👩🏼‍🦳": MguQrjyPzO,
  "👩🏼‍🦼": hbGqDVfqQE,
  "👩🏼‍🦽": oTrYrzAmpQ,
  "👩🏼‍⚕️": nKRkBtFYtk,
  "👩🏼‍⚖️": pUgwiCqPSC,
  "👩🏼‍✈️": nXDYTplyxR,
  "👩🏼‍❤️‍👨🏻": nLgLwzBuuk,
  "👩🏼‍❤️‍👨🏼": bGpbQyUaZx,
  "👩🏼‍❤️‍👨🏽": heHegSTeHb,
  "👩🏼‍❤️‍👨🏾": vvPLikIrzC,
  "👩🏼‍❤️‍👨🏿": UThhOOeadj,
  "👩🏼‍❤️‍👩🏻": pOAJlcLUWk,
  "👩🏼‍❤️‍👩🏼": XvmVqloyHt,
  "👩🏼‍❤️‍👩🏽": nYVMFxAlvz,
  "👩🏼‍❤️‍👩🏾": ullHwJywBG,
  "👩🏼‍❤️‍👩🏿": zXGejyYfkx,
  "👩🏼‍❤️‍💋‍👨🏻": RMmBGjjWFM,
  "👩🏼‍❤️‍💋‍👨🏼": skbLRefszV,
  "👩🏼‍❤️‍💋‍👨🏽": ylynMWlqyP,
  "👩🏼‍❤️‍💋‍👨🏾": YuxkfsBnse,
  "👩🏼‍❤️‍💋‍👨🏿": gMchkjvJIf,
  "👩🏼‍❤️‍💋‍👩🏻": BqvMdGBIdU,
  "👩🏼‍❤️‍💋‍👩🏼": cByQMwIryB,
  "👩🏼‍❤️‍💋‍👩🏽": uAGPePDgwS,
  "👩🏼‍❤️‍💋‍👩🏾": zqjepUPkyD,
  "👩🏼‍❤️‍💋‍👩🏿": yOSYXuBDcX,
  "👩🏼": zFCeHJQKiA,
  "👩🏽‍🌾": RgPoZewrKU,
  "👩🏽‍🍳": mbaMFBfUjE,
  "👩🏽‍🍼": JaDdwqSThA,
  "👩🏽‍🎓": BQhLvfGAez,
  "👩🏽‍🎤": sNAuPQpAuF,
  "👩🏽‍🎨": zdIjaHvCwC,
  "👩🏽‍🏫": GdVhLCoPMA,
  "👩🏽‍🏭": JaFmDQNMPD,
  "👩🏽‍💻": wtZARVILFk,
  "👩🏽‍💼": hlahdQQjXW,
  "👩🏽‍🔧": GNDZAapShd,
  "👩🏽‍🔬": SuQbVLnPdD,
  "👩🏽‍🚀": VViwDKDLdq,
  "👩🏽‍🚒": SnWnvughfk,
  "👩🏽‍🤝‍👨🏻": vfVEMnhIUZ,
  "👩🏽‍🤝‍👨🏼": lOHsJwNHmw,
  "👩🏽‍🤝‍👨🏾": WpKlQiJbCd,
  "👩🏽‍🤝‍👨🏿": GnSrYorkgG,
  "👩🏽‍🤝‍👩🏻": iWaFASqcSq,
  "👩🏽‍🤝‍👩🏼": wFMVLRqJDF,
  "👩🏽‍🤝‍👩🏾": AacRrwOTft,
  "👩🏽‍🤝‍👩🏿": nfKQbAGEVA,
  "👩🏽‍🦯": dDCDuvfhXj,
  "👩🏽‍🦰": jmOsJLyysp,
  "👩🏽‍🦱": fYoUABfLyi,
  "👩🏽‍🦲": muHFQubKTe,
  "👩🏽‍🦳": RePUjiRWoC,
  "👩🏽‍🦼": VDkYlyGUFD,
  "👩🏽‍🦽": bSvwSuTerY,
  "👩🏽‍⚕️": uLVvtvRJCC,
  "👩🏽‍⚖️": vRpYggIhaK,
  "👩🏽‍✈️": WJzOzhAzAC,
  "👩🏽‍❤️‍👨🏻": anvrftFMRy,
  "👩🏽‍❤️‍👨🏼": eDGKjzwsEX,
  "👩🏽‍❤️‍👨🏽": DZYAKmWuAN,
  "👩🏽‍❤️‍👨🏾": KVOCrbzsjc,
  "👩🏽‍❤️‍👨🏿": ZiJzQlPAYC,
  "👩🏽‍❤️‍👩🏻": fmvCuImIdZ,
  "👩🏽‍❤️‍👩🏼": YnPsjacNDW,
  "👩🏽‍❤️‍👩🏽": XpJsFBJVkg,
  "👩🏽‍❤️‍👩🏾": tHUvvVBvve,
  "👩🏽‍❤️‍👩🏿": XjBddJJXuk,
  "👩🏽‍❤️‍💋‍👨🏻": lTMTsBZrIb,
  "👩🏽‍❤️‍💋‍👨🏼": eowzRVSdxH,
  "👩🏽‍❤️‍💋‍👨🏽": hsoLgmKhOI,
  "👩🏽‍❤️‍💋‍👨🏾": gGHDJfzUzk,
  "👩🏽‍❤️‍💋‍👨🏿": dPkCQJWMHe,
  "👩🏽‍❤️‍💋‍👩🏻": HgsQhMfFxM,
  "👩🏽‍❤️‍💋‍👩🏼": yyLVqhsmXA,
  "👩🏽‍❤️‍💋‍👩🏽": qXJIGpMmet,
  "👩🏽‍❤️‍💋‍👩🏾": lUgcWvEvjR,
  "👩🏽‍❤️‍💋‍👩🏿": QnDECNflWZ,
  "👩🏽": zaNPdtOrMy,
  "👩🏾‍🌾": UElhrFyNvJ,
  "👩🏾‍🍳": wjzUEysCux,
  "👩🏾‍🍼": sFefSocmEu,
  "👩🏾‍🎓": AVHQMcEmJq,
  "👩🏾‍🎤": LeoUptFGzf,
  "👩🏾‍🎨": ZcWlVuBlLv,
  "👩🏾‍🏫": SXGHuokhbt,
  "👩🏾‍🏭": FrtmgAZWrh,
  "👩🏾‍💻": bSNBuGPbIx,
  "👩🏾‍💼": OpAjnEfPoQ,
  "👩🏾‍🔧": LnSGMOBPfh,
  "👩🏾‍🔬": YYPeZeNANG,
  "👩🏾‍🚀": VbbCnuvQZf,
  "👩🏾‍🚒": JyzKnzlUhN,
  "👩🏾‍🤝‍👨🏻": VGTHgYvOdy,
  "👩🏾‍🤝‍👨🏼": SKpunFjUJQ,
  "👩🏾‍🤝‍👨🏽": PAgziuADAS,
  "👩🏾‍🤝‍👨🏿": JPLuwexTqU,
  "👩🏾‍🤝‍👩🏻": ZsQMDriKLw,
  "👩🏾‍🤝‍👩🏼": MINZUrXzeT,
  "👩🏾‍🤝‍👩🏽": SGKdJTmgKZ,
  "👩🏾‍🤝‍👩🏿": OTidRbILOy,
  "👩🏾‍🦯": OLPZwkbbNG,
  "👩🏾‍🦰": nvXMpchoyF,
  "👩🏾‍🦱": yXgJhwZpse,
  "👩🏾‍🦲": JLhzirSnRW,
  "👩🏾‍🦳": XTqaaawMZz,
  "👩🏾‍🦼": PNFCkypkkz,
  "👩🏾‍🦽": aqLnGiGxOl,
  "👩🏾‍⚕️": OddwIQIaIF,
  "👩🏾‍⚖️": WVMtWssfyU,
  "👩🏾‍✈️": XpZolYOJWL,
  "👩🏾‍❤️‍👨🏻": lcmwIXuxYW,
  "👩🏾‍❤️‍👨🏼": eWaVruSueC,
  "👩🏾‍❤️‍👨🏽": CDLjrilmzz,
  "👩🏾‍❤️‍👨🏾": WesrxuUHEA,
  "👩🏾‍❤️‍👨🏿": TNlfBvbics,
  "👩🏾‍❤️‍👩🏻": dSoGfbOYKI,
  "👩🏾‍❤️‍👩🏼": XbRUADEDMp,
  "👩🏾‍❤️‍👩🏽": ZhticYbNpI,
  "👩🏾‍❤️‍👩🏾": nYRlrDeodq,
  "👩🏾‍❤️‍👩🏿": cKpcaLFhnT,
  "👩🏾‍❤️‍💋‍👨🏻": kTtBWOItAi,
  "👩🏾‍❤️‍💋‍👨🏼": lmNqncYgwm,
  "👩🏾‍❤️‍💋‍👨🏽": VrnZwLtEQQ,
  "👩🏾‍❤️‍💋‍👨🏾": UBHtKRjxFC,
  "👩🏾‍❤️‍💋‍👨🏿": JayFbYmnhU,
  "👩🏾‍❤️‍💋‍👩🏻": jngXONuDDV,
  "👩🏾‍❤️‍💋‍👩🏼": sWMtmJaVUO,
  "👩🏾‍❤️‍💋‍👩🏽": MxCAzNwfGh,
  "👩🏾‍❤️‍💋‍👩🏾": ykEwfXGfNr,
  "👩🏾‍❤️‍💋‍👩🏿": HPrmvzZYNA,
  "👩🏾": stNIZbUKre,
  "👩🏿‍🌾": WIFHhzoXuF,
  "👩🏿‍🍳": zeYsRRvOfL,
  "👩🏿‍🍼": WamOhxgrZo,
  "👩🏿‍🎓": fDDqFCOKWp,
  "👩🏿‍🎤": ZvRgFBWIka,
  "👩🏿‍🎨": kLTnIirgHr,
  "👩🏿‍🏫": jMdQBwxqax,
  "👩🏿‍🏭": cjAgLXbOUh,
  "👩🏿‍💻": aijjIbLHlF,
  "👩🏿‍💼": UaceFKSRPw,
  "👩🏿‍🔧": fJYNSvkiBn,
  "👩🏿‍🔬": wgCXbTkTwQ,
  "👩🏿‍🚀": gKcNKsJCLN,
  "👩🏿‍🚒": iBVihHqonL,
  "👩🏿‍🤝‍👨🏻": ZkZYWvVccq,
  "👩🏿‍🤝‍👨🏼": gYHjOBTVAb,
  "👩🏿‍🤝‍👨🏽": bUAzjgfBqr,
  "👩🏿‍🤝‍👨🏾": bUwnzfsaMA,
  "👩🏿‍🤝‍👩🏻": cxvgozoXGN,
  "👩🏿‍🤝‍👩🏼": qAjhzqJXiX,
  "👩🏿‍🤝‍👩🏽": yKjUuFzCCw,
  "👩🏿‍🤝‍👩🏾": NZGCmbUXeC,
  "👩🏿‍🦯": AwSZDIwEYx,
  "👩🏿‍🦰": cITmADBley,
  "👩🏿‍🦱": oFlpOvakGo,
  "👩🏿‍🦲": etqGBkTJKh,
  "👩🏿‍🦳": RSyHSPMZAC,
  "👩🏿‍🦼": DreshrSjMJ,
  "👩🏿‍🦽": TgJxlCBYzV,
  "👩🏿‍⚕️": sHCiVpAlKQ,
  "👩🏿‍⚖️": mDnGwgwSWp,
  "👩🏿‍✈️": QccXHukdNi,
  "👩🏿‍❤️‍👨🏻": DoIWtFdNdK,
  "👩🏿‍❤️‍👨🏼": PGxksOXFjP,
  "👩🏿‍❤️‍👨🏽": txvseRaNhu,
  "👩🏿‍❤️‍👨🏾": VdzXxrXKTL,
  "👩🏿‍❤️‍👨🏿": ZGvllScqEA,
  "👩🏿‍❤️‍👩🏻": fVOFCaTBXE,
  "👩🏿‍❤️‍👩🏼": eDLRMxbopj,
  "👩🏿‍❤️‍👩🏽": eqXhnISMmO,
  "👩🏿‍❤️‍👩🏾": IzgsBfphgK,
  "👩🏿‍❤️‍👩🏿": sGgTZSoYte,
  "👩🏿‍❤️‍💋‍👨🏻": UIFBuzCqWr,
  "👩🏿‍❤️‍💋‍👨🏼": aSpLLEbTTs,
  "👩🏿‍❤️‍💋‍👨🏽": qUgulZLyBf,
  "👩🏿‍❤️‍💋‍👨🏾": GKCpouMiza,
  "👩🏿‍❤️‍💋‍👨🏿": DuprwqqDJd,
  "👩🏿‍❤️‍💋‍👩🏻": ZYppjpdXuZ,
  "👩🏿‍❤️‍💋‍👩🏼": XWBTUSfVMz,
  "👩🏿‍❤️‍💋‍👩🏽": MgBgiidxtt,
  "👩🏿‍❤️‍💋‍👩🏾": fHRFrwEHEi,
  "👩🏿‍❤️‍💋‍👩🏿": cVcUvJCeMd,
  "👩🏿": mNELwdgnDe,
  "👩‍🌾": wIzcHYfRnD,
  "👩‍🍳": LVWyvONsnq,
  "👩‍🍼": ynUmLIbZvv,
  "👩‍🎓": PfqbFoofgw,
  "👩‍🎤": DAGjkRhENS,
  "👩‍🎨": HXZDXjeSNP,
  "👩‍🏫": qoYZTVoxUJ,
  "👩‍🏭": GoPJCvFdmK,
  "👩‍👦‍👦": CIQDlMSLBm,
  "👩‍👦": ZqBNVynCJn,
  "👩‍👧‍👦": cbnTwPxMMg,
  "👩‍👧‍👧": psCrWrQFLo,
  "👩‍👧": dhUHKnzXwn,
  "👩‍👩‍👦‍👦": DWbzWFSufP,
  "👩‍👩‍👦": gAahXrdUfY,
  "👩‍👩‍👧‍👦": MWmGOqxrXr,
  "👩‍👩‍👧‍👧": zbZNnJtaGF,
  "👩‍👩‍👧": UZtgTFUPwt,
  "👩‍💻": THeTZhvXMH,
  "👩‍💼": EmEhaDFUgv,
  "👩‍🔧": owwnIUDryy,
  "👩‍🔬": gpkISeSERS,
  "👩‍🚀": ltsylAmFcT,
  "👩‍🚒": PttkaUYgop,
  "👩‍🦯": JUMGeSygzU,
  "👩‍🦰": zMZFkVGgXY,
  "👩‍🦱": bdmyQHpLYM,
  "👩‍🦲": DdevgXUgVH,
  "👩‍🦳": bUShveKPAZ,
  "👩‍🦼": BsPtFZZrlb,
  "👩‍🦽": SkhOesJDxO,
  "👩‍🪩": CstiBsUwiH,
  "👩‍⚕️": KOlInCHOIm,
  "👩‍⚖️": DcCbXTqOMj,
  "👩‍✈️": xKTRlfvbCY,
  "👩‍❤️‍👨": rnhDWPhBgn,
  "👩‍❤️‍👩": gEnyTwXDcy,
  "👩‍❤️‍💋‍👨": BXUARlNYSk,
  "👩‍❤️‍💋‍👩": XBmQWGqASr,
  "👩": ROfSYTJrkV,
  "👪": liWicHEUel,
  "👫🏻": dEfAtartOL,
  "👫🏼": mxJOwDrKMb,
  "👫🏽": fdxfGnapez,
  "👫🏾": KEBsWmWePG,
  "👫🏿": EKslycxcJb,
  "👫": etZycRrgrT,
  "👬🏻": xMKgXbIjJu,
  "👬🏼": RdroajJevi,
  "👬🏽": oBjXoYqEBL,
  "👬🏾": ytaZbNqqlS,
  "👬🏿": FQcelfWPbL,
  "👬": qcUmsyDEFo,
  "👭🏻": DUtNKYvrDB,
  "👭🏼": WFhcyyVnVP,
  "👭🏽": fgyeOqDxvH,
  "👭🏾": AmmvzzrzLP,
  "👭🏿": ctlmRnqlFA,
  "👭": LMMSJIgpKP,
  "👮🏻‍♀️": iLNiQRGsvi,
  "👮🏻‍♂️": GOZzqbKjFf,
  "👮🏻": rlysxWayUg,
  "👮🏼‍♀️": MBqXNbSfhD,
  "👮🏼‍♂️": zqxtmRQttD,
  "👮🏼": aLbHfOVEVd,
  "👮🏽‍♀️": LyAXpQzjIb,
  "👮🏽‍♂️": xygugGqXxM,
  "👮🏽": yvaxXPIEhG,
  "👮🏾‍♀️": VMPIUUUaij,
  "👮🏾‍♂️": adoicTTGwZ,
  "👮🏾": JRXzzzpibu,
  "👮🏿‍♀️": YBYeFUharo,
  "👮🏿‍♂️": fDPAyeYHkj,
  "👮🏿": fogavljGtg,
  "👮‍♀️": yYywAGcJXg,
  "👮‍♂️": SqzEqeWudq,
  "👮": rlLuVbTAJB,
  "👯‍♀️": iObXxuwigb,
  "👯‍♂️": sUheqpGSmF,
  "👯": UKIVfoZGjF,
  "👰🏻‍♀️": BoVCSrWdEb,
  "👰🏻‍♂️": hzCHXuVmYu,
  "👰🏻": EHdZnEzsVT,
  "👰🏼‍♀️": rsrhZrjXpw,
  "👰🏼‍♂️": LwfNiplCTz,
  "👰🏼": MGuOVauTpo,
  "👰🏽‍♀️": kTuNxQSZSI,
  "👰🏽‍♂️": NWWrlVFVUk,
  "👰🏽": SvKFHXcziO,
  "👰🏾‍♀️": pUQofwqRaL,
  "👰🏾‍♂️": dClVSRzDQD,
  "👰🏾": PDuzDIjxXc,
  "👰🏿‍♀️": YgZfZAEwVU,
  "👰🏿‍♂️": gxbKPNIJlt,
  "👰🏿": pzraCkhQkb,
  "👰‍♀️": BkaJbRqdUc,
  "👰‍♂️": WKpsTNPMUj,
  "👰": LoWFXnQZzD,
  "👱🏻‍♀️": uCxugwYxmY,
  "👱🏻‍♂️": EzmmFubWOo,
  "👱🏻": FALldZcSoj,
  "👱🏼‍♀️": TGeqnKNKTH,
  "👱🏼‍♂️": XMGfUPlGNJ,
  "👱🏼": yYMgfHAhTG,
  "👱🏽‍♀️": wTlvbuQpGX,
  "👱🏽‍♂️": SebfINKCpr,
  "👱🏽": JTfSTKdIMk,
  "👱🏾‍♀️": WKYRAYosOK,
  "👱🏾‍♂️": niIblxMQrf,
  "👱🏾": ELikRvvsxR,
  "👱🏿‍♀️": tquAgCQpUb,
  "👱🏿‍♂️": angvsIVlAO,
  "👱🏿": hzShiMEZTT,
  "👱‍♀️": OcSIOPwKqd,
  "👱‍♂️": ZcGrqbrXfh,
  "👱": PDphfKivsd,
  "👲🏻": IevzTPWBbc,
  "👲🏼": IkcdbgGFHp,
  "👲🏽": FMeFCxkuPW,
  "👲🏾": uFfdTiVztC,
  "👲🏿": KlrQsYgBtS,
  "👲": vwDMkwbHOg,
  "👳🏻‍♀️": fbdPvmBfhR,
  "👳🏻‍♂️": ZTkMsBRGWi,
  "👳🏻": aXJaxuiGHY,
  "👳🏼‍♀️": hqCGdFapBn,
  "👳🏼‍♂️": EYksiGSCpm,
  "👳🏼": eViDXOSOpb,
  "👳🏽‍♀️": ctTcOnVmZy,
  "👳🏽‍♂️": XxOUClmFuv,
  "👳🏽": ChKMoKixlI,
  "👳🏾‍♀️": iVGJNFMCad,
  "👳🏾‍♂️": rZZKJNJFwR,
  "👳🏾": mopFbYdMIg,
  "👳🏿‍♀️": fXkGiQYcpA,
  "👳🏿‍♂️": OcxuzjRHxq,
  "👳🏿": uFhvawYGJi,
  "👳‍♀️": sDFMjipxfo,
  "👳‍♂️": kltBmWkjiA,
  "👳": zwcExQEJlr,
  "👴🏻": EdXyJMObOH,
  "👴🏼": rrDEvPosDO,
  "👴🏽": xPiXiadgTk,
  "👴🏾": xcrgABAWlS,
  "👴🏿": jfZsecpBkX,
  "👴": nCrhaILLVn,
  "👵🏻": GAsRFmvCZa,
  "👵🏼": ysbapOcOgm,
  "👵🏽": ZGdsmeBEeh,
  "👵🏾": iHqFfeMApR,
  "👵🏿": uGKZBqHqwI,
  "👵": CdHosufkuD,
  "👶🏻": UstTYmKDkH,
  "👶🏼": LscmmqZIbg,
  "👶🏽": pMowfkOjWO,
  "👶🏾": naUYkwrjHQ,
  "👶🏿": jlacpncEOf,
  "👶": YqRRlnkTxD,
  "👷🏻‍♀️": VgvDcuyGox,
  "👷🏻‍♂️": pLRDqqcGyc,
  "👷🏻": WzJQOmQKcl,
  "👷🏼‍♀️": VdlzpjCvby,
  "👷🏼‍♂️": PhikbMlwKD,
  "👷🏼": XIDOqGuDOn,
  "👷🏽‍♀️": TyyOGlaYAC,
  "👷🏽‍♂️": meyluJfLNR,
  "👷🏽": UPWelpmFAK,
  "👷🏾‍♀️": wtmcoWLELn,
  "👷🏾‍♂️": WLePKHLNJW,
  "👷🏾": UhyRNzUnAM,
  "👷🏿‍♀️": BKtyyaswZA,
  "👷🏿‍♂️": bWTDcjfEAM,
  "👷🏿": TjyOzmqfZF,
  "👷‍♀️": kokaoDRJvo,
  "👷‍♂️": jArkTCWYHS,
  "👷": ePNtpbzqis,
  "👸🏻": McMZEFBbwg,
  "👸🏼": tBfmbvnoPG,
  "👸🏽": lWKPckOPpY,
  "👸🏾": ocHvdZWoOD,
  "👸🏿": ZdutIiIypl,
  "👸": ZhMkSbWlTK,
  "👹": toUwfnBTyv,
  "👺": WDqxVIfWHx,
  "👻": OzazZLfqJA,
  "👼🏻": OHmZsHannP,
  "👼🏼": jTDqBrShTE,
  "👼🏽": GsvVswdzsl,
  "👼🏾": yuoGiOHnvm,
  "👼🏿": aeSdxLUSSE,
  "👼": FxZymBYHMK,
  "👽": nTzJsybvWc,
  "👾": XLqiunFEBd,
  "👿": dGueBnAkse,
  "💀": MisTXrQJvf,
  "💁🏻‍♀️": GDDVvRmHzW,
  "💁🏻‍♂️": NOuBMCcDsq,
  "💁🏻": IfqPrTzlVx,
  "💁🏼‍♀️": DnXniBnLNA,
  "💁🏼‍♂️": OkewGEWBlU,
  "💁🏼": dhnFBRkfgK,
  "💁🏽‍♀️": uYdYksPGlT,
  "💁🏽‍♂️": oTajqfiMQd,
  "💁🏽": yxKOGCwqJS,
  "💁🏾‍♀️": ipDjAiAiSU,
  "💁🏾‍♂️": qtPoZfAeIU,
  "💁🏾": aHrEExYDMR,
  "💁🏿‍♀️": IVpxxpGSJE,
  "💁🏿‍♂️": VzgSBTQbeq,
  "💁🏿": EloktcBsUL,
  "💁‍♀️": uoEsSMRVex,
  "💁‍♂️": HVWXuYEMrC,
  "💁": LnCGWUcXoE,
  "💂🏻‍♀️": FVjyugWqgR,
  "💂🏻‍♂️": oJRVcISRCz,
  "💂🏻": gtkRJfsPJX,
  "💂🏼‍♀️": bxziJcBtAl,
  "💂🏼‍♂️": wYBJWSbcOL,
  "💂🏼": HweSqufOKa,
  "💂🏽‍♀️": hyiWGfkojH,
  "💂🏽‍♂️": pnxwIXPVay,
  "💂🏽": sgtzByFRnj,
  "💂🏾‍♀️": KNNLCUcaYZ,
  "💂🏾‍♂️": qHqeVwVZkw,
  "💂🏾": VhhhSZTBJS,
  "💂🏿‍♀️": AMNqZhiaio,
  "💂🏿‍♂️": kNuMLEUbIq,
  "💂🏿": JUWsmFPCBB,
  "💂‍♀️": vQHwDosFcw,
  "💂‍♂️": HcFbNzwSUV,
  "💂": TKlEryJkKw,
  "💃🏻": IPLHvitGZd,
  "💃🏼": LdJFBQjZdg,
  "💃🏽": lXtqRxZdaZ,
  "💃🏾": RjvsFlauby,
  "💃🏿": vMUlObChvf,
  "💃": AltmpKanYM,
  "💄": EpFfTzmbRK,
  "💅🏻": KVZZMgKSfY,
  "💅🏼": IiIXdIqKBT,
  "💅🏽": iiVYeuwqrH,
  "💅🏾": DNiUujlGIv,
  "💅🏿": RqsZbOxNtS,
  "💅": gbJCQOCIim,
  "💆🏻‍♀️": rBPCmBgKGO,
  "💆🏻‍♂️": yyNkObIxvP,
  "💆🏻": JqVCDnoagE,
  "💆🏼‍♀️": ziImWdjraz,
  "💆🏼‍♂️": QDuqYeCzgy,
  "💆🏼": hQbBNKLLBK,
  "💆🏽‍♀️": QHEcCPrLnS,
  "💆🏽‍♂️": GCmJoRwtDY,
  "💆🏽": UlhrlWcAmm,
  "💆🏾‍♀️": calbnjbckF,
  "💆🏾‍♂️": YQjRddXfCN,
  "💆🏾": vIRqeKCWil,
  "💆🏿‍♀️": QzbohBmQwZ,
  "💆🏿‍♂️": pDApStFpIh,
  "💆🏿": OPeWiEBUCO,
  "💆‍♀️": qyvUlYgDLk,
  "💆‍♂️": vXtqJEMpNp,
  "💆": yrwBOpVnka,
  "💇🏻‍♀️": HznkiMjqlU,
  "💇🏻‍♂️": ZSDUZDGfJg,
  "💇🏻": gketzlpWOD,
  "💇🏼‍♀️": rQTKYBFOlc,
  "💇🏼‍♂️": mhqtEqgwLh,
  "💇🏼": pWAiPVIDLk,
  "💇🏽‍♀️": yovcWtDdRb,
  "💇🏽‍♂️": cSANioGquD,
  "💇🏽": vokqfVYPDT,
  "💇🏾‍♀️": oNKdEDbnKq,
  "💇🏾‍♂️": LvlwviSfqA,
  "💇🏾": NXpYaMcRgh,
  "💇🏿‍♀️": EfecDhGdZL,
  "💇🏿‍♂️": UCJBdqzsOk,
  "💇🏿": wUXEWFXhVt,
  "💇‍♀️": CIToHZmduv,
  "💇‍♂️": xXuxNnVatK,
  "💇": qtcLSsngOv,
  "💈": FaCKcNZICi,
  "💉": mFdUpOOeRG,
  "💊": pwzcxikfPv,
  "💋": cFXRitSVPy,
  "💌": EhcBBFPvmV,
  "💍": fAfmYmaPZJ,
  "💎": ISOgqgikBx,
  "💏🏻": tIyyPMwTnT,
  "💏🏼": kKFluAMrao,
  "💏🏽": ahBOqMSEdF,
  "💏🏾": CwtMPbwJdi,
  "💏🏿": PZzVVGQtwV,
  "💏": EaMVwhxmzi,
  "💐": VpWIzxdJTw,
  "💑🏻": EYHUwkzdny,
  "💑🏼": YJlQddinCH,
  "💑🏽": ufvgPPDPbT,
  "💑🏾": lCqIZoEOJW,
  "💑🏿": pSRdnaTzbL,
  "💑": ytRKxRggII,
  "💒": WzUvrESYzA,
  "💓": XHFlqHjZYC,
  "💔": ZPAQuCJJfN,
  "💕": vZYpDXmWKJ,
  "💖": kfNYnlTvvP,
  "💗": shepFxOWiM,
  "💘": gMNfYBUJDH,
  "💙": LzfCekvDTI,
  "💚": sehXOXeiBT,
  "💛": kiOJdXbTdM,
  "💜": jUQPzZRNxo,
  "💝": QCiQSwFJjq,
  "💞": PSQFpkogWD,
  "💟": GdClFkLsRP,
  "💠": HYQRbctHWC,
  "💡": XcigktrleJ,
  "💢": HPPcwpyXXB,
  "💣": sHdVCDtZVX,
  "💤": qIuFuxtsRU,
  "💥": nCfWZczYvH,
  "💦": mtcWTleEAQ,
  "💧": NyNaSzHAIs,
  "💨": pjNkFaWNkG,
  "💩": tDCHedBiHQ,
  "💪🏻": bRdjOqOxlC,
  "💪🏼": srbnSbPhYE,
  "💪🏽": zqOoaxBvTx,
  "💪🏾": CPitcvHuTc,
  "💪🏿": oiuvKkBkRr,
  "💪": afuwKetjuU,
  "💫": DudwRvRQCW,
  "💬": AhbZruwrMr,
  "💭": cjgBsUsqzr,
  "💮": ShDXxBXvoT,
  "💯": fsJPenyNUC,
  "💰": FeHixeNcOy,
  "💱": TBMPwqosPu,
  "💲": ZvGeLSTUMJ,
  "💳": tKrNOBNgTH,
  "💴": KTnoFZvDDE,
  "💵": ncbdLeqPoL,
  "💶": dGHDUpFQTM,
  "💷": owCYHqNzvY,
  "💸": vcqNHAxsFH,
  "💹": sSsuESSFfG,
  "💺": mhsMwyTAkT,
  "💻": QeFUWbiPcZ,
  "💼": CLwgeMWOqh,
  "💽": FfCdNRVLxT,
  "💾": EZbiRkbKiD,
  "💿": cwJMNbixUN,
  "📀": KCQdRYrBji,
  "📁": LaBQadjwKk,
  "📂": gvoAHvOLKX,
  "📃": GuFSrjWuMD,
  "📄": wUjBvUTnfs,
  "📅": MaLlzMksdk,
  "📆": dFYJUpTnRv,
  "📇": tumloKBpLm,
  "📈": XGwtgkoiiZ,
  "📉": kkeqwXIHcb,
  "📊": yYSuMnMDDL,
  "📋": jefAdugGTQ,
  "📌": CjhFWpUuNF,
  "📍": aRCsgwCHyK,
  "📎": PecEbfbTGc,
  "📏": ltwHlsWEMQ,
  "📐": TlezyTElmn,
  "📑": hphEyxUqlM,
  "📒": oeNoGKMGIb,
  "📓": YFMHXqYVzj,
  "📔": TPRhRkmIjL,
  "📕": xKqGigbtrq,
  "📖": vJScIuFTGi,
  "📗": aZWVveSQhI,
  "📘": oKgPymwRpX,
  "📙": EbFtCDXeVD,
  "📚": GrXxWOTaaV,
  "📛": HTuLmzHjJe,
  "📜": eQuhFuAazz,
  "📝": ncCmmEuEVC,
  "📞": pNaZVePhpn,
  "📟": xXLlIgMIyx,
  "📠": TCzrIRSenn,
  "📡": mZbvKSmEkR,
  "📢": czhpAPAXnL,
  "📣": LeudKnHPus,
  "📤": jKniCUYfla,
  "📥": dWAsEdAAHp,
  "📦": zGHRnzPRKt,
  "📧": XKbJKUiLNH,
  "📨": ePgBEiDVYJ,
  "📩": dDtNyBoCii,
  "📪": eWijtzkYmk,
  "📫": HuuFvWbSXM,
  "📬": RBaMIyiEGb,
  "📭": CGBHWUitdo,
  "📮": KUSjVIYjoe,
  "📯": eLJOCzhmeo,
  "📰": PEttwMizdD,
  "📱": iDarSbFTgz,
  "📲": VwnqVkCXZw,
  "📳": TEfOpjRiCX,
  "📴": JsaietyIVO,
  "📵": PZXCUzQjCv,
  "📶": SeCPbqEQWM,
  "📷": kFWJqgifyr,
  "📸": xgCxHSpifi,
  "📹": fUjIGZUGGs,
  "📺": jDUGbPfEJe,
  "📻": UXFcmFqYxi,
  "📼": KrUUTQsScv,
  "📽": DjIHOVsunw,
  "📿": qhpNxdKniN,
  "🔀": GOUiXQHzRp,
  "🔁": QIiTYfGqNX,
  "🔂": RndTNfRVJc,
  "🔃": OlEmyjoCvR,
  "🔄": LEawXdqUhJ,
  "🔅": hQewAeGnfU,
  "🔆": HnztEvcVvN,
  "🔇": LuWmmEqrDZ,
  "🔈": IJTufzhzKd,
  "🔉": iFLJHQfmBQ,
  "🔊": EoZgDKBIZM,
  "🔋": bkkUUVlKRi,
  "🔌": jnFxIpdIZU,
  "🔍": aYYmMDpAsa,
  "🔎": aOATsIZhbZ,
  "🔏": nmipGnOibd,
  "🔐": WvPEPodcdv,
  "🔑": OhVXHWJvBG,
  "🔒": GPjmsiLbgY,
  "🔓": JtORlAHAJm,
  "🔔": VPPxokkkZp,
  "🔕": NfOBaFcCIU,
  "🔖": yOePBljgGD,
  "🔗": XgFLUdisbc,
  "🔘": ahblXNzqRr,
  "🔙": uSiUuBvblD,
  "🔚": cxxTGfrZdv,
  "🔛": kunvABXXeR,
  "🔜": VsVjOpCuyB,
  "🔝": yasVoPztWP,
  "🔞": wilSHExUjN,
  "🔟": hdXFRnaRNP,
  "🔠": zhjLMwAYhj,
  "🔡": wwiyhDXdNu,
  "🔢": PeUzTuZpDE,
  "🔣": PiobMYWMHU,
  "🔤": yCuVKawltk,
  "🔥": dUMLClrvpL,
  "🔦": yyVuQWmDVo,
  "🔧": umMXzlXcDp,
  "🔨": IsVrHohMlk,
  "🔩": UmYqlLfpMH,
  "🔪": VEMDjQbXDt,
  "🔫": JwNQCTGEZX,
  "🔬": BsVYjgrrDh,
  "🔭": FmLebFeIDb,
  "🔮": GuhMitnrXg,
  "🔯": PoiQAMBGdq,
  "🔰": NOtQUkifwk,
  "🔱": LqwFXOEZpc,
  "🔲": ZMiNMgxApw,
  "🔳": NCbDZHOHFU,
  "🔴": bgSZWDMnvD,
  "🔵": aleBNBsxxN,
  "🔶": VCYKAjzEXv,
  "🔷": ngEBOcUDor,
  "🔸": TZAbOFKuxi,
  "🔹": QSNsXpeRFe,
  "🔺": RuCWWLJZQK,
  "🔻": gKqSLcdyjw,
  "🔼": GenXWbcHPk,
  "🔽": wdDsXgCJDx,
  "🕉": UnksbpQbwP,
  "🕊️": OaAsxzVjDF,
  "🕋": eTikHrhiyK,
  "🕌": rCxDItMpqg,
  "🕍": fVuzQlerGT,
  "🕎": tjQEqQzhkr,
  "🕐": mqrBuaKiMh,
  "🕑": uLczsKzdbT,
  "🕒": rhpIXEHKBW,
  "🕓": BmwkTqHOpV,
  "🕔": DVneMjTuxx,
  "🕕": fSBAfyLkXW,
  "🕖": VeyMwrjVJA,
  "🕗": YuicGWpiPo,
  "🕘": WvcbAEAwhA,
  "🕙": QHaMPGXCMA,
  "🕚": MIDKasMxUw,
  "🕛": DgyBASvUCr,
  "🕜": kjHJsSGtwh,
  "🕝": VKuGYhHazj,
  "🕞": ENOqEnWQeL,
  "🕟": XFPNjzRPcf,
  "🕠": hObolyGIvk,
  "🕡": xLpjXaoHUF,
  "🕢": NVFcqBlqsy,
  "🕣": rFvNaIhPRo,
  "🕤": fpGzMhsOYr,
  "🕥": AlBJMSJbCr,
  "🕦": jeKPqhTJEQ,
  "🕧": CvDAhXjbjs,
  "🕯": aCJkfAXYPL,
  "🕰": gifvmRqnel,
  "🕳": eOIopzoIVT,
  "🕴🏻": qXNtMPCdKj,
  "🕴🏼": sonbkJDZkP,
  "🕴🏽": NKVagnfcKJ,
  "🕴🏾": SGPeOyPNVc,
  "🕴🏿": MLyEXOHysP,
  "🕴": WOAbHRhjSD,
  "🕵🏻‍♀️": fGaKLiUNEc,
  "🕵🏻‍♂️": IaQgbcuEgs,
  "🕵🏻": ieDJMlWBdr,
  "🕵🏼‍♀️": vCNHMOObbK,
  "🕵🏼‍♂️": YOjnGWduqK,
  "🕵🏼": zfKIoGPVMU,
  "🕵🏽‍♀️": EKyoLXguMu,
  "🕵🏽‍♂️": zqyWOhJgYn,
  "🕵🏽": OBLZpxBVJZ,
  "🕵🏾‍♀️": evTkDgDREe,
  "🕵🏾‍♂️": rnqZROMBzD,
  "🕵🏾": HwNnpVGwIc,
  "🕵🏿‍♀️": IaktFHsiZk,
  "🕵🏿‍♂️": nukFsIpVZI,
  "🕵🏿": NpbtwtXcDx,
  "🕵️‍♀️": vLRwmjANdQ,
  "🕵️‍♂️": aKItoaOlWn,
  "🕵": EaQkDiqdnv,
  "🕶": QdeVqiZbPR,
  "🕷": CadRhpVgOD,
  "🕸": dLKvHItwZe,
  "🕹": wpQlZnEjJS,
  "🕺🏻": zHzNiIMnwa,
  "🕺🏼": VFtFOegTMA,
  "🕺🏽": paCjDlAQcl,
  "🕺🏾": cJbIzQvqPT,
  "🕺🏿": KcnplzGaoo,
  "🕺": EttpiurMWS,
  "🖇": xzJzdXxbGm,
  "🖊": gnLWOdtvnd,
  "🖋": GhnXRvglen,
  "🖌": dAtFqwylAA,
  "🖍": KayOOqpmDH,
  "🖐🏻": lgSovKevMH,
  "🖐🏼": bEgWrcyHaK,
  "🖐🏽": ZEiKDymcrA,
  "🖐🏾": rhwargxfsK,
  "🖐🏿": FJCwOamgbr,
  "🖐": AfNcAHAfHx,
  "🖕🏻": JsEjHnYcOK,
  "🖕🏼": RcaqiMzqkg,
  "🖕🏽": dAPZWiBqLx,
  "🖕🏾": ghcQeUSPTS,
  "🖕🏿": tYmcfQBTiT,
  "🖕": pOBREjNqse,
  "🖖🏻": xdJYrRWnrK,
  "🖖🏼": TnCSNqkXDp,
  "🖖🏽": VSnDcGGmWh,
  "🖖🏾": FanAugURCw,
  "🖖🏿": MqBoTmYvck,
  "🖖": QoZuyxUUdc,
  "🖤": DTZDsRhDzj,
  "🖥": vdNlHWntgA,
  "🖨": uzBezxHYpd,
  "🖱": onsDfUztNc,
  "🖲": GmhFddggyx,
  "🖼": SeuXKXCzmG,
  "🗂": MbjGWvcvaF,
  "🗃": DuksoWNMkE,
  "🗄": YDeebPCicZ,
  "🗑": gghsneEgXZ,
  "🗒": fiYPvzHqxF,
  "🗓": GgkNzOLRCX,
  "🗜": TBgiqhrDRF,
  "🗝": yjbAlczaEh,
  "🗞": UztlQJUfzh,
  "🗡": nJiDUXiNWP,
  "🗣": IMQiyJaLKp,
  "🗨": KrcIxYhrXi,
  "🗯": TRQMsMLztp,
  "🗳": BVaXNVGcgY,
  "🗺": wnwgcJPYJN,
  "🗻": MefyGaLaGT,
  "🗼": pcJLYcNtEl,
  "🗽": fallXZUzIC,
  "🗾": tiOeLpKOri,
  "🗿": CArAPaTPuo,
  "😀": CxAwWPVBhD,
  "😁": qrXcSDFJMG,
  "😂": pVEeUoCAMG,
  "😃": TjwzyZLdJa,
  "😄": DSsHRmDvxD,
  "😅": ZYUdLDsLej,
  "😆": JWDkFKxMLA,
  "😇": LGZNYbpuLb,
  "😈": qRdKrYbNNT,
  "😉": wslIydaQOu,
  "😊": BdBhblGsPP,
  "😋": hQJxNAJHfs,
  "😌": saoMCVbFkG,
  "😍": sZTDDVWmGB,
  "😎": WfwpKvHVOp,
  "😏": fCHTLhDiuR,
  "😐": HVlRDUIRGo,
  "😑": zUpyNqYWyQ,
  "😒": IZiPvMEDHR,
  "😓": rOyFLdxJkf,
  "😔": edhAGkShwn,
  "😕": bOywVKocWD,
  "😖": ZkKIuvjFBB,
  "😗": RCFhfzVjRB,
  "😘": JkHgEkkTQV,
  "😙": KKEGQdGMmX,
  "😚": EmxUgMvkVq,
  "😛": vfHhojzewV,
  "😜": HWdgTqEHhD,
  "😝": cLIoBWbwEJ,
  "😞": AcGPnwBgoT,
  "😟": nNdemHUbTi,
  "😠": PmlEcfeZpv,
  "😡": uORfqHETko,
  "😢": dLfWjbmTid,
  "😣": CwqGpniICw,
  "😤": gEAwiPlqEu,
  "😥": ZgTkWLIUGv,
  "😦": KVaOzJtfbY,
  "😧": QdfEVubrub,
  "😨": cwZcQTAxJg,
  "😩": PYVBWMMrWh,
  "😪": BBVcNHdick,
  "😫": LWVlDLLSUV,
  "😬": uhhJRfIBIO,
  "😭": gtyCtTZTGm,
  "😮‍💨": oudmNmkBph,
  "😮": jfqrZVRiWS,
  "😯": wSFXsEWCoD,
  "😰": lacdjgnCvu,
  "😱": JtPsKBreYQ,
  "😲": dbyOnZbAKK,
  "😳": icWuIDAtOX,
  "😴": vRocIEDTtz,
  "😵‍💫": KWGqNbwcyK,
  "😵": HWWDZpZRaB,
  "😶‍🌫️": HwzNCJRclV,
  "😶": GJKyHpxWjE,
  "😷": aQafctAinE,
  "😸": bpAIdkFvBG,
  "😹": WKvvhadVAy,
  "😺": nyMHmIXlDG,
  "😻": yAEQHbBYNi,
  "😼": pxkUJxQyUQ,
  "😽": hOIsndZrTp,
  "😾": JtrpwJRvjv,
  "😿": uBjZiImejH,
  "🙀": kEMNfKPWqD,
  "🙁": iJPXgISZCS,
  "🙂": fttAQsbDyK,
  "🙃": ohXkpobDFt,
  "🙄": MbUjFPSIyG,
  "🙅🏻‍♀️": zHILExdTfJ,
  "🙅🏻‍♂️": QFsZCQukKI,
  "🙅🏻": zTCiZVpsur,
  "🙅🏼‍♀️": ZFtzGxiohd,
  "🙅🏼‍♂️": ZFKRTsPTmH,
  "🙅🏼": WPutDdEhVj,
  "🙅🏽‍♀️": dGaoIMSxPf,
  "🙅🏽‍♂️": FMiXrTVjaC,
  "🙅🏽": lPPMqdSdrr,
  "🙅🏾‍♀️": EnUeeodojZ,
  "🙅🏾‍♂️": ieYTyUcMsd,
  "🙅🏾": gccJfWUdFl,
  "🙅🏿‍♀️": swEmVXRRXR,
  "🙅🏿‍♂️": NFtdHvLfmO,
  "🙅🏿": ffOyzDtgHD,
  "🙅‍♀️": FCawFYBxkn,
  "🙅‍♂️": hCzwsKrOOb,
  "🙅": eoOWGWGKgZ,
  "🙆🏻‍♀️": evWseuRnFZ,
  "🙆🏻‍♂️": GJFskkCiOp,
  "🙆🏻": bJYVnJSwcp,
  "🙆🏼‍♀️": aGPhDjoKqD,
  "🙆🏼‍♂️": NguIzTTvRk,
  "🙆🏼": DNYiIMmEEK,
  "🙆🏽‍♀️": AiSxaRXWlk,
  "🙆🏽‍♂️": gxRrvkiBOO,
  "🙆🏽": FEEtFjBNzp,
  "🙆🏾‍♀️": mJXclGyDWG,
  "🙆🏾‍♂️": RUWNHcbbkC,
  "🙆🏾": wjhnHMvwJt,
  "🙆🏿‍♀️": NWkorZPGFc,
  "🙆🏿‍♂️": PYTrxynoep,
  "🙆🏿": TncnBGPNOD,
  "🙆‍♀️": RCcRkuhKLX,
  "🙆‍♂️": mJYcHBdxUG,
  "🙆": VYitTQgMgu,
  "🙇🏻‍♀️": bMrqagJobC,
  "🙇🏻‍♂️": irBEymGBGb,
  "🙇🏻": HEDOopfZwc,
  "🙇🏼‍♀️": XSthYxrJhq,
  "🙇🏼‍♂️": UWFmuEDgSQ,
  "🙇🏼": zZAtmUZfSg,
  "🙇🏽‍♀️": wuGyqmLMzR,
  "🙇🏽‍♂️": MMspHTLGDn,
  "🙇🏽": pYnjqDdPoi,
  "🙇🏾‍♀️": MIRcAVotan,
  "🙇🏾‍♂️": KYpzpQeQHW,
  "🙇🏾": IrCRxCuHhb,
  "🙇🏿‍♀️": sTWVoxzHDN,
  "🙇🏿‍♂️": voEKZTmlfa,
  "🙇🏿": XghCtGTJhO,
  "🙇‍♀️": pOOXbawfLT,
  "🙇‍♂️": mHNwZVNDrH,
  "🙇": JnDHuCRmDi,
  "🙈": ptVQlYtyfh,
  "🙉": kHugPCbMIC,
  "🙊": ZEICPJLVQA,
  "🙋🏻‍♀️": UlyPHrrWCY,
  "🙋🏻‍♂️": WjaoQtOOHK,
  "🙋🏻": mCLPjOXoJg,
  "🙋🏼‍♀️": CgKuJbhjwX,
  "🙋🏼‍♂️": VxYXAwXigu,
  "🙋🏼": PpbXHJnHhe,
  "🙋🏽‍♀️": cPsueekOBq,
  "🙋🏽‍♂️": VidhDumGrE,
  "🙋🏽": pJaZiQQhcO,
  "🙋🏾‍♀️": TipoZdBsVu,
  "🙋🏾‍♂️": EIzulNuzZp,
  "🙋🏾": xnRonnfrga,
  "🙋🏿‍♀️": dnqloNaRFe,
  "🙋🏿‍♂️": zcwfKqzVGS,
  "🙋🏿": GhATCYwRzO,
  "🙋‍♀️": dXWYxxEKgb,
  "🙋‍♂️": BiUkLyXzUm,
  "🙋": sMCRULVKrw,
  "🙌🏻": FDQTchBoYB,
  "🙌🏼": HfOMwqGcOF,
  "🙌🏽": JVKlXHIQBP,
  "🙌🏾": ePvTMcnBKO,
  "🙌🏿": AvtlfLDlJv,
  "🙌": VPNtbkHojk,
  "🙍🏻‍♀️": xsHKNcPNXP,
  "🙍🏻‍♂️": EyaUTbszCc,
  "🙍🏻": AbteGXoIgu,
  "🙍🏼‍♀️": bNqePbBKTR,
  "🙍🏼‍♂️": SQtxLWKoRz,
  "🙍🏼": rXGfqlvaMN,
  "🙍🏽‍♀️": tdoZNPgUpZ,
  "🙍🏽‍♂️": ivfrHKpqhN,
  "🙍🏽": MDuqikKfYp,
  "🙍🏾‍♀️": wSGbElraMY,
  "🙍🏾‍♂️": jfKWLeOHOX,
  "🙍🏾": BzaZBmpRMN,
  "🙍🏿‍♀️": CoNIsBZdkm,
  "🙍🏿‍♂️": jPQFsumrWR,
  "🙍🏿": wvzVlZXxAp,
  "🙍‍♀️": YxdZmAdIbZ,
  "🙍‍♂️": dTrpZXRWmq,
  "🙍": jZiVotKlGT,
  "🙎🏻‍♀️": oTPAoHKZEH,
  "🙎🏻‍♂️": AycUzFkXLY,
  "🙎🏻": XNsQarZfqE,
  "🙎🏼‍♀️": AKVGuyeZZh,
  "🙎🏼‍♂️": enzfEwnfvd,
  "🙎🏼": SaoluHENvU,
  "🙎🏽‍♀️": ZwzEiBLSfN,
  "🙎🏽‍♂️": kFmiabsGib,
  "🙎🏽": mwkBjvQLyx,
  "🙎🏾‍♀️": ojjPWSQyCV,
  "🙎🏾‍♂️": RBGVvTJXRm,
  "🙎🏾": jozzGZObUK,
  "🙎🏿‍♀️": DWKFlKsnlm,
  "🙎🏿‍♂️": oASylAkaCU,
  "🙎🏿": uUbqvVaxLA,
  "🙎‍♀️": mSIZMHEGKm,
  "🙎‍♂️": WXzxkqWDeN,
  "🙎": WoLVlMcxth,
  "🙏🏻": kcjdeJtaQo,
  "🙏🏼": KPDZtGKbZR,
  "🙏🏽": TXBncgtDhS,
  "🙏🏾": xeDChTfToz,
  "🙏🏿": LQCVKTHXtp,
  "🙏": RSffFWbGuN,
  "🚀": nFEgRdpirS,
  "🚁": vbDOAiqPtZ,
  "🚂": jeCVfSUOHt,
  "🚃": etXKFAHgMP,
  "🚄": UTFeMmsDUR,
  "🚅": zSBfpoWbEX,
  "🚆": PWGiHzmtPR,
  "🚇": tKNndzhZyP,
  "🚈": aNaxnnoAlo,
  "🚉": hDoQSNwgnm,
  "🚊": TelYcpxckG,
  "🚋": ESopZvQZUF,
  "🚌": bZgDDiVKID,
  "🚍": KVJbuzWOhR,
  "🚎": vmtliZAvbB,
  "🚏": niMadqvGWa,
  "🚐": EvPUNBoIVH,
  "🚑": yocbfQJOtc,
  "🚒": imKgeMfVMS,
  "🚓": TwNZDwkPlZ,
  "🚔": MewpKkoGuI,
  "🚕": fkhTloqgOV,
  "🚖": ZkXnLeDBNY,
  "🚗": rrlQiZnGZL,
  "🚘": taTrzgOhnx,
  "🚙": bWGZzWFraN,
  "🚚": zjreRIoDat,
  "🚛": ktHPtdFgtL,
  "🚜": PWXMaTWdcO,
  "🚝": zQrAUSZfTW,
  "🚞": nVSpPhXSJB,
  "🚟": fEbWeMWTlr,
  "🚠": GXIzxuerXm,
  "🚡": eKIpyTzpOy,
  "🚢": VoxKUoYgBG,
  "🚣🏻‍♀️": LhIuBvAOQq,
  "🚣🏻‍♂️": pIaZPikJgG,
  "🚣🏻": EJYhGBFnYa,
  "🚣🏼‍♀️": GVKutETEHC,
  "🚣🏼‍♂️": fIIKnXaSOI,
  "🚣🏼": mFnAGNZvQn,
  "🚣🏽‍♀️": WBYnmJpWGI,
  "🚣🏽‍♂️": QBQbPeidjd,
  "🚣🏽": CObRIBnnOh,
  "🚣🏾‍♀️": GLLWjtGoqd,
  "🚣🏾‍♂️": JwnlFaCHOR,
  "🚣🏾": lsfqeJfJsO,
  "🚣🏿‍♀️": DKkXkvvmec,
  "🚣🏿‍♂️": bcJJeAgDtY,
  "🚣🏿": YubEvIUPjM,
  "🚣‍♀️": rOSTDeYivA,
  "🚣‍♂️": hqZmxpGwXn,
  "🚣": HTMwNFPqJV,
  "🚤": XGvtxAdGva,
  "🚥": ZjCkrkeJkl,
  "🚦": dpyIElEiCg,
  "🚧": BWjqzWNjdE,
  "🚨": AOjHygfOVF,
  "🚩": lwghrmNZcD,
  "🚪": eCblCXjBFH,
  "🚫": SCwALMZUae,
  "🚬": hFuDcDgJcB,
  "🚭": wJBZLnpnbL,
  "🚮": QuTwyNdJnO,
  "🚯": aizvNRRYNP,
  "🚰": ixUVeRdIFX,
  "🚱": iNHoJBQFDE,
  "🚲": MeStmkRNZU,
  "🚳": dPVuaxSVDt,
  "🚴🏻‍♀️": hXYaoADgqr,
  "🚴🏻‍♂️": yTJyEiBNkA,
  "🚴🏻": DFboqhHjWE,
  "🚴🏼‍♀️": WaglGqPgUa,
  "🚴🏼‍♂️": GYtkiRfoYl,
  "🚴🏼": HgHYdAeKkG,
  "🚴🏽‍♀️": twBLkpekYN,
  "🚴🏽‍♂️": sJEkwNgKmR,
  "🚴🏽": BzAcDdLPEI,
  "🚴🏾‍♀️": LHlKEzMvif,
  "🚴🏾‍♂️": SoyzfGyMsc,
  "🚴🏾": SuvVXksnUC,
  "🚴🏿‍♀️": JMxfjYdWyH,
  "🚴🏿‍♂️": IPrAUfiuMo,
  "🚴🏿": EVhhGAIPBG,
  "🚴‍♀️": gafiYSmxuz,
  "🚴‍♂️": eczDLQxaZn,
  "🚴": cWvYbaoVPW,
  "🚵🏻‍♀️": aOmrhAwwNO,
  "🚵🏻‍♂️": HbSGLqZwpi,
  "🚵🏻": yNnjFpHNJM,
  "🚵🏼‍♀️": NwChuLeXRm,
  "🚵🏼‍♂️": TGXPmphhCu,
  "🚵🏼": MwuGSPpkes,
  "🚵🏽‍♀️": iWUxYfetVw,
  "🚵🏽‍♂️": qAmkOivHIG,
  "🚵🏽": sCGeWOROfZ,
  "🚵🏾‍♀️": qChlwnbOsb,
  "🚵🏾‍♂️": bZHOhIqIoD,
  "🚵🏾": duuBpbXphJ,
  "🚵🏿‍♀️": PosdAcjOjU,
  "🚵🏿‍♂️": XtaUwjPUly,
  "🚵🏿": eIaiKLdpXP,
  "🚵‍♀️": ErgcVnsrGx,
  "🚵‍♂️": xvpImeyvfm,
  "🚵": VCmxlTcAli,
  "🚶🏻‍♀️": xjZxvCuqIa,
  "🚶🏻‍♂️": JHfsZVzNqb,
  "🚶🏻": JdDhsQKKKf,
  "🚶🏼‍♀️": WDkbFRVpBX,
  "🚶🏼‍♂️": jitNLKOOhg,
  "🚶🏼": ZuBwXRRucJ,
  "🚶🏽‍♀️": lKcdgZfhJW,
  "🚶🏽‍♂️": FHPhYVAcqt,
  "🚶🏽": vuayFNxcBN,
  "🚶🏾‍♀️": fBsYKsdvqz,
  "🚶🏾‍♂️": NbiDpRzFry,
  "🚶🏾": rypFtUbZez,
  "🚶🏿‍♀️": FTGQouUurB,
  "🚶🏿‍♂️": EqhUevSFJm,
  "🚶🏿": PpuRtFSSNp,
  "🚶‍♀️": XcygDzEzTL,
  "🚶‍♂️": pyhhijMPgF,
  "🚶": BgpmYCHxuI,
  "🚷": drRnmlEYvz,
  "🚸": FWEiNxFfHm,
  "🚹": zyRWLluaRP,
  "🚺": tJoAvbEiPa,
  "🚻": VztZETAEeG,
  "🚼": eeILGpqImT,
  "🚽": BLrXBgtQCv,
  "🚾": dveEXPLRbN,
  "🚿": SCGAuStuSR,
  "🛀🏻": NWDKJkxzPB,
  "🛀🏼": DHXAevqwcX,
  "🛀🏽": yizbDHBvQJ,
  "🛀🏾": dTwdUpQKAV,
  "🛀🏿": gCxNGSUrFr,
  "🛀": OlwOJDdhfR,
  "🛁": QeoeyyejFc,
  "🛂": qlfJbgdhfV,
  "🛃": rKsOGZYcKa,
  "🛄": ItdwNMHrLO,
  "🛅": pdPPpYJISr,
  "🛋": fniUyouNCT,
  "🛌🏻": ihfOzowhmD,
  "🛌🏼": nfXbKhFSHu,
  "🛌🏽": BcKamRrBjo,
  "🛌🏾": UOdnmDvHuB,
  "🛌🏿": CVecHCPvDx,
  "🛌": RlpDNCymTM,
  "🛍": aJaIdeQOeF,
  "🛎": kHpnzVebqo,
  "🛏": eEkMTxprQK,
  "🛐": JnuVKNUrup,
  "🛑": AYwdfttFVm,
  "🛒": PihxArVQbL,
  "🛕": eyeuHWwbGe,
  "🛖": ezmhfnqEHN,
  "🛗": OcDZZfWXiF,
  "🛜": zjSYWyNzck,
  "🛝": QogLVMHnzN,
  "🛞": kOKDMNjMUg,
  "🛟": vFetvPSBrE,
  "🛠": NUbWWDOkXD,
  "🛡": eOLqCCAeco,
  "🛢": SVuKFNSswh,
  "🛣": mwYlITpfwM,
  "🛤": iFgWGYiYoG,
  "🛥": BmFuibJuRa,
  "🛩": mTlDxcwSie,
  "🛫": uMJtuwtqgF,
  "🛬": XYVYMqhaAO,
  "🛰": udDEGtNGmB,
  "🛳": CctXxlBzau,
  "🛴": DurJfTMxkO,
  "🛵": scJNqWRTrN,
  "🛶": guCBaRWJdn,
  "🛷": peWquEQaha,
  "🛸": bOzGHrBvHD,
  "🛹": yVTsenFffH,
  "🛺": ltkKdNXjVz,
  "🛻": dLzHhiILKx,
  "🛼": gVZlDnZLNb,
  "🟠": qgfeBiqgNx,
  "🟡": pOlXOFwhBT,
  "🟢": xudZNIrCvq,
  "🟣": hwyWqwzwgl,
  "🟤": vCZRidhLBs,
  "🟥": nyVQGEIjje,
  "🟦": LUSpiKgzeK,
  "🟧": kQGBtuyPHf,
  "🟨": IFfYSUfGSy,
  "🟩": mNYoJrhdvB,
  "🟪": sIxHTEVzdy,
  "🟫": arrUmRlDqg,
  "🟰": CggtQrROMJ,
  "🤌🏻": YtFhsHEhQP,
  "🤌🏼": YsMnSMwtFg,
  "🤌🏽": EuswoywnkD,
  "🤌🏾": HKObONvzxR,
  "🤌🏿": KMdIVsscgz,
  "🤌": bCmJMdiyBw,
  "🤍": ztqzzqsaEB,
  "🤎": FshZajIMWG,
  "🤏🏻": NcYnIFEUXY,
  "🤏🏼": NTeAfmKldp,
  "🤏🏽": zElhijsLtR,
  "🤏🏾": KmYHNpnoRw,
  "🤏🏿": wCofFzfvvk,
  "🤏": nDhZBNlKBZ,
  "🤐": ORnUsPSfBV,
  "🤑": CeSmysvTsC,
  "🤒": frRfUzsrzU,
  "🤓": LoYZATeteg,
  "🤔": QXztHoZfBR,
  "🤕": hzSoHMSYqS,
  "🤖": PLaKXkXYuO,
  "🤗": jIGJPndjQt,
  "🤘🏻": tsWbCqxJkh,
  "🤘🏼": SvxjRFbqjh,
  "🤘🏽": VaTaeOSZYW,
  "🤘🏾": zwIJVYuVEr,
  "🤘🏿": PqATtRLmeI,
  "🤘": QcaRCIoPHa,
  "🤙🏻": UFeMuWyBSI,
  "🤙🏼": FGwxFbCVDa,
  "🤙🏽": ThKWkGRbTW,
  "🤙🏾": LgSyIvzdQA,
  "🤙🏿": tlIDyBldce,
  "🤙": tpBVNCpyIL,
  "🤚🏻": JZnkblPwxj,
  "🤚🏼": YyYxYYCUJt,
  "🤚🏽": mCcwsQGkyD,
  "🤚🏾": urtIWQbwGE,
  "🤚🏿": cMSeuNmdUW,
  "🤚": aghEqrBAIu,
  "🤛🏻": jLcWwKvdpP,
  "🤛🏼": biLMVAOcdG,
  "🤛🏽": DuimTGbjIj,
  "🤛🏾": OzEkFcArwo,
  "🤛🏿": WOzlMbrPik,
  "🤛": lPolNmiNNN,
  "🤜🏻": wqIfvsdNvr,
  "🤜🏼": unrmbAWJke,
  "🤜🏽": UWOSVgWDNz,
  "🤜🏾": ODpDQFESog,
  "🤜🏿": uQwhZNqeUN,
  "🤜": srgmsscqby,
  "🤝🏻": KLuXuPIhLy,
  "🤝🏼": KFDiygKNje,
  "🤝🏽": mpAyUwjQBm,
  "🤝🏾": mxNLiLBTcS,
  "🤝🏿": zXTxiQGFZx,
  "🤝": lLEyOqnyQB,
  "🤞🏻": ZsLRuQaugO,
  "🤞🏼": nBHmPFoKCg,
  "🤞🏽": jWzjGHCFQt,
  "🤞🏾": gBIauZHlow,
  "🤞🏿": yZmxwkTUcD,
  "🤞": tJpokefLPc,
  "🤟🏻": AMpCHQhmVN,
  "🤟🏼": aDLLCadzeG,
  "🤟🏽": OCimHGNlVH,
  "🤟🏾": DmEKPWSEdp,
  "🤟🏿": MbHTEuwZZL,
  "🤟": jnRmDKzuxx,
  "🤠": OnFtSoOlXo,
  "🤡": txIKrdegzz,
  "🤢": zefswlXfrP,
  "🤣": CdVGHXLhOB,
  "🤤": UKBornAHhW,
  "🤥": JPjJSjVCIx,
  "🤦🏻‍♀️": QyFFKAVnho,
  "🤦🏻‍♂️": scEUepXDFc,
  "🤦🏻": WtMXseQHhD,
  "🤦🏼‍♀️": RUdDLdGkjB,
  "🤦🏼‍♂️": aOWkTcKHHa,
  "🤦🏼": VShtAdYGdz,
  "🤦🏽‍♀️": MszegFIFaf,
  "🤦🏽‍♂️": AmTLadjHtF,
  "🤦🏽": aSDHcvzVgk,
  "🤦🏾‍♀️": XNpEPdROjl,
  "🤦🏾‍♂️": nhSHwfPCMp,
  "🤦🏾": kuPcyotxUQ,
  "🤦🏿‍♀️": wCyqsMLnyu,
  "🤦🏿‍♂️": zCPsjlKuTC,
  "🤦🏿": gmLxcVWfaS,
  "🤦‍♀️": fQNzxaYqcy,
  "🤦‍♂️": TbdZgWSfDX,
  "🤦": QigIaPzBvB,
  "🤧": lIgLrZslxz,
  "🤨": ThiTENdnmm,
  "🤩": moRbjsLcyl,
  "🤪": gLFqhLGWtP,
  "🤫": PpwSzfXRMP,
  "🤬": hbNNgKemvi,
  "🤭": WSmCUryCjj,
  "🤮": cckRcyTNde,
  "🤯": lZtyPojxyE,
  "🤰🏻": KQhwWkMhwO,
  "🤰🏼": SDCnWrpUTA,
  "🤰🏽": xnvJvFQPVE,
  "🤰🏾": FaFJFwmpdE,
  "🤰🏿": CMljKRctJj,
  "🤰": lRoeuIhWnM,
  "🤱🏻": enwQXSziHO,
  "🤱🏼": OlvyzHaXxp,
  "🤱🏽": fHTYRrDdns,
  "🤱🏾": TpqsPzyPyR,
  "🤱🏿": gMVhHBdjsN,
  "🤱": WChRRqiNbT,
  "🤲🏻": gCyFCqiMoR,
  "🤲🏼": VZlAquuIIE,
  "🤲🏽": DOqfRXgLxF,
  "🤲🏾": VAskgTeWUi,
  "🤲🏿": BGDipRCuIY,
  "🤲": PuTFTWuHsC,
  "🤳🏻": EapfiAZNnW,
  "🤳🏼": ezlNxNVffX,
  "🤳🏽": gbtptskeeM,
  "🤳🏾": IEyfpVDhEx,
  "🤳🏿": AHAjefZxol,
  "🤳": UAAGmNqoxk,
  "🤴🏻": IwbncTQbwE,
  "🤴🏼": ZfjdlqfzKk,
  "🤴🏽": zEaoQfdsty,
  "🤴🏾": qUeRZoVrkz,
  "🤴🏿": FQCDWERBBT,
  "🤴": RAnTpMoAoC,
  "🤵🏻‍♀️": DhBglRBmoc,
  "🤵🏻‍♂️": LKxQqAEdZB,
  "🤵🏻": fyBmWJJcAG,
  "🤵🏼‍♀️": KWqoGIliea,
  "🤵🏼‍♂️": foKysuUaiS,
  "🤵🏼": qddbvqMNbS,
  "🤵🏽‍♀️": oeNERKaSBN,
  "🤵🏽‍♂️": bZMdeedYlw,
  "🤵🏽": etyNHWvPpL,
  "🤵🏾‍♀️": xAbczeaBNU,
  "🤵🏾‍♂️": WqKRfyhrDv,
  "🤵🏾": TiUglBUrwd,
  "🤵🏿‍♀️": hYYsTWwspN,
  "🤵🏿‍♂️": WBUGaBqGkA,
  "🤵🏿": lClYuQENLa,
  "🤵‍♀️": wTLahcjtEF,
  "🤵‍♂️": FJQcHWZLjS,
  "🤵": POaIJujrWT,
  "🤶🏻": NcSSzYnjeI,
  "🤶🏼": tAaAeatITM,
  "🤶🏽": WBJVjDPdpL,
  "🤶🏾": BznfIBUvQe,
  "🤶🏿": lljuwrIDdz,
  "🤶": bCZnhZCxsJ,
  "🤷🏻‍♀️": sgYzyUPhen,
  "🤷🏻‍♂️": kgxcUNOalX,
  "🤷🏻": atHwQcnGap,
  "🤷🏼‍♀️": YbKHLsKMuX,
  "🤷🏼‍♂️": CvXfbozfJD,
  "🤷🏼": TpqNqERtSb,
  "🤷🏽‍♀️": unoqeRleUG,
  "🤷🏽‍♂️": xmEjTnyzTD,
  "🤷🏽": mkxMccWZpv,
  "🤷🏾‍♀️": FwykfRxNeg,
  "🤷🏾‍♂️": avfPRHtOTk,
  "🤷🏾": dBWBiUauZP,
  "🤷🏿‍♀️": msLQAnfReh,
  "🤷🏿‍♂️": bXazgHncIe,
  "🤷🏿": LOTSjXQpzX,
  "🤷‍♀️": YNpkQRvGXx,
  "🤷‍♂️": xIywcwycRU,
  "🤷": WjYDLcDDik,
  "🤸🏻‍♀️": cLNfATLPHJ,
  "🤸🏻‍♂️": xxrJEYsivI,
  "🤸🏻": xiiPlwLGwm,
  "🤸🏼‍♀️": fFoHDImIra,
  "🤸🏼‍♂️": woPqvfnICc,
  "🤸🏼": wJneuetMnw,
  "🤸🏽‍♀️": GJFaccGzVg,
  "🤸🏽‍♂️": tNPTLzLDZw,
  "🤸🏽": lpYNAoMXkY,
  "🤸🏾‍♀️": OldJakQUTk,
  "🤸🏾‍♂️": JsuzhBhthp,
  "🤸🏾": sOyNbqivNy,
  "🤸🏿‍♀️": WBjIUGaTai,
  "🤸🏿‍♂️": pQOJzBJtyE,
  "🤸🏿": IWdaTuKtlL,
  "🤸‍♀️": SdGFBFSANT,
  "🤸‍♂️": ANncrfSmxA,
  "🤸": FbchAEJhDX,
  "🤹🏻‍♀️": XZILYWmDaB,
  "🤹🏻‍♂️": BIvhKdxcGv,
  "🤹🏻": zfaCEABrFS,
  "🤹🏼‍♀️": YWLABnuehk,
  "🤹🏼‍♂️": XQevABnpVi,
  "🤹🏼": ErYpdgGWzw,
  "🤹🏽‍♀️": KmveerqmCa,
  "🤹🏽‍♂️": WVNXVpoIYU,
  "🤹🏽": jAAtUfAHaJ,
  "🤹🏾‍♀️": BgHjyBKYLQ,
  "🤹🏾‍♂️": pZuuRpDZZs,
  "🤹🏾": TrsajNHpvq,
  "🤹🏿‍♀️": KoEILEdscA,
  "🤹🏿‍♂️": mlvTXdoOrw,
  "🤹🏿": kJIZbxBstU,
  "🤹‍♀️": IFVGLrwxFf,
  "🤹‍♂️": dOrAHHQiLZ,
  "🤹": TaMbSiwUGx,
  "🤺": kNJxpakWJh,
  "🤼‍♀️": JKSIvYTcLk,
  "🤼‍♂️": EXHhgWJAVS,
  "🤼": fCcBJdnYtY,
  "🤽🏻‍♀️": gLCyUhikDN,
  "🤽🏻‍♂️": GaVDYhlifn,
  "🤽🏻": wmdmPUvzut,
  "🤽🏼‍♀️": jPEqBBzgsV,
  "🤽🏼‍♂️": bwWKeLElLh,
  "🤽🏼": lElJxpNlSE,
  "🤽🏽‍♀️": DxkxVzTBBm,
  "🤽🏽‍♂️": udzkEMFbrR,
  "🤽🏽": orDqfFfaFp,
  "🤽🏾‍♀️": EfIvDFlRFZ,
  "🤽🏾‍♂️": CBMdGMtdPQ,
  "🤽🏾": hkgrvITIHm,
  "🤽🏿‍♀️": RPFpXkmBqG,
  "🤽🏿‍♂️": OhsPezZQVI,
  "🤽🏿": wEFLMOqflV,
  "🤽‍♀️": gkjIjTpLys,
  "🤽‍♂️": tBwtJCFZGy,
  "🤽": UmbljvpGCJ,
  "🤾🏻‍♀️": LqjBMCHLje,
  "🤾🏻‍♂️": HUrIuyjxJm,
  "🤾🏻": FbRrYvHuCx,
  "🤾🏼‍♀️": oyKUzZUARQ,
  "🤾🏼‍♂️": UaslNugeqA,
  "🤾🏼": bgYZxQvFaG,
  "🤾🏽‍♀️": QENDvUozfd,
  "🤾🏽‍♂️": iwttDNvwZX,
  "🤾🏽": TXmuRfRkNa,
  "🤾🏾‍♀️": VyumbSvail,
  "🤾🏾‍♂️": xhtVggLDVy,
  "🤾🏾": iaZDuemJAU,
  "🤾🏿‍♀️": wnanPkxmcg,
  "🤾🏿‍♂️": PlEQFifWtg,
  "🤾🏿": qINXJOqKHK,
  "🤾‍♀️": ixfAuoOixj,
  "🤾‍♂️": hNwlVFEMfw,
  "🤾": SsUvfSqUmk,
  "🤿": tiLiHIHIas,
  "🥀": eqOcBdaNhQ,
  "🥁": GTGDfYoiIS,
  "🥂": MjridDYNwV,
  "🥃": qUVjByqBrW,
  "🥄": TCiXjcDhit,
  "🥅": QHlgKXsBpq,
  "🥇": pXIOfFWomT,
  "🥈": EAWndRFYMS,
  "🥉": tOxZNkPTEE,
  "🥊": gLPtYMcfjI,
  "🥋": fbXmPMqTJJ,
  "🥌": RGjjMteRPK,
  "🥍": fNRhWAuLaC,
  "🥎": qFQpYryuWq,
  "🥏": vGjmXksmoS,
  "🥐": NhfnEpDJYH,
  "🥑": NwvpeXowKs,
  "🥒": vkKVUxZKeK,
  "🥓": icdKkHlslR,
  "🥔": eSUWlFgUPt,
  "🥕": uiLnHizGHi,
  "🥖": VNSfRojnMA,
  "🥗": KAthffiTpe,
  "🥘": VTkZcIqree,
  "🥙": GWQnCLrmOV,
  "🥚": BNYeCTlIHy,
  "🥛": UKcaiqSstP,
  "🥜": pznhBbggex,
  "🥝": QTSgAqbqMZ,
  "🥞": YoZWWksIuB,
  "🥟": KnHVAtqIKs,
  "🥠": nALaynIERp,
  "🥡": eeiLwmdjhY,
  "🥢": LlAojOBXqx,
  "🥣": ZayVpwELjM,
  "🥤": lNadenZBpL,
  "🥥": qETfkPHCUQ,
  "🥦": birGKDpqLn,
  "🥧": aoCRHcLeMl,
  "🥨": yPznQsEOTB,
  "🥩": FUWfjutSBD,
  "🥪": TzSbMFCPgr,
  "🥫": JWqUtkvxkc,
  "🥬": WqvvRzzlWw,
  "🥭": WzmzPvXqBV,
  "🥮": UVQRMWtFHT,
  "🥯": dnXKQGPyjz,
  "🥰": ivzzHxejrX,
  "🥱": GdzBAGpdjf,
  "🥲": AcetWsNcCR,
  "🥳": xPSjVpixHP,
  "🥴": VyRQLvQClD,
  "🥵": PIQRpUVpwI,
  "🥶": IWIbyrakCu,
  "🥷🏻": FMikMbGgRc,
  "🥷🏼": abzDPlgtYb,
  "🥷🏽": thLeEaqxLb,
  "🥷🏾": tjRrmoXjRH,
  "🥷🏿": epIrjGRFWK,
  "🥷": AuzCXBWlFG,
  "🥸": ttwiEuGacb,
  "🥹": UajPIIptDE,
  "🥺": FFiEOruMmH,
  "🥻": hWWqswrAri,
  "🥼": CFOckqnhNT,
  "🥽": jZNJvyrMoR,
  "🥾": kHLcdMPurC,
  "🥿": qJMirhYpwo,
  "🦀": WeIzsgYPVh,
  "🦁": UOpjtyJbZc,
  "🦂": VfJEOfwxAk,
  "🦃": khxdwjrcBv,
  "🦄": GuUtxnnuDY,
  "🦅": XprniWdUYY,
  "🦆": XiDyuUtZzG,
  "🦇": NsYIGzJEFL,
  "🦈": gWhtFeZtja,
  "🦉": OBXaNNQfYF,
  "🦊": eleWZflNNN,
  "🦋": WemniBSsKR,
  "🦌": QGSjtLIFkR,
  "🦍": GekMKcyuDs,
  "🦎": ibnoMJPRuf,
  "🦏": uXuosnMFhB,
  "🦐": iffTyYlsAY,
  "🦑": jqPWrrpEQa,
  "🦒": lzGQqdOrwq,
  "🦓": cNMDkMNPRY,
  "🦔": AfJUdfCAup,
  "🦕": rMaFqpeeXd,
  "🦖": enjjnESrgz,
  "🦗": OqxacVKAmZ,
  "🦘": epPfcANYGa,
  "🦙": HhCpMhPFSO,
  "🦚": UCYNLhrbAJ,
  "🦛": fEIvqGHvCa,
  "🦜": fHRHglChvs,
  "🦝": MakkfsnmlC,
  "🦞": TELORAutnN,
  "🦟": WszLvADjhp,
  "🦠": dBWlLCZXze,
  "🦡": spmHwmqoIE,
  "🦢": SYBwilebTC,
  "🦣": uuKcwguzSN,
  "🦤": ISKLfWMweb,
  "🦥": jMUDwVtfqW,
  "🦦": gVHtjpsgcP,
  "🦧": EoDCfZSLGx,
  "🦨": aqCtnkAyei,
  "🦩": ybsjGgobYl,
  "🦪": jcTOlDXxki,
  "🦫": rMlxxMfESn,
  "🦬": qKOZQWgLuG,
  "🦭": ltSlzgXCxq,
  "🦮": jPAtFrSIZI,
  "🦯": SyefYdtUiS,
  "🦰": EighvSAnyI,
  "🦱": OpqJnyCqay,
  "🦲": vwtlpuzFIU,
  "🦳": eYBsZwExBc,
  "🦴": zZToCjCRjq,
  "🦵🏻": xGKJBlYQYp,
  "🦵🏼": IjkGvteuAC,
  "🦵🏽": rrulDYghpq,
  "🦵🏾": RGBPgUxZvX,
  "🦵🏿": olEyARTNgX,
  "🦵": XOaUlkpRbM,
  "🦶🏻": zGlxZbyneo,
  "🦶🏼": iOcLMsUdRR,
  "🦶🏽": ZHdagzXkZT,
  "🦶🏾": GybbkIICOF,
  "🦶🏿": EyxkRNRaoW,
  "🦶": FaIdUPDTAD,
  "🦷": tJpWyysLtA,
  "🦸🏻‍♀️": bqtVZPlsCn,
  "🦸🏻‍♂️": BXYLiNFehR,
  "🦸🏻": IqgSFqODAh,
  "🦸🏼‍♀️": UHTFwmnksV,
  "🦸🏼‍♂️": UAnyjFfSZA,
  "🦸🏼": zAAyymJiYi,
  "🦸🏽‍♀️": HtkRqrhabN,
  "🦸🏽‍♂️": XcGUpOoUAZ,
  "🦸🏽": YxQuEqQcvL,
  "🦸🏾‍♀️": IZZRwqBTQu,
  "🦸🏾‍♂️": tXEVnPMSro,
  "🦸🏾": GdzLSULkPm,
  "🦸🏿‍♀️": VxXKxCjFIc,
  "🦸🏿‍♂️": RHkZsxcjzK,
  "🦸🏿": WbRJTyawQx,
  "🦸‍♀️": NDPkwOYXss,
  "🦸‍♂️": djNEXvdyvR,
  "🦸": lIYTDevMEA,
  "🦹🏻‍♀️": lbiAUHQdTv,
  "🦹🏻‍♂️": SIjsuNmiiH,
  "🦹🏻": pIYVUNSsWy,
  "🦹🏼‍♀️": bgoXekmAqQ,
  "🦹🏼‍♂️": uJEdAZyHnK,
  "🦹🏼": rmzFpJQXkQ,
  "🦹🏽‍♀️": IDzbrVvcJs,
  "🦹🏽‍♂️": uIpUsuKzae,
  "🦹🏽": YkdXtKbjVf,
  "🦹🏾‍♀️": TpjkWnVoba,
  "🦹🏾‍♂️": SycZsXTjMb,
  "🦹🏾": PkZGfPEESY,
  "🦹🏿‍♀️": ODhrIQBIfM,
  "🦹🏿‍♂️": iEdDwyTMEv,
  "🦹🏿": PDxxzHcsNu,
  "🦹‍♀️": TdFgInkLIH,
  "🦹‍♂️": HeFCKQSCDq,
  "🦹": oOUkdTgdXk,
  "🦺": mbQOiCixET,
  "🦻🏻": ROQhFKGgIv,
  "🦻🏼": gJgMRUsLZt,
  "🦻🏽": UuWBcwMEpn,
  "🦻🏾": AtjIcnSUio,
  "🦻🏿": FINwEBnYbr,
  "🦻": ZvvRKNoBJl,
  "🦼": uPPpbfhlzo,
  "🦽": VttWvhQhAS,
  "🦾": dcWakrvPgL,
  "🦿": QcTjxSSRkM,
  "🧀": xYVxasWIxx,
  "🧁": fLxfjpYeMe,
  "🧂": NskuzaPwJf,
  "🧃": VTbcxOCJBY,
  "🧄": XrsoYvZNUF,
  "🧅": NXrGBjFZAi,
  "🧆": sGkeUXkCkl,
  "🧇": ERLVlpwtxU,
  "🧈": vOQLrMshaF,
  "🧉": lZirtFaFKx,
  "🧊": jgfwolrqsg,
  "🧋": mTQojRuJvf,
  "🧌": hegNXmBcJc,
  "🧍🏻‍♀️": OkfOxiWRDS,
  "🧍🏻‍♂️": XPvJqabCCo,
  "🧍🏻": dBbzplHtPF,
  "🧍🏼‍♀️": JpjCmbtnCP,
  "🧍🏼‍♂️": FRLIolBDhB,
  "🧍🏼": MBRDmjmRQC,
  "🧍🏽‍♀️": eEfofITlpA,
  "🧍🏽‍♂️": qXSTswTcJJ,
  "🧍🏽": tMmWPqbxQs,
  "🧍🏾‍♀️": zKGuduqnnj,
  "🧍🏾‍♂️": ESoWTExrTZ,
  "🧍🏾": SOpKCEPLsR,
  "🧍🏿‍♀️": eRjsJYHXXU,
  "🧍🏿‍♂️": vsEvSLsncl,
  "🧍🏿": PiqHClREiQ,
  "🧍‍♀️": GuUKjTnuNl,
  "🧍‍♂️": wNaNuGjJda,
  "🧍": bODeckVgbC,
  "🧎🏻‍♀️": WjAxwnhATB,
  "🧎🏻‍♂️": yvyRTDOSMd,
  "🧎🏻": HLlIxgNALg,
  "🧎🏼‍♀️": YeOsueXRRK,
  "🧎🏼‍♂️": UTggWbDAqy,
  "🧎🏼": yCEvIuAmMO,
  "🧎🏽‍♀️": VZgAfhiUJW,
  "🧎🏽‍♂️": lJLHuKSQSB,
  "🧎🏽": xqXtLkBbhF,
  "🧎🏾‍♀️": IjuxUZbjWj,
  "🧎🏾‍♂️": ixVvjzaBbl,
  "🧎🏾": ReLhLskgEr,
  "🧎🏿‍♀️": oSJbtzyorE,
  "🧎🏿‍♂️": oIEvXtzuds,
  "🧎🏿": ygxVYzAtVu,
  "🧎‍♀️": cdpWQiTkDu,
  "🧎‍♂️": egnLGriddk,
  "🧎": eEwzzFKlvM,
  "🧏🏻‍♀️": ovWVTSxiOo,
  "🧏🏻‍♂️": KQfWjWKiGo,
  "🧏🏻": jfHnxvbrQi,
  "🧏🏼‍♀️": DklFhNyBar,
  "🧏🏼‍♂️": NJVziEWsWe,
  "🧏🏼": dGrIetarxm,
  "🧏🏽‍♀️": yqGnBHxMUJ,
  "🧏🏽‍♂️": rUSxWIOkfE,
  "🧏🏽": ASKtzfBcdY,
  "🧏🏾‍♀️": kdBLwcoFJT,
  "🧏🏾‍♂️": AZbKQNYIqX,
  "🧏🏾": LAodtGwPkN,
  "🧏🏿‍♀️": aKhZRZFqiC,
  "🧏🏿‍♂️": feZqNAsvTZ,
  "🧏🏿": NbtiGywwLs,
  "🧏‍♀️": SmMQJTtygV,
  "🧏‍♂️": eegnbylROE,
  "🧏": UaBXncgNwO,
  "🧐": vwsLzcsYSn,
  "🧑🏻‍🌾": khIsuaHzDS,
  "🧑🏻‍🍳": oWQkPVHKtq,
  "🧑🏻‍🍼": YGKnShLRZy,
  "🧑🏻‍🎄": TiihDFpOVV,
  "🧑🏻‍🎓": qWlCLsBxbq,
  "🧑🏻‍🎤": yvnOgTLIWg,
  "🧑🏻‍🎨": BesNgLxyfD,
  "🧑🏻‍🏫": OYwfXjVoBc,
  "🧑🏻‍🏭": IgbqkafjWL,
  "🧑🏻‍💻": SSwnVuZCTM,
  "🧑🏻‍💼": FgfYwGgRLB,
  "🧑🏻‍🔧": LaDtGdkYgX,
  "🧑🏻‍🔬": eJFPaypISh,
  "🧑🏻‍🚀": wdGNfNZBiS,
  "🧑🏻‍🚒": tqPjZXIRQJ,
  "🧑🏻‍🤝‍🧑🏻": NjwLcYWCuN,
  "🧑🏻‍🤝‍🧑🏼": zpHTQlLeVd,
  "🧑🏻‍🤝‍🧑🏽": zYoNdvuVUK,
  "🧑🏻‍🤝‍🧑🏾": qESZaVIkLa,
  "🧑🏻‍🤝‍🧑🏿": cpItGCUPCK,
  "🧑🏻‍🦯": sEkSRjooYd,
  "🧑🏻‍🦰": OOqOCTBvpm,
  "🧑🏻‍🦱": uFhyMEyaHl,
  "🧑🏻‍🦲": XTTrzgciDv,
  "🧑🏻‍🦳": AhUbPVKhda,
  "🧑🏻‍🦼": yBnGQyruYK,
  "🧑🏻‍🦽": VOAYUAvxjo,
  "🧑🏻‍⚕️": BgKguZPncc,
  "🧑🏻‍⚖️": EBjQTYQPyH,
  "🧑🏻‍✈️": qsCtuSnQvk,
  "🧑🏻‍❤️‍💋‍🧑🏼": XcnCuErkFS,
  "🧑🏻‍❤️‍💋‍🧑🏽": eLAZkTraKj,
  "🧑🏻‍❤️‍💋‍🧑🏾": TqDIUJyKjb,
  "🧑🏻‍❤️‍💋‍🧑🏿": KHzTRczMtG,
  "🧑🏻‍❤️‍🧑🏼": fGmPgSpQkk,
  "🧑🏻‍❤️‍🧑🏽": PbVobDSMFJ,
  "🧑🏻‍❤️‍🧑🏾": mLNEaRsNUL,
  "🧑🏻‍❤️‍🧑🏿": SMbomBSgQA,
  "🧑🏻": gGcVTWxCmn,
  "🧑🏼‍🌾": zyPHDmxwBS,
  "🧑🏼‍🍳": jpBgwwdlgf,
  "🧑🏼‍🍼": rGacoMonri,
  "🧑🏼‍🎄": AhtTrxIzjV,
  "🧑🏼‍🎓": LEdkAEpGjn,
  "🧑🏼‍🎤": KJolWLVoYN,
  "🧑🏼‍🎨": SxFNDYQoZq,
  "🧑🏼‍🏫": wsttnmmLUE,
  "🧑🏼‍🏭": BzkecYhSof,
  "🧑🏼‍💻": HrRRtuXhbR,
  "🧑🏼‍💼": VZbxSlDNYp,
  "🧑🏼‍🔧": tTGYYdQHyL,
  "🧑🏼‍🔬": LwEcSsAuHi,
  "🧑🏼‍🚀": ggxlZOatEe,
  "🧑🏼‍🚒": gyXKjplctd,
  "🧑🏼‍🤝‍🧑🏻": FNDaFWNixA,
  "🧑🏼‍🤝‍🧑🏼": tlFtvxoToN,
  "🧑🏼‍🤝‍🧑🏽": HoCnfmOEqq,
  "🧑🏼‍🤝‍🧑🏾": GVxogFxskx,
  "🧑🏼‍🤝‍🧑🏿": uSWmzfCRAv,
  "🧑🏼‍🦯": veCeWrCmSE,
  "🧑🏼‍🦰": HxZRJxOznq,
  "🧑🏼‍🦱": qLPyiXveXg,
  "🧑🏼‍🦲": esBtDvvajT,
  "🧑🏼‍🦳": HlDSDXzPqp,
  "🧑🏼‍🦼": vwDbVnnqDD,
  "🧑🏼‍🦽": veWDuDJlvb,
  "🧑🏼‍⚕️": DsuoubtwmS,
  "🧑🏼‍⚖️": QQoidUzFLX,
  "🧑🏼‍✈️": XehfEagbhe,
  "🧑🏼‍❤️‍💋‍🧑🏻": kZoKXdUdWX,
  "🧑🏼‍❤️‍💋‍🧑🏽": pmSCriDrKx,
  "🧑🏼‍❤️‍💋‍🧑🏾": AfHQSfAjWF,
  "🧑🏼‍❤️‍💋‍🧑🏿": iWUEFCJaul,
  "🧑🏼‍❤️‍🧑🏻": pAODNnansf,
  "🧑🏼‍❤️‍🧑🏽": CXIRgmoDie,
  "🧑🏼‍❤️‍🧑🏾": NghFhwHekf,
  "🧑🏼‍❤️‍🧑🏿": GbjUOvOsqr,
  "🧑🏼": bUoOovKiiU,
  "🧑🏽‍🌾": vvAMDQyDFH,
  "🧑🏽‍🍳": ykVCFOAoyz,
  "🧑🏽‍🍼": idydZMqYwl,
  "🧑🏽‍🎄": tePEflNoKP,
  "🧑🏽‍🎓": oHJPtDpuUD,
  "🧑🏽‍🎤": bfLZdmLtAg,
  "🧑🏽‍🎨": DbNAWhXmse,
  "🧑🏽‍🏫": HJlCfuBUWq,
  "🧑🏽‍🏭": hMkMGyBcqf,
  "🧑🏽‍💻": PSoEQSYVpB,
  "🧑🏽‍💼": vfGpVKNXEK,
  "🧑🏽‍🔧": QvSTaEFXRj,
  "🧑🏽‍🔬": rTAvGasGpp,
  "🧑🏽‍🚀": VurEUNwadz,
  "🧑🏽‍🚒": NbbwqBXNUP,
  "🧑🏽‍🤝‍🧑🏻": DpDeJZWqBH,
  "🧑🏽‍🤝‍🧑🏼": pjradwvxFr,
  "🧑🏽‍🤝‍🧑🏽": MvoBtoTDxt,
  "🧑🏽‍🤝‍🧑🏾": swWjtlQnXj,
  "🧑🏽‍🤝‍🧑🏿": oREbprOWLL,
  "🧑🏽‍🦯": xoIqFdYGCG,
  "🧑🏽‍🦰": ArHpLNyYce,
  "🧑🏽‍🦱": QkUjfeTEbe,
  "🧑🏽‍🦲": UFRGuFWsQr,
  "🧑🏽‍🦳": apmxUeFoyf,
  "🧑🏽‍🦼": LZxWjswMGN,
  "🧑🏽‍🦽": NKoczOpEAc,
  "🧑🏽‍⚕️": UNPckHXMeb,
  "🧑🏽‍⚖️": oSvjfCHUpl,
  "🧑🏽‍✈️": NRotfkjKcp,
  "🧑🏽‍❤️‍💋‍🧑🏻": RZcMJyzzHo,
  "🧑🏽‍❤️‍💋‍🧑🏼": fpQKPbryWJ,
  "🧑🏽‍❤️‍💋‍🧑🏾": uYYqqvHkWO,
  "🧑🏽‍❤️‍💋‍🧑🏿": tfwcRNfspb,
  "🧑🏽‍❤️‍🧑🏻": RvSIHucwmI,
  "🧑🏽‍❤️‍🧑🏼": OtkUtdoIJY,
  "🧑🏽‍❤️‍🧑🏾": jaMNxzZrUm,
  "🧑🏽‍❤️‍🧑🏿": ApygJxWRxV,
  "🧑🏽": BqdXnCHqCx,
  "🧑🏾‍🌾": PGdadbcsim,
  "🧑🏾‍🍳": yiovBbGFbN,
  "🧑🏾‍🍼": enHoozbJzl,
  "🧑🏾‍🎄": KOiIkKwqTS,
  "🧑🏾‍🎓": lOFmpyMMeE,
  "🧑🏾‍🎤": zQDpoZoQuY,
  "🧑🏾‍🎨": aggJKulufp,
  "🧑🏾‍🏫": SelEBvrbdP,
  "🧑🏾‍🏭": MdqWviucpn,
  "🧑🏾‍💻": txqtCitiBh,
  "🧑🏾‍💼": ROQSnswHei,
  "🧑🏾‍🔧": YFMTHXFgKZ,
  "🧑🏾‍🔬": gYvapSKXNc,
  "🧑🏾‍🚀": lPpNimwEIR,
  "🧑🏾‍🚒": yASmiOdJmj,
  "🧑🏾‍🤝‍🧑🏻": WOsOyGZcLp,
  "🧑🏾‍🤝‍🧑🏼": HFIOmtkoFI,
  "🧑🏾‍🤝‍🧑🏽": HUqximQHez,
  "🧑🏾‍🤝‍🧑🏾": sjxIfaoaAY,
  "🧑🏾‍🤝‍🧑🏿": wVSQXWYKMe,
  "🧑🏾‍🦯": POvJdIXTrt,
  "🧑🏾‍🦰": OQLDkewadz,
  "🧑🏾‍🦱": UOZNBcRTCj,
  "🧑🏾‍🦲": HKivMpfOrC,
  "🧑🏾‍🦳": dfYsJnEDEn,
  "🧑🏾‍🦼": iqvvHtlIMu,
  "🧑🏾‍🦽": bxPHznZsss,
  "🧑🏾‍⚕️": ccSvIKWAub,
  "🧑🏾‍⚖️": emFlqNKoRY,
  "🧑🏾‍✈️": HbBbSYNjnt,
  "🧑🏾‍❤️‍💋‍🧑🏻": XoAFkodCTl,
  "🧑🏾‍❤️‍💋‍🧑🏼": tQBbSxkigk,
  "🧑🏾‍❤️‍💋‍🧑🏽": REWReetWjC,
  "🧑🏾‍❤️‍💋‍🧑🏿": TxQLEsIzRZ,
  "🧑🏾‍❤️‍🧑🏻": fcoADoQtlH,
  "🧑🏾‍❤️‍🧑🏼": pOtwzKUrBK,
  "🧑🏾‍❤️‍🧑🏽": DZtEbYyPjr,
  "🧑🏾‍❤️‍🧑🏿": GSBjQIXGPA,
  "🧑🏾": EGWSNJSlKy,
  "🧑🏿‍🌾": ylRlTuHcoW,
  "🧑🏿‍🍳": TWHaFNXpWv,
  "🧑🏿‍🍼": GzVmNsLsbF,
  "🧑🏿‍🎄": HffQumzVPi,
  "🧑🏿‍🎓": cRKAWumGbr,
  "🧑🏿‍🎤": hobLlqTEgL,
  "🧑🏿‍🎨": fYjoETdaQS,
  "🧑🏿‍🏫": xrbxUSkvZc,
  "🧑🏿‍🏭": hDVcisztiG,
  "🧑🏿‍💻": aDBvOvytHv,
  "🧑🏿‍💼": LkbYCZZHbW,
  "🧑🏿‍🔧": BnaOXTpvEH,
  "🧑🏿‍🔬": uRkBWqGPsW,
  "🧑🏿‍🚀": zEnlEQbKlQ,
  "🧑🏿‍🚒": WMJXnOafVW,
  "🧑🏿‍🤝‍🧑🏻": nhlGmzyDWl,
  "🧑🏿‍🤝‍🧑🏼": PwUOMOgrxo,
  "🧑🏿‍🤝‍🧑🏽": remToRTyjy,
  "🧑🏿‍🤝‍🧑🏾": HARJeodPUG,
  "🧑🏿‍🤝‍🧑🏿": kIJFJxkXtl,
  "🧑🏿‍🦯": rbYEIqFRBk,
  "🧑🏿‍🦰": zaZnVpSDbo,
  "🧑🏿‍🦱": zCUpPGgKun,
  "🧑🏿‍🦲": deBsmAgCyR,
  "🧑🏿‍🦳": biTjFrQQGa,
  "🧑🏿‍🦼": ylnUSWkGcL,
  "🧑🏿‍🦽": iWVBsArJDf,
  "🧑🏿‍⚕️": fISeEDCCDS,
  "🧑🏿‍⚖️": GkmPNBRDtm,
  "🧑🏿‍✈️": ISzJWimkPz,
  "🧑🏿‍❤️‍💋‍🧑🏻": gqAstpLEcP,
  "🧑🏿‍❤️‍💋‍🧑🏼": dfqzpChYwY,
  "🧑🏿‍❤️‍💋‍🧑🏽": YWqzyazunD,
  "🧑🏿‍❤️‍💋‍🧑🏾": pycCjmDxxS,
  "🧑🏿‍❤️‍🧑🏻": hKvZJhrroC,
  "🧑🏿‍❤️‍🧑🏼": pcLVrbQomo,
  "🧑🏿‍❤️‍🧑🏽": wJHmHQJrEV,
  "🧑🏿‍❤️‍🧑🏾": ysjrGXSOrp,
  "🧑🏿": OPbviSgKyQ,
  "🧑‍🌾": JCWqyUUhFf,
  "🧑‍🍳": IsXlIQCrba,
  "🧑‍🍼": oKUCxPNERC,
  "🧑‍🎄": yrUatTWHGC,
  "🧑‍🎓": qNdIDSIKMU,
  "🧑‍🎤": MHZndZoxih,
  "🧑‍🎨": qzCaVaHRFj,
  "🧑‍🏫": dshAcpfvGy,
  "🧑‍🏭": TESBIgimBy,
  "🧑‍💻": OCMyjrxPhC,
  "🧑‍💼": vBOgddYJPP,
  "🧑‍🔧": HibqlzBWcD,
  "🧑‍🔬": xpBBRrybud,
  "🧑‍🚀": JzUIvccvrA,
  "🧑‍🚒": qxwHlyAClI,
  "🧑‍🤝‍🧑": GkpYtmwcPZ,
  "🧑‍🦯": oLlfWBlwVQ,
  "🧑‍🦰": iPDKbrmSkb,
  "🧑‍🦱": SldLtogilc,
  "🧑‍🦲": ackYwUmOUb,
  "🧑‍🦳": ANpMPMATBo,
  "🧑‍🦼": AqmobxlhDJ,
  "🧑‍🦽": GhAPRHOvdD,
  "🧑‍🪩": xMKmkGFVye,
  "🧑‍⚕️": RQWHjHvsxI,
  "🧑‍⚖️": NLuWTfGhSL,
  "🧑‍✈️": MAzQxuGxzN,
  "🧑": ZwXylalYqQ,
  "🧒🏻": DboFQdwoGf,
  "🧒🏼": XyzadnWgEq,
  "🧒🏽": PFgLcmJTOa,
  "🧒🏾": edZIpXnLhh,
  "🧒🏿": DrHzgATbDC,
  "🧒": tzIklswQbZ,
  "🧓🏻": icNBrSQbTx,
  "🧓🏼": VcClrpqily,
  "🧓🏽": iLKRtEnzvy,
  "🧓🏾": PAywLFlwsY,
  "🧓🏿": GkYvKmnGbn,
  "🧓": FDLnzPYOgi,
  "🧔🏻‍♀️": InpyedUuFP,
  "🧔🏻‍♂️": WOkwHLGaPU,
  "🧔🏻": RGIIIpOiFz,
  "🧔🏼‍♀️": EHeObTKKOD,
  "🧔🏼‍♂️": CEbskpJaVY,
  "🧔🏼": cgAnWvgUQH,
  "🧔🏽‍♀️": njGPBPfanm,
  "🧔🏽‍♂️": goONddicuU,
  "🧔🏽": roSHGNbkOg,
  "🧔🏾‍♀️": cHRGrGgPkl,
  "🧔🏾‍♂️": KQNTUcPWod,
  "🧔🏾": SYxgpuNqBt,
  "🧔🏿‍♀️": cMFggsbpGr,
  "🧔🏿‍♂️": YTRdCvTEPJ,
  "🧔🏿": uJFbBTsZpx,
  "🧔‍♀️": zpEHnlYexf,
  "🧔‍♂️": QgYzamJvoa,
  "🧔": jBvvlggwte,
  "🧕🏻": nItoBCwryX,
  "🧕🏼": iXioBZPdDv,
  "🧕🏽": NTMGPKfLAp,
  "🧕🏾": WozhLbktGD,
  "🧕🏿": tLIhiAlTGY,
  "🧕": pFcccGuXAi,
  "🧖🏻‍♀️": GWARijGVPi,
  "🧖🏻‍♂️": fsgmtVNXic,
  "🧖🏻": clYUzoWJMr,
  "🧖🏼‍♀️": aVjzxUVdib,
  "🧖🏼‍♂️": pakcKQQmjg,
  "🧖🏼": aFooxzocjs,
  "🧖🏽‍♀️": RfyEOKOijG,
  "🧖🏽‍♂️": SZwzPqXtPT,
  "🧖🏽": eMyxxfqJoK,
  "🧖🏾‍♀️": boKfoJYhVq,
  "🧖🏾‍♂️": MZuuTyqYAa,
  "🧖🏾": SnMOhcyMQn,
  "🧖🏿‍♀️": vPWNbcEhIk,
  "🧖🏿‍♂️": bZeRowmiIK,
  "🧖🏿": GpUhReNjRT,
  "🧖‍♀️": ydRFMppXnX,
  "🧖‍♂️": sZRBisMdzA,
  "🧖": IYJhMgVhyl,
  "🧗🏻‍♀️": EkUaTgRQRG,
  "🧗🏻‍♂️": PstKCiYsNk,
  "🧗🏻": TtVQcFiNQC,
  "🧗🏼‍♀️": jUzTuZkOvw,
  "🧗🏼‍♂️": ayifFNBCRk,
  "🧗🏼": PuEwTJijNw,
  "🧗🏽‍♀️": SSYFEfBfge,
  "🧗🏽‍♂️": wQrMerFYGm,
  "🧗🏽": iwNVfsQyYW,
  "🧗🏾‍♀️": nISoDpmXbN,
  "🧗🏾‍♂️": ESnfTqtBAq,
  "🧗🏾": boeTOZQjGO,
  "🧗🏿‍♀️": TAWcdhVdEQ,
  "🧗🏿‍♂️": SomlWbsCQc,
  "🧗🏿": XnwwrPJxze,
  "🧗‍♀️": dKaAZrDRnL,
  "🧗‍♂️": RiZpPOBkOP,
  "🧗": qnXiTxnxPX,
  "🧘🏻‍♀️": oiSGqpojgd,
  "🧘🏻‍♂️": APcTiqRwGf,
  "🧘🏻": FGaAUJlanB,
  "🧘🏼‍♀️": JrZWVWpkML,
  "🧘🏼‍♂️": pFjdgYXNyU,
  "🧘🏼": llXxAPPYno,
  "🧘🏽‍♀️": cReWaQGKbB,
  "🧘🏽‍♂️": lLHPVqqdYc,
  "🧘🏽": xYJbUHcUOr,
  "🧘🏾‍♀️": DcPLpPImdS,
  "🧘🏾‍♂️": WopMTEktbj,
  "🧘🏾": ixJWFkSMNN,
  "🧘🏿‍♀️": WKTenEIywP,
  "🧘🏿‍♂️": aHEHuChWfj,
  "🧘🏿": RSgFnyOUuz,
  "🧘‍♀️": fvpDbzqbfG,
  "🧘‍♂️": RBHrxrSNOK,
  "🧘": SYiXJiJkzk,
  "🧙🏻‍♀️": IdyHUdvYXb,
  "🧙🏻‍♂️": lMKmKUMneQ,
  "🧙🏻": qHaOPdWalT,
  "🧙🏼‍♀️": mnTEmcbGzH,
  "🧙🏼‍♂️": wWVHpssjLe,
  "🧙🏼": hPEHjklamm,
  "🧙🏽‍♀️": eFbGYZyjXg,
  "🧙🏽‍♂️": pgddzHTEOA,
  "🧙🏽": ZFxOOaSLRN,
  "🧙🏾‍♀️": XgmVhVQSgu,
  "🧙🏾‍♂️": nahrObHFtH,
  "🧙🏾": wVHGTtutve,
  "🧙🏿‍♀️": eJSUGSDOSI,
  "🧙🏿‍♂️": KxQzQbYJrj,
  "🧙🏿": idNSAaejwE,
  "🧙‍♀️": ebDsbHaFng,
  "🧙‍♂️": QjVlVmfTFH,
  "🧙": tximIzvspz,
  "🧚🏻‍♀️": gjZgUYAapG,
  "🧚🏻‍♂️": OTnqTZQcAA,
  "🧚🏻": iDqekNmaym,
  "🧚🏼‍♀️": hWNYOisdSK,
  "🧚🏼‍♂️": KuZqZoVLgM,
  "🧚🏼": OYajJzqFUc,
  "🧚🏽‍♀️": fGHshuiTMk,
  "🧚🏽‍♂️": wHcixYIuIH,
  "🧚🏽": qtMbjUxPnH,
  "🧚🏾‍♀️": aXGUgJXUWT,
  "🧚🏾‍♂️": QXZlmDZBbD,
  "🧚🏾": vPLQOvvtoN,
  "🧚🏿‍♀️": emZXSEPirG,
  "🧚🏿‍♂️": sPdukSqWaY,
  "🧚🏿": koaVjiDhjM,
  "🧚‍♀️": TRgIypZUvN,
  "🧚‍♂️": JEQNFhunEr,
  "🧚": nBUGUYqcDm,
  "🧛🏻‍♀️": ehtOukSGJL,
  "🧛🏻‍♂️": bMBUEczDAz,
  "🧛🏻": hCfuXbPvis,
  "🧛🏼‍♀️": ATYwLZYYTA,
  "🧛🏼‍♂️": tyftTskJMU,
  "🧛🏼": saojKFhAeW,
  "🧛🏽‍♀️": KfcxaqsBiN,
  "🧛🏽‍♂️": pPXqtEWqFV,
  "🧛🏽": VEYglVbLQc,
  "🧛🏾‍♀️": PYQYbzeocK,
  "🧛🏾‍♂️": SaKauwKzzD,
  "🧛🏾": kPYLKQKrOr,
  "🧛🏿‍♀️": HqOIbPWeVC,
  "🧛🏿‍♂️": IZWXGFcZoG,
  "🧛🏿": qeYAotldAq,
  "🧛‍♀️": EqtBKVsDys,
  "🧛‍♂️": YpuIkIuPFy,
  "🧛": jXJeWLniJj,
  "🧜🏻‍♀️": bhacvmvCKY,
  "🧜🏻‍♂️": VxffbEippU,
  "🧜🏻": PYOOkhjUdv,
  "🧜🏼‍♀️": XIaheCKMdC,
  "🧜🏼‍♂️": muEBHxjbsR,
  "🧜🏼": loNmGQMHqD,
  "🧜🏽‍♀️": SUkMMZmNPs,
  "🧜🏽‍♂️": mRrrOeqTwu,
  "🧜🏽": qnYQOEyaDS,
  "🧜🏾‍♀️": UKgOfKOWBL,
  "🧜🏾‍♂️": cwaqAxNqeN,
  "🧜🏾": FKxZidDmis,
  "🧜🏿‍♀️": KQOHVLjuoR,
  "🧜🏿‍♂️": suehMSzlHn,
  "🧜🏿": YtVhsRcXSf,
  "🧜‍♀️": bHApQeIYHU,
  "🧜‍♂️": uHgpnvQhtH,
  "🧜": dDSAaPtXEZ,
  "🧝🏻‍♀️": HNqXhcLAHN,
  "🧝🏻‍♂️": TioffbbUcO,
  "🧝🏻": JiiErfnVhM,
  "🧝🏼‍♀️": vkvqbJOifw,
  "🧝🏼‍♂️": NuGbjOwayV,
  "🧝🏼": VbaOEyhnqd,
  "🧝🏽‍♀️": jrSjkRxRmZ,
  "🧝🏽‍♂️": fdOOxxktPl,
  "🧝🏽": WXWNQmcSLb,
  "🧝🏾‍♀️": NKhjWNcIJS,
  "🧝🏾‍♂️": YeOYSzjcdB,
  "🧝🏾": NlrgtPmOQu,
  "🧝🏿‍♀️": ZjoLTbAOSb,
  "🧝🏿‍♂️": IHtAsJgzeF,
  "🧝🏿": dSguTEPgCD,
  "🧝‍♀️": uxjvfuWgGC,
  "🧝‍♂️": EZYRYvcBeH,
  "🧝": cWZitYJuwf,
  "🧞‍♀️": FweWnUVMZD,
  "🧞‍♂️": WOLTULSzXo,
  "🧞": PjakDfaQyz,
  "🧟‍♀️": qCBlhqQchm,
  "🧟‍♂️": koiMDjyMXX,
  "🧟": JbQeVLjHUZ,
  "🧠": fFrtYXCaAg,
  "🧡": xZQtKFUNGx,
  "🧢": limeUeJIyi,
  "🧣": CgSjHvUZHz,
  "🧤": FwqcrqVXRA,
  "🧥": qQnDrrPPda,
  "🧦": QymGfBnEKq,
  "🧧": oitMlKXeKQ,
  "🧨": pDAZlubXKu,
  "🧩": juZQxQEPZe,
  "🧪": KkbiedsEyr,
  "🧫": gVOfokpVaR,
  "🧬": FgXewtFzts,
  "🧭": BkciGEvqwR,
  "🧮": QybRFgGTcM,
  "🧯": YNSOZiTTSo,
  "🧰": GDHIUhEnPx,
  "🧱": JdaWNcPJQH,
  "🧲": RIpjdLcvcO,
  "🧳": xEwuxCUctC,
  "🧴": cWjNuOiWiK,
  "🧵": EQlWBxRFda,
  "🧶": mSCnPbKCPN,
  "🧷": EZekrMwwuh,
  "🧸": AtWLliJWuu,
  "🧹": TRCtPCCzvE,
  "🧺": GrfokvIecH,
  "🧻": PlqQqKOluR,
  "🧼": GPsSIKveEK,
  "🧽": pYoiCPoowB,
  "🧾": KpKIrLmRSS,
  "🧿": gPzurVBZQz,
  "🩰": XcxDGQvHUb,
  "🩱": xQYewYfGzu,
  "🩲": OGNEgPHVtK,
  "🩳": MKNOJKRlVu,
  "🩴": YiChipnezB,
  "🩵": mwzUrJGFIa,
  "🩶": neANDdaSMh,
  "🩷": EQGWCxWiFt,
  "🩸": ZRFNVzHezM,
  "🩹": vgFUhXNqVr,
  "🩺": ZXajAieupO,
  "🩻": gKvhsTwvSi,
  "🩼": SIIKjlKRPQ,
  "🪀": dGlsWzEMOK,
  "🪁": svizKLRkzM,
  "🪂": KxeKodYesT,
  "🪃": nhRCiPyphd,
  "🪄": wEtfkdMIHQ,
  "🪅": CzGsZtIWaB,
  "🪆": UlwlHwPuNt,
  "🪇": xPYzthdZgi,
  "🪈": aGaWAmKPRt,
  "🪐": mYMjTMvmxs,
  "🪑": nnyyJNDmHb,
  "🪒": ZrzKbQeHEU,
  "🪓": qOIQJtkAoP,
  "🪔": dxrnVmkOvt,
  "🪕": ifBIxXyQzu,
  "🪖": gSnEptvtna,
  "🪗": atroxsxSfN,
  "🪘": QvGGNwVmCb,
  "🪙": xBkRnmITHo,
  "🪚": xzVrUPvfuC,
  "🪛": eODLoRqWeD,
  "🪜": kNryDxKIMV,
  "🪝": deROgTQhug,
  "🪞": jFfOHgHXpI,
  "🪟": yMszYYpQuq,
  "🪠": OwwcgOhVAt,
  "🪡": bQlxPvcoDz,
  "🪢": hqGgzVHPgX,
  "🪣": wELcGOhVdK,
  "🪤": OZwMfevLzN,
  "🪥": kpzygopzPb,
  "🪦": IunAqDYueh,
  "🪧": cUWIYKdBaS,
  "🪨": PStHkuZVEo,
  "🪩": IYDIPWzgWY,
  "🪪": QwWFgnoFPI,
  "🪫": aEUyqEzSQV,
  "🪬": ECQXJkrxhh,
  "🪭": agPsYUzJUu,
  "🪮": CGCtOkBCxv,
  "🪯": OlbnKZSTKz,
  "🪰": VWpYdnQyxe,
  "🪱": dmZyAmApVg,
  "🪲": lOmnrLgnTY,
  "🪳": ERhPtXHrXE,
  "🪴": hrTvwbYuRz,
  "🪵": FLJeDKkATF,
  "🪶": DBhnjJJQJR,
  "🪷": WRfusEabpA,
  "🪸": NFWjwyOilH,
  "🪹": LOVJaOJKQo,
  "🪺": SIOTYTfAIK,
  "🪻": PtdeFSNrgp,
  "🪼": gyIEoBwVjO,
  "🪽": kxWfSobZuI,
  "🪿": zNMDEJZDDi,
  "🫀": CEdLNdkjhY,
  "🫁": oSfRrxWcYU,
  "🫂": EnCCLBiKyb,
  "🫃🏻": KJbWOdhJoT,
  "🫃🏼": PZxOEXUVSd,
  "🫃🏽": HUaiMqVMbZ,
  "🫃🏾": CtFhDCFscv,
  "🫃🏿": EmhkuppZMi,
  "🫃": MBvTdVLmCn,
  "🫄🏻": RdiyaZkCJL,
  "🫄🏼": NXNZyxoMCN,
  "🫄🏽": GxIDrqYRTf,
  "🫄🏾": BfYMclwGqK,
  "🫄🏿": OmWZEtemsN,
  "🫄": mqTBQBbKaj,
  "🫅🏻": yIDeYxkisk,
  "🫅🏼": ruMaYZAdga,
  "🫅🏽": iaRGnLQaeH,
  "🫅🏾": CXyJPXrFNI,
  "🫅🏿": uwxGQvFOeR,
  "🫅": RROswprAmZ,
  "🫎": SqCRerwmGj,
  "🫏": XXGVyPxppy,
  "🫐": sbugOccQsD,
  "🫑": GdRLCACSMv,
  "🫒": toEySbBhrf,
  "🫓": LypPAffRnQ,
  "🫔": GoZZQtwUco,
  "🫕": SoWJEcZshE,
  "🫖": BsVyLiZNzT,
  "🫗": lGUhRRQJNC,
  "🫘": rReKMRjOJP,
  "🫙‍🟥": LmAuoFuIzY,
  "🫙‍🟦": ntKcNZOGeF,
  "🫙‍🟧": jvjVCiSdbO,
  "🫙‍🟨": zWGFButVwN,
  "🫙‍🟩": nwSDouyPkV,
  "🫙‍🟪": CIkBYuInbf,
  "🫙‍🟫": lAPCoEwPeE,
  "🫙": JkwmnmHmIG,
  "🫚": FSNTNYvWHT,
  "🫛": CCbweKdTcU,
  "🫠": CSxHbzGZlk,
  "🫡": JCWfGmxHnR,
  "🫢": AwazCnTeYo,
  "🫣": PXAIHFvWRK,
  "🫤": CCBDvLcRoD,
  "🫥": aacRuPoXGW,
  "🫦": wGOEhqqELb,
  "🫧": kkxClEFdkf,
  "🫨": lYiivGRowa,
  "🫰🏻": jrhQLqpyfv,
  "🫰🏼": ttxZArwtbc,
  "🫰🏽": ridUIMqjCU,
  "🫰🏾": nOkNKCsney,
  "🫰🏿": iZhRartxOr,
  "🫰": CLuBLvSguR,
  "🫱🏻‍🫲🏼": gGVwZxICSh,
  "🫱🏻‍🫲🏽": lrDCdDfqga,
  "🫱🏻‍🫲🏾": bSXtuEFOVK,
  "🫱🏻‍🫲🏿": lyRXWQSrBQ,
  "🫱🏻": nTClBOIRYK,
  "🫱🏼‍🫲🏻": RSxlZyufnT,
  "🫱🏼‍🫲🏽": MqRNGqBWKw,
  "🫱🏼‍🫲🏾": BcuLKKwxkG,
  "🫱🏼‍🫲🏿": jjluxBxwMz,
  "🫱🏼": fwzoHJlsHK,
  "🫱🏽‍🫲🏻": OqKQtOfwbo,
  "🫱🏽‍🫲🏼": MrGCeTTSsz,
  "🫱🏽‍🫲🏾": SDVIWxXJvS,
  "🫱🏽‍🫲🏿": sPNNoFrVFe,
  "🫱🏽": qkkygJJlAi,
  "🫱🏾‍🫲🏻": DqhcEDueEG,
  "🫱🏾‍🫲🏼": AekNFCwzbK,
  "🫱🏾‍🫲🏽": pbZMeOBQJY,
  "🫱🏾‍🫲🏿": CRKWfSkebe,
  "🫱🏾": MClqIbZCmr,
  "🫱🏿‍🫲🏻": ZtAQdAnsTF,
  "🫱🏿‍🫲🏼": llKYUTevqO,
  "🫱🏿‍🫲🏽": hhTheWpHLS,
  "🫱🏿‍🫲🏾": xZLhjYRgem,
  "🫱🏿": cGjLHgIUgS,
  "🫱": OKCkrNkJEk,
  "🫲🏻": jValglNUNn,
  "🫲🏼": xGnVJmTLvO,
  "🫲🏽": agAojKraFK,
  "🫲🏾": TXPsNIZRVI,
  "🫲🏿": VeYBlVbfat,
  "🫲": pNRVdCnkTR,
  "🫳🏻": rQiMsTYWVE,
  "🫳🏼": PxoqbdSdZr,
  "🫳🏽": oUOuqeJTQD,
  "🫳🏾": efDDKVuzJK,
  "🫳🏿": gXvGDAlTKC,
  "🫳": PCEdneeisi,
  "🫴🏻": NWijhtzxqM,
  "🫴🏼": ddSPgpkMyf,
  "🫴🏽": tuyFMrSTSi,
  "🫴🏾": LRiwzIorAo,
  "🫴🏿": DuUJDyaJvX,
  "🫴": wRJQdcSigJ,
  "🫵🏻": wACZIsNiwg,
  "🫵🏼": cHtQfVHVdb,
  "🫵🏽": ewVrTKgvhb,
  "🫵🏾": rLiEiORZQC,
  "🫵🏿": dWzQOkDDOt,
  "🫵": SdKWHlDBSI,
  "🫶🏻": FPlXiUpvnm,
  "🫶🏼": iUIjBKMJkV,
  "🫶🏽": itruYJMlnC,
  "🫶🏾": uyNKuHcIuX,
  "🫶🏿": BhvrsJWgPo,
  "🫶": axlIvMxZNx,
  "🫷🏻": HsscaSQvZh,
  "🫷🏼": bNpnQrMPhV,
  "🫷🏽": mkUfEcwBNe,
  "🫷🏾": ermnxlxWrR,
  "🫷🏿": YYaxcDTfss,
  "🫷": mHXRmuQfIE,
  "🫸🏻": RfQAsgTmet,
  "🫸🏼": SIcQsgwjxZ,
  "🫸🏽": SOHlQrehVl,
  "🫸🏾": mqdoMBElCw,
  "🫸🏿": qjoKbdXFbT,
  "🫸": vHYobeXYPY,
  "🯅": SmDheCVFco,
  "🯆‍👗": cWrNoURvul,
  "🯆": tTZWMsYUPQ,
  "🯇‍👗": JLXAlrkFVb,
  "🯇": EPubucuEql,
  "🯈‍👗": txhBNFfuNo,
  "🯈": AlbeOxgfJN,
  "🯉": fmdnGVHRFG,
  "‼️": LsTqaErSXY,
  "⁉️": druWzXAhbn,
  "℗": lFlqopHflu,
  "℠": OfQxxQZQmh,
  "™": PhNsMOgMEY,
  "ℹ": fRhFUBfKWs,
  "↔": jazpxLiQrh,
  "↕": aZvRyshKxp,
  "↖️": KoZXlcHCti,
  "↗️": IiLmlGhttr,
  "↘️": sSUFEWRMoM,
  "↙️": QpTlguneVj,
  "↩️": ngWGDPxdjP,
  "↪️": HnTxQkVdfV,
  "⊜": jDVioxhiUn,
  "⌚": cysBNWQEGT,
  "⌛": QqaRNLizIC,
  "⌨": EmCKhAbrAM,
  "⏏": xXbKNDkwsC,
  "⏩": XXRsPUwjKI,
  "⏪": WCwppbLuqH,
  "⏫": KnvMTVVSnw,
  "⏬": qffXIuPIsf,
  "⏭": ErYbrrriyt,
  "⏮": UMUBgfEuho,
  "⏯": dawPYomVWR,
  "⏰": IQgVjbMlCm,
  "⏱": xcxhrYfJsN,
  "⏲": vLmeCAoybl,
  "⏳": wvtMVXuEiD,
  "⏸": CREXXlprMM,
  "⏹": hoefYHtcMU,
  "⏺": OlHBJYhHul,
  "⏻": FMMFizPkqP,
  "⏼": uOJEvheiwq,
  "⏽": LiiSXwDmmX,
  "⏾": EriUCstGDu,
  "Ⓜ": GavcqljykT,
  "□": CcGRNaCzAR,
  "▪": kEtkyxdXse,
  "▫": CDmFZHpiGu,
  "▬": JthUseFfhB,
  "▭": GsTNSDxtzF,
  "▮": PRJqBoGGEp,
  "▶": FeUzlCYKed,
  "◀": ujtwmrRwdJ,
  "◉️‍🔴‍▮️": nJdbzUPXWW,
  "◉️‍🔴": SVemTbNkMS,
  "◉": bbDgibuAgK,
  "◐": TvorFAhQRt,
  "◑": ZMfXKUnWIq,
  "◧": mGGamGQQfb,
  "◨": zfBNLKrRtS,
  "◩": tSJlwwtykc,
  "◪": sKOyuqLvjo,
  "◭": dxuNFWClVP,
  "◮": oyUknhdWsX,
  "◻": tfKxRUcKxa,
  "◼": WLAVAsYtad,
  "◽": dCuvHjeMfy,
  "◾": FBVihhfLfS,
  "☀️": FnIiLklJZO,
  "☁": DgjUzDxQya,
  "☂": uigwjbBIMx,
  "☃": iQdjdfSwPZ,
  "☄": gUvKgsCWVC,
  "★": DNkhhUahZo,
  "☎": yAYgixrnFZ,
  "☑": ZfBlezSSuq,
  "☔": LrQijKMzuo,
  "☕": rCIhQytxOg,
  "☘️": cGzPoGIqDM,
  "☝🏻": XLhBIHnXZL,
  "☝🏼": wYkmcbPYLT,
  "☝🏽": UlSvPgJBKx,
  "☝🏾": euxMdWnQxG,
  "☝🏿": kNBoaSRyzq,
  "☝": pddZwXlWcx,
  "☠": pbuUNRDpEc,
  "☢": QQSapYylZI,
  "☣": fjuRZZdkIH,
  "☦": cITIAZYPTt,
  "☪": slSbsdQmfI,
  "☮": IHRrVEuuds,
  "☯": ZQqcqUDhoU,
  "☸": PdPHsfxokq,
  "☹": ZLbIczLDMy,
  "☺": cNIxdtMVWI,
  "♀": kBoVfHRnrV,
  "♂": IRusfIkXSd,
  "♈": jRwuqBITem,
  "♉": QgHjDMLRSY,
  "♊": UQWkRdGNOV,
  "♋": lfGZyWQjId,
  "♌": UxeaQXdDfc,
  "♍": upmefmISZO,
  "♎": FSqZmPnGYr,
  "♏": YzJFYiiXwg,
  "♐": VACFnrkmlI,
  "♑": FzJywAYsCD,
  "♒": wnfmatURBE,
  "♓": EUYdDcykCb,
  "♟": DzJqHdgjNT,
  "♠": QntojsYHOM,
  "♣": bvvueaPNau,
  "♥": RSMHeoMLoN,
  "♦": EcGSFtBNNr,
  "♨": GHoBKDSdaJ,
  "♻": lShRUZuSvG,
  "♾": JZpjIAvTCf,
  "♿": FVCtmoVxep,
  "⚑️‍🟥": nZEWJpyTAi,
  "⚑️‍🟦": yRaerzeCwy,
  "⚑️‍🟧": jZweeeGWpS,
  "⚑️‍🟨": MFhglyNxJN,
  "⚑️‍🟩‍★️": tMAlAAucTS,
  "⚑️‍🟩": mAozEcqXTP,
  "⚑️‍🟪": jSHthJnsWT,
  "⚑️‍🟫": XkaJkrtYZW,
  "⚒": xHeYsyHfNV,
  "⚓": fkTzIDyuwx,
  "⚔": GkLyfRyZMD,
  "⚕": ihNoFgPByL,
  "⚖": pYPBHHIXAh,
  "⚗": QqQHBTUaJa,
  "⚙": buNwPujEsK,
  "⚛": IfNlYmsVHZ,
  "⚜": LvyECddXAU,
  "⚠": uGAPTTpvYX,
  "⚡": UDixmRvgTA,
  "⚧": VGKPUvFMYx,
  "⚪": qOKQuNsHEF,
  "⚫": qkmJsqNwPx,
  "⚰": SAiMrbyvFv,
  "⚱": ylDhhocCxQ,
  "⚽": elbzqxcjZX,
  "⚾": LvzZfzctcD,
  "⛄": yxWhFiUkFS,
  "⛅": wPmSIykWrS,
  "⛈": gxdtmDIqzC,
  "⛎": AeSUOTlztV,
  "⛏": UbfWdZjPEe,
  "⛑": XViWpHeedj,
  "⛓": sQEYClcWBr,
  "⛔": BTIEiHcUDl,
  "⛩": sQDtLaqXVl,
  "⛪": NPAxaPYpha,
  "⛰": nTFGTruuaY,
  "⛱": vwbxYvvead,
  "⛲": iZtNajcixm,
  "⛳": RjYCYrrQha,
  "⛴": NgGYrpiRpV,
  "⛵": dVixNRZNza,
  "⛷": XaPLvpQoqq,
  "⛸": BwZEQdKnIS,
  "⛹🏻‍♀️": BJqitbqMTh,
  "⛹🏻‍♂️": uJcHnlZDZQ,
  "⛹🏻": oGvzctoPxk,
  "⛹🏼‍♀️": gPNHekxXJE,
  "⛹🏼‍♂️": ccCsElsjmH,
  "⛹🏼": rGjkySmYdj,
  "⛹🏽‍♀️": QWbdLQpfxa,
  "⛹🏽‍♂️": XNNkENumtn,
  "⛹🏽": nEXMpVCikJ,
  "⛹🏾‍♀️": VlWrgrhtNm,
  "⛹🏾‍♂️": wcOidVRqny,
  "⛹🏾": jHRehnGiMi,
  "⛹🏿‍♀️": FHqCzblwhC,
  "⛹🏿‍♂️": bUEEjFkNFj,
  "⛹🏿": MjujwpPVfU,
  "⛹️‍♀️": nUBMplecxp,
  "⛹️‍♂️": pGYUmFpnws,
  "⛹": tkPXDriPVb,
  "⛺": jVUTQhyGWR,
  "⛽": stfrJcqoNg,
  "✂": gdKnebpTeJ,
  "✅": bWAjSItrNZ,
  "✈": QEXFRKLJJr,
  "✉": hNUFbovISZ,
  "✊🏻": KnZjtsyrjL,
  "✊🏼": MwFsusaUmQ,
  "✊🏽": IeFWLglzOL,
  "✊🏾": CJydYoDfkK,
  "✊🏿": LkrBEvylEQ,
  "✊": jLYAfxcqzX,
  "✋🏻": gkMoogFwKI,
  "✋🏼": dcIhDFwIyF,
  "✋🏽": asYozjNFXp,
  "✋🏾": QVkzdWpqae,
  "✋🏿": FPPcJaiFaw,
  "✋": xxTLjCVBWg,
  "✌🏻": jUTEXwpmtt,
  "✌🏼": pVxIniNbkx,
  "✌🏽": YzKqSsNcWc,
  "✌🏾": xDWOrJZFuo,
  "✌🏿": eTEGRELGqK,
  "✌": OsbZvaKDyo,
  "✍🏻": untezWqseb,
  "✍🏼": vlLSQouFst,
  "✍🏽": XheJXWRVWU,
  "✍🏾": NoYUlJFBTJ,
  "✍🏿": GXRjEcoYIn,
  "✍": LkEgyPyrZV,
  "✏": VNYuApMpHE,
  "✒": CZMaCHsAyH,
  "✔": QXPUBHDORA,
  "✖": uzQLCdlDuG,
  "✝": KLNNMycPCb,
  "✡": GtcHhzEDOD,
  "✨": QSGbsXwJRJ,
  "✳": WlzwinuPtp,
  "✴": YOFfLxxbta,
  "❄": ONNzQGYGwu,
  "❇": xLsjGMyspF,
  "❌": ctlwnKcgcF,
  "❎": zITRWqnUno,
  "❓": MffKkJvcjl,
  "❔": sLtYJqoYyP,
  "❕": WilhajqVkp,
  "❗": hTYFOEVaSi,
  "❣️": kNxyxOLCwH,
  "❤️‍🔥": ypPYsKOuOE,
  "❤️‍🩹": QaibyTaVnB,
  "❤": UaFylpeWpB,
  "➕": YLXKVclylH,
  "➖": mFYHPtGwgu,
  "➗": tAJSVfUHjz,
  "➡️": tserKbbaGr,
  "➰": plioQQsyDl,
  "➿": TJWBPxTaTZ,
  "⤴️": ywzXJYkzDL,
  "⤵️": FumEHbFpQT,
  "⬅️": EUfTpcclZE,
  "⬆️": asvIooETrI,
  "⬇️": YeBsUcYKMo,
  "↔️": MjVFmCqAVq,
  "↕️": XHsiOnmFao,
  "⬛": WcSvjAewdU,
  "⬜": SAxMsMBKda,
  "⬟": WTjdBEVbhA,
  "⬠": hNiVKvEHZO,
  "⬡️‍🌈": XolVcfqfUP,
  "⬡️‍🟥": nKnzWkjTZv,
  "⬡️‍🟦": QvexYtrkBZ,
  "⬡️‍🟧": GlzxyMvlaN,
  "⬡️‍🟨": DacZTtkQIe,
  "⬡️‍🟩": tzbzNfDBOf,
  "⬡️‍🟪": eGhseCFqlf,
  "⬡️‍🟫": EeJsYFmFic,
  "⬡": HOFxdDIgfG,
  "⬢": EvFBLvrsWo,
  "⬣": DvIQfpeaPh,
  "⬤": rRDPMydpld,
  "⬮": nMxdznykdz,
  "⬯": faEkTJTEPD,
  "⭐": orcfpyGfSC,
  "⭕": csPxuBvIei,
  "⭘": GfZPriqFAR,
  "⮏": HXsvlZNmWP,
  "⮺": kpDyaOXXSt,
  "⮻": mSdBpGDlZg,
  "⮼": favOZVNYjX,
  "⯃": DnmZkdqMHd,
  "⯄": dgLtinSCUW,
  "⯪": GFgapMnBBb,
  "⯫": tphJvGsQNY,
  "〰": XhTkSLCufG,
  "〽": nnUsUXvsQe,
  "㊗": kZkNrpauOH,
  "㊙": tnmsWZarvv,
  "": RFYTMuMWGI,
  "": mHHhDdNhJT,
  "": zvvQzQtcdp,
  "": yGXsdCecBp,
  "": ZctnGXjgPt,
  "": IibnrEUZWv,
  "": RQjicgjpSw,
  "": GjAzJvMfkf,
  "": HwdrHpbZHd,
  "": XpxHZIhGiA,
  "": JQkFRtaoCB,
  "": NpXqTXRKUk,
  "": wZEYIzhbBd,
  "": qpNHajpAqg,
  "": rmxyIciPmL,
  "": gLqkFsMXyj,
  "": YhzyCIewzz,
  "": ygKQtAwGLs,
  "": eTIvWxamyj,
  "": zwfFZtmWMb,
  "": JthYmniYQs,
  "": cSCbBKbteG,
  "": WcwwCkCkcy,
  "": AAAIVaZxlK,
  "": fUWwwVUcBl,
  "": QpPrsKSxiu,
  "": vzPclhgkwI,
  "": wXcIHdwyow,
  "": mosHYnCDKJ,
  "": zxypaWvONn,
  "": YgwdnpVvpD,
  "": nGexEYlLHb,
  "": uehRsnKAKZ,
  "": TzyMKCBejj,
  "": FgwTfwrEfx,
  "": HXTUrDnQpv,
  "": mbXOGSoFVU,
  "": EFSKXMPWDz,
  "": uyGVERMWtF,
  "": XGSfFWldzI,
  "": GucwmvpGRj,
  "": QUZGOZpxhw,
  "": uiPMnnxlqQ,
  "": kssMDBWWZp,
  "": hhkaPrPwvi,
  "": YFgpJhKoMf,
  "": EvnzESYJSA,
  "": gYnULsybaM,
  "": YsgKaHzjcW,
  "": AhSJUwnzkt,
  "": IzIshlLtvd,
  "": pGTktSuvqP,
  "": DhvtqSqnYL,
  "": XYgVZCSxqC,
  "": zNMIsPOMML,
  "": IwOtQTmwTY,
  "": fmQWxQNsEI,
  "": YpWulqgiHW,
  "": apgYMcEiZs,
  "": oISHqBtKFB,
  "": aTYmYVkbqx,
  "": JQrEiaIxRT,
  "": mVKLOWIPus,
  "": gAmksnhGLf,
  "": jVCVrobiuw,
  "": RKrUYLekyv,
  "": qjCocFUtJH,
  "": SHOUCkkHVQ,
  "": TSsIWMZfaW,
  "": YosthEuPEj,
  "": YQJjLHNHnm,
  "": TVNbWuwMvK,
  "": yGHJSKXemu,
  "": kRPwczodKJ,
  "": ySKXQCSqsz,
  "": miJzRBDRqi,
  "": PvsKBJCYEO,
  "": WEceDyqVxo,
  "": zmCtCvvcdG,
  "": hRDDEhQSEh,
  "": VZsVfWorBb,
  "": ORYMqKjoLz,
  "": GvvqjRdexO,
  "": zXujqgvvuu,
  "": NbOhwvHDvy,
  "": TuyIdRtgtt,
  "": wYOLYrhVFI,
  "": RjxRYwIVUS,
  "": vpqCdTPgnU,
  "": UhdYzSVaoh,
  "": tqPEiBefKr,
  "": bQSrxyXSKm,
  "": sGYeVCUkYI,
  "": FwOjepQIIl,
  "": ATyzGEdRJB,
  "": cJmNLNHJZm,
  "": egjTVQWHGg,
  "": bpIGAMyAEM,
  "‍♀️": JEACimnrjq,
  "‍♂️": QIOCHyOGav,
  "": xlDliOQZGd,
  "‍♀️": fDgzNSIwmE,
  "‍♂️": HLNOrjbiYD,
  "": KSyYDDDMWp,
  "": FGMVsrLSjl,
  "": zQOqWTctSs,
  "": LPsBBHogiN,
  "": ilbxCzPGRJ,
  "": mGcwqQcsTs,
  "": RDoUgthdun,
  "": xuhYxHkXSF,
  "": bBCEDjjeLn,
  "": mbZuBuQqGb,
  "": HYuMzxFnQS,
  "": OhRviCzgyN,
  "": ALdIoCKVbT,
  "": rHTReUxaqY,
  "": gWFrtwBjqn,
  "": HVbhyzRjNl,
  "": tRctIOQcIt,
  "": TsJUebGCPs,
  "": sIgalTJbeu,
  "": jDTXYYXMAx,
  "": PzZazkRoCm,
  "": XZUlyiSpYC,
  "": bMNtamCHHC,
  "": oHBpdQwrgP,
  "": UqsPIiQzVy,
  "": xCniKvixXX,
  "": evdHoXrvHQ,
  "": SWFQZCEvYI,
  "": lIPrSSoEny,
  "": rHjWdTpGcf,
  "": WVrEITTnji,
  "": QZYyweTomw,
  "": otSAIbNuSK,
  "": ecGwlTRmUC,
  "": YTieRMMLXq,
  "": ScUlQogRYt,
  "": uWyBfojBBo,
  "": tirSBYZrie,
  "": yDWYmTcIPa,
  "": wXYJLAvvWG,
  "": zKzyJWDkwK,
  "": HoHOFuHYra,
  "": jxNuhuxsAL,
  "": FDihjkUiJX,
  "": PyIjqmHwZj,
  "": IicrfteArN,
  "": NyJCcHTcpl,
  "": ALUijinpUL,
  "": ofEOEOFDSP,
  "": spAQmEVkgU,
  "": vFpZNicFjF,
  "": qyVqprGaWS,
  "": cSkCxgkJGY,
  "": kmnNFXVjMX,
  "": tizjeZCGtK,
  "": iLRkGxRSdw,
  "": gGhOXEVdvI,
  "": dDVzFyyzhH,
  "": xFfunAQKDd,
  "": ctTcnayFHl,
  "": MFuNGwuSuC,
  "": ljElKwTJrj,
  "": kuordztOby,
  "": JnCfMWIGVX,
  "": hOfPPASIpK,
  "": HHReVmxrpU,
  "": SwjHEdlxNg,
  "": vxPEesLLGj,
  "": KmtdWGNGaH,
  "": UeXnNLmcLc,
  "": tjzozqecVb,
  "": HbOMXIijDd,
  "": DEeclPeLFq,
  "": kqDPggkcRj,
  "": XoXVlQitSQ,
  "": CftbKGdPXT,
  "": fjHVddIQYA,
  "": uQrFJfEBNG,
  "": ppYcrCwgFi,
  "": pgXFyeQXYZ,
  "": eJLHCeOXBX,
  "": muokGlmVSu,
  "": LdsfynFISk,
  "": RWQmfOnBqG,
  "": MUmWDkExjR,
  "": DjZtMpsoWZ,
  "": WDdDShKstd,
  "": BmipqGdLTQ,
  "": hsLkqMSbSW,
  "": UVumONUcjA,
  "": oufsVyxfio,
  "": zFthQAGgwh,
  "": sBVQnPuhqi,
  "": PfcilUlaDY,
  "": npxnCkZiww,
  "": GjcSnthcFC,
  "": hHtTTuQMEt,
  "": CFwqEfyYAc,
  "": cbRHawtkeX,
  "": xQWrpIopKB,
  "": nWFcMSVwhH,
  "": jjtlAIuluh,
  "": NCOvfcrYFt,
  "": EUFsPFPwCQ,
  "": kQiNBOGXOb,
  "": TcFXtkIRmz,
  "": jhHiWrawXC,
  "": EIjNLPGbdP,
  "": ZBbunCSMmB,
  "": cEHwyGjODu,
  "": LjhvIgzSSY,
  "": lnFfYrUPka,
  "": PcsavzBpHF,
  "": XyjnSzmgAE,
  "": xVJmQDwwHY,
  "": QDoQxLynZX,
  "": QKZGfYdmVp,
  "": cyOBVyPmPe,
  "": kYTaVFQckv,
  "": FfEicHqlSb,
  "": gOBFNMZnKq,
  "": sahVbpVVGy,
  "": ZIBKJkZDzF,
  "": uqdFpDpvbX,
  "": CFUsTlOrWR,
  "": bBJXVIcvzP,
  "": gXjJRjJpOg,
  "": VrrNFYpoYG,
  "": teoHIGKwfW,
  "": HpEsMXlFTa,
  "": pLBvCxwByL,
  "": LpeOkjxcwT,
  "": IaacJhadjb,
  "": XBplNYgXkY,
  "": DMBjeWMkRV,
  "": XLGkmYUcaO,
  "": gcMcmugXDN,
  "": ftADryOMsz,
  "": jYOljPnUVD,
  "": AlGatQeyIO,
  "": vntzrlMusr,
  "": vHurbuqYuT,
  "": GApbjooqhY,
  "": olFRseZdfP,
  "": mzrSANkgoU,
  "": lSaFfpgXYy,
  "": fjoVFALzGE,
  "": zYToeTEQKS,
  "": fscecdGgdn,
  "": uOODRnnBOU,
  "": UNwdusupAc,
  "": gaHHVcjWBI,
  "": JRJeGhnkNS,
  "": mAjxqGwyMg,
  "": bGwLXQjHex,
  "": zmqBeyqpXu,
  "": fAXDXNYRPx,
  "": CZrXkPDvNF,
  "": ktuOltyCSL,
  "": FPtKRxKSoQ,
  "": FNqmeIiPLw,
  "": AechduEEmT,
  "": BEhvbcjDLI,
  "": HmRNpmnxmq,
  "": rEDMuskSQw,
  "": spfeaWoYgc,
  "": YWsTzJoDss,
  "": vJwGJrHPZK,
  "": nNbQLeivSM,
  "": drzBlKlxHI,
  "": IwySqZiwGf,
  "": PadVDhTqav,
  "": cWiGbcjNkh,
  "": byUiQpLtUt,
  "": QoUBxAHvsW,
  "": nQvufOwqVt,
  "": qUuTdbgJwb,
  "": KAnFRUuYfg,
  "": nFdLWsSPZu,
  "": kEtZnKDJhp,
  "": vdaSlYgKLZ,
  "": KPAtjqecxa,
  "": jOKzhDohcK,
  "": XwtQRsMOpI,
  "": MKlOjuqkmZ,
  "": EeiEeEjHWy,
  "": jpnWAeRVIm,
  "": dmSKFPFVoj,
  "": KGchjaQOBQ,
  "": BaFTiOzyyW,
  "": gNeswHDXcI,
  "": ioHPiryuPZ,
  "": dTpblWLzar,
  "": rLNEckfWMA,
  "": zyXayUAPJv,
  "": lHXGzOGLym,
  "": LEWkEfCZYb,
  "": UEyFmgFlDx,
  "": wbqXdyDbVK,
  "": UQQOQMEbAK,
  "": oLyvOGkRbz,
  "": NCzmFUZtWU,
  "": VDpHNPTDBl,
  "": OfsVmomuZY,
  "": xgsBWMvixP,
  "": CHiqEwMKXx,
  "": VvogqckruU,
  "": zjAQjibWFj,
  "": dtJgsMiFpB,
  "": NepTCqdDtW,
  "": GEUVyifxsF,
  "": DJDHKgKUfa,
  "": EZMkcHkkrt,
  "": EBSYvdEjlM,
  "": QoheNSyMoM,
  "": HJtbAQIrTJ,
  "": xwsgEFNEqO,
  "": BNgDOLnegk,
  "": jdVLCJCnff,
  "": dvxRDArkcl,
  "": viRRshkWRS,
  "": MIyeIvtuIH,
  "": wWNIytaaCx,
  "": ZqOFvPsiPq,
  "": NwxIFrKDfc,
  "": fDCEOcDpUD,
  "": kaAnAaBaXP,
  "": FPeRbotwof,
  "": CghBZWqrOT,
  "": EZlQHIiVXR,
  "": MFQEAFEfhF,
  "": zXXQnqOwOw,
  "": gYThLlQpLc,
  "": BOHxuNeYmH,
  "": xpDilbcvFF,
  "": pRGXJnkmzz,
}


import cover from "/public/common/black_cover.webp";
import icon_frame from "/public/common/icon_frame.webp";

// icons
import alter from "/public/icons/alter.webp";
import camp from "/public/icons/camp.webp";
import cave from "/public/icons/cave.webp";
import dock from "/public/icons/dock.webp";
import dungeon from "/public/icons/dungeon.webp";
import forge from "/public/icons/forge.webp";
import fort from "/public/icons/fort.webp";
import graveyard from "/public/icons/graveyard.webp";
import house from "/public/icons/house.webp";
import mine from "/public/icons/mine.webp";
import ruines from "/public/icons/ruines.webp";
import sheild from "/public/icons/sheild.webp";
import stable from "/public/icons/stable.webp";
import tavern from "/public/icons/tavern.webp";
import temple from "/public/icons/temple.webp";
import town1 from "/public/icons/town1.webp";
import town2 from "/public/icons/town2.webp";
import village from "/public/icons/village.webp";

// //DnD

import blue_drake from "/public/DnD/blue_drake.webp";
import firemane_angel from "/public/DnD/firemane_angel.webp";
import gremorly_ghost from "/public/DnD/gremorly_ghost.webp";
import kenna from "/public/DnD/kenna.webp";
import snow_queen from "/public/DnD/snow_queen.webp";
import captain_xendros from "/public/DnD/captain_xendros.webp";
import gertrube from "/public/DnD/gertrube.webp";
import grung_green from "/public/DnD/grung_green.webp";
import mezzoloth from "/public/DnD/mezzoloth.webp";
import temple_dog from "/public/DnD/temple_dog.webp";

import dandelion from "/public/DnD/dandelion.webp";
import giff from "/public/DnD/giff.webp";
import grung_red from "/public/DnD/grung_red.webp";
import mind_eye from "/public/DnD/mind_eye.webp";
import duodrone from "/public/DnD/duodrone.webp";
import vampire from "/public/DnD/vampire.webp";
import githyanki from "/public/DnD/githyanki.webp";
import grung_yellow from "/public/DnD/grung_yellow.webp";
import oni from "/public/DnD/oni.webp";

import gnome_ceremorph from "/public/DnD/gnome_ceremorph.webp";
import vecna_impersonator from "/public/DnD/vecna_impersonator.webp";
import shemeshka from "/public/DnD/shemeshka.webp";



// openmoji


import cat_grey_face_heart_eyed from "/public/openmoji/custom/1F63B-grey.svg";
import cat_grey_face_kissing from "/public/openmoji/custom/1F63D-grey.svg";
import cat_grey from "/public/openmoji/custom/1F431-grey.svg";

import star_empty from "/public/openmoji/custom/2B50-empty-star.svg";







import JfpCaPDAen from "/public/openmoji/0023-FE0F-20E3.svg";
import gUFIjABSyP from "/public/openmoji/002A-FE0F-20E3.svg";
import zbIdQLlQgM from "/public/openmoji/002D.svg";
import KTVsiKUKWw from "/public/openmoji/0030-FE0F-20E3.svg";
import uCdERYopxN from "/public/openmoji/0031-FE0F-20E3.svg";
import WNPViHDkkg from "/public/openmoji/0032-FE0F-20E3.svg";
import kqGGaGCCEx from "/public/openmoji/0033-FE0F-20E3.svg";
import nNEDCmxQFY from "/public/openmoji/0034-FE0F-20E3.svg";
import EumrJqJDMd from "/public/openmoji/0035-FE0F-20E3.svg";
import eJgTvcANxM from "/public/openmoji/0036-FE0F-20E3.svg";
import TjGrxUpsLY from "/public/openmoji/0037-FE0F-20E3.svg";
import TtMMcIsmii from "/public/openmoji/0038-FE0F-20E3.svg";
import LXzUyokyXT from "/public/openmoji/0039-FE0F-20E3.svg";
import mrEDYdfuyf from "/public/openmoji/00A9.svg";
import EYJRybQIPB from "/public/openmoji/00AE.svg";
import VFYZJjXEvo from "/public/openmoji/1F004.svg";
import ZoBGlVnXgD from "/public/openmoji/1F0CF.svg";
import QeRCHxhSSN from "/public/openmoji/1F10D.svg";
import DbrvvjyCqZ from "/public/openmoji/1F10E.svg";
import iFakCxqCOe from "/public/openmoji/1F10F.svg";
import QZmunxZmBb from "/public/openmoji/1F12F.svg";
import sPNxZRovht from "/public/openmoji/1F16D.svg";
import ZVulHlnIrr from "/public/openmoji/1F16E.svg";
import iWStORXNbb from "/public/openmoji/1F16F.svg";
import DoOavCYNpd from "/public/openmoji/1F170.svg";
import MFpkDaxvUk from "/public/openmoji/1F171.svg";
import yeLIHxCvbj from "/public/openmoji/1F17E.svg";
import ddpLvAnnKl from "/public/openmoji/1F17F.svg";
import UrDxtuDcQl from "/public/openmoji/1F18E.svg";
import TinTfwkkuB from "/public/openmoji/1F191.svg";
import TcePrQNydI from "/public/openmoji/1F192.svg";
import ONRxuPYNXR from "/public/openmoji/1F193.svg";
import zLAphnOgLW from "/public/openmoji/1F194.svg";
import rEbbmlMSFE from "/public/openmoji/1F195.svg";
import cCHWRpLLmW from "/public/openmoji/1F196.svg";
import YaicEiuTrt from "/public/openmoji/1F197.svg";
import RYSJetADKy from "/public/openmoji/1F198.svg";
import yXQfjbjOzS from "/public/openmoji/1F199.svg";
import ECGZQTISta from "/public/openmoji/1F19A.svg";
import SnpPJsOCXs from "/public/openmoji/1F1E6-1F1E8.svg";
import xmtoXMdHwS from "/public/openmoji/1F1E6-1F1E9.svg";
import oAuXJKIRgP from "/public/openmoji/1F1E6-1F1EA.svg";
import RekMFElQrB from "/public/openmoji/1F1E6-1F1EB.svg";
import nzVOCzJJqB from "/public/openmoji/1F1E6-1F1EC.svg";
import dKTiJlAeVF from "/public/openmoji/1F1E6-1F1EE.svg";
import FTXzetyOGl from "/public/openmoji/1F1E6-1F1F1.svg";
import UBRQFziODH from "/public/openmoji/1F1E6-1F1F2.svg";
import SwnVmitGVt from "/public/openmoji/1F1E6-1F1F4.svg";
import BwZPNorqkO from "/public/openmoji/1F1E6-1F1F6-1F48E.svg";
import OXyZnhBrrH from "/public/openmoji/1F1E6-1F1F6.svg";
import PsaCVWCFPW from "/public/openmoji/1F1E6-1F1F7.svg";
import bmwJyaBaDL from "/public/openmoji/1F1E6-1F1F8.svg";
import ffnpJfqJaF from "/public/openmoji/1F1E6-1F1F9.svg";
import VxGNugfhXK from "/public/openmoji/1F1E6-1F1FA.svg";
import zYeqhfvPRq from "/public/openmoji/1F1E6-1F1FC.svg";
import BbTBIyuePi from "/public/openmoji/1F1E6-1F1FD.svg";
import UUZgDdHClt from "/public/openmoji/1F1E6-1F1FF.svg";
import DsebswDaLN from "/public/openmoji/1F1E6.svg";
import weBDzjLWRw from "/public/openmoji/1F1E7-1F1E6.svg";
import btpEmLYDjX from "/public/openmoji/1F1E7-1F1E7.svg";
import jnBjssLsVo from "/public/openmoji/1F1E7-1F1E9.svg";
import QpeGvYJSNG from "/public/openmoji/1F1E7-1F1EA.svg";
import HhCUgSJTWx from "/public/openmoji/1F1E7-1F1EB.svg";
import KQpYgKBMzD from "/public/openmoji/1F1E7-1F1EC.svg";
import haJoKcXQfz from "/public/openmoji/1F1E7-1F1ED.svg";
import USIqQYeCIH from "/public/openmoji/1F1E7-1F1EE.svg";
import LAtiQVwTGi from "/public/openmoji/1F1E7-1F1EF.svg";
import exCVttwDPL from "/public/openmoji/1F1E7-1F1F1.svg";
import XivgRbEAKH from "/public/openmoji/1F1E7-1F1F2.svg";
import HdacfxMlht from "/public/openmoji/1F1E7-1F1F3.svg";
import GUvlFBnblK from "/public/openmoji/1F1E7-1F1F4.svg";
import AscbjGxSwl from "/public/openmoji/1F1E7-1F1F6.svg";
import VmQIeabeBQ from "/public/openmoji/1F1E7-1F1F7.svg";
import kBxjxTkJIn from "/public/openmoji/1F1E7-1F1F8.svg";
import whLHTUgyna from "/public/openmoji/1F1E7-1F1F9.svg";
import aOgHMUasnX from "/public/openmoji/1F1E7-1F1FB.svg";
import ipHJLenVvI from "/public/openmoji/1F1E7-1F1FC.svg";
import sqcNHSeuqa from "/public/openmoji/1F1E7-1F1FE.svg";
import oGtFERmciF from "/public/openmoji/1F1E7-1F1FF.svg";
import HEIIKLSNkq from "/public/openmoji/1F1E7.svg";
import JjIBnGoYqT from "/public/openmoji/1F1E8-1F1E6.svg";
import ETnVQBeEbT from "/public/openmoji/1F1E8-1F1E8.svg";
import SzMmVemlAt from "/public/openmoji/1F1E8-1F1E9.svg";
import DQgEDLINdN from "/public/openmoji/1F1E8-1F1EB.svg";
import DNlSynzNwm from "/public/openmoji/1F1E8-1F1EC.svg";
import ddELXexRoR from "/public/openmoji/1F1E8-1F1ED.svg";
import VLofxbJDBW from "/public/openmoji/1F1E8-1F1EE.svg";
import UTAFdRarbn from "/public/openmoji/1F1E8-1F1F0.svg";
import tzMkfjjFOI from "/public/openmoji/1F1E8-1F1F1.svg";
import CbBNcVKdPb from "/public/openmoji/1F1E8-1F1F2.svg";
import QXFYndBFyr from "/public/openmoji/1F1E8-1F1F3.svg";
import uxvvJHMSrD from "/public/openmoji/1F1E8-1F1F4.svg";
import TLiWcZDCCZ from "/public/openmoji/1F1E8-1F1F5.svg";
import OMfUmDeymu from "/public/openmoji/1F1E8-1F1F7.svg";
import vHgdwQlSXR from "/public/openmoji/1F1E8-1F1FA.svg";
import zSGnaRYdsm from "/public/openmoji/1F1E8-1F1FB.svg";
import BwuHuVAPnp from "/public/openmoji/1F1E8-1F1FC.svg";
import rwkQrsAzxr from "/public/openmoji/1F1E8-1F1FD.svg";
import nEuiweBUxL from "/public/openmoji/1F1E8-1F1FE.svg";
import nRvSfnOUbM from "/public/openmoji/1F1E8-1F1FF.svg";
import YsdAVlzjqE from "/public/openmoji/1F1E8.svg";
import fPRLmlyYet from "/public/openmoji/1F1E9-1F1EA.svg";
import lPcaocNBFY from "/public/openmoji/1F1E9-1F1EC.svg";
import cZFehErPPw from "/public/openmoji/1F1E9-1F1EF.svg";
import QzTFTPKkOT from "/public/openmoji/1F1E9-1F1F0.svg";
import vtXItVvlFK from "/public/openmoji/1F1E9-1F1F2.svg";
import LUymdvLprv from "/public/openmoji/1F1E9-1F1F4.svg";
import viNcuiiAtU from "/public/openmoji/1F1E9-1F1FF.svg";
import YdDjImdDAn from "/public/openmoji/1F1E9.svg";
import oEFKkIMCog from "/public/openmoji/1F1EA-1F1E6.svg";
import XNttXWpiJu from "/public/openmoji/1F1EA-1F1E8.svg";
import uLnHlTCHWA from "/public/openmoji/1F1EA-1F1EA.svg";
import eNbXDOdOIF from "/public/openmoji/1F1EA-1F1EC.svg";
import yuALPwwtDj from "/public/openmoji/1F1EA-1F1ED.svg";
import hkNhRRPVfu from "/public/openmoji/1F1EA-1F1F7.svg";
import RqkxCmYAOI from "/public/openmoji/1F1EA-1F1F8.svg";
import ZcBBJCVlOJ from "/public/openmoji/1F1EA-1F1F9.svg";
import uuaCddTGUI from "/public/openmoji/1F1EA-1F1FA.svg";
import fNaTZiNgmP from "/public/openmoji/1F1EA.svg";
import sUbYFWtPDf from "/public/openmoji/1F1EB-1F1EE.svg";
import TAgiWeoNEH from "/public/openmoji/1F1EB-1F1EF.svg";
import UhHhuNqIMl from "/public/openmoji/1F1EB-1F1F0.svg";
import cEeOSfgWsG from "/public/openmoji/1F1EB-1F1F2.svg";
import thpMJdSbcJ from "/public/openmoji/1F1EB-1F1F4.svg";
import YxeXEuBYQR from "/public/openmoji/1F1EB-1F1F7.svg";
import CzLRDqOfCM from "/public/openmoji/1F1EB.svg";
import WwzpbunfAW from "/public/openmoji/1F1EC-1F1E6.svg";
import jznQfNapeb from "/public/openmoji/1F1EC-1F1E7.svg";
import wmmAodLJvy from "/public/openmoji/1F1EC-1F1E9.svg";
import XjJvnNUgUr from "/public/openmoji/1F1EC-1F1EA.svg";
import BZLBgwPNUA from "/public/openmoji/1F1EC-1F1EB.svg";
import lIpIsBtvcQ from "/public/openmoji/1F1EC-1F1EC.svg";
import TqoxxWEfGf from "/public/openmoji/1F1EC-1F1ED.svg";
import uVzFzMrfVF from "/public/openmoji/1F1EC-1F1EE.svg";
import mSKrgDKRWY from "/public/openmoji/1F1EC-1F1F1.svg";
import jRKntdRxdx from "/public/openmoji/1F1EC-1F1F2.svg";
import LKVIHJOWio from "/public/openmoji/1F1EC-1F1F3.svg";
import NzZpgwXgSG from "/public/openmoji/1F1EC-1F1F5.svg";
import utMwKfneVI from "/public/openmoji/1F1EC-1F1F6.svg";
import tSLHVfncsJ from "/public/openmoji/1F1EC-1F1F7.svg";
import ivgjZIhMFA from "/public/openmoji/1F1EC-1F1F8.svg";
import MbvlIKbsDL from "/public/openmoji/1F1EC-1F1F9.svg";
import xPFdTgpQuN from "/public/openmoji/1F1EC-1F1FA.svg";
import hioAkOIBkI from "/public/openmoji/1F1EC-1F1FC.svg";
import qZlfGlFzCb from "/public/openmoji/1F1EC-1F1FE.svg";
import ZhHChKzAJl from "/public/openmoji/1F1EC.svg";
import iRyrAdWOel from "/public/openmoji/1F1ED-1F1F0.svg";
import EGLKGvyjGy from "/public/openmoji/1F1ED-1F1F2.svg";
import lQlOMOVBBb from "/public/openmoji/1F1ED-1F1F3.svg";
import ZLEUrPWRik from "/public/openmoji/1F1ED-1F1F7.svg";
import hVFscLTdpe from "/public/openmoji/1F1ED-1F1F9.svg";
import JJxuWPTnJd from "/public/openmoji/1F1ED-1F1FA.svg";
import CyjRLVokbs from "/public/openmoji/1F1ED.svg";
import DKHxOuSNIN from "/public/openmoji/1F1EE-1F1E8.svg";
import nNpZQvepjX from "/public/openmoji/1F1EE-1F1E9.svg";
import hqXvTAPOxi from "/public/openmoji/1F1EE-1F1EA.svg";
import QHioztvbhO from "/public/openmoji/1F1EE-1F1F1.svg";
import bBtnROwniH from "/public/openmoji/1F1EE-1F1F2.svg";
import xMurKNtOLk from "/public/openmoji/1F1EE-1F1F3.svg";
import RaLvsrKomC from "/public/openmoji/1F1EE-1F1F4.svg";
import CHApLkQPlY from "/public/openmoji/1F1EE-1F1F6.svg";
import wTgLoXMQvB from "/public/openmoji/1F1EE-1F1F7.svg";
import jtVlcgJdnI from "/public/openmoji/1F1EE-1F1F8.svg";
import QnvKzWqXKO from "/public/openmoji/1F1EE-1F1F9.svg";
import DrtdxBWXmN from "/public/openmoji/1F1EE.svg";
import KmKGEtVswd from "/public/openmoji/1F1EF-1F1EA.svg";
import JejSoZkaan from "/public/openmoji/1F1EF-1F1F2.svg";
import SCWCBHwnux from "/public/openmoji/1F1EF-1F1F4.svg";
import lonejGbhqE from "/public/openmoji/1F1EF-1F1F5.svg";
import uaSqbFyQWB from "/public/openmoji/1F1EF.svg";
import wHYEHwJelJ from "/public/openmoji/1F1F0-1F1EA.svg";
import mpeReMvaDf from "/public/openmoji/1F1F0-1F1EC.svg";
import teEdxfdEjQ from "/public/openmoji/1F1F0-1F1ED.svg";
import EvEwdLHMBM from "/public/openmoji/1F1F0-1F1EE.svg";
import ylpjUvxkZg from "/public/openmoji/1F1F0-1F1F2.svg";
import rDGgUhepYC from "/public/openmoji/1F1F0-1F1F3.svg";
import GrdobCsceE from "/public/openmoji/1F1F0-1F1F5.svg";
import dZYeCImaOZ from "/public/openmoji/1F1F0-1F1F7.svg";
import nwObXlLRWD from "/public/openmoji/1F1F0-1F1FC.svg";
import vNNCSqHeHs from "/public/openmoji/1F1F0-1F1FE.svg";
import IjKzpzmeJc from "/public/openmoji/1F1F0-1F1FF.svg";
import YkibTLjkhd from "/public/openmoji/1F1F0.svg";
import DxHFwyokoV from "/public/openmoji/1F1F1-1F1E6.svg";
import WUQdBQOblk from "/public/openmoji/1F1F1-1F1E7.svg";
import ajgqMmgXEU from "/public/openmoji/1F1F1-1F1E8.svg";
import TOBkRcGJYo from "/public/openmoji/1F1F1-1F1EE.svg";
import udZDHJVBDH from "/public/openmoji/1F1F1-1F1F0.svg";
import sxAVlxnmBg from "/public/openmoji/1F1F1-1F1F7.svg";
import IIZsbSYWtM from "/public/openmoji/1F1F1-1F1F8.svg";
import DxquToHBaW from "/public/openmoji/1F1F1-1F1F9.svg";
import nRRcztLYpv from "/public/openmoji/1F1F1-1F1FA.svg";
import gBDvRWwpHX from "/public/openmoji/1F1F1-1F1FB.svg";
import DVpCZVaAtW from "/public/openmoji/1F1F1-1F1FE.svg";
import lLqhBGelbU from "/public/openmoji/1F1F1.svg";
import saezrUaYaA from "/public/openmoji/1F1F2-1F1E6.svg";
import rfEtyfQVbh from "/public/openmoji/1F1F2-1F1E8.svg";
import guspsalzQO from "/public/openmoji/1F1F2-1F1E9.svg";
import dhKpMZBVuH from "/public/openmoji/1F1F2-1F1EA.svg";
import GnbiJGPfcf from "/public/openmoji/1F1F2-1F1EB.svg";
import MymMLNlwvI from "/public/openmoji/1F1F2-1F1EC.svg";
import EPXpBXBxZJ from "/public/openmoji/1F1F2-1F1ED.svg";
import BJLOpsmWMM from "/public/openmoji/1F1F2-1F1F0.svg";
import bvnXALFvQp from "/public/openmoji/1F1F2-1F1F1.svg";
import lvbFFKwfby from "/public/openmoji/1F1F2-1F1F2.svg";
import boQIWGrmrB from "/public/openmoji/1F1F2-1F1F3.svg";
import SjZbMYMBAD from "/public/openmoji/1F1F2-1F1F4.svg";
import NGiicnKEfV from "/public/openmoji/1F1F2-1F1F5.svg";
import UMkZoiYdHw from "/public/openmoji/1F1F2-1F1F6.svg";
import WUmAvznisC from "/public/openmoji/1F1F2-1F1F7.svg";
import tCocdrNoeh from "/public/openmoji/1F1F2-1F1F8.svg";
import NNmbRaGVvS from "/public/openmoji/1F1F2-1F1F9.svg";
import qnuDOqsWvC from "/public/openmoji/1F1F2-1F1FA.svg";
import JKEcankARK from "/public/openmoji/1F1F2-1F1FB.svg";
import cYKLBmpTgg from "/public/openmoji/1F1F2-1F1FC.svg";
import lFRdXFCCoh from "/public/openmoji/1F1F2-1F1FD.svg";
import yQzPgFjPuo from "/public/openmoji/1F1F2-1F1FE.svg";
import QCFCqsnhyi from "/public/openmoji/1F1F2-1F1FF.svg";
import yepDuAgvdK from "/public/openmoji/1F1F2.svg";
import KrHmleXPzF from "/public/openmoji/1F1F3-1F1E6.svg";
import ZGvBDdDVDG from "/public/openmoji/1F1F3-1F1E8.svg";
import lRqylvyXGd from "/public/openmoji/1F1F3-1F1EA.svg";
import zWHeqGgwyo from "/public/openmoji/1F1F3-1F1EB.svg";
import jukqNOcnAF from "/public/openmoji/1F1F3-1F1EC.svg";
import UtQgFEHOrI from "/public/openmoji/1F1F3-1F1EE.svg";
import SiWalMotzo from "/public/openmoji/1F1F3-1F1F1.svg";
import qAcbtxkSuB from "/public/openmoji/1F1F3-1F1F4.svg";
import IZbInPMCZQ from "/public/openmoji/1F1F3-1F1F5.svg";
import oNKOdbjspg from "/public/openmoji/1F1F3-1F1F7.svg";
import iBbMkXAtOr from "/public/openmoji/1F1F3-1F1FA.svg";
import EPGFgtWvZn from "/public/openmoji/1F1F3-1F1FF.svg";
import rVbpShSynm from "/public/openmoji/1F1F3.svg";
import JElWHZjiCZ from "/public/openmoji/1F1F4-1F1F2.svg";
import qeNPDaJuWQ from "/public/openmoji/1F1F4.svg";
import IWGVWiIMTH from "/public/openmoji/1F1F5-1F1E6.svg";
import BrjjOyyWyt from "/public/openmoji/1F1F5-1F1EA.svg";
import uNfHyAaZGr from "/public/openmoji/1F1F5-1F1EB.svg";
import TwSJJGeQyu from "/public/openmoji/1F1F5-1F1EC.svg";
import PEeUasWKyn from "/public/openmoji/1F1F5-1F1ED.svg";
import tdwoVqJwRP from "/public/openmoji/1F1F5-1F1F0.svg";
import ZBpZgeWcfu from "/public/openmoji/1F1F5-1F1F1.svg";
import JyUQYgpgEE from "/public/openmoji/1F1F5-1F1F2.svg";
import rNncZPjxzC from "/public/openmoji/1F1F5-1F1F3.svg";
import YBKYKqeBtZ from "/public/openmoji/1F1F5-1F1F7.svg";
import wWPQGVdgmm from "/public/openmoji/1F1F5-1F1F8.svg";
import HSaqsbVshX from "/public/openmoji/1F1F5-1F1F9.svg";
import PwgdzARsBg from "/public/openmoji/1F1F5-1F1FC.svg";
import kodkBuFWsX from "/public/openmoji/1F1F5-1F1FE.svg";
import KElVqAnpSq from "/public/openmoji/1F1F5.svg";
import xhUWtuIHfX from "/public/openmoji/1F1F6-1F1E6.svg";
import VTCcrPjHQA from "/public/openmoji/1F1F6.svg";
import evzltRyYhr from "/public/openmoji/1F1F7-1F1EA.svg";
import yLbXbJrZGl from "/public/openmoji/1F1F7-1F1F4.svg";
import cuxfVUIYLA from "/public/openmoji/1F1F7-1F1F8.svg";
import mDcewsWzYe from "/public/openmoji/1F1F7-1F1FA.svg";
import pvEKxyrZMX from "/public/openmoji/1F1F7-1F1FC.svg";
import tiGKLqwGZG from "/public/openmoji/1F1F7.svg";
import CSPrPCfRgN from "/public/openmoji/1F1F8-1F1E6.svg";
import CrJNmjvMmx from "/public/openmoji/1F1F8-1F1E7.svg";
import RNyHVvAoKD from "/public/openmoji/1F1F8-1F1E8.svg";
import tnUAIGSowE from "/public/openmoji/1F1F8-1F1E9.svg";
import HnSbIdCupR from "/public/openmoji/1F1F8-1F1EA.svg";
import BzHGSQXIcX from "/public/openmoji/1F1F8-1F1EC.svg";
import ewUdVKAkGG from "/public/openmoji/1F1F8-1F1ED.svg";
import eDnzqSyMds from "/public/openmoji/1F1F8-1F1EE.svg";
import dZdJnJUILQ from "/public/openmoji/1F1F8-1F1EF.svg";
import EbUznOcHsz from "/public/openmoji/1F1F8-1F1F0.svg";
import sKXdquNrYN from "/public/openmoji/1F1F8-1F1F1.svg";
import zrUrbXFrEV from "/public/openmoji/1F1F8-1F1F2.svg";
import UfCJyVqpcb from "/public/openmoji/1F1F8-1F1F3.svg";
import hKRewzPlrj from "/public/openmoji/1F1F8-1F1F4.svg";
import NnvmugdpEN from "/public/openmoji/1F1F8-1F1F7.svg";
import TVmCuNbcmH from "/public/openmoji/1F1F8-1F1F8.svg";
import wAQRnnTmJm from "/public/openmoji/1F1F8-1F1F9.svg";
import HhybBznqZd from "/public/openmoji/1F1F8-1F1FB.svg";
import vsEKFhvOLg from "/public/openmoji/1F1F8-1F1FD.svg";
import MEbIEYCAaA from "/public/openmoji/1F1F8-1F1FE.svg";
import GTkaeqXUWV from "/public/openmoji/1F1F8-1F1FF.svg";
import mzXsWkkHHy from "/public/openmoji/1F1F8.svg";
import shmFTyVKDe from "/public/openmoji/1F1F9-1F1E6.svg";
import VXxdvMUivC from "/public/openmoji/1F1F9-1F1E8.svg";
import FuMjNsdvnk from "/public/openmoji/1F1F9-1F1E9.svg";
import QiBtDldgCD from "/public/openmoji/1F1F9-1F1EB.svg";
import AkGBwvgyqD from "/public/openmoji/1F1F9-1F1EC.svg";
import QVANPPjpUt from "/public/openmoji/1F1F9-1F1ED.svg";
import UEpZkMdFYn from "/public/openmoji/1F1F9-1F1EF.svg";
import EhkFuLoQyu from "/public/openmoji/1F1F9-1F1F0.svg";
import cBQLEhhBWQ from "/public/openmoji/1F1F9-1F1F1.svg";
import PmQXACHHKG from "/public/openmoji/1F1F9-1F1F2.svg";
import rppwOPDbMF from "/public/openmoji/1F1F9-1F1F3.svg";
import pWVEBEMkTE from "/public/openmoji/1F1F9-1F1F4.svg";
import oLusaFLQzy from "/public/openmoji/1F1F9-1F1F7.svg";
import SqmrosrOWl from "/public/openmoji/1F1F9-1F1F9.svg";
import tPLtpzIwAG from "/public/openmoji/1F1F9-1F1FB.svg";
import DoYlMGghvZ from "/public/openmoji/1F1F9-1F1FC.svg";
import JYMiAQksxT from "/public/openmoji/1F1F9-1F1FF.svg";
import DvfhBLxLPw from "/public/openmoji/1F1F9.svg";
import GUXjcVbEzy from "/public/openmoji/1F1FA-1F1E6.svg";
import AcaqCgfgyO from "/public/openmoji/1F1FA-1F1EC.svg";
import moQKjHaQbZ from "/public/openmoji/1F1FA-1F1F2.svg";
import bHpowgsqBK from "/public/openmoji/1F1FA-1F1F3.svg";
import AIFajpBMYS from "/public/openmoji/1F1FA-1F1F8.svg";
import LczcrccOxR from "/public/openmoji/1F1FA-1F1FE.svg";
import gvADmjLnYR from "/public/openmoji/1F1FA-1F1FF.svg";
import phfWscwQsL from "/public/openmoji/1F1FA.svg";
import AqYpXjidBR from "/public/openmoji/1F1FB-1F1E6.svg";
import PNHCFRRWlS from "/public/openmoji/1F1FB-1F1E8.svg";
import QdiYVDpwcK from "/public/openmoji/1F1FB-1F1EA.svg";
import xtaHgiUScU from "/public/openmoji/1F1FB-1F1EC.svg";
import SsZSFFANkf from "/public/openmoji/1F1FB-1F1EE.svg";
import WyEncurkcC from "/public/openmoji/1F1FB-1F1F3.svg";
import zdMrvWgmpS from "/public/openmoji/1F1FB-1F1FA.svg";
import xldxPwxkKd from "/public/openmoji/1F1FB.svg";
import ZeqjYNcada from "/public/openmoji/1F1FC-1F1EB.svg";
import vUMzZQNcub from "/public/openmoji/1F1FC-1F1F8.svg";
import dPFFwgUtVd from "/public/openmoji/1F1FC.svg";
import lXvLsuEnqx from "/public/openmoji/1F1FD-1F1F0.svg";
import ceXsdzgjpU from "/public/openmoji/1F1FD.svg";
import SiCgXnZOtv from "/public/openmoji/1F1FE-1F1EA.svg";
import eWWtHhYFMb from "/public/openmoji/1F1FE-1F1F9.svg";
import GCtOsKriTc from "/public/openmoji/1F1FE.svg";
import MvzIJlmoui from "/public/openmoji/1F1FF-1F1E6.svg";
import vcrrzyPmzf from "/public/openmoji/1F1FF-1F1F2.svg";
import VnnRVWZbst from "/public/openmoji/1F1FF-1F1FC.svg";
import coEgdEjllA from "/public/openmoji/1F1FF.svg";
import sjjsOnCOyI from "/public/openmoji/1F201.svg";
import kbHcEbQFdY from "/public/openmoji/1F202.svg";
import YfxUIvgcpv from "/public/openmoji/1F21A.svg";
import atfBfAEIYi from "/public/openmoji/1F22F.svg";
import OeAyonxepd from "/public/openmoji/1F232.svg";
import cpNSurWJuA from "/public/openmoji/1F233.svg";
import kWvphWMwLd from "/public/openmoji/1F234.svg";
import pHHtTczodS from "/public/openmoji/1F235.svg";
import KVGOjrWLsY from "/public/openmoji/1F236.svg";
import ILREfdgsoS from "/public/openmoji/1F237.svg";
import CpblLKqRtM from "/public/openmoji/1F238.svg";
import KxixHCigGH from "/public/openmoji/1F239.svg";
import anDtzpJfTP from "/public/openmoji/1F23A.svg";
import lxqDhHSJrh from "/public/openmoji/1F250.svg";
import aGyVnovcFZ from "/public/openmoji/1F251.svg";
import OqlwdkQiBk from "/public/openmoji/1F260.svg";
import ZlCBtmKwlc from "/public/openmoji/1F261.svg";
import HxrVXzbuvd from "/public/openmoji/1F262.svg";
import aLcMNKHXBi from "/public/openmoji/1F263.svg";
import XNdxdGNMrI from "/public/openmoji/1F264.svg";
import SLIjmxUcMF from "/public/openmoji/1F265.svg";
import IydgpUGjyQ from "/public/openmoji/1F300.svg";
import XnwBIWqnWC from "/public/openmoji/1F301.svg";
import AXVIcpNBDt from "/public/openmoji/1F302.svg";
import fKjSLUZTpu from "/public/openmoji/1F303.svg";
import SOlDrikDbp from "/public/openmoji/1F304.svg";
import DFoEdEOPSK from "/public/openmoji/1F305.svg";
import UNuIivNocG from "/public/openmoji/1F306.svg";
import btdgHyjTqj from "/public/openmoji/1F307.svg";
import TBJgQYajZZ from "/public/openmoji/1F308.svg";
import VGBuDpHJMP from "/public/openmoji/1F309.svg";
import uHHcXdCbzv from "/public/openmoji/1F30A.svg";
import XdmvRlOAhM from "/public/openmoji/1F30B.svg";
import uzKbSzoHyZ from "/public/openmoji/1F30C.svg";
import NuRgAsOAHe from "/public/openmoji/1F30D.svg";
import xxFIthELCU from "/public/openmoji/1F30E.svg";
import XUnMRAOrFD from "/public/openmoji/1F30F.svg";
import pIMqUZVVdP from "/public/openmoji/1F310.svg";
import faLmTuEUuZ from "/public/openmoji/1F311.svg";
import dcVAFpnLWw from "/public/openmoji/1F312.svg";
import jCfxBvBnMh from "/public/openmoji/1F313.svg";
import stcgPCYIMK from "/public/openmoji/1F314.svg";
import FIHLMrMXMo from "/public/openmoji/1F315.svg";
import prOGTdkDZc from "/public/openmoji/1F316.svg";
import MgOMDLnDRr from "/public/openmoji/1F317.svg";
import KmCYaBnBkv from "/public/openmoji/1F318.svg";
import zDyNVwtALe from "/public/openmoji/1F319.svg";
import LSMraCtWFR from "/public/openmoji/1F31A.svg";
import YELjyMCUUB from "/public/openmoji/1F31B.svg";
import MaKhdAbcBj from "/public/openmoji/1F31C.svg";
import lfanXrNdBO from "/public/openmoji/1F31D.svg";
import jTZWBFNrsi from "/public/openmoji/1F31E.svg";
import bSoDOWdekt from "/public/openmoji/1F31F.svg";
import iNwGNszmbZ from "/public/openmoji/1F320.svg";
import CqgZrZmnJN from "/public/openmoji/1F321.svg";
import uGafLPgZlP from "/public/openmoji/1F324.svg";
import aTpEjhEovu from "/public/openmoji/1F325.svg";
import fCJHlsxtrT from "/public/openmoji/1F326.svg";
import lRiTvDOulg from "/public/openmoji/1F327.svg";
import ayzMiMpujo from "/public/openmoji/1F328.svg";
import gMzSfqlqTu from "/public/openmoji/1F329.svg";
import DIlOsvtAuJ from "/public/openmoji/1F32A.svg";
import BXuWFZbOxb from "/public/openmoji/1F32B.svg";
import amslaaGQOG from "/public/openmoji/1F32C.svg";
import lmFPTUzZnQ from "/public/openmoji/1F32D.svg";
import sihZjaSDAL from "/public/openmoji/1F32E.svg";
import anqJtTKgHX from "/public/openmoji/1F32F.svg";
import jdpahgkRIZ from "/public/openmoji/1F330.svg";
import YZJZCsMLfd from "/public/openmoji/1F331.svg";
import AtYKGnkLDQ from "/public/openmoji/1F332.svg";
import pnhdsAqVfg from "/public/openmoji/1F333.svg";
import qkFQyLhRBR from "/public/openmoji/1F334.svg";
import ibfcrZVZDh from "/public/openmoji/1F335.svg";
import MoNEQjlpjU from "/public/openmoji/1F336.svg";
import wuOnzOwZCo from "/public/openmoji/1F337.svg";
import epBJArIeMp from "/public/openmoji/1F338.svg";
import JzyPQypUVy from "/public/openmoji/1F339.svg";
import xEXFJSGMfs from "/public/openmoji/1F33A.svg";
import kmtSjVdTDW from "/public/openmoji/1F33B.svg";
import HSBHzwhCNl from "/public/openmoji/1F33C.svg";
import bWJNfWuNRl from "/public/openmoji/1F33D.svg";
import AMKubXgtsJ from "/public/openmoji/1F33E.svg";
import JiBpwviFXM from "/public/openmoji/1F33F.svg";
import SjvtxWbveo from "/public/openmoji/1F340.svg";
import EXQtgfqXdI from "/public/openmoji/1F341.svg";
import kVvfyyeYRO from "/public/openmoji/1F342.svg";
import MThLMXzhkc from "/public/openmoji/1F343.svg";
import AQkgIGQGMg from "/public/openmoji/1F344.svg";
import SahYAsvjuU from "/public/openmoji/1F345.svg";
import KqqKNzTwLV from "/public/openmoji/1F346.svg";
import RwDJrUBrFP from "/public/openmoji/1F347.svg";
import zlPrHWbopK from "/public/openmoji/1F348.svg";
import BMzorOdCeN from "/public/openmoji/1F349.svg";
import iSRrfRTpBN from "/public/openmoji/1F34A.svg";
import XkzxfGkqob from "/public/openmoji/1F34B.svg";
import AwfZQoHnhB from "/public/openmoji/1F34C.svg";
import sOkwxINyja from "/public/openmoji/1F34D.svg";
import ZmxUjTypRz from "/public/openmoji/1F34E.svg";
import FhSWyGbolv from "/public/openmoji/1F34F.svg";
import dHUOPEuhbI from "/public/openmoji/1F350.svg";
import MelMJLcCUp from "/public/openmoji/1F351.svg";
import AQDTZEldBY from "/public/openmoji/1F352.svg";
import MtDiNjDCwP from "/public/openmoji/1F353.svg";
import ralZSGzoyd from "/public/openmoji/1F354.svg";
import ORBGKqPBFZ from "/public/openmoji/1F355.svg";
import epibjZpdgm from "/public/openmoji/1F356.svg";
import kNRFXZMQum from "/public/openmoji/1F357.svg";
import ghHeuNuYqH from "/public/openmoji/1F358.svg";
import EAZMSwEWfN from "/public/openmoji/1F359.svg";
import UrNtWQdVFh from "/public/openmoji/1F35A.svg";
import oSHnugPUDw from "/public/openmoji/1F35B.svg";
import SXcRETBVjk from "/public/openmoji/1F35C.svg";
import eZeIZaNItY from "/public/openmoji/1F35D.svg";
import jKQYVrbMPL from "/public/openmoji/1F35E.svg";
import qQQvssOyBO from "/public/openmoji/1F35F.svg";
import NmGaqLVFyP from "/public/openmoji/1F360.svg";
import ecnZXOUuya from "/public/openmoji/1F361.svg";
import zYHsXrCIBM from "/public/openmoji/1F362.svg";
import uaOaKmzfgX from "/public/openmoji/1F363.svg";
import SbSMWgIHiQ from "/public/openmoji/1F364.svg";
import HaytjybPgj from "/public/openmoji/1F365.svg";
import hasSkaqOZP from "/public/openmoji/1F366.svg";
import vVKbnfHMNL from "/public/openmoji/1F367.svg";
import UHupVtxSBv from "/public/openmoji/1F368.svg";
import aXJheHTRtx from "/public/openmoji/1F369.svg";
import uXlIgjKMwG from "/public/openmoji/1F36A.svg";
import IXNJDUrObQ from "/public/openmoji/1F36B.svg";
import uBLUCHUgzn from "/public/openmoji/1F36C.svg";
import UIyayQyGwh from "/public/openmoji/1F36D.svg";
import BJyeALzYYn from "/public/openmoji/1F36E.svg";
import uCRRyBXluL from "/public/openmoji/1F36F.svg";
import dwYdVDWLaK from "/public/openmoji/1F370.svg";
import zcvVDDPnnj from "/public/openmoji/1F371.svg";
import pfSAZFxKLX from "/public/openmoji/1F372.svg";
import VuNfagaAAb from "/public/openmoji/1F373.svg";
import RhDdlLlTRx from "/public/openmoji/1F374.svg";
import YMXhleRKam from "/public/openmoji/1F375.svg";
import gzeSrxjpNN from "/public/openmoji/1F376.svg";
import aWJuebKbMR from "/public/openmoji/1F377.svg";
import qeWioNSATF from "/public/openmoji/1F378.svg";
import qIgYlfLNQU from "/public/openmoji/1F379.svg";
import GbDREfOCKA from "/public/openmoji/1F37A.svg";
import EjJXkNDlaQ from "/public/openmoji/1F37B.svg";
import xIMMRsqwas from "/public/openmoji/1F37C.svg";
import HqlxXgbjKS from "/public/openmoji/1F37D.svg";
import DRCTQWjqlN from "/public/openmoji/1F37E.svg";
import PPrXhmcQxG from "/public/openmoji/1F37F.svg";
import kJlObnAZLP from "/public/openmoji/1F380.svg";
import IGpkudQePv from "/public/openmoji/1F381.svg";
import kmpVPaqxOP from "/public/openmoji/1F382.svg";
import efakwVJLvJ from "/public/openmoji/1F383.svg";
import PjKddDjvEj from "/public/openmoji/1F384.svg";
import msBMdBSWgd from "/public/openmoji/1F385-1F3FB.svg";
import ZTrtLlUVyn from "/public/openmoji/1F385-1F3FC.svg";
import PXuTHajHnB from "/public/openmoji/1F385-1F3FD.svg";
import LkWiwcITer from "/public/openmoji/1F385-1F3FE.svg";
import qRxaHvDESJ from "/public/openmoji/1F385-1F3FF.svg";
import ArmjpGNFqf from "/public/openmoji/1F385.svg";
import UwIKGPgHXU from "/public/openmoji/1F386.svg";
import MFGVkIfpLN from "/public/openmoji/1F387.svg";
import HHqSURkFEJ from "/public/openmoji/1F388.svg";
import gfqnwoWjyY from "/public/openmoji/1F389.svg";
import QMDqrJnRDL from "/public/openmoji/1F38A.svg";
import McgTFqETUU from "/public/openmoji/1F38B.svg";
import AmxdIvlFYk from "/public/openmoji/1F38C.svg";
import mVquBdloBD from "/public/openmoji/1F38D.svg";
import RXQvkLuUlc from "/public/openmoji/1F38E.svg";
import vjBHGYXBhy from "/public/openmoji/1F38F.svg";
import UbJFGyHFkP from "/public/openmoji/1F390.svg";
import VJIbGaEwMs from "/public/openmoji/1F391.svg";
import HconeMtvdJ from "/public/openmoji/1F392.svg";
import ueVNbtzZFk from "/public/openmoji/1F393.svg";
import PTZMcOOnGu from "/public/openmoji/1F396.svg";
import EKQAWfPxiG from "/public/openmoji/1F397.svg";
import TzVdalYRMN from "/public/openmoji/1F399.svg";
import ajAajfdVoI from "/public/openmoji/1F39A.svg";
import vXdMriauIM from "/public/openmoji/1F39B.svg";
import sBVtGiQkZx from "/public/openmoji/1F39E.svg";
import KeuWVOWMEE from "/public/openmoji/1F39F.svg";
import SLoTHCqDGj from "/public/openmoji/1F3A0.svg";
import oENtnkWVTz from "/public/openmoji/1F3A1.svg";
import QZzIyRIldD from "/public/openmoji/1F3A2.svg";
import zfjNrbAwOO from "/public/openmoji/1F3A3.svg";
import JBCaiwNHrO from "/public/openmoji/1F3A4.svg";
import sYFRuJfZmW from "/public/openmoji/1F3A5.svg";
import mumgWUbOdK from "/public/openmoji/1F3A6.svg";
import DWLYWqXEvi from "/public/openmoji/1F3A7.svg";
import ekyUoWktOy from "/public/openmoji/1F3A8.svg";
import SrwdpnPfJy from "/public/openmoji/1F3A9.svg";
import rIcCUKcNuA from "/public/openmoji/1F3AA.svg";
import XBzBsjlXBV from "/public/openmoji/1F3AB.svg";
import goRJeiyoEc from "/public/openmoji/1F3AC.svg";
import bUYFZJLhdo from "/public/openmoji/1F3AD.svg";
import BrthppAiCy from "/public/openmoji/1F3AE.svg";
import zquPmUyNHG from "/public/openmoji/1F3AF.svg";
import XYPEuxAPXt from "/public/openmoji/1F3B0.svg";
import QzeuXrxoSM from "/public/openmoji/1F3B1.svg";
import WHEOLwgMtn from "/public/openmoji/1F3B2.svg";
import gFCdqzjMEr from "/public/openmoji/1F3B3.svg";
import arOxMKWZBv from "/public/openmoji/1F3B4.svg";
import qUIWhIaZmj from "/public/openmoji/1F3B5.svg";
import XNseNxWNxe from "/public/openmoji/1F3B6.svg";
import qCHgSVaOFg from "/public/openmoji/1F3B7.svg";
import JGybdmabJZ from "/public/openmoji/1F3B8.svg";
import aVxTBVvdPp from "/public/openmoji/1F3B9.svg";
import uhLtghblYb from "/public/openmoji/1F3BA.svg";
import zfPbUoOZPg from "/public/openmoji/1F3BB.svg";
import lzBreqVMiB from "/public/openmoji/1F3BC.svg";
import kOhZAMpoMz from "/public/openmoji/1F3BD.svg";
import xZGNsqVraz from "/public/openmoji/1F3BE.svg";
import hQWdcNaCwn from "/public/openmoji/1F3BF.svg";
import PSxByKHEwS from "/public/openmoji/1F3C0.svg";
import BibcJQbwQP from "/public/openmoji/1F3C1.svg";
import UUeCqZUOkT from "/public/openmoji/1F3C2-1F3FB.svg";
import XIMXkHrSYv from "/public/openmoji/1F3C2-1F3FC.svg";
import mBEpWnqMLL from "/public/openmoji/1F3C2-1F3FD.svg";
import DmmpjXMSwY from "/public/openmoji/1F3C2-1F3FE.svg";
import qDMtRrRQhm from "/public/openmoji/1F3C2-1F3FF.svg";
import eUWWxJimgX from "/public/openmoji/1F3C2.svg";
import NpUwjjPWYn from "/public/openmoji/1F3C3-1F3FB-200D-2640-FE0F.svg";
import ZhRraFPPyY from "/public/openmoji/1F3C3-1F3FB-200D-2642-FE0F.svg";
import tHaGlkQmzk from "/public/openmoji/1F3C3-1F3FB.svg";
import TSptoWCLSW from "/public/openmoji/1F3C3-1F3FC-200D-2640-FE0F.svg";
import MzQPzTevqZ from "/public/openmoji/1F3C3-1F3FC-200D-2642-FE0F.svg";
import zqcheskpQR from "/public/openmoji/1F3C3-1F3FC.svg";
import sxVqAcGZan from "/public/openmoji/1F3C3-1F3FD-200D-2640-FE0F.svg";
import MkOcrAbche from "/public/openmoji/1F3C3-1F3FD-200D-2642-FE0F.svg";
import FDdNvlyBLo from "/public/openmoji/1F3C3-1F3FD.svg";
import sdzDnHXyBG from "/public/openmoji/1F3C3-1F3FE-200D-2640-FE0F.svg";
import zzvenLCdTT from "/public/openmoji/1F3C3-1F3FE-200D-2642-FE0F.svg";
import NxwBGRVlaB from "/public/openmoji/1F3C3-1F3FE.svg";
import uoyMQdcKrF from "/public/openmoji/1F3C3-1F3FF-200D-2640-FE0F.svg";
import OqWHLjXEvs from "/public/openmoji/1F3C3-1F3FF-200D-2642-FE0F.svg";
import IviVbZdyps from "/public/openmoji/1F3C3-1F3FF.svg";
import BumJjjFcKN from "/public/openmoji/1F3C3-200D-2640-FE0F.svg";
import ozOEYHBAjb from "/public/openmoji/1F3C3-200D-2642-FE0F.svg";
import jJnnxwRPar from "/public/openmoji/1F3C3.svg";
import fLKKxkZlqk from "/public/openmoji/1F3C4-1F3FB-200D-2640-FE0F.svg";
import xAlqaEUDPe from "/public/openmoji/1F3C4-1F3FB-200D-2642-FE0F.svg";
import ylWkqhOJXI from "/public/openmoji/1F3C4-1F3FB.svg";
import IsklGqThjF from "/public/openmoji/1F3C4-1F3FC-200D-2640-FE0F.svg";
import pjvPxaFOyc from "/public/openmoji/1F3C4-1F3FC-200D-2642-FE0F.svg";
import tfJmACqiwq from "/public/openmoji/1F3C4-1F3FC.svg";
import UdqnMJgtCw from "/public/openmoji/1F3C4-1F3FD-200D-2640-FE0F.svg";
import BxoVtOseUI from "/public/openmoji/1F3C4-1F3FD-200D-2642-FE0F.svg";
import ZgoOFYmrxh from "/public/openmoji/1F3C4-1F3FD.svg";
import glsjgweFID from "/public/openmoji/1F3C4-1F3FE-200D-2640-FE0F.svg";
import fmgpRbeVxy from "/public/openmoji/1F3C4-1F3FE-200D-2642-FE0F.svg";
import BUJAyYNjJi from "/public/openmoji/1F3C4-1F3FE.svg";
import tRylnmvIGB from "/public/openmoji/1F3C4-1F3FF-200D-2640-FE0F.svg";
import uhmQlavYll from "/public/openmoji/1F3C4-1F3FF-200D-2642-FE0F.svg";
import zdfxoYWudw from "/public/openmoji/1F3C4-1F3FF.svg";
import lgnoltYslK from "/public/openmoji/1F3C4-200D-2640-FE0F.svg";
import tUIystosTt from "/public/openmoji/1F3C4-200D-2642-FE0F.svg";
import eZfoOnrttA from "/public/openmoji/1F3C4.svg";
import ofYCgVfHRL from "/public/openmoji/1F3C5.svg";
import eCkiNLkQKh from "/public/openmoji/1F3C6.svg";
import WXKVmmdDHJ from "/public/openmoji/1F3C7-1F3FB.svg";
import jprGKeyrbo from "/public/openmoji/1F3C7-1F3FC.svg";
import QEHDWVBjrA from "/public/openmoji/1F3C7-1F3FD.svg";
import pdmXQMAszH from "/public/openmoji/1F3C7-1F3FE.svg";
import yfwJuIsAUG from "/public/openmoji/1F3C7-1F3FF.svg";
import iYMwHWjdek from "/public/openmoji/1F3C7.svg";
import FSeNPoYMSe from "/public/openmoji/1F3C8.svg";
import BzSEIFYORY from "/public/openmoji/1F3C9.svg";
import wQgFmNKjbi from "/public/openmoji/1F3CA-1F3FB-200D-2640-FE0F.svg";
import SYsmChxnve from "/public/openmoji/1F3CA-1F3FB-200D-2642-FE0F.svg";
import XHAgGudaqC from "/public/openmoji/1F3CA-1F3FB.svg";
import IMSovsMPJc from "/public/openmoji/1F3CA-1F3FC-200D-2640-FE0F.svg";
import pLoHMjDsKY from "/public/openmoji/1F3CA-1F3FC-200D-2642-FE0F.svg";
import VqaJWAtYGT from "/public/openmoji/1F3CA-1F3FC.svg";
import DyOTWcxjBs from "/public/openmoji/1F3CA-1F3FD-200D-2640-FE0F.svg";
import ZcoWCVDFND from "/public/openmoji/1F3CA-1F3FD-200D-2642-FE0F.svg";
import aAcPgBWwVi from "/public/openmoji/1F3CA-1F3FD.svg";
import SulahxAZhZ from "/public/openmoji/1F3CA-1F3FE-200D-2640-FE0F.svg";
import poDxFeuYnT from "/public/openmoji/1F3CA-1F3FE-200D-2642-FE0F.svg";
import OYHuDByPSA from "/public/openmoji/1F3CA-1F3FE.svg";
import pYtTsOprIx from "/public/openmoji/1F3CA-1F3FF-200D-2640-FE0F.svg";
import AJhsrQKJzx from "/public/openmoji/1F3CA-1F3FF-200D-2642-FE0F.svg";
import OcGqvZUTLS from "/public/openmoji/1F3CA-1F3FF.svg";
import pebZqtnvNn from "/public/openmoji/1F3CA-200D-2640-FE0F.svg";
import CGcOOCIvSY from "/public/openmoji/1F3CA-200D-2642-FE0F.svg";
import fYrROHtTeT from "/public/openmoji/1F3CA.svg";
import ITUzLrQPPP from "/public/openmoji/1F3CB-1F3FB-200D-2640-FE0F.svg";
import mjcmFdsEHR from "/public/openmoji/1F3CB-1F3FB-200D-2642-FE0F.svg";
import HiRZpeJmXF from "/public/openmoji/1F3CB-1F3FB.svg";
import IOiFzOqAMz from "/public/openmoji/1F3CB-1F3FC-200D-2640-FE0F.svg";
import yFWBPLnpLA from "/public/openmoji/1F3CB-1F3FC-200D-2642-FE0F.svg";
import CFiLxFuMFk from "/public/openmoji/1F3CB-1F3FC.svg";
import tjmAlSzTqY from "/public/openmoji/1F3CB-1F3FD-200D-2640-FE0F.svg";
import hFntGDFBpO from "/public/openmoji/1F3CB-1F3FD-200D-2642-FE0F.svg";
import rDmfHGVFTu from "/public/openmoji/1F3CB-1F3FD.svg";
import qQjTVdTrgF from "/public/openmoji/1F3CB-1F3FE-200D-2640-FE0F.svg";
import kyYFgDeGmi from "/public/openmoji/1F3CB-1F3FE-200D-2642-FE0F.svg";
import pCytkPxJqr from "/public/openmoji/1F3CB-1F3FE.svg";
import isszQuwSpF from "/public/openmoji/1F3CB-1F3FF-200D-2640-FE0F.svg";
import ipUDAgaIlc from "/public/openmoji/1F3CB-1F3FF-200D-2642-FE0F.svg";
import fkWBOQOOvc from "/public/openmoji/1F3CB-1F3FF.svg";
import TBVDoYIdIx from "/public/openmoji/1F3CB-FE0F-200D-2640-FE0F.svg";
import nrbZdZVJvz from "/public/openmoji/1F3CB-FE0F-200D-2642-FE0F.svg";
import jldJvpgRHo from "/public/openmoji/1F3CB.svg";
import bSnksnBUxm from "/public/openmoji/1F3CC-1F3FB-200D-2640-FE0F.svg";
import HGEqDVuSig from "/public/openmoji/1F3CC-1F3FB-200D-2642-FE0F.svg";
import SVsCBCFpTC from "/public/openmoji/1F3CC-1F3FB.svg";
import OAZJANBpZE from "/public/openmoji/1F3CC-1F3FC-200D-2640-FE0F.svg";
import tPneMJdmtC from "/public/openmoji/1F3CC-1F3FC-200D-2642-FE0F.svg";
import bsCVyxRJUD from "/public/openmoji/1F3CC-1F3FC.svg";
import MxDGtyaevD from "/public/openmoji/1F3CC-1F3FD-200D-2640-FE0F.svg";
import cQRHYlYSqR from "/public/openmoji/1F3CC-1F3FD-200D-2642-FE0F.svg";
import nsvIdbBLHB from "/public/openmoji/1F3CC-1F3FD.svg";
import MGRoslzevw from "/public/openmoji/1F3CC-1F3FE-200D-2640-FE0F.svg";
import YxniMCphbC from "/public/openmoji/1F3CC-1F3FE-200D-2642-FE0F.svg";
import jZVekbEpWD from "/public/openmoji/1F3CC-1F3FE.svg";
import GUBHOuOogE from "/public/openmoji/1F3CC-1F3FF-200D-2640-FE0F.svg";
import QspTNoFUjR from "/public/openmoji/1F3CC-1F3FF-200D-2642-FE0F.svg";
import GziaEdwrLT from "/public/openmoji/1F3CC-1F3FF.svg";
import ljkdyULYSz from "/public/openmoji/1F3CC-FE0F-200D-2640-FE0F.svg";
import nYUmUnalDt from "/public/openmoji/1F3CC-FE0F-200D-2642-FE0F.svg";
import HUxvNUOBSB from "/public/openmoji/1F3CC.svg";
import aumNTSstNL from "/public/openmoji/1F3CD.svg";
import qiSDyJRxVK from "/public/openmoji/1F3CE.svg";
import ibZpjAwMBI from "/public/openmoji/1F3CF.svg";
import QELodkwAGr from "/public/openmoji/1F3D0.svg";
import SNhuWGCyXP from "/public/openmoji/1F3D1.svg";
import IRGufXOqwD from "/public/openmoji/1F3D2.svg";
import xjZyhzvRrS from "/public/openmoji/1F3D3.svg";
import uNTdNJicxh from "/public/openmoji/1F3D4.svg";
import bJcKOfXKYl from "/public/openmoji/1F3D5.svg";
import rwLfIudWtf from "/public/openmoji/1F3D6.svg";
import FjlZYppBvI from "/public/openmoji/1F3D7.svg";
import dIxZCesaAl from "/public/openmoji/1F3D8.svg";
import JcctJXFiTZ from "/public/openmoji/1F3D9.svg";
import DoExJEVXvM from "/public/openmoji/1F3DA.svg";
import VIGhAJzPDH from "/public/openmoji/1F3DB.svg";
import HPfeQdLIar from "/public/openmoji/1F3DC.svg";
import loyrBKNbZG from "/public/openmoji/1F3DD.svg";
import bayRciipJK from "/public/openmoji/1F3DE.svg";
import VQZOJSoxnj from "/public/openmoji/1F3DF.svg";
import YrJIDKDaMA from "/public/openmoji/1F3E0.svg";
import RuyXvVjJfI from "/public/openmoji/1F3E1.svg";
import ladBecHmqn from "/public/openmoji/1F3E2.svg";
import JWRDRkSpki from "/public/openmoji/1F3E3.svg";
import fxQPrbywJR from "/public/openmoji/1F3E4.svg";
import FnUeqaWtwr from "/public/openmoji/1F3E5.svg";
import PPlHWqSuPN from "/public/openmoji/1F3E6.svg";
import oGPVuYZJdc from "/public/openmoji/1F3E7.svg";
import kfZatbyQoI from "/public/openmoji/1F3E8.svg";
import lHboNmyfze from "/public/openmoji/1F3E9.svg";
import oVwkAtzWkz from "/public/openmoji/1F3EA.svg";
import OeDnGGgEGg from "/public/openmoji/1F3EB.svg";
import ebhbfNRuRA from "/public/openmoji/1F3EC.svg";
import aSleiMDclz from "/public/openmoji/1F3ED.svg";
import FFgfPtUTCD from "/public/openmoji/1F3EE.svg";
import ipFQEkaJMu from "/public/openmoji/1F3EF.svg";
import zLjqpHpvTd from "/public/openmoji/1F3F0.svg";
import eQrlRtOtDb from "/public/openmoji/1F3F3-1F7E6-1F7E9-1F7E8.svg";
import BYzRcjhLEX from "/public/openmoji/1F3F3-FE0F-200D-1F308.svg";
import nhArlAUdMI from "/public/openmoji/1F3F3-FE0F-200D-1F4CC-200D-2699-FE0F.svg";
import SqvpClFpQc from "/public/openmoji/1F3F3-FE0F-200D-1F7E5.svg";
import CvXwxVQHdd from "/public/openmoji/1F3F3-FE0F-200D-1F7E6-200D-1F30C.svg";
import DXIwFMCXzT from "/public/openmoji/1F3F3-FE0F-200D-1F7E6.svg";
import JRKTelPhxi from "/public/openmoji/1F3F3-FE0F-200D-1F7E7.svg";
import NuYaTRPHcO from "/public/openmoji/1F3F3-FE0F-200D-1F7E8.svg";
import kcNzwkbtXv from "/public/openmoji/1F3F3-FE0F-200D-1F7E9-200D-2B50-200D-1F7E9.svg";
import RTiHzsuCLC from "/public/openmoji/1F3F3-FE0F-200D-1F7E9.svg";
import cdHtBKNPuz from "/public/openmoji/1F3F3-FE0F-200D-1F7EA.svg";
import GvsBCNvqmr from "/public/openmoji/1F3F3-FE0F-200D-1F7EB.svg";
import IPyTvzHcjo from "/public/openmoji/1F3F3-FE0F-200D-26A7-FE0F.svg";
import yqlNJnHpUU from "/public/openmoji/1F3F3-FE0F.svg";
import ngdTUjEPvU from "/public/openmoji/1F3F3.svg";
import fzkjTKcPyG from "/public/openmoji/1F3F4-200D-2620-FE0F.svg";
import ndcSucuGoh from "/public/openmoji/1F3F4-E0063-E0061-E0071-E0063-E007F.svg";
import wGXCLDnQBV from "/public/openmoji/1F3F4-E0064-E0065-E0062-E0065-E007F.svg";
import jnDklflxIz from "/public/openmoji/1F3F4-E0064-E0065-E0062-E0079-E007F.svg";
import HPbumLdVEN from "/public/openmoji/1F3F4-E0065-E0073-E0061-E0072-E007F.svg";
import KDEBbkUZcr from "/public/openmoji/1F3F4-E0065-E0073-E0061-E0073-E007F.svg";
import NuSyisHWJK from "/public/openmoji/1F3F4-E0065-E0073-E0063-E0074-E007F.svg";
import bDiMPuZufQ from "/public/openmoji/1F3F4-E0065-E0073-E0069-E0062-E007F.svg";
import HLlRlcoLAk from "/public/openmoji/1F3F4-E0065-E0073-E006D-E0063-E007F.svg";
import iboeSTEUfx from "/public/openmoji/1F3F4-E0065-E0073-E0070-E0076-E007F.svg";
import dABMdVNdgM from "/public/openmoji/1F3F4-E0065-E0073-E0076-E0063-E007F.svg";
import HuEsDyVonG from "/public/openmoji/1F3F4-E0066-E0072-E0062-E0072-E0065-E007F.svg";
import qTGrXNvzuD from "/public/openmoji/1F3F4-E0067-E0062-E0065-E006E-E0067-E007F.svg";
import GMwiRryUzU from "/public/openmoji/1F3F4-E0067-E0062-E0073-E0063-E0074-E007F.svg";
import FwHJiGAhtN from "/public/openmoji/1F3F4-E0067-E0062-E0077-E006C-E0073-E007F.svg";
import akOBCyssXs from "/public/openmoji/1F3F4-E0075-E0073-E0063-E0061-E007F.svg";
import VwUpGfOFYH from "/public/openmoji/1F3F4-E0075-E0073-E0074-E0078-E007F.svg";
import cVFLOxZCvT from "/public/openmoji/1F3F4-FE0F-200D-1F170-FE0F.svg";
import TWVanPzRDF from "/public/openmoji/1F3F4.svg";
import IDNSiqrQfy from "/public/openmoji/1F3F5.svg";
import wLdplguJaq from "/public/openmoji/1F3F7.svg";
import biylnCnzsH from "/public/openmoji/1F3F8.svg";
import azEdtCTXXF from "/public/openmoji/1F3F9.svg";
import rthfEtoUqD from "/public/openmoji/1F3FA.svg";
import wfSFtFqjIX from "/public/openmoji/1F3FB.svg";
import djXxERjhYJ from "/public/openmoji/1F3FC.svg";
import IJBJWFpsty from "/public/openmoji/1F3FD.svg";
import hRokrpVyfn from "/public/openmoji/1F3FE.svg";
import tvOXrnOBop from "/public/openmoji/1F3FF.svg";
import snMxyinJtP from "/public/openmoji/1F400.svg";
import plDiJLFvAr from "/public/openmoji/1F401.svg";
import KIWZYxBYYG from "/public/openmoji/1F402.svg";
import uEUqtvULUd from "/public/openmoji/1F403.svg";
import wZSjVaWzDA from "/public/openmoji/1F404.svg";
import PMQdoptwmi from "/public/openmoji/1F405.svg";
import vPHJEDLCVf from "/public/openmoji/1F406.svg";
import uGUgIWpQug from "/public/openmoji/1F407.svg";
import bcEsAdCuVm from "/public/openmoji/1F408-200D-2B1B.svg";
import uUsarYPwtm from "/public/openmoji/1F408.svg";
import OQgnFBQigb from "/public/openmoji/1F409.svg";
import IwucUsVINV from "/public/openmoji/1F40A.svg";
import wfKVDrHJRr from "/public/openmoji/1F40B.svg";
import GQKicWurwL from "/public/openmoji/1F40C.svg";
import BPMUugxGff from "/public/openmoji/1F40D.svg";
import nqsbMHkPuc from "/public/openmoji/1F40E.svg";
import sWvApYFbrx from "/public/openmoji/1F40F.svg";
import EuDflDwCdI from "/public/openmoji/1F410.svg";
import HpXcKcAGZk from "/public/openmoji/1F411.svg";
import xnrLRHVwra from "/public/openmoji/1F412.svg";
import kJPFczrEAm from "/public/openmoji/1F413.svg";
import kUgiJFNcXW from "/public/openmoji/1F414.svg";
import mRJlxaHUba from "/public/openmoji/1F415-200D-1F9BA.svg";
import LBYtUwamTA from "/public/openmoji/1F415.svg";
import GklGcCaOeY from "/public/openmoji/1F416.svg";
import cgxyKIZhtL from "/public/openmoji/1F417.svg";
import ELKxuUTTMF from "/public/openmoji/1F418.svg";
import dolkitJBDt from "/public/openmoji/1F419.svg";
import PlqTBCtMHX from "/public/openmoji/1F41A.svg";
import jHZeGhvMpi from "/public/openmoji/1F41B.svg";
import fTFXeGXKFw from "/public/openmoji/1F41C.svg";
import efVNGDdItd from "/public/openmoji/1F41D.svg";
import AbcindNphq from "/public/openmoji/1F41E.svg";
import eaBjelSnjo from "/public/openmoji/1F41F.svg";
import iURpUFNxgb from "/public/openmoji/1F420.svg";
import OqeTXOhawY from "/public/openmoji/1F421.svg";
import DeZMQeBVVf from "/public/openmoji/1F422.svg";
import ZvQICizLfY from "/public/openmoji/1F423.svg";
import YkWzjJdaBD from "/public/openmoji/1F424.svg";
import oraNchYLMI from "/public/openmoji/1F425.svg";
import uDiwaAUopF from "/public/openmoji/1F426-200D-2B1B.svg";
import GzyCJMSMkN from "/public/openmoji/1F426.svg";
import wmAmuzhIKC from "/public/openmoji/1F427.svg";
import BBiEYOABem from "/public/openmoji/1F428.svg";
import rdvQnmhZOa from "/public/openmoji/1F429.svg";
import qbHeVhqtUc from "/public/openmoji/1F42A.svg";
import OomgslbRpW from "/public/openmoji/1F42B.svg";
import UGFjvQrjKb from "/public/openmoji/1F42C.svg";
import JlGmTwkqMD from "/public/openmoji/1F42D.svg";
import ScccFWVbMp from "/public/openmoji/1F42E.svg";
import NlyDTPuENu from "/public/openmoji/1F42F.svg";
import DGizwqUpRF from "/public/openmoji/1F430.svg";
import GFQBlrazcK from "/public/openmoji/1F431-200D-1F4BB.svg";
import YavpBqBYKL from "/public/openmoji/1F431.svg";
import jlCDexdvvh from "/public/openmoji/1F432.svg";
import kDjOlECjQo from "/public/openmoji/1F433.svg";
import NTmhaWLtSX from "/public/openmoji/1F434.svg";
import rMyTTnFkVg from "/public/openmoji/1F435.svg";
import fPkMAWohKg from "/public/openmoji/1F436.svg";
import HavDMZWzrf from "/public/openmoji/1F437.svg";
import zMZbJxtxMx from "/public/openmoji/1F438.svg";
import KGLrJUoDSM from "/public/openmoji/1F439.svg";
import bqjyeySHKr from "/public/openmoji/1F43A.svg";
import OFhhBjxlnD from "/public/openmoji/1F43B-200D-2744-FE0F.svg";
import WXRUoWTWpZ from "/public/openmoji/1F43B.svg";
import SdknuGVjZq from "/public/openmoji/1F43C.svg";
import bDPaMkSixD from "/public/openmoji/1F43D.svg";
import qWiSwqldsh from "/public/openmoji/1F43E.svg";
import MBIxjuuySt from "/public/openmoji/1F43F.svg";
import PQgQKBYsUl from "/public/openmoji/1F440.svg";
import kTnCOwyQJc from "/public/openmoji/1F441-FE0F-200D-1F5E8-FE0F.svg";
import RJhiTYZISW from "/public/openmoji/1F441.svg";
import IGPDFtsPpI from "/public/openmoji/1F442-1F3FB.svg";
import VmpHeWpspx from "/public/openmoji/1F442-1F3FC.svg";
import YERTcOxXGm from "/public/openmoji/1F442-1F3FD.svg";
import WolKzNlZvB from "/public/openmoji/1F442-1F3FE.svg";
import LUyWJnNAQO from "/public/openmoji/1F442-1F3FF.svg";
import geKzzmWEnV from "/public/openmoji/1F442.svg";
import nMRizDCdLv from "/public/openmoji/1F443-1F3FB.svg";
import CzicBidGdM from "/public/openmoji/1F443-1F3FC.svg";
import cgleRMxCmF from "/public/openmoji/1F443-1F3FD.svg";
import SyVDjxvPit from "/public/openmoji/1F443-1F3FE.svg";
import vpcQDmKFRH from "/public/openmoji/1F443-1F3FF.svg";
import sYfNfgHviU from "/public/openmoji/1F443.svg";
import mYkFshQYwn from "/public/openmoji/1F444.svg";
import YrvAteDvIr from "/public/openmoji/1F445.svg";
import rycbnoYYRO from "/public/openmoji/1F446-1F3FB.svg";
import zhZZEiFXOR from "/public/openmoji/1F446-1F3FC.svg";
import vhqpiEZZZS from "/public/openmoji/1F446-1F3FD.svg";
import RQZbBAkRUR from "/public/openmoji/1F446-1F3FE.svg";
import OEwCNUDZPI from "/public/openmoji/1F446-1F3FF.svg";
import WKqepDGERM from "/public/openmoji/1F446.svg";
import ymPvqftqwB from "/public/openmoji/1F447-1F3FB.svg";
import MYAGOPVSGO from "/public/openmoji/1F447-1F3FC.svg";
import qCGYzkgwVR from "/public/openmoji/1F447-1F3FD.svg";
import pDiJkZKwdi from "/public/openmoji/1F447-1F3FE.svg";
import GvjkruNcwr from "/public/openmoji/1F447-1F3FF.svg";
import EOlDOXBbCT from "/public/openmoji/1F447.svg";
import vhdnddLeSC from "/public/openmoji/1F448-1F3FB.svg";
import TWlydoJCAA from "/public/openmoji/1F448-1F3FC.svg";
import dHsvhKwWVP from "/public/openmoji/1F448-1F3FD.svg";
import AXsDYLlrpN from "/public/openmoji/1F448-1F3FE.svg";
import SnpVLqUiOR from "/public/openmoji/1F448-1F3FF.svg";
import XPTPaCbnvy from "/public/openmoji/1F448.svg";
import xVGpgXlxMh from "/public/openmoji/1F449-1F3FB.svg";
import HCiWtWSiiG from "/public/openmoji/1F449-1F3FC.svg";
import ffZGoOXssG from "/public/openmoji/1F449-1F3FD.svg";
import CvYfrxYiqi from "/public/openmoji/1F449-1F3FE.svg";
import YNKiBwdSvV from "/public/openmoji/1F449-1F3FF.svg";
import AoIgzshifT from "/public/openmoji/1F449.svg";
import zgKjGfuaYV from "/public/openmoji/1F44A-1F3FB.svg";
import lwktlmXNoe from "/public/openmoji/1F44A-1F3FC.svg";
import BxhKURXquO from "/public/openmoji/1F44A-1F3FD.svg";
import HFmzmNFzxx from "/public/openmoji/1F44A-1F3FE.svg";
import OptYovChoR from "/public/openmoji/1F44A-1F3FF.svg";
import YcICZSKyPN from "/public/openmoji/1F44A.svg";
import jnQDdreWWD from "/public/openmoji/1F44B-1F3FB.svg";
import fVkFAIeXFC from "/public/openmoji/1F44B-1F3FC.svg";
import NQrhbiguMC from "/public/openmoji/1F44B-1F3FD.svg";
import AQbqDEHBbT from "/public/openmoji/1F44B-1F3FE.svg";
import sagWcAVZrX from "/public/openmoji/1F44B-1F3FF.svg";
import nFgtGrCial from "/public/openmoji/1F44B.svg";
import DEJNjbiEyC from "/public/openmoji/1F44C-1F3FB.svg";
import qSnFSAFvKO from "/public/openmoji/1F44C-1F3FC.svg";
import EOhpdZxdHA from "/public/openmoji/1F44C-1F3FD.svg";
import fgCnDnmFqP from "/public/openmoji/1F44C-1F3FE.svg";
import kOiNjihmjo from "/public/openmoji/1F44C-1F3FF.svg";
import kwAMnDizJF from "/public/openmoji/1F44C.svg";
import JSzxhdDfFa from "/public/openmoji/1F44D-1F3FB.svg";
import VkFARlpmLp from "/public/openmoji/1F44D-1F3FC.svg";
import bMhcQIuiem from "/public/openmoji/1F44D-1F3FD.svg";
import qNAZAlLXPd from "/public/openmoji/1F44D-1F3FE.svg";
import ypVRXcXapK from "/public/openmoji/1F44D-1F3FF.svg";
import QNrvAaAjVm from "/public/openmoji/1F44D.svg";
import oZFrCcEFct from "/public/openmoji/1F44E-1F3FB.svg";
import HreHEuBvsu from "/public/openmoji/1F44E-1F3FC.svg";
import GwdEbnDlLU from "/public/openmoji/1F44E-1F3FD.svg";
import GcRPedqjbp from "/public/openmoji/1F44E-1F3FE.svg";
import qJIvvTCaZf from "/public/openmoji/1F44E-1F3FF.svg";
import cRqUwlAARg from "/public/openmoji/1F44E.svg";
import RijJdtPDrg from "/public/openmoji/1F44F-1F3FB.svg";
import wXnyemXkjs from "/public/openmoji/1F44F-1F3FC.svg";
import iWrIdhVUOt from "/public/openmoji/1F44F-1F3FD.svg";
import ZCvPrpKrLs from "/public/openmoji/1F44F-1F3FE.svg";
import AmUlDEPQbf from "/public/openmoji/1F44F-1F3FF.svg";
import frcKntktWR from "/public/openmoji/1F44F.svg";
import MpeuybNIIp from "/public/openmoji/1F450-1F3FB.svg";
import uhKPkIXdaG from "/public/openmoji/1F450-1F3FC.svg";
import NdkWgjTYlT from "/public/openmoji/1F450-1F3FD.svg";
import NflCxdqQZR from "/public/openmoji/1F450-1F3FE.svg";
import lzAEFAvCgO from "/public/openmoji/1F450-1F3FF.svg";
import mQsFuXwZpj from "/public/openmoji/1F450.svg";
import cYDUfWSekE from "/public/openmoji/1F451.svg";
import zyUeblOnFE from "/public/openmoji/1F452.svg";
import hwWNvlgAhC from "/public/openmoji/1F453.svg";
import ejCCbxvmXZ from "/public/openmoji/1F454.svg";
import oqOzwuONAv from "/public/openmoji/1F455.svg";
import UgsKmeWBBB from "/public/openmoji/1F456.svg";
import WaCgdPbwLf from "/public/openmoji/1F457.svg";
import iQsuIbJnuH from "/public/openmoji/1F458.svg";
import dcauIuBSth from "/public/openmoji/1F459.svg";
import UIGYmKMrrZ from "/public/openmoji/1F45A.svg";
import pKnUuvyobX from "/public/openmoji/1F45B.svg";
import cGShPAuVXw from "/public/openmoji/1F45C.svg";
import OqnlrVzYPf from "/public/openmoji/1F45D.svg";
import yihlRusFwS from "/public/openmoji/1F45E.svg";
import OcwdDLgPvO from "/public/openmoji/1F45F.svg";
import FlgESeGHKy from "/public/openmoji/1F460.svg";
import pgsHmsvpcV from "/public/openmoji/1F461.svg";
import IdJNzpFNdJ from "/public/openmoji/1F462.svg";
import BjhmhtLema from "/public/openmoji/1F463.svg";
import toRZqUUKfy from "/public/openmoji/1F464.svg";
import yhHLbcriek from "/public/openmoji/1F465.svg";
import ESoHqRkOVx from "/public/openmoji/1F466-1F3FB.svg";
import yAgjgyDnFb from "/public/openmoji/1F466-1F3FC.svg";
import qZXywvoMkT from "/public/openmoji/1F466-1F3FD.svg";
import TDJjBgEfZS from "/public/openmoji/1F466-1F3FE.svg";
import HeNHxZiVCT from "/public/openmoji/1F466-1F3FF.svg";
import IgXlziubYb from "/public/openmoji/1F466.svg";
import nEIdPHnmBo from "/public/openmoji/1F467-1F3FB.svg";
import CdANwVUigd from "/public/openmoji/1F467-1F3FC.svg";
import iFzCLLRrLB from "/public/openmoji/1F467-1F3FD.svg";
import mQgBRXfYur from "/public/openmoji/1F467-1F3FE.svg";
import EShpPCPDrH from "/public/openmoji/1F467-1F3FF.svg";
import dWHmoqaYnu from "/public/openmoji/1F467.svg";
import nSBMLupynT from "/public/openmoji/1F468-1F3FB-200D-1F33E.svg";
import LAlgjlcDjH from "/public/openmoji/1F468-1F3FB-200D-1F373.svg";
import OoysKEESej from "/public/openmoji/1F468-1F3FB-200D-1F37C.svg";
import ZaCBgvNBeF from "/public/openmoji/1F468-1F3FB-200D-1F393.svg";
import lcwkiDoIHc from "/public/openmoji/1F468-1F3FB-200D-1F3A4.svg";
import StBjJlCwLU from "/public/openmoji/1F468-1F3FB-200D-1F3A8.svg";
import LIlnDokHLX from "/public/openmoji/1F468-1F3FB-200D-1F3EB.svg";
import hcGmTdGgLF from "/public/openmoji/1F468-1F3FB-200D-1F3ED.svg";
import uBsqADphNf from "/public/openmoji/1F468-1F3FB-200D-1F4BB.svg";
import JqunZzKMuO from "/public/openmoji/1F468-1F3FB-200D-1F4BC.svg";
import TobwBurEtg from "/public/openmoji/1F468-1F3FB-200D-1F527.svg";
import QfexiukbCO from "/public/openmoji/1F468-1F3FB-200D-1F52C.svg";
import uSqqLElVrk from "/public/openmoji/1F468-1F3FB-200D-1F680.svg";
import SdOMVWgGLS from "/public/openmoji/1F468-1F3FB-200D-1F692.svg";
import dcFNpAqqHK from "/public/openmoji/1F468-1F3FB-200D-1F91D-200D-1F468-1F3FC.svg";
import XnpBJjtJHl from "/public/openmoji/1F468-1F3FB-200D-1F91D-200D-1F468-1F3FD.svg";
import FYSklOgqao from "/public/openmoji/1F468-1F3FB-200D-1F91D-200D-1F468-1F3FE.svg";
import nEKbFRUoFc from "/public/openmoji/1F468-1F3FB-200D-1F91D-200D-1F468-1F3FF.svg";
import uZLiukROGz from "/public/openmoji/1F468-1F3FB-200D-1F9AF.svg";
import oiDkpiDQIj from "/public/openmoji/1F468-1F3FB-200D-1F9B0.svg";
import myzYFGpdfP from "/public/openmoji/1F468-1F3FB-200D-1F9B1.svg";
import TurkJRtKEm from "/public/openmoji/1F468-1F3FB-200D-1F9B2.svg";
import zIjVohvFbt from "/public/openmoji/1F468-1F3FB-200D-1F9B3.svg";
import WYsAcaztNP from "/public/openmoji/1F468-1F3FB-200D-1F9BC.svg";
import dNvCbZbxnu from "/public/openmoji/1F468-1F3FB-200D-1F9BD.svg";
import hyhqUSFLoP from "/public/openmoji/1F468-1F3FB-200D-2695-FE0F.svg";
import qemMwpyVmi from "/public/openmoji/1F468-1F3FB-200D-2696-FE0F.svg";
import gCvJExQAiK from "/public/openmoji/1F468-1F3FB-200D-2708-FE0F.svg";
import lAXvLehqrD from "/public/openmoji/1F468-1F3FB-200D-2764-FE0F-200D-1F468-1F3FB.svg";
import lmVqmiePys from "/public/openmoji/1F468-1F3FB-200D-2764-FE0F-200D-1F468-1F3FC.svg";
import sSMjUvHURK from "/public/openmoji/1F468-1F3FB-200D-2764-FE0F-200D-1F468-1F3FD.svg";
import vZuPXDmblr from "/public/openmoji/1F468-1F3FB-200D-2764-FE0F-200D-1F468-1F3FE.svg";
import KDpqHtxTKA from "/public/openmoji/1F468-1F3FB-200D-2764-FE0F-200D-1F468-1F3FF.svg";
import fGEeRsUBkH from "/public/openmoji/1F468-1F3FB-200D-2764-FE0F-200D-1F48B-200D-1F468-1F3FB.svg";
import TTmgTHmKHS from "/public/openmoji/1F468-1F3FB-200D-2764-FE0F-200D-1F48B-200D-1F468-1F3FC.svg";
import FGsENNTSJw from "/public/openmoji/1F468-1F3FB-200D-2764-FE0F-200D-1F48B-200D-1F468-1F3FD.svg";
import VFaiDTCUuC from "/public/openmoji/1F468-1F3FB-200D-2764-FE0F-200D-1F48B-200D-1F468-1F3FE.svg";
import nMnhPUYXaj from "/public/openmoji/1F468-1F3FB-200D-2764-FE0F-200D-1F48B-200D-1F468-1F3FF.svg";
import QYUesmSHtL from "/public/openmoji/1F468-1F3FB.svg";
import brKYPezzUr from "/public/openmoji/1F468-1F3FC-200D-1F33E.svg";
import wPutXAqgqm from "/public/openmoji/1F468-1F3FC-200D-1F373.svg";
import MfQTcYwwdH from "/public/openmoji/1F468-1F3FC-200D-1F37C.svg";
import JUDnQBaIbp from "/public/openmoji/1F468-1F3FC-200D-1F393.svg";
import usfznMOJGj from "/public/openmoji/1F468-1F3FC-200D-1F3A4.svg";
import lXePyLORPT from "/public/openmoji/1F468-1F3FC-200D-1F3A8.svg";
import FbyaXZRVSL from "/public/openmoji/1F468-1F3FC-200D-1F3EB.svg";
import zKYABaebCN from "/public/openmoji/1F468-1F3FC-200D-1F3ED.svg";
import SEzIJqZbJF from "/public/openmoji/1F468-1F3FC-200D-1F4BB.svg";
import YxPZATwjZC from "/public/openmoji/1F468-1F3FC-200D-1F4BC.svg";
import lmjHQJznde from "/public/openmoji/1F468-1F3FC-200D-1F527.svg";
import tXhomctRTb from "/public/openmoji/1F468-1F3FC-200D-1F52C.svg";
import tAXszQJqgI from "/public/openmoji/1F468-1F3FC-200D-1F680.svg";
import ihqJhPNMxR from "/public/openmoji/1F468-1F3FC-200D-1F692.svg";
import ovUPIHtYZp from "/public/openmoji/1F468-1F3FC-200D-1F91D-200D-1F468-1F3FB.svg";
import PfnGJfcajo from "/public/openmoji/1F468-1F3FC-200D-1F91D-200D-1F468-1F3FD.svg";
import drxWAvsVlu from "/public/openmoji/1F468-1F3FC-200D-1F91D-200D-1F468-1F3FE.svg";
import GEIvLHKiOY from "/public/openmoji/1F468-1F3FC-200D-1F91D-200D-1F468-1F3FF.svg";
import ckDkkjgAAT from "/public/openmoji/1F468-1F3FC-200D-1F9AF.svg";
import TjEyJfWYtk from "/public/openmoji/1F468-1F3FC-200D-1F9B0.svg";
import uzRwKRskNV from "/public/openmoji/1F468-1F3FC-200D-1F9B1.svg";
import CEkzxkMzzE from "/public/openmoji/1F468-1F3FC-200D-1F9B2.svg";
import SRSXOiCzdP from "/public/openmoji/1F468-1F3FC-200D-1F9B3.svg";
import sFYWxFjmSm from "/public/openmoji/1F468-1F3FC-200D-1F9BC.svg";
import oEToLgMVBp from "/public/openmoji/1F468-1F3FC-200D-1F9BD.svg";
import UHYdygeTFb from "/public/openmoji/1F468-1F3FC-200D-2695-FE0F.svg";
import OoKEGEdilR from "/public/openmoji/1F468-1F3FC-200D-2696-FE0F.svg";
import tODwsLQIlR from "/public/openmoji/1F468-1F3FC-200D-2708-FE0F.svg";
import hkpNicgZKl from "/public/openmoji/1F468-1F3FC-200D-2764-FE0F-200D-1F468-1F3FB.svg";
import NjEHmilqxt from "/public/openmoji/1F468-1F3FC-200D-2764-FE0F-200D-1F468-1F3FC.svg";
import UEmcmAvIQD from "/public/openmoji/1F468-1F3FC-200D-2764-FE0F-200D-1F468-1F3FD.svg";
import oqcRkwvJEI from "/public/openmoji/1F468-1F3FC-200D-2764-FE0F-200D-1F468-1F3FE.svg";
import NdrpurksyX from "/public/openmoji/1F468-1F3FC-200D-2764-FE0F-200D-1F468-1F3FF.svg";
import aLmBhdhKFC from "/public/openmoji/1F468-1F3FC-200D-2764-FE0F-200D-1F48B-200D-1F468-1F3FB.svg";
import vtKOfAAVZx from "/public/openmoji/1F468-1F3FC-200D-2764-FE0F-200D-1F48B-200D-1F468-1F3FC.svg";
import eYTHaoOohQ from "/public/openmoji/1F468-1F3FC-200D-2764-FE0F-200D-1F48B-200D-1F468-1F3FD.svg";
import vCjYtGMYVY from "/public/openmoji/1F468-1F3FC-200D-2764-FE0F-200D-1F48B-200D-1F468-1F3FE.svg";
import sVPLZDpMdj from "/public/openmoji/1F468-1F3FC-200D-2764-FE0F-200D-1F48B-200D-1F468-1F3FF.svg";
import KrLIpwwKQV from "/public/openmoji/1F468-1F3FC.svg";
import vQqMmgvgsh from "/public/openmoji/1F468-1F3FD-200D-1F33E.svg";
import zCqMfvwaCJ from "/public/openmoji/1F468-1F3FD-200D-1F373.svg";
import hghHYgEjXx from "/public/openmoji/1F468-1F3FD-200D-1F37C.svg";
import sjfldqtLQS from "/public/openmoji/1F468-1F3FD-200D-1F393.svg";
import brMmWyFITQ from "/public/openmoji/1F468-1F3FD-200D-1F3A4.svg";
import McqjGBnlWP from "/public/openmoji/1F468-1F3FD-200D-1F3A8.svg";
import JqSRWXnZFK from "/public/openmoji/1F468-1F3FD-200D-1F3EB.svg";
import cSUdUGphZm from "/public/openmoji/1F468-1F3FD-200D-1F3ED.svg";
import IDHiMEfgte from "/public/openmoji/1F468-1F3FD-200D-1F4BB.svg";
import DFriyzNost from "/public/openmoji/1F468-1F3FD-200D-1F4BC.svg";
import SBeQLmhwKu from "/public/openmoji/1F468-1F3FD-200D-1F527.svg";
import wyUFkiDCWD from "/public/openmoji/1F468-1F3FD-200D-1F52C.svg";
import vRVKdkvZSQ from "/public/openmoji/1F468-1F3FD-200D-1F680.svg";
import FlrOFHSJAC from "/public/openmoji/1F468-1F3FD-200D-1F692.svg";
import FiiOXfIfsP from "/public/openmoji/1F468-1F3FD-200D-1F91D-200D-1F468-1F3FB.svg";
import ZDaDCoIoHU from "/public/openmoji/1F468-1F3FD-200D-1F91D-200D-1F468-1F3FC.svg";
import dxjilQxjAJ from "/public/openmoji/1F468-1F3FD-200D-1F91D-200D-1F468-1F3FE.svg";
import nkIcyffNfT from "/public/openmoji/1F468-1F3FD-200D-1F91D-200D-1F468-1F3FF.svg";
import jmUGLdHNwc from "/public/openmoji/1F468-1F3FD-200D-1F9AF.svg";
import vUSMvYoeLf from "/public/openmoji/1F468-1F3FD-200D-1F9B0.svg";
import avpfWNIQPy from "/public/openmoji/1F468-1F3FD-200D-1F9B1.svg";
import eAAOnakmqB from "/public/openmoji/1F468-1F3FD-200D-1F9B2.svg";
import EuNHEXFBju from "/public/openmoji/1F468-1F3FD-200D-1F9B3.svg";
import HyCiWyWOGn from "/public/openmoji/1F468-1F3FD-200D-1F9BC.svg";
import gMwBebypPB from "/public/openmoji/1F468-1F3FD-200D-1F9BD.svg";
import foMAYjHxLn from "/public/openmoji/1F468-1F3FD-200D-2695-FE0F.svg";
import PuXrNewSWz from "/public/openmoji/1F468-1F3FD-200D-2696-FE0F.svg";
import lDbjCPqRRM from "/public/openmoji/1F468-1F3FD-200D-2708-FE0F.svg";
import DwyviPqGwU from "/public/openmoji/1F468-1F3FD-200D-2764-FE0F-200D-1F468-1F3FB.svg";
import XLYDgrllMd from "/public/openmoji/1F468-1F3FD-200D-2764-FE0F-200D-1F468-1F3FC.svg";
import WVRtaMDOYB from "/public/openmoji/1F468-1F3FD-200D-2764-FE0F-200D-1F468-1F3FD.svg";
import qEVGIndNnA from "/public/openmoji/1F468-1F3FD-200D-2764-FE0F-200D-1F468-1F3FE.svg";
import JInKbyoQax from "/public/openmoji/1F468-1F3FD-200D-2764-FE0F-200D-1F468-1F3FF.svg";
import aLEgLhLyoK from "/public/openmoji/1F468-1F3FD-200D-2764-FE0F-200D-1F48B-200D-1F468-1F3FB.svg";
import JpvFOiUXBd from "/public/openmoji/1F468-1F3FD-200D-2764-FE0F-200D-1F48B-200D-1F468-1F3FC.svg";
import lPdvdxjhXk from "/public/openmoji/1F468-1F3FD-200D-2764-FE0F-200D-1F48B-200D-1F468-1F3FD.svg";
import vQeNzFjHgz from "/public/openmoji/1F468-1F3FD-200D-2764-FE0F-200D-1F48B-200D-1F468-1F3FE.svg";
import ARnxDwPikF from "/public/openmoji/1F468-1F3FD-200D-2764-FE0F-200D-1F48B-200D-1F468-1F3FF.svg";
import cZspNvvBvK from "/public/openmoji/1F468-1F3FD.svg";
import rvafULcTDf from "/public/openmoji/1F468-1F3FE-200D-1F33E.svg";
import cHhZVtBXEi from "/public/openmoji/1F468-1F3FE-200D-1F373.svg";
import VMQucqtmMm from "/public/openmoji/1F468-1F3FE-200D-1F37C.svg";
import pcJcfVSaVT from "/public/openmoji/1F468-1F3FE-200D-1F393.svg";
import ymJIMmNxPH from "/public/openmoji/1F468-1F3FE-200D-1F3A4.svg";
import uenIHvtOzw from "/public/openmoji/1F468-1F3FE-200D-1F3A8.svg";
import StoLSpYTuH from "/public/openmoji/1F468-1F3FE-200D-1F3EB.svg";
import KIhXKFwPHe from "/public/openmoji/1F468-1F3FE-200D-1F3ED.svg";
import QRQZaBigqp from "/public/openmoji/1F468-1F3FE-200D-1F4BB.svg";
import aDecldtQtW from "/public/openmoji/1F468-1F3FE-200D-1F4BC.svg";
import YxtvMJHpvN from "/public/openmoji/1F468-1F3FE-200D-1F527.svg";
import EFkYjVAwnr from "/public/openmoji/1F468-1F3FE-200D-1F52C.svg";
import xcgnVyirYC from "/public/openmoji/1F468-1F3FE-200D-1F680.svg";
import LPtqAycpHh from "/public/openmoji/1F468-1F3FE-200D-1F692.svg";
import VvniHhYWyU from "/public/openmoji/1F468-1F3FE-200D-1F91D-200D-1F468-1F3FB.svg";
import eDPweqWBGV from "/public/openmoji/1F468-1F3FE-200D-1F91D-200D-1F468-1F3FC.svg";
import CyLTGfufMp from "/public/openmoji/1F468-1F3FE-200D-1F91D-200D-1F468-1F3FD.svg";
import gFocWjsgpo from "/public/openmoji/1F468-1F3FE-200D-1F91D-200D-1F468-1F3FF.svg";
import IbzETVAJEV from "/public/openmoji/1F468-1F3FE-200D-1F9AF.svg";
import icWthDImyj from "/public/openmoji/1F468-1F3FE-200D-1F9B0.svg";
import QaDqfvKZXt from "/public/openmoji/1F468-1F3FE-200D-1F9B1.svg";
import aFygwPOAGh from "/public/openmoji/1F468-1F3FE-200D-1F9B2.svg";
import GfHFBtDVhU from "/public/openmoji/1F468-1F3FE-200D-1F9B3.svg";
import GCMOEephhA from "/public/openmoji/1F468-1F3FE-200D-1F9BC.svg";
import wMsKtxjPhe from "/public/openmoji/1F468-1F3FE-200D-1F9BD.svg";
import qABoDRCUje from "/public/openmoji/1F468-1F3FE-200D-2695-FE0F.svg";
import aNZlIhKKQM from "/public/openmoji/1F468-1F3FE-200D-2696-FE0F.svg";
import hzkfVlEhrQ from "/public/openmoji/1F468-1F3FE-200D-2708-FE0F.svg";
import xmaVqqqulL from "/public/openmoji/1F468-1F3FE-200D-2764-FE0F-200D-1F468-1F3FB.svg";
import mBGpNfdpTD from "/public/openmoji/1F468-1F3FE-200D-2764-FE0F-200D-1F468-1F3FC.svg";
import PtLcFHMyVN from "/public/openmoji/1F468-1F3FE-200D-2764-FE0F-200D-1F468-1F3FD.svg";
import TzIhLMSrSs from "/public/openmoji/1F468-1F3FE-200D-2764-FE0F-200D-1F468-1F3FE.svg";
import qfABKsbMMb from "/public/openmoji/1F468-1F3FE-200D-2764-FE0F-200D-1F468-1F3FF.svg";
import lgFDsRCwdb from "/public/openmoji/1F468-1F3FE-200D-2764-FE0F-200D-1F48B-200D-1F468-1F3FB.svg";
import DjUCaUHImu from "/public/openmoji/1F468-1F3FE-200D-2764-FE0F-200D-1F48B-200D-1F468-1F3FC.svg";
import FNYGxAaTBf from "/public/openmoji/1F468-1F3FE-200D-2764-FE0F-200D-1F48B-200D-1F468-1F3FD.svg";
import jDvKjOJGEY from "/public/openmoji/1F468-1F3FE-200D-2764-FE0F-200D-1F48B-200D-1F468-1F3FE.svg";
import PQERQgVhzJ from "/public/openmoji/1F468-1F3FE-200D-2764-FE0F-200D-1F48B-200D-1F468-1F3FF.svg";
import HjMhALXSeh from "/public/openmoji/1F468-1F3FE.svg";
import LavYsYTJYP from "/public/openmoji/1F468-1F3FF-200D-1F33E.svg";
import CKSuyPDlbj from "/public/openmoji/1F468-1F3FF-200D-1F373.svg";
import wojqnAHmYI from "/public/openmoji/1F468-1F3FF-200D-1F37C.svg";
import vARrdMgkFF from "/public/openmoji/1F468-1F3FF-200D-1F393.svg";
import BaKduIjIEO from "/public/openmoji/1F468-1F3FF-200D-1F3A4.svg";
import sHElQLuVto from "/public/openmoji/1F468-1F3FF-200D-1F3A8.svg";
import DCNzLPGLro from "/public/openmoji/1F468-1F3FF-200D-1F3EB.svg";
import odGXtiPWGB from "/public/openmoji/1F468-1F3FF-200D-1F3ED.svg";
import kObdGbrnLF from "/public/openmoji/1F468-1F3FF-200D-1F4BB.svg";
import qNAtCXtvYW from "/public/openmoji/1F468-1F3FF-200D-1F4BC.svg";
import UosCsEPIsb from "/public/openmoji/1F468-1F3FF-200D-1F527.svg";
import scShzdTEbD from "/public/openmoji/1F468-1F3FF-200D-1F52C.svg";
import FqXRNoHBKS from "/public/openmoji/1F468-1F3FF-200D-1F680.svg";
import GIHhmmbrmg from "/public/openmoji/1F468-1F3FF-200D-1F692.svg";
import HGcVHjfGQp from "/public/openmoji/1F468-1F3FF-200D-1F91D-200D-1F468-1F3FB.svg";
import GzGScuaYTl from "/public/openmoji/1F468-1F3FF-200D-1F91D-200D-1F468-1F3FC.svg";
import MlMuWQmFPL from "/public/openmoji/1F468-1F3FF-200D-1F91D-200D-1F468-1F3FD.svg";
import XwZEqHFxZt from "/public/openmoji/1F468-1F3FF-200D-1F91D-200D-1F468-1F3FE.svg";
import bGldrDTGHQ from "/public/openmoji/1F468-1F3FF-200D-1F9AF.svg";
import EFyTHmMUcr from "/public/openmoji/1F468-1F3FF-200D-1F9B0.svg";
import azNQmFUZPz from "/public/openmoji/1F468-1F3FF-200D-1F9B1.svg";
import FCeBxScsRR from "/public/openmoji/1F468-1F3FF-200D-1F9B2.svg";
import qqsXgAOXSq from "/public/openmoji/1F468-1F3FF-200D-1F9B3.svg";
import suwDXiWnot from "/public/openmoji/1F468-1F3FF-200D-1F9BC.svg";
import pvNJdOKAVv from "/public/openmoji/1F468-1F3FF-200D-1F9BD.svg";
import HWtWdSMbwM from "/public/openmoji/1F468-1F3FF-200D-2695-FE0F.svg";
import kzuJaCahRt from "/public/openmoji/1F468-1F3FF-200D-2696-FE0F.svg";
import wpBBmfadLo from "/public/openmoji/1F468-1F3FF-200D-2708-FE0F.svg";
import ocOVwHkgRk from "/public/openmoji/1F468-1F3FF-200D-2764-FE0F-200D-1F468-1F3FB.svg";
import UuPoWbvEyC from "/public/openmoji/1F468-1F3FF-200D-2764-FE0F-200D-1F468-1F3FC.svg";
import rQBaEzSCiR from "/public/openmoji/1F468-1F3FF-200D-2764-FE0F-200D-1F468-1F3FD.svg";
import kCXjrYSikO from "/public/openmoji/1F468-1F3FF-200D-2764-FE0F-200D-1F468-1F3FE.svg";
import hadIiQfMYX from "/public/openmoji/1F468-1F3FF-200D-2764-FE0F-200D-1F468-1F3FF.svg";
import YpkBFXShJu from "/public/openmoji/1F468-1F3FF-200D-2764-FE0F-200D-1F48B-200D-1F468-1F3FB.svg";
import LMEWIOXojP from "/public/openmoji/1F468-1F3FF-200D-2764-FE0F-200D-1F48B-200D-1F468-1F3FC.svg";
import PDClyqnyEr from "/public/openmoji/1F468-1F3FF-200D-2764-FE0F-200D-1F48B-200D-1F468-1F3FD.svg";
import kaycqGKtiF from "/public/openmoji/1F468-1F3FF-200D-2764-FE0F-200D-1F48B-200D-1F468-1F3FE.svg";
import LGNRpoRfwV from "/public/openmoji/1F468-1F3FF-200D-2764-FE0F-200D-1F48B-200D-1F468-1F3FF.svg";
import rhJVfQKUvX from "/public/openmoji/1F468-1F3FF.svg";
import qNYurwlvam from "/public/openmoji/1F468-200D-1F33E.svg";
import PGcTknLAiG from "/public/openmoji/1F468-200D-1F373.svg";
import EfQUcoyFhq from "/public/openmoji/1F468-200D-1F37C.svg";
import ykdZTmOLfG from "/public/openmoji/1F468-200D-1F393.svg";
import hqAvAOxfgA from "/public/openmoji/1F468-200D-1F3A4.svg";
import eHSWOgkQbq from "/public/openmoji/1F468-200D-1F3A8.svg";
import OYwImIbXAF from "/public/openmoji/1F468-200D-1F3EB.svg";
import kApdnvBIEu from "/public/openmoji/1F468-200D-1F3ED.svg";
import QQUvnTGfSG from "/public/openmoji/1F468-200D-1F466-200D-1F466.svg";
import TBeBuAgvlY from "/public/openmoji/1F468-200D-1F466.svg";
import mUtVjzUDxe from "/public/openmoji/1F468-200D-1F467-200D-1F466.svg";
import akfZqeaIKd from "/public/openmoji/1F468-200D-1F467-200D-1F467.svg";
import UgawmBBAhK from "/public/openmoji/1F468-200D-1F467.svg";
import MgSpnlKqna from "/public/openmoji/1F468-200D-1F468-200D-1F466-200D-1F466.svg";
import bIJCtaPAFR from "/public/openmoji/1F468-200D-1F468-200D-1F466.svg";
import vRjxiyCHTR from "/public/openmoji/1F468-200D-1F468-200D-1F467-200D-1F466.svg";
import pYcYyRygPE from "/public/openmoji/1F468-200D-1F468-200D-1F467-200D-1F467.svg";
import FznVjzEpJK from "/public/openmoji/1F468-200D-1F468-200D-1F467.svg";
import xcOKtwoUao from "/public/openmoji/1F468-200D-1F469-200D-1F466-200D-1F466.svg";
import PvxUjfkzgI from "/public/openmoji/1F468-200D-1F469-200D-1F466.svg";
import ZAmXfOiRDz from "/public/openmoji/1F468-200D-1F469-200D-1F467-200D-1F466.svg";
import HXeKLIInZf from "/public/openmoji/1F468-200D-1F469-200D-1F467-200D-1F467.svg";
import qzHaDYAJYy from "/public/openmoji/1F468-200D-1F469-200D-1F467.svg";
import ifXBdfLaPw from "/public/openmoji/1F468-200D-1F4BB.svg";
import GMrjpzFjeT from "/public/openmoji/1F468-200D-1F4BC.svg";
import htGjLRXXra from "/public/openmoji/1F468-200D-1F527.svg";
import MQKpUwpfBR from "/public/openmoji/1F468-200D-1F52C.svg";
import HjpMtFwoWX from "/public/openmoji/1F468-200D-1F680.svg";
import yPWzcZLjUB from "/public/openmoji/1F468-200D-1F692.svg";
import qKmXcmLFdp from "/public/openmoji/1F468-200D-1F9AF.svg";
import UDyBjAYvpT from "/public/openmoji/1F468-200D-1F9B0.svg";
import iiAnPdmCes from "/public/openmoji/1F468-200D-1F9B1.svg";
import qBBMZxpaFY from "/public/openmoji/1F468-200D-1F9B2.svg";
import EFTKQXQKKZ from "/public/openmoji/1F468-200D-1F9B3.svg";
import zYRqjTUmwm from "/public/openmoji/1F468-200D-1F9BC.svg";
import pTrrkxmKcb from "/public/openmoji/1F468-200D-1F9BD.svg";
import OrGDawNFAb from "/public/openmoji/1F468-200D-1FAA9.svg";
import zedsjlAALa from "/public/openmoji/1F468-200D-2695-FE0F.svg";
import BprHRFSesg from "/public/openmoji/1F468-200D-2696-FE0F.svg";
import fjBfNNPmLV from "/public/openmoji/1F468-200D-2708-FE0F.svg";
import rLqgTukGue from "/public/openmoji/1F468-200D-2764-FE0F-200D-1F468.svg";
import nGLQhueMME from "/public/openmoji/1F468-200D-2764-FE0F-200D-1F48B-200D-1F468.svg";
import WlqcITFXqa from "/public/openmoji/1F468.svg";
import JjsNbWnEOF from "/public/openmoji/1F469-1F3FB-200D-1F33E.svg";
import lYZyyUwkZx from "/public/openmoji/1F469-1F3FB-200D-1F373.svg";
import ZDotEgxoDW from "/public/openmoji/1F469-1F3FB-200D-1F37C.svg";
import GexspKDVsv from "/public/openmoji/1F469-1F3FB-200D-1F393.svg";
import hSLcgPLYCD from "/public/openmoji/1F469-1F3FB-200D-1F3A4.svg";
import LaxcMyVOZB from "/public/openmoji/1F469-1F3FB-200D-1F3A8.svg";
import qjfWSOPMbL from "/public/openmoji/1F469-1F3FB-200D-1F3EB.svg";
import emmGodFkxS from "/public/openmoji/1F469-1F3FB-200D-1F3ED.svg";
import hKCDQqjpNL from "/public/openmoji/1F469-1F3FB-200D-1F4BB.svg";
import HEFlHeuIAQ from "/public/openmoji/1F469-1F3FB-200D-1F4BC.svg";
import SMnqoymsbT from "/public/openmoji/1F469-1F3FB-200D-1F527.svg";
import dNuQeknpZT from "/public/openmoji/1F469-1F3FB-200D-1F52C.svg";
import vAQlNKtcDz from "/public/openmoji/1F469-1F3FB-200D-1F680.svg";
import EfYWCNjJBR from "/public/openmoji/1F469-1F3FB-200D-1F692.svg";
import fKlBvsPKBI from "/public/openmoji/1F469-1F3FB-200D-1F91D-200D-1F468-1F3FC.svg";
import LcakgZfkpL from "/public/openmoji/1F469-1F3FB-200D-1F91D-200D-1F468-1F3FD.svg";
import uZWYiaIxuv from "/public/openmoji/1F469-1F3FB-200D-1F91D-200D-1F468-1F3FE.svg";
import MepfYtIlyG from "/public/openmoji/1F469-1F3FB-200D-1F91D-200D-1F468-1F3FF.svg";
import WBGRljyjTM from "/public/openmoji/1F469-1F3FB-200D-1F91D-200D-1F469-1F3FC.svg";
import BmglQCJmFJ from "/public/openmoji/1F469-1F3FB-200D-1F91D-200D-1F469-1F3FD.svg";
import frSgAaZdna from "/public/openmoji/1F469-1F3FB-200D-1F91D-200D-1F469-1F3FE.svg";
import kLvqcTBJzJ from "/public/openmoji/1F469-1F3FB-200D-1F91D-200D-1F469-1F3FF.svg";
import FNoKnoHYvk from "/public/openmoji/1F469-1F3FB-200D-1F9AF.svg";
import DEAMAfZRrT from "/public/openmoji/1F469-1F3FB-200D-1F9B0.svg";
import YJOpvGMpRw from "/public/openmoji/1F469-1F3FB-200D-1F9B1.svg";
import hSUSfxTQZn from "/public/openmoji/1F469-1F3FB-200D-1F9B2.svg";
import LhFsjMXwGU from "/public/openmoji/1F469-1F3FB-200D-1F9B3.svg";
import AfHOxVtqQT from "/public/openmoji/1F469-1F3FB-200D-1F9BC.svg";
import yPWEMwFZkT from "/public/openmoji/1F469-1F3FB-200D-1F9BD.svg";
import GNdvgyCVoc from "/public/openmoji/1F469-1F3FB-200D-2695-FE0F.svg";
import SYCGzwLQSq from "/public/openmoji/1F469-1F3FB-200D-2696-FE0F.svg";
import LEGxQZxDMR from "/public/openmoji/1F469-1F3FB-200D-2708-FE0F.svg";
import AhSfhpOyQO from "/public/openmoji/1F469-1F3FB-200D-2764-FE0F-200D-1F468-1F3FB.svg";
import woJXjDHsKy from "/public/openmoji/1F469-1F3FB-200D-2764-FE0F-200D-1F468-1F3FC.svg";
import olSJeStopr from "/public/openmoji/1F469-1F3FB-200D-2764-FE0F-200D-1F468-1F3FD.svg";
import gBanUHleSm from "/public/openmoji/1F469-1F3FB-200D-2764-FE0F-200D-1F468-1F3FE.svg";
import NUHTfCuDqT from "/public/openmoji/1F469-1F3FB-200D-2764-FE0F-200D-1F468-1F3FF.svg";
import KFuckzdmVg from "/public/openmoji/1F469-1F3FB-200D-2764-FE0F-200D-1F469-1F3FB.svg";
import MebvupmNSn from "/public/openmoji/1F469-1F3FB-200D-2764-FE0F-200D-1F469-1F3FC.svg";
import vBWVMdFGLI from "/public/openmoji/1F469-1F3FB-200D-2764-FE0F-200D-1F469-1F3FD.svg";
import xkwUXkclwA from "/public/openmoji/1F469-1F3FB-200D-2764-FE0F-200D-1F469-1F3FE.svg";
import uFQagWRBdf from "/public/openmoji/1F469-1F3FB-200D-2764-FE0F-200D-1F469-1F3FF.svg";
import vvTqGiXmfZ from "/public/openmoji/1F469-1F3FB-200D-2764-FE0F-200D-1F48B-200D-1F468-1F3FB.svg";
import BaIkgBHTIs from "/public/openmoji/1F469-1F3FB-200D-2764-FE0F-200D-1F48B-200D-1F468-1F3FC.svg";
import GTcJfRXORU from "/public/openmoji/1F469-1F3FB-200D-2764-FE0F-200D-1F48B-200D-1F468-1F3FD.svg";
import oTZHqDTBVU from "/public/openmoji/1F469-1F3FB-200D-2764-FE0F-200D-1F48B-200D-1F468-1F3FE.svg";
import QdMmPVqYOh from "/public/openmoji/1F469-1F3FB-200D-2764-FE0F-200D-1F48B-200D-1F468-1F3FF.svg";
import vQIvHtMgrq from "/public/openmoji/1F469-1F3FB-200D-2764-FE0F-200D-1F48B-200D-1F469-1F3FB.svg";
import UnrGBRShMa from "/public/openmoji/1F469-1F3FB-200D-2764-FE0F-200D-1F48B-200D-1F469-1F3FC.svg";
import GfcwRLHRqN from "/public/openmoji/1F469-1F3FB-200D-2764-FE0F-200D-1F48B-200D-1F469-1F3FD.svg";
import exxomXjNCu from "/public/openmoji/1F469-1F3FB-200D-2764-FE0F-200D-1F48B-200D-1F469-1F3FE.svg";
import khxKGIqnyd from "/public/openmoji/1F469-1F3FB-200D-2764-FE0F-200D-1F48B-200D-1F469-1F3FF.svg";
import mOAwvtmClI from "/public/openmoji/1F469-1F3FB.svg";
import xeTPezRoXM from "/public/openmoji/1F469-1F3FC-200D-1F33E.svg";
import hmWPsfzBBj from "/public/openmoji/1F469-1F3FC-200D-1F373.svg";
import kwfimisbsQ from "/public/openmoji/1F469-1F3FC-200D-1F37C.svg";
import XwFvaKMNRM from "/public/openmoji/1F469-1F3FC-200D-1F393.svg";
import ZNdWvXQNpz from "/public/openmoji/1F469-1F3FC-200D-1F3A4.svg";
import KgPnVUGKOf from "/public/openmoji/1F469-1F3FC-200D-1F3A8.svg";
import SaXEoatIHw from "/public/openmoji/1F469-1F3FC-200D-1F3EB.svg";
import PDfcnkTgxs from "/public/openmoji/1F469-1F3FC-200D-1F3ED.svg";
import UifhVfertF from "/public/openmoji/1F469-1F3FC-200D-1F4BB.svg";
import IyrOLPkvKq from "/public/openmoji/1F469-1F3FC-200D-1F4BC.svg";
import GytvNYpIEG from "/public/openmoji/1F469-1F3FC-200D-1F527.svg";
import tsTxezCGeH from "/public/openmoji/1F469-1F3FC-200D-1F52C.svg";
import YCcZCipSUd from "/public/openmoji/1F469-1F3FC-200D-1F680.svg";
import TUJQDvTTmO from "/public/openmoji/1F469-1F3FC-200D-1F692.svg";
import ySdsBOsJyV from "/public/openmoji/1F469-1F3FC-200D-1F91D-200D-1F468-1F3FB.svg";
import YLouPqUmpx from "/public/openmoji/1F469-1F3FC-200D-1F91D-200D-1F468-1F3FD.svg";
import eVQuLHHjSQ from "/public/openmoji/1F469-1F3FC-200D-1F91D-200D-1F468-1F3FE.svg";
import TxDvQOVOZN from "/public/openmoji/1F469-1F3FC-200D-1F91D-200D-1F468-1F3FF.svg";
import traKkufLWN from "/public/openmoji/1F469-1F3FC-200D-1F91D-200D-1F469-1F3FB.svg";
import GsykQPrBdN from "/public/openmoji/1F469-1F3FC-200D-1F91D-200D-1F469-1F3FD.svg";
import nmJdNdgRgR from "/public/openmoji/1F469-1F3FC-200D-1F91D-200D-1F469-1F3FE.svg";
import XoAyXlACoD from "/public/openmoji/1F469-1F3FC-200D-1F91D-200D-1F469-1F3FF.svg";
import IwHbXIJBpw from "/public/openmoji/1F469-1F3FC-200D-1F9AF.svg";
import tdoVbcHxLS from "/public/openmoji/1F469-1F3FC-200D-1F9B0.svg";
import GLSYqChRkj from "/public/openmoji/1F469-1F3FC-200D-1F9B1.svg";
import mHpAQQUkHQ from "/public/openmoji/1F469-1F3FC-200D-1F9B2.svg";
import MguQrjyPzO from "/public/openmoji/1F469-1F3FC-200D-1F9B3.svg";
import hbGqDVfqQE from "/public/openmoji/1F469-1F3FC-200D-1F9BC.svg";
import oTrYrzAmpQ from "/public/openmoji/1F469-1F3FC-200D-1F9BD.svg";
import nKRkBtFYtk from "/public/openmoji/1F469-1F3FC-200D-2695-FE0F.svg";
import pUgwiCqPSC from "/public/openmoji/1F469-1F3FC-200D-2696-FE0F.svg";
import nXDYTplyxR from "/public/openmoji/1F469-1F3FC-200D-2708-FE0F.svg";
import nLgLwzBuuk from "/public/openmoji/1F469-1F3FC-200D-2764-FE0F-200D-1F468-1F3FB.svg";
import bGpbQyUaZx from "/public/openmoji/1F469-1F3FC-200D-2764-FE0F-200D-1F468-1F3FC.svg";
import heHegSTeHb from "/public/openmoji/1F469-1F3FC-200D-2764-FE0F-200D-1F468-1F3FD.svg";
import vvPLikIrzC from "/public/openmoji/1F469-1F3FC-200D-2764-FE0F-200D-1F468-1F3FE.svg";
import UThhOOeadj from "/public/openmoji/1F469-1F3FC-200D-2764-FE0F-200D-1F468-1F3FF.svg";
import pOAJlcLUWk from "/public/openmoji/1F469-1F3FC-200D-2764-FE0F-200D-1F469-1F3FB.svg";
import XvmVqloyHt from "/public/openmoji/1F469-1F3FC-200D-2764-FE0F-200D-1F469-1F3FC.svg";
import nYVMFxAlvz from "/public/openmoji/1F469-1F3FC-200D-2764-FE0F-200D-1F469-1F3FD.svg";
import ullHwJywBG from "/public/openmoji/1F469-1F3FC-200D-2764-FE0F-200D-1F469-1F3FE.svg";
import zXGejyYfkx from "/public/openmoji/1F469-1F3FC-200D-2764-FE0F-200D-1F469-1F3FF.svg";
import RMmBGjjWFM from "/public/openmoji/1F469-1F3FC-200D-2764-FE0F-200D-1F48B-200D-1F468-1F3FB.svg";
import skbLRefszV from "/public/openmoji/1F469-1F3FC-200D-2764-FE0F-200D-1F48B-200D-1F468-1F3FC.svg";
import ylynMWlqyP from "/public/openmoji/1F469-1F3FC-200D-2764-FE0F-200D-1F48B-200D-1F468-1F3FD.svg";
import YuxkfsBnse from "/public/openmoji/1F469-1F3FC-200D-2764-FE0F-200D-1F48B-200D-1F468-1F3FE.svg";
import gMchkjvJIf from "/public/openmoji/1F469-1F3FC-200D-2764-FE0F-200D-1F48B-200D-1F468-1F3FF.svg";
import BqvMdGBIdU from "/public/openmoji/1F469-1F3FC-200D-2764-FE0F-200D-1F48B-200D-1F469-1F3FB.svg";
import cByQMwIryB from "/public/openmoji/1F469-1F3FC-200D-2764-FE0F-200D-1F48B-200D-1F469-1F3FC.svg";
import uAGPePDgwS from "/public/openmoji/1F469-1F3FC-200D-2764-FE0F-200D-1F48B-200D-1F469-1F3FD.svg";
import zqjepUPkyD from "/public/openmoji/1F469-1F3FC-200D-2764-FE0F-200D-1F48B-200D-1F469-1F3FE.svg";
import yOSYXuBDcX from "/public/openmoji/1F469-1F3FC-200D-2764-FE0F-200D-1F48B-200D-1F469-1F3FF.svg";
import zFCeHJQKiA from "/public/openmoji/1F469-1F3FC.svg";
import RgPoZewrKU from "/public/openmoji/1F469-1F3FD-200D-1F33E.svg";
import mbaMFBfUjE from "/public/openmoji/1F469-1F3FD-200D-1F373.svg";
import JaDdwqSThA from "/public/openmoji/1F469-1F3FD-200D-1F37C.svg";
import BQhLvfGAez from "/public/openmoji/1F469-1F3FD-200D-1F393.svg";
import sNAuPQpAuF from "/public/openmoji/1F469-1F3FD-200D-1F3A4.svg";
import zdIjaHvCwC from "/public/openmoji/1F469-1F3FD-200D-1F3A8.svg";
import GdVhLCoPMA from "/public/openmoji/1F469-1F3FD-200D-1F3EB.svg";
import JaFmDQNMPD from "/public/openmoji/1F469-1F3FD-200D-1F3ED.svg";
import wtZARVILFk from "/public/openmoji/1F469-1F3FD-200D-1F4BB.svg";
import hlahdQQjXW from "/public/openmoji/1F469-1F3FD-200D-1F4BC.svg";
import GNDZAapShd from "/public/openmoji/1F469-1F3FD-200D-1F527.svg";
import SuQbVLnPdD from "/public/openmoji/1F469-1F3FD-200D-1F52C.svg";
import VViwDKDLdq from "/public/openmoji/1F469-1F3FD-200D-1F680.svg";
import SnWnvughfk from "/public/openmoji/1F469-1F3FD-200D-1F692.svg";
import vfVEMnhIUZ from "/public/openmoji/1F469-1F3FD-200D-1F91D-200D-1F468-1F3FB.svg";
import lOHsJwNHmw from "/public/openmoji/1F469-1F3FD-200D-1F91D-200D-1F468-1F3FC.svg";
import WpKlQiJbCd from "/public/openmoji/1F469-1F3FD-200D-1F91D-200D-1F468-1F3FE.svg";
import GnSrYorkgG from "/public/openmoji/1F469-1F3FD-200D-1F91D-200D-1F468-1F3FF.svg";
import iWaFASqcSq from "/public/openmoji/1F469-1F3FD-200D-1F91D-200D-1F469-1F3FB.svg";
import wFMVLRqJDF from "/public/openmoji/1F469-1F3FD-200D-1F91D-200D-1F469-1F3FC.svg";
import AacRrwOTft from "/public/openmoji/1F469-1F3FD-200D-1F91D-200D-1F469-1F3FE.svg";
import nfKQbAGEVA from "/public/openmoji/1F469-1F3FD-200D-1F91D-200D-1F469-1F3FF.svg";
import dDCDuvfhXj from "/public/openmoji/1F469-1F3FD-200D-1F9AF.svg";
import jmOsJLyysp from "/public/openmoji/1F469-1F3FD-200D-1F9B0.svg";
import fYoUABfLyi from "/public/openmoji/1F469-1F3FD-200D-1F9B1.svg";
import muHFQubKTe from "/public/openmoji/1F469-1F3FD-200D-1F9B2.svg";
import RePUjiRWoC from "/public/openmoji/1F469-1F3FD-200D-1F9B3.svg";
import VDkYlyGUFD from "/public/openmoji/1F469-1F3FD-200D-1F9BC.svg";
import bSvwSuTerY from "/public/openmoji/1F469-1F3FD-200D-1F9BD.svg";
import uLVvtvRJCC from "/public/openmoji/1F469-1F3FD-200D-2695-FE0F.svg";
import vRpYggIhaK from "/public/openmoji/1F469-1F3FD-200D-2696-FE0F.svg";
import WJzOzhAzAC from "/public/openmoji/1F469-1F3FD-200D-2708-FE0F.svg";
import anvrftFMRy from "/public/openmoji/1F469-1F3FD-200D-2764-FE0F-200D-1F468-1F3FB.svg";
import eDGKjzwsEX from "/public/openmoji/1F469-1F3FD-200D-2764-FE0F-200D-1F468-1F3FC.svg";
import DZYAKmWuAN from "/public/openmoji/1F469-1F3FD-200D-2764-FE0F-200D-1F468-1F3FD.svg";
import KVOCrbzsjc from "/public/openmoji/1F469-1F3FD-200D-2764-FE0F-200D-1F468-1F3FE.svg";
import ZiJzQlPAYC from "/public/openmoji/1F469-1F3FD-200D-2764-FE0F-200D-1F468-1F3FF.svg";
import fmvCuImIdZ from "/public/openmoji/1F469-1F3FD-200D-2764-FE0F-200D-1F469-1F3FB.svg";
import YnPsjacNDW from "/public/openmoji/1F469-1F3FD-200D-2764-FE0F-200D-1F469-1F3FC.svg";
import XpJsFBJVkg from "/public/openmoji/1F469-1F3FD-200D-2764-FE0F-200D-1F469-1F3FD.svg";
import tHUvvVBvve from "/public/openmoji/1F469-1F3FD-200D-2764-FE0F-200D-1F469-1F3FE.svg";
import XjBddJJXuk from "/public/openmoji/1F469-1F3FD-200D-2764-FE0F-200D-1F469-1F3FF.svg";
import lTMTsBZrIb from "/public/openmoji/1F469-1F3FD-200D-2764-FE0F-200D-1F48B-200D-1F468-1F3FB.svg";
import eowzRVSdxH from "/public/openmoji/1F469-1F3FD-200D-2764-FE0F-200D-1F48B-200D-1F468-1F3FC.svg";
import hsoLgmKhOI from "/public/openmoji/1F469-1F3FD-200D-2764-FE0F-200D-1F48B-200D-1F468-1F3FD.svg";
import gGHDJfzUzk from "/public/openmoji/1F469-1F3FD-200D-2764-FE0F-200D-1F48B-200D-1F468-1F3FE.svg";
import dPkCQJWMHe from "/public/openmoji/1F469-1F3FD-200D-2764-FE0F-200D-1F48B-200D-1F468-1F3FF.svg";
import HgsQhMfFxM from "/public/openmoji/1F469-1F3FD-200D-2764-FE0F-200D-1F48B-200D-1F469-1F3FB.svg";
import yyLVqhsmXA from "/public/openmoji/1F469-1F3FD-200D-2764-FE0F-200D-1F48B-200D-1F469-1F3FC.svg";
import qXJIGpMmet from "/public/openmoji/1F469-1F3FD-200D-2764-FE0F-200D-1F48B-200D-1F469-1F3FD.svg";
import lUgcWvEvjR from "/public/openmoji/1F469-1F3FD-200D-2764-FE0F-200D-1F48B-200D-1F469-1F3FE.svg";
import QnDECNflWZ from "/public/openmoji/1F469-1F3FD-200D-2764-FE0F-200D-1F48B-200D-1F469-1F3FF.svg";
import zaNPdtOrMy from "/public/openmoji/1F469-1F3FD.svg";
import UElhrFyNvJ from "/public/openmoji/1F469-1F3FE-200D-1F33E.svg";
import wjzUEysCux from "/public/openmoji/1F469-1F3FE-200D-1F373.svg";
import sFefSocmEu from "/public/openmoji/1F469-1F3FE-200D-1F37C.svg";
import AVHQMcEmJq from "/public/openmoji/1F469-1F3FE-200D-1F393.svg";
import LeoUptFGzf from "/public/openmoji/1F469-1F3FE-200D-1F3A4.svg";
import ZcWlVuBlLv from "/public/openmoji/1F469-1F3FE-200D-1F3A8.svg";
import SXGHuokhbt from "/public/openmoji/1F469-1F3FE-200D-1F3EB.svg";
import FrtmgAZWrh from "/public/openmoji/1F469-1F3FE-200D-1F3ED.svg";
import bSNBuGPbIx from "/public/openmoji/1F469-1F3FE-200D-1F4BB.svg";
import OpAjnEfPoQ from "/public/openmoji/1F469-1F3FE-200D-1F4BC.svg";
import LnSGMOBPfh from "/public/openmoji/1F469-1F3FE-200D-1F527.svg";
import YYPeZeNANG from "/public/openmoji/1F469-1F3FE-200D-1F52C.svg";
import VbbCnuvQZf from "/public/openmoji/1F469-1F3FE-200D-1F680.svg";
import JyzKnzlUhN from "/public/openmoji/1F469-1F3FE-200D-1F692.svg";
import VGTHgYvOdy from "/public/openmoji/1F469-1F3FE-200D-1F91D-200D-1F468-1F3FB.svg";
import SKpunFjUJQ from "/public/openmoji/1F469-1F3FE-200D-1F91D-200D-1F468-1F3FC.svg";
import PAgziuADAS from "/public/openmoji/1F469-1F3FE-200D-1F91D-200D-1F468-1F3FD.svg";
import JPLuwexTqU from "/public/openmoji/1F469-1F3FE-200D-1F91D-200D-1F468-1F3FF.svg";
import ZsQMDriKLw from "/public/openmoji/1F469-1F3FE-200D-1F91D-200D-1F469-1F3FB.svg";
import MINZUrXzeT from "/public/openmoji/1F469-1F3FE-200D-1F91D-200D-1F469-1F3FC.svg";
import SGKdJTmgKZ from "/public/openmoji/1F469-1F3FE-200D-1F91D-200D-1F469-1F3FD.svg";
import OTidRbILOy from "/public/openmoji/1F469-1F3FE-200D-1F91D-200D-1F469-1F3FF.svg";
import OLPZwkbbNG from "/public/openmoji/1F469-1F3FE-200D-1F9AF.svg";
import nvXMpchoyF from "/public/openmoji/1F469-1F3FE-200D-1F9B0.svg";
import yXgJhwZpse from "/public/openmoji/1F469-1F3FE-200D-1F9B1.svg";
import JLhzirSnRW from "/public/openmoji/1F469-1F3FE-200D-1F9B2.svg";
import XTqaaawMZz from "/public/openmoji/1F469-1F3FE-200D-1F9B3.svg";
import PNFCkypkkz from "/public/openmoji/1F469-1F3FE-200D-1F9BC.svg";
import aqLnGiGxOl from "/public/openmoji/1F469-1F3FE-200D-1F9BD.svg";
import OddwIQIaIF from "/public/openmoji/1F469-1F3FE-200D-2695-FE0F.svg";
import WVMtWssfyU from "/public/openmoji/1F469-1F3FE-200D-2696-FE0F.svg";
import XpZolYOJWL from "/public/openmoji/1F469-1F3FE-200D-2708-FE0F.svg";
import lcmwIXuxYW from "/public/openmoji/1F469-1F3FE-200D-2764-FE0F-200D-1F468-1F3FB.svg";
import eWaVruSueC from "/public/openmoji/1F469-1F3FE-200D-2764-FE0F-200D-1F468-1F3FC.svg";
import CDLjrilmzz from "/public/openmoji/1F469-1F3FE-200D-2764-FE0F-200D-1F468-1F3FD.svg";
import WesrxuUHEA from "/public/openmoji/1F469-1F3FE-200D-2764-FE0F-200D-1F468-1F3FE.svg";
import TNlfBvbics from "/public/openmoji/1F469-1F3FE-200D-2764-FE0F-200D-1F468-1F3FF.svg";
import dSoGfbOYKI from "/public/openmoji/1F469-1F3FE-200D-2764-FE0F-200D-1F469-1F3FB.svg";
import XbRUADEDMp from "/public/openmoji/1F469-1F3FE-200D-2764-FE0F-200D-1F469-1F3FC.svg";
import ZhticYbNpI from "/public/openmoji/1F469-1F3FE-200D-2764-FE0F-200D-1F469-1F3FD.svg";
import nYRlrDeodq from "/public/openmoji/1F469-1F3FE-200D-2764-FE0F-200D-1F469-1F3FE.svg";
import cKpcaLFhnT from "/public/openmoji/1F469-1F3FE-200D-2764-FE0F-200D-1F469-1F3FF.svg";
import kTtBWOItAi from "/public/openmoji/1F469-1F3FE-200D-2764-FE0F-200D-1F48B-200D-1F468-1F3FB.svg";
import lmNqncYgwm from "/public/openmoji/1F469-1F3FE-200D-2764-FE0F-200D-1F48B-200D-1F468-1F3FC.svg";
import VrnZwLtEQQ from "/public/openmoji/1F469-1F3FE-200D-2764-FE0F-200D-1F48B-200D-1F468-1F3FD.svg";
import UBHtKRjxFC from "/public/openmoji/1F469-1F3FE-200D-2764-FE0F-200D-1F48B-200D-1F468-1F3FE.svg";
import JayFbYmnhU from "/public/openmoji/1F469-1F3FE-200D-2764-FE0F-200D-1F48B-200D-1F468-1F3FF.svg";
import jngXONuDDV from "/public/openmoji/1F469-1F3FE-200D-2764-FE0F-200D-1F48B-200D-1F469-1F3FB.svg";
import sWMtmJaVUO from "/public/openmoji/1F469-1F3FE-200D-2764-FE0F-200D-1F48B-200D-1F469-1F3FC.svg";
import MxCAzNwfGh from "/public/openmoji/1F469-1F3FE-200D-2764-FE0F-200D-1F48B-200D-1F469-1F3FD.svg";
import ykEwfXGfNr from "/public/openmoji/1F469-1F3FE-200D-2764-FE0F-200D-1F48B-200D-1F469-1F3FE.svg";
import HPrmvzZYNA from "/public/openmoji/1F469-1F3FE-200D-2764-FE0F-200D-1F48B-200D-1F469-1F3FF.svg";
import stNIZbUKre from "/public/openmoji/1F469-1F3FE.svg";
import WIFHhzoXuF from "/public/openmoji/1F469-1F3FF-200D-1F33E.svg";
import zeYsRRvOfL from "/public/openmoji/1F469-1F3FF-200D-1F373.svg";
import WamOhxgrZo from "/public/openmoji/1F469-1F3FF-200D-1F37C.svg";
import fDDqFCOKWp from "/public/openmoji/1F469-1F3FF-200D-1F393.svg";
import ZvRgFBWIka from "/public/openmoji/1F469-1F3FF-200D-1F3A4.svg";
import kLTnIirgHr from "/public/openmoji/1F469-1F3FF-200D-1F3A8.svg";
import jMdQBwxqax from "/public/openmoji/1F469-1F3FF-200D-1F3EB.svg";
import cjAgLXbOUh from "/public/openmoji/1F469-1F3FF-200D-1F3ED.svg";
import aijjIbLHlF from "/public/openmoji/1F469-1F3FF-200D-1F4BB.svg";
import UaceFKSRPw from "/public/openmoji/1F469-1F3FF-200D-1F4BC.svg";
import fJYNSvkiBn from "/public/openmoji/1F469-1F3FF-200D-1F527.svg";
import wgCXbTkTwQ from "/public/openmoji/1F469-1F3FF-200D-1F52C.svg";
import gKcNKsJCLN from "/public/openmoji/1F469-1F3FF-200D-1F680.svg";
import iBVihHqonL from "/public/openmoji/1F469-1F3FF-200D-1F692.svg";
import ZkZYWvVccq from "/public/openmoji/1F469-1F3FF-200D-1F91D-200D-1F468-1F3FB.svg";
import gYHjOBTVAb from "/public/openmoji/1F469-1F3FF-200D-1F91D-200D-1F468-1F3FC.svg";
import bUAzjgfBqr from "/public/openmoji/1F469-1F3FF-200D-1F91D-200D-1F468-1F3FD.svg";
import bUwnzfsaMA from "/public/openmoji/1F469-1F3FF-200D-1F91D-200D-1F468-1F3FE.svg";
import cxvgozoXGN from "/public/openmoji/1F469-1F3FF-200D-1F91D-200D-1F469-1F3FB.svg";
import qAjhzqJXiX from "/public/openmoji/1F469-1F3FF-200D-1F91D-200D-1F469-1F3FC.svg";
import yKjUuFzCCw from "/public/openmoji/1F469-1F3FF-200D-1F91D-200D-1F469-1F3FD.svg";
import NZGCmbUXeC from "/public/openmoji/1F469-1F3FF-200D-1F91D-200D-1F469-1F3FE.svg";
import AwSZDIwEYx from "/public/openmoji/1F469-1F3FF-200D-1F9AF.svg";
import cITmADBley from "/public/openmoji/1F469-1F3FF-200D-1F9B0.svg";
import oFlpOvakGo from "/public/openmoji/1F469-1F3FF-200D-1F9B1.svg";
import etqGBkTJKh from "/public/openmoji/1F469-1F3FF-200D-1F9B2.svg";
import RSyHSPMZAC from "/public/openmoji/1F469-1F3FF-200D-1F9B3.svg";
import DreshrSjMJ from "/public/openmoji/1F469-1F3FF-200D-1F9BC.svg";
import TgJxlCBYzV from "/public/openmoji/1F469-1F3FF-200D-1F9BD.svg";
import sHCiVpAlKQ from "/public/openmoji/1F469-1F3FF-200D-2695-FE0F.svg";
import mDnGwgwSWp from "/public/openmoji/1F469-1F3FF-200D-2696-FE0F.svg";
import QccXHukdNi from "/public/openmoji/1F469-1F3FF-200D-2708-FE0F.svg";
import DoIWtFdNdK from "/public/openmoji/1F469-1F3FF-200D-2764-FE0F-200D-1F468-1F3FB.svg";
import PGxksOXFjP from "/public/openmoji/1F469-1F3FF-200D-2764-FE0F-200D-1F468-1F3FC.svg";
import txvseRaNhu from "/public/openmoji/1F469-1F3FF-200D-2764-FE0F-200D-1F468-1F3FD.svg";
import VdzXxrXKTL from "/public/openmoji/1F469-1F3FF-200D-2764-FE0F-200D-1F468-1F3FE.svg";
import ZGvllScqEA from "/public/openmoji/1F469-1F3FF-200D-2764-FE0F-200D-1F468-1F3FF.svg";
import fVOFCaTBXE from "/public/openmoji/1F469-1F3FF-200D-2764-FE0F-200D-1F469-1F3FB.svg";
import eDLRMxbopj from "/public/openmoji/1F469-1F3FF-200D-2764-FE0F-200D-1F469-1F3FC.svg";
import eqXhnISMmO from "/public/openmoji/1F469-1F3FF-200D-2764-FE0F-200D-1F469-1F3FD.svg";
import IzgsBfphgK from "/public/openmoji/1F469-1F3FF-200D-2764-FE0F-200D-1F469-1F3FE.svg";
import sGgTZSoYte from "/public/openmoji/1F469-1F3FF-200D-2764-FE0F-200D-1F469-1F3FF.svg";
import UIFBuzCqWr from "/public/openmoji/1F469-1F3FF-200D-2764-FE0F-200D-1F48B-200D-1F468-1F3FB.svg";
import aSpLLEbTTs from "/public/openmoji/1F469-1F3FF-200D-2764-FE0F-200D-1F48B-200D-1F468-1F3FC.svg";
import qUgulZLyBf from "/public/openmoji/1F469-1F3FF-200D-2764-FE0F-200D-1F48B-200D-1F468-1F3FD.svg";
import GKCpouMiza from "/public/openmoji/1F469-1F3FF-200D-2764-FE0F-200D-1F48B-200D-1F468-1F3FE.svg";
import DuprwqqDJd from "/public/openmoji/1F469-1F3FF-200D-2764-FE0F-200D-1F48B-200D-1F468-1F3FF.svg";
import ZYppjpdXuZ from "/public/openmoji/1F469-1F3FF-200D-2764-FE0F-200D-1F48B-200D-1F469-1F3FB.svg";
import XWBTUSfVMz from "/public/openmoji/1F469-1F3FF-200D-2764-FE0F-200D-1F48B-200D-1F469-1F3FC.svg";
import MgBgiidxtt from "/public/openmoji/1F469-1F3FF-200D-2764-FE0F-200D-1F48B-200D-1F469-1F3FD.svg";
import fHRFrwEHEi from "/public/openmoji/1F469-1F3FF-200D-2764-FE0F-200D-1F48B-200D-1F469-1F3FE.svg";
import cVcUvJCeMd from "/public/openmoji/1F469-1F3FF-200D-2764-FE0F-200D-1F48B-200D-1F469-1F3FF.svg";
import mNELwdgnDe from "/public/openmoji/1F469-1F3FF.svg";
import wIzcHYfRnD from "/public/openmoji/1F469-200D-1F33E.svg";
import LVWyvONsnq from "/public/openmoji/1F469-200D-1F373.svg";
import ynUmLIbZvv from "/public/openmoji/1F469-200D-1F37C.svg";
import PfqbFoofgw from "/public/openmoji/1F469-200D-1F393.svg";
import DAGjkRhENS from "/public/openmoji/1F469-200D-1F3A4.svg";
import HXZDXjeSNP from "/public/openmoji/1F469-200D-1F3A8.svg";
import qoYZTVoxUJ from "/public/openmoji/1F469-200D-1F3EB.svg";
import GoPJCvFdmK from "/public/openmoji/1F469-200D-1F3ED.svg";
import CIQDlMSLBm from "/public/openmoji/1F469-200D-1F466-200D-1F466.svg";
import ZqBNVynCJn from "/public/openmoji/1F469-200D-1F466.svg";
import cbnTwPxMMg from "/public/openmoji/1F469-200D-1F467-200D-1F466.svg";
import psCrWrQFLo from "/public/openmoji/1F469-200D-1F467-200D-1F467.svg";
import dhUHKnzXwn from "/public/openmoji/1F469-200D-1F467.svg";
import DWbzWFSufP from "/public/openmoji/1F469-200D-1F469-200D-1F466-200D-1F466.svg";
import gAahXrdUfY from "/public/openmoji/1F469-200D-1F469-200D-1F466.svg";
import MWmGOqxrXr from "/public/openmoji/1F469-200D-1F469-200D-1F467-200D-1F466.svg";
import zbZNnJtaGF from "/public/openmoji/1F469-200D-1F469-200D-1F467-200D-1F467.svg";
import UZtgTFUPwt from "/public/openmoji/1F469-200D-1F469-200D-1F467.svg";
import THeTZhvXMH from "/public/openmoji/1F469-200D-1F4BB.svg";
import EmEhaDFUgv from "/public/openmoji/1F469-200D-1F4BC.svg";
import owwnIUDryy from "/public/openmoji/1F469-200D-1F527.svg";
import gpkISeSERS from "/public/openmoji/1F469-200D-1F52C.svg";
import ltsylAmFcT from "/public/openmoji/1F469-200D-1F680.svg";
import PttkaUYgop from "/public/openmoji/1F469-200D-1F692.svg";
import JUMGeSygzU from "/public/openmoji/1F469-200D-1F9AF.svg";
import zMZFkVGgXY from "/public/openmoji/1F469-200D-1F9B0.svg";
import bdmyQHpLYM from "/public/openmoji/1F469-200D-1F9B1.svg";
import DdevgXUgVH from "/public/openmoji/1F469-200D-1F9B2.svg";
import bUShveKPAZ from "/public/openmoji/1F469-200D-1F9B3.svg";
import BsPtFZZrlb from "/public/openmoji/1F469-200D-1F9BC.svg";
import SkhOesJDxO from "/public/openmoji/1F469-200D-1F9BD.svg";
import CstiBsUwiH from "/public/openmoji/1F469-200D-1FAA9.svg";
import KOlInCHOIm from "/public/openmoji/1F469-200D-2695-FE0F.svg";
import DcCbXTqOMj from "/public/openmoji/1F469-200D-2696-FE0F.svg";
import xKTRlfvbCY from "/public/openmoji/1F469-200D-2708-FE0F.svg";
import rnhDWPhBgn from "/public/openmoji/1F469-200D-2764-FE0F-200D-1F468.svg";
import gEnyTwXDcy from "/public/openmoji/1F469-200D-2764-FE0F-200D-1F469.svg";
import BXUARlNYSk from "/public/openmoji/1F469-200D-2764-FE0F-200D-1F48B-200D-1F468.svg";
import XBmQWGqASr from "/public/openmoji/1F469-200D-2764-FE0F-200D-1F48B-200D-1F469.svg";
import ROfSYTJrkV from "/public/openmoji/1F469.svg";
import liWicHEUel from "/public/openmoji/1F46A.svg";
import dEfAtartOL from "/public/openmoji/1F46B-1F3FB.svg";
import mxJOwDrKMb from "/public/openmoji/1F46B-1F3FC.svg";
import fdxfGnapez from "/public/openmoji/1F46B-1F3FD.svg";
import KEBsWmWePG from "/public/openmoji/1F46B-1F3FE.svg";
import EKslycxcJb from "/public/openmoji/1F46B-1F3FF.svg";
import etZycRrgrT from "/public/openmoji/1F46B.svg";
import xMKgXbIjJu from "/public/openmoji/1F46C-1F3FB.svg";
import RdroajJevi from "/public/openmoji/1F46C-1F3FC.svg";
import oBjXoYqEBL from "/public/openmoji/1F46C-1F3FD.svg";
import ytaZbNqqlS from "/public/openmoji/1F46C-1F3FE.svg";
import FQcelfWPbL from "/public/openmoji/1F46C-1F3FF.svg";
import qcUmsyDEFo from "/public/openmoji/1F46C.svg";
import DUtNKYvrDB from "/public/openmoji/1F46D-1F3FB.svg";
import WFhcyyVnVP from "/public/openmoji/1F46D-1F3FC.svg";
import fgyeOqDxvH from "/public/openmoji/1F46D-1F3FD.svg";
import AmmvzzrzLP from "/public/openmoji/1F46D-1F3FE.svg";
import ctlmRnqlFA from "/public/openmoji/1F46D-1F3FF.svg";
import LMMSJIgpKP from "/public/openmoji/1F46D.svg";
import iLNiQRGsvi from "/public/openmoji/1F46E-1F3FB-200D-2640-FE0F.svg";
import GOZzqbKjFf from "/public/openmoji/1F46E-1F3FB-200D-2642-FE0F.svg";
import rlysxWayUg from "/public/openmoji/1F46E-1F3FB.svg";
import MBqXNbSfhD from "/public/openmoji/1F46E-1F3FC-200D-2640-FE0F.svg";
import zqxtmRQttD from "/public/openmoji/1F46E-1F3FC-200D-2642-FE0F.svg";
import aLbHfOVEVd from "/public/openmoji/1F46E-1F3FC.svg";
import LyAXpQzjIb from "/public/openmoji/1F46E-1F3FD-200D-2640-FE0F.svg";
import xygugGqXxM from "/public/openmoji/1F46E-1F3FD-200D-2642-FE0F.svg";
import yvaxXPIEhG from "/public/openmoji/1F46E-1F3FD.svg";
import VMPIUUUaij from "/public/openmoji/1F46E-1F3FE-200D-2640-FE0F.svg";
import adoicTTGwZ from "/public/openmoji/1F46E-1F3FE-200D-2642-FE0F.svg";
import JRXzzzpibu from "/public/openmoji/1F46E-1F3FE.svg";
import YBYeFUharo from "/public/openmoji/1F46E-1F3FF-200D-2640-FE0F.svg";
import fDPAyeYHkj from "/public/openmoji/1F46E-1F3FF-200D-2642-FE0F.svg";
import fogavljGtg from "/public/openmoji/1F46E-1F3FF.svg";
import yYywAGcJXg from "/public/openmoji/1F46E-200D-2640-FE0F.svg";
import SqzEqeWudq from "/public/openmoji/1F46E-200D-2642-FE0F.svg";
import rlLuVbTAJB from "/public/openmoji/1F46E.svg";
import iObXxuwigb from "/public/openmoji/1F46F-200D-2640-FE0F.svg";
import sUheqpGSmF from "/public/openmoji/1F46F-200D-2642-FE0F.svg";
import UKIVfoZGjF from "/public/openmoji/1F46F.svg";
import BoVCSrWdEb from "/public/openmoji/1F470-1F3FB-200D-2640-FE0F.svg";
import hzCHXuVmYu from "/public/openmoji/1F470-1F3FB-200D-2642-FE0F.svg";
import EHdZnEzsVT from "/public/openmoji/1F470-1F3FB.svg";
import rsrhZrjXpw from "/public/openmoji/1F470-1F3FC-200D-2640-FE0F.svg";
import LwfNiplCTz from "/public/openmoji/1F470-1F3FC-200D-2642-FE0F.svg";
import MGuOVauTpo from "/public/openmoji/1F470-1F3FC.svg";
import kTuNxQSZSI from "/public/openmoji/1F470-1F3FD-200D-2640-FE0F.svg";
import NWWrlVFVUk from "/public/openmoji/1F470-1F3FD-200D-2642-FE0F.svg";
import SvKFHXcziO from "/public/openmoji/1F470-1F3FD.svg";
import pUQofwqRaL from "/public/openmoji/1F470-1F3FE-200D-2640-FE0F.svg";
import dClVSRzDQD from "/public/openmoji/1F470-1F3FE-200D-2642-FE0F.svg";
import PDuzDIjxXc from "/public/openmoji/1F470-1F3FE.svg";
import YgZfZAEwVU from "/public/openmoji/1F470-1F3FF-200D-2640-FE0F.svg";
import gxbKPNIJlt from "/public/openmoji/1F470-1F3FF-200D-2642-FE0F.svg";
import pzraCkhQkb from "/public/openmoji/1F470-1F3FF.svg";
import BkaJbRqdUc from "/public/openmoji/1F470-200D-2640-FE0F.svg";
import WKpsTNPMUj from "/public/openmoji/1F470-200D-2642-FE0F.svg";
import LoWFXnQZzD from "/public/openmoji/1F470.svg";
import uCxugwYxmY from "/public/openmoji/1F471-1F3FB-200D-2640-FE0F.svg";
import EzmmFubWOo from "/public/openmoji/1F471-1F3FB-200D-2642-FE0F.svg";
import FALldZcSoj from "/public/openmoji/1F471-1F3FB.svg";
import TGeqnKNKTH from "/public/openmoji/1F471-1F3FC-200D-2640-FE0F.svg";
import XMGfUPlGNJ from "/public/openmoji/1F471-1F3FC-200D-2642-FE0F.svg";
import yYMgfHAhTG from "/public/openmoji/1F471-1F3FC.svg";
import wTlvbuQpGX from "/public/openmoji/1F471-1F3FD-200D-2640-FE0F.svg";
import SebfINKCpr from "/public/openmoji/1F471-1F3FD-200D-2642-FE0F.svg";
import JTfSTKdIMk from "/public/openmoji/1F471-1F3FD.svg";
import WKYRAYosOK from "/public/openmoji/1F471-1F3FE-200D-2640-FE0F.svg";
import niIblxMQrf from "/public/openmoji/1F471-1F3FE-200D-2642-FE0F.svg";
import ELikRvvsxR from "/public/openmoji/1F471-1F3FE.svg";
import tquAgCQpUb from "/public/openmoji/1F471-1F3FF-200D-2640-FE0F.svg";
import angvsIVlAO from "/public/openmoji/1F471-1F3FF-200D-2642-FE0F.svg";
import hzShiMEZTT from "/public/openmoji/1F471-1F3FF.svg";
import OcSIOPwKqd from "/public/openmoji/1F471-200D-2640-FE0F.svg";
import ZcGrqbrXfh from "/public/openmoji/1F471-200D-2642-FE0F.svg";
import PDphfKivsd from "/public/openmoji/1F471.svg";
import IevzTPWBbc from "/public/openmoji/1F472-1F3FB.svg";
import IkcdbgGFHp from "/public/openmoji/1F472-1F3FC.svg";
import FMeFCxkuPW from "/public/openmoji/1F472-1F3FD.svg";
import uFfdTiVztC from "/public/openmoji/1F472-1F3FE.svg";
import KlrQsYgBtS from "/public/openmoji/1F472-1F3FF.svg";
import vwDMkwbHOg from "/public/openmoji/1F472.svg";
import fbdPvmBfhR from "/public/openmoji/1F473-1F3FB-200D-2640-FE0F.svg";
import ZTkMsBRGWi from "/public/openmoji/1F473-1F3FB-200D-2642-FE0F.svg";
import aXJaxuiGHY from "/public/openmoji/1F473-1F3FB.svg";
import hqCGdFapBn from "/public/openmoji/1F473-1F3FC-200D-2640-FE0F.svg";
import EYksiGSCpm from "/public/openmoji/1F473-1F3FC-200D-2642-FE0F.svg";
import eViDXOSOpb from "/public/openmoji/1F473-1F3FC.svg";
import ctTcOnVmZy from "/public/openmoji/1F473-1F3FD-200D-2640-FE0F.svg";
import XxOUClmFuv from "/public/openmoji/1F473-1F3FD-200D-2642-FE0F.svg";
import ChKMoKixlI from "/public/openmoji/1F473-1F3FD.svg";
import iVGJNFMCad from "/public/openmoji/1F473-1F3FE-200D-2640-FE0F.svg";
import rZZKJNJFwR from "/public/openmoji/1F473-1F3FE-200D-2642-FE0F.svg";
import mopFbYdMIg from "/public/openmoji/1F473-1F3FE.svg";
import fXkGiQYcpA from "/public/openmoji/1F473-1F3FF-200D-2640-FE0F.svg";
import OcxuzjRHxq from "/public/openmoji/1F473-1F3FF-200D-2642-FE0F.svg";
import uFhvawYGJi from "/public/openmoji/1F473-1F3FF.svg";
import sDFMjipxfo from "/public/openmoji/1F473-200D-2640-FE0F.svg";
import kltBmWkjiA from "/public/openmoji/1F473-200D-2642-FE0F.svg";
import zwcExQEJlr from "/public/openmoji/1F473.svg";
import EdXyJMObOH from "/public/openmoji/1F474-1F3FB.svg";
import rrDEvPosDO from "/public/openmoji/1F474-1F3FC.svg";
import xPiXiadgTk from "/public/openmoji/1F474-1F3FD.svg";
import xcrgABAWlS from "/public/openmoji/1F474-1F3FE.svg";
import jfZsecpBkX from "/public/openmoji/1F474-1F3FF.svg";
import nCrhaILLVn from "/public/openmoji/1F474.svg";
import GAsRFmvCZa from "/public/openmoji/1F475-1F3FB.svg";
import ysbapOcOgm from "/public/openmoji/1F475-1F3FC.svg";
import ZGdsmeBEeh from "/public/openmoji/1F475-1F3FD.svg";
import iHqFfeMApR from "/public/openmoji/1F475-1F3FE.svg";
import uGKZBqHqwI from "/public/openmoji/1F475-1F3FF.svg";
import CdHosufkuD from "/public/openmoji/1F475.svg";
import UstTYmKDkH from "/public/openmoji/1F476-1F3FB.svg";
import LscmmqZIbg from "/public/openmoji/1F476-1F3FC.svg";
import pMowfkOjWO from "/public/openmoji/1F476-1F3FD.svg";
import naUYkwrjHQ from "/public/openmoji/1F476-1F3FE.svg";
import jlacpncEOf from "/public/openmoji/1F476-1F3FF.svg";
import YqRRlnkTxD from "/public/openmoji/1F476.svg";
import VgvDcuyGox from "/public/openmoji/1F477-1F3FB-200D-2640-FE0F.svg";
import pLRDqqcGyc from "/public/openmoji/1F477-1F3FB-200D-2642-FE0F.svg";
import WzJQOmQKcl from "/public/openmoji/1F477-1F3FB.svg";
import VdlzpjCvby from "/public/openmoji/1F477-1F3FC-200D-2640-FE0F.svg";
import PhikbMlwKD from "/public/openmoji/1F477-1F3FC-200D-2642-FE0F.svg";
import XIDOqGuDOn from "/public/openmoji/1F477-1F3FC.svg";
import TyyOGlaYAC from "/public/openmoji/1F477-1F3FD-200D-2640-FE0F.svg";
import meyluJfLNR from "/public/openmoji/1F477-1F3FD-200D-2642-FE0F.svg";
import UPWelpmFAK from "/public/openmoji/1F477-1F3FD.svg";
import wtmcoWLELn from "/public/openmoji/1F477-1F3FE-200D-2640-FE0F.svg";
import WLePKHLNJW from "/public/openmoji/1F477-1F3FE-200D-2642-FE0F.svg";
import UhyRNzUnAM from "/public/openmoji/1F477-1F3FE.svg";
import BKtyyaswZA from "/public/openmoji/1F477-1F3FF-200D-2640-FE0F.svg";
import bWTDcjfEAM from "/public/openmoji/1F477-1F3FF-200D-2642-FE0F.svg";
import TjyOzmqfZF from "/public/openmoji/1F477-1F3FF.svg";
import kokaoDRJvo from "/public/openmoji/1F477-200D-2640-FE0F.svg";
import jArkTCWYHS from "/public/openmoji/1F477-200D-2642-FE0F.svg";
import ePNtpbzqis from "/public/openmoji/1F477.svg";
import McMZEFBbwg from "/public/openmoji/1F478-1F3FB.svg";
import tBfmbvnoPG from "/public/openmoji/1F478-1F3FC.svg";
import lWKPckOPpY from "/public/openmoji/1F478-1F3FD.svg";
import ocHvdZWoOD from "/public/openmoji/1F478-1F3FE.svg";
import ZdutIiIypl from "/public/openmoji/1F478-1F3FF.svg";
import ZhMkSbWlTK from "/public/openmoji/1F478.svg";
import toUwfnBTyv from "/public/openmoji/1F479.svg";
import WDqxVIfWHx from "/public/openmoji/1F47A.svg";
import OzazZLfqJA from "/public/openmoji/1F47B.svg";
import OHmZsHannP from "/public/openmoji/1F47C-1F3FB.svg";
import jTDqBrShTE from "/public/openmoji/1F47C-1F3FC.svg";
import GsvVswdzsl from "/public/openmoji/1F47C-1F3FD.svg";
import yuoGiOHnvm from "/public/openmoji/1F47C-1F3FE.svg";
import aeSdxLUSSE from "/public/openmoji/1F47C-1F3FF.svg";
import FxZymBYHMK from "/public/openmoji/1F47C.svg";
import nTzJsybvWc from "/public/openmoji/1F47D.svg";
import XLqiunFEBd from "/public/openmoji/1F47E.svg";
import dGueBnAkse from "/public/openmoji/1F47F.svg";
import MisTXrQJvf from "/public/openmoji/1F480.svg";
import GDDVvRmHzW from "/public/openmoji/1F481-1F3FB-200D-2640-FE0F.svg";
import NOuBMCcDsq from "/public/openmoji/1F481-1F3FB-200D-2642-FE0F.svg";
import IfqPrTzlVx from "/public/openmoji/1F481-1F3FB.svg";
import DnXniBnLNA from "/public/openmoji/1F481-1F3FC-200D-2640-FE0F.svg";
import OkewGEWBlU from "/public/openmoji/1F481-1F3FC-200D-2642-FE0F.svg";
import dhnFBRkfgK from "/public/openmoji/1F481-1F3FC.svg";
import uYdYksPGlT from "/public/openmoji/1F481-1F3FD-200D-2640-FE0F.svg";
import oTajqfiMQd from "/public/openmoji/1F481-1F3FD-200D-2642-FE0F.svg";
import yxKOGCwqJS from "/public/openmoji/1F481-1F3FD.svg";
import ipDjAiAiSU from "/public/openmoji/1F481-1F3FE-200D-2640-FE0F.svg";
import qtPoZfAeIU from "/public/openmoji/1F481-1F3FE-200D-2642-FE0F.svg";
import aHrEExYDMR from "/public/openmoji/1F481-1F3FE.svg";
import IVpxxpGSJE from "/public/openmoji/1F481-1F3FF-200D-2640-FE0F.svg";
import VzgSBTQbeq from "/public/openmoji/1F481-1F3FF-200D-2642-FE0F.svg";
import EloktcBsUL from "/public/openmoji/1F481-1F3FF.svg";
import uoEsSMRVex from "/public/openmoji/1F481-200D-2640-FE0F.svg";
import HVWXuYEMrC from "/public/openmoji/1F481-200D-2642-FE0F.svg";
import LnCGWUcXoE from "/public/openmoji/1F481.svg";
import FVjyugWqgR from "/public/openmoji/1F482-1F3FB-200D-2640-FE0F.svg";
import oJRVcISRCz from "/public/openmoji/1F482-1F3FB-200D-2642-FE0F.svg";
import gtkRJfsPJX from "/public/openmoji/1F482-1F3FB.svg";
import bxziJcBtAl from "/public/openmoji/1F482-1F3FC-200D-2640-FE0F.svg";
import wYBJWSbcOL from "/public/openmoji/1F482-1F3FC-200D-2642-FE0F.svg";
import HweSqufOKa from "/public/openmoji/1F482-1F3FC.svg";
import hyiWGfkojH from "/public/openmoji/1F482-1F3FD-200D-2640-FE0F.svg";
import pnxwIXPVay from "/public/openmoji/1F482-1F3FD-200D-2642-FE0F.svg";
import sgtzByFRnj from "/public/openmoji/1F482-1F3FD.svg";
import KNNLCUcaYZ from "/public/openmoji/1F482-1F3FE-200D-2640-FE0F.svg";
import qHqeVwVZkw from "/public/openmoji/1F482-1F3FE-200D-2642-FE0F.svg";
import VhhhSZTBJS from "/public/openmoji/1F482-1F3FE.svg";
import AMNqZhiaio from "/public/openmoji/1F482-1F3FF-200D-2640-FE0F.svg";
import kNuMLEUbIq from "/public/openmoji/1F482-1F3FF-200D-2642-FE0F.svg";
import JUWsmFPCBB from "/public/openmoji/1F482-1F3FF.svg";
import vQHwDosFcw from "/public/openmoji/1F482-200D-2640-FE0F.svg";
import HcFbNzwSUV from "/public/openmoji/1F482-200D-2642-FE0F.svg";
import TKlEryJkKw from "/public/openmoji/1F482.svg";
import IPLHvitGZd from "/public/openmoji/1F483-1F3FB.svg";
import LdJFBQjZdg from "/public/openmoji/1F483-1F3FC.svg";
import lXtqRxZdaZ from "/public/openmoji/1F483-1F3FD.svg";
import RjvsFlauby from "/public/openmoji/1F483-1F3FE.svg";
import vMUlObChvf from "/public/openmoji/1F483-1F3FF.svg";
import AltmpKanYM from "/public/openmoji/1F483.svg";
import EpFfTzmbRK from "/public/openmoji/1F484.svg";
import KVZZMgKSfY from "/public/openmoji/1F485-1F3FB.svg";
import IiIXdIqKBT from "/public/openmoji/1F485-1F3FC.svg";
import iiVYeuwqrH from "/public/openmoji/1F485-1F3FD.svg";
import DNiUujlGIv from "/public/openmoji/1F485-1F3FE.svg";
import RqsZbOxNtS from "/public/openmoji/1F485-1F3FF.svg";
import gbJCQOCIim from "/public/openmoji/1F485.svg";
import rBPCmBgKGO from "/public/openmoji/1F486-1F3FB-200D-2640-FE0F.svg";
import yyNkObIxvP from "/public/openmoji/1F486-1F3FB-200D-2642-FE0F.svg";
import JqVCDnoagE from "/public/openmoji/1F486-1F3FB.svg";
import ziImWdjraz from "/public/openmoji/1F486-1F3FC-200D-2640-FE0F.svg";
import QDuqYeCzgy from "/public/openmoji/1F486-1F3FC-200D-2642-FE0F.svg";
import hQbBNKLLBK from "/public/openmoji/1F486-1F3FC.svg";
import QHEcCPrLnS from "/public/openmoji/1F486-1F3FD-200D-2640-FE0F.svg";
import GCmJoRwtDY from "/public/openmoji/1F486-1F3FD-200D-2642-FE0F.svg";
import UlhrlWcAmm from "/public/openmoji/1F486-1F3FD.svg";
import calbnjbckF from "/public/openmoji/1F486-1F3FE-200D-2640-FE0F.svg";
import YQjRddXfCN from "/public/openmoji/1F486-1F3FE-200D-2642-FE0F.svg";
import vIRqeKCWil from "/public/openmoji/1F486-1F3FE.svg";
import QzbohBmQwZ from "/public/openmoji/1F486-1F3FF-200D-2640-FE0F.svg";
import pDApStFpIh from "/public/openmoji/1F486-1F3FF-200D-2642-FE0F.svg";
import OPeWiEBUCO from "/public/openmoji/1F486-1F3FF.svg";
import qyvUlYgDLk from "/public/openmoji/1F486-200D-2640-FE0F.svg";
import vXtqJEMpNp from "/public/openmoji/1F486-200D-2642-FE0F.svg";
import yrwBOpVnka from "/public/openmoji/1F486.svg";
import HznkiMjqlU from "/public/openmoji/1F487-1F3FB-200D-2640-FE0F.svg";
import ZSDUZDGfJg from "/public/openmoji/1F487-1F3FB-200D-2642-FE0F.svg";
import gketzlpWOD from "/public/openmoji/1F487-1F3FB.svg";
import rQTKYBFOlc from "/public/openmoji/1F487-1F3FC-200D-2640-FE0F.svg";
import mhqtEqgwLh from "/public/openmoji/1F487-1F3FC-200D-2642-FE0F.svg";
import pWAiPVIDLk from "/public/openmoji/1F487-1F3FC.svg";
import yovcWtDdRb from "/public/openmoji/1F487-1F3FD-200D-2640-FE0F.svg";
import cSANioGquD from "/public/openmoji/1F487-1F3FD-200D-2642-FE0F.svg";
import vokqfVYPDT from "/public/openmoji/1F487-1F3FD.svg";
import oNKdEDbnKq from "/public/openmoji/1F487-1F3FE-200D-2640-FE0F.svg";
import LvlwviSfqA from "/public/openmoji/1F487-1F3FE-200D-2642-FE0F.svg";
import NXpYaMcRgh from "/public/openmoji/1F487-1F3FE.svg";
import EfecDhGdZL from "/public/openmoji/1F487-1F3FF-200D-2640-FE0F.svg";
import UCJBdqzsOk from "/public/openmoji/1F487-1F3FF-200D-2642-FE0F.svg";
import wUXEWFXhVt from "/public/openmoji/1F487-1F3FF.svg";
import CIToHZmduv from "/public/openmoji/1F487-200D-2640-FE0F.svg";
import xXuxNnVatK from "/public/openmoji/1F487-200D-2642-FE0F.svg";
import qtcLSsngOv from "/public/openmoji/1F487.svg";
import FaCKcNZICi from "/public/openmoji/1F488.svg";
import mFdUpOOeRG from "/public/openmoji/1F489.svg";
import pwzcxikfPv from "/public/openmoji/1F48A.svg";
import cFXRitSVPy from "/public/openmoji/1F48B.svg";
import EhcBBFPvmV from "/public/openmoji/1F48C.svg";
import fAfmYmaPZJ from "/public/openmoji/1F48D.svg";
import ISOgqgikBx from "/public/openmoji/1F48E.svg";
import tIyyPMwTnT from "/public/openmoji/1F48F-1F3FB.svg";
import kKFluAMrao from "/public/openmoji/1F48F-1F3FC.svg";
import ahBOqMSEdF from "/public/openmoji/1F48F-1F3FD.svg";
import CwtMPbwJdi from "/public/openmoji/1F48F-1F3FE.svg";
import PZzVVGQtwV from "/public/openmoji/1F48F-1F3FF.svg";
import EaMVwhxmzi from "/public/openmoji/1F48F.svg";
import VpWIzxdJTw from "/public/openmoji/1F490.svg";
import EYHUwkzdny from "/public/openmoji/1F491-1F3FB.svg";
import YJlQddinCH from "/public/openmoji/1F491-1F3FC.svg";
import ufvgPPDPbT from "/public/openmoji/1F491-1F3FD.svg";
import lCqIZoEOJW from "/public/openmoji/1F491-1F3FE.svg";
import pSRdnaTzbL from "/public/openmoji/1F491-1F3FF.svg";
import ytRKxRggII from "/public/openmoji/1F491.svg";
import WzUvrESYzA from "/public/openmoji/1F492.svg";
import XHFlqHjZYC from "/public/openmoji/1F493.svg";
import ZPAQuCJJfN from "/public/openmoji/1F494.svg";
import vZYpDXmWKJ from "/public/openmoji/1F495.svg";
import kfNYnlTvvP from "/public/openmoji/1F496.svg";
import shepFxOWiM from "/public/openmoji/1F497.svg";
import gMNfYBUJDH from "/public/openmoji/1F498.svg";
import LzfCekvDTI from "/public/openmoji/1F499.svg";
import sehXOXeiBT from "/public/openmoji/1F49A.svg";
import kiOJdXbTdM from "/public/openmoji/1F49B.svg";
import jUQPzZRNxo from "/public/openmoji/1F49C.svg";
import QCiQSwFJjq from "/public/openmoji/1F49D.svg";
import PSQFpkogWD from "/public/openmoji/1F49E.svg";
import GdClFkLsRP from "/public/openmoji/1F49F.svg";
import HYQRbctHWC from "/public/openmoji/1F4A0.svg";
import XcigktrleJ from "/public/openmoji/1F4A1.svg";
import HPPcwpyXXB from "/public/openmoji/1F4A2.svg";
import sHdVCDtZVX from "/public/openmoji/1F4A3.svg";
import qIuFuxtsRU from "/public/openmoji/1F4A4.svg";
import nCfWZczYvH from "/public/openmoji/1F4A5.svg";
import mtcWTleEAQ from "/public/openmoji/1F4A6.svg";
import NyNaSzHAIs from "/public/openmoji/1F4A7.svg";
import pjNkFaWNkG from "/public/openmoji/1F4A8.svg";
import tDCHedBiHQ from "/public/openmoji/1F4A9.svg";
import bRdjOqOxlC from "/public/openmoji/1F4AA-1F3FB.svg";
import srbnSbPhYE from "/public/openmoji/1F4AA-1F3FC.svg";
import zqOoaxBvTx from "/public/openmoji/1F4AA-1F3FD.svg";
import CPitcvHuTc from "/public/openmoji/1F4AA-1F3FE.svg";
import oiuvKkBkRr from "/public/openmoji/1F4AA-1F3FF.svg";
import afuwKetjuU from "/public/openmoji/1F4AA.svg";
import DudwRvRQCW from "/public/openmoji/1F4AB.svg";
import AhbZruwrMr from "/public/openmoji/1F4AC.svg";
import cjgBsUsqzr from "/public/openmoji/1F4AD.svg";
import ShDXxBXvoT from "/public/openmoji/1F4AE.svg";
import fsJPenyNUC from "/public/openmoji/1F4AF.svg";
import FeHixeNcOy from "/public/openmoji/1F4B0.svg";
import TBMPwqosPu from "/public/openmoji/1F4B1.svg";
import ZvGeLSTUMJ from "/public/openmoji/1F4B2.svg";
import tKrNOBNgTH from "/public/openmoji/1F4B3.svg";
import KTnoFZvDDE from "/public/openmoji/1F4B4.svg";
import ncbdLeqPoL from "/public/openmoji/1F4B5.svg";
import dGHDUpFQTM from "/public/openmoji/1F4B6.svg";
import owCYHqNzvY from "/public/openmoji/1F4B7.svg";
import vcqNHAxsFH from "/public/openmoji/1F4B8.svg";
import sSsuESSFfG from "/public/openmoji/1F4B9.svg";
import mhsMwyTAkT from "/public/openmoji/1F4BA.svg";
import QeFUWbiPcZ from "/public/openmoji/1F4BB.svg";
import CLwgeMWOqh from "/public/openmoji/1F4BC.svg";
import FfCdNRVLxT from "/public/openmoji/1F4BD.svg";
import EZbiRkbKiD from "/public/openmoji/1F4BE.svg";
import cwJMNbixUN from "/public/openmoji/1F4BF.svg";
import KCQdRYrBji from "/public/openmoji/1F4C0.svg";
import LaBQadjwKk from "/public/openmoji/1F4C1.svg";
import gvoAHvOLKX from "/public/openmoji/1F4C2.svg";
import GuFSrjWuMD from "/public/openmoji/1F4C3.svg";
import wUjBvUTnfs from "/public/openmoji/1F4C4.svg";
import MaLlzMksdk from "/public/openmoji/1F4C5.svg";
import dFYJUpTnRv from "/public/openmoji/1F4C6.svg";
import tumloKBpLm from "/public/openmoji/1F4C7.svg";
import XGwtgkoiiZ from "/public/openmoji/1F4C8.svg";
import kkeqwXIHcb from "/public/openmoji/1F4C9.svg";
import yYSuMnMDDL from "/public/openmoji/1F4CA.svg";
import jefAdugGTQ from "/public/openmoji/1F4CB.svg";
import CjhFWpUuNF from "/public/openmoji/1F4CC.svg";
import aRCsgwCHyK from "/public/openmoji/1F4CD.svg";
import PecEbfbTGc from "/public/openmoji/1F4CE.svg";
import ltwHlsWEMQ from "/public/openmoji/1F4CF.svg";
import TlezyTElmn from "/public/openmoji/1F4D0.svg";
import hphEyxUqlM from "/public/openmoji/1F4D1.svg";
import oeNoGKMGIb from "/public/openmoji/1F4D2.svg";
import YFMHXqYVzj from "/public/openmoji/1F4D3.svg";
import TPRhRkmIjL from "/public/openmoji/1F4D4.svg";
import xKqGigbtrq from "/public/openmoji/1F4D5.svg";
import vJScIuFTGi from "/public/openmoji/1F4D6.svg";
import aZWVveSQhI from "/public/openmoji/1F4D7.svg";
import oKgPymwRpX from "/public/openmoji/1F4D8.svg";
import EbFtCDXeVD from "/public/openmoji/1F4D9.svg";
import GrXxWOTaaV from "/public/openmoji/1F4DA.svg";
import HTuLmzHjJe from "/public/openmoji/1F4DB.svg";
import eQuhFuAazz from "/public/openmoji/1F4DC.svg";
import ncCmmEuEVC from "/public/openmoji/1F4DD.svg";
import pNaZVePhpn from "/public/openmoji/1F4DE.svg";
import xXLlIgMIyx from "/public/openmoji/1F4DF.svg";
import TCzrIRSenn from "/public/openmoji/1F4E0.svg";
import mZbvKSmEkR from "/public/openmoji/1F4E1.svg";
import czhpAPAXnL from "/public/openmoji/1F4E2.svg";
import LeudKnHPus from "/public/openmoji/1F4E3.svg";
import jKniCUYfla from "/public/openmoji/1F4E4.svg";
import dWAsEdAAHp from "/public/openmoji/1F4E5.svg";
import zGHRnzPRKt from "/public/openmoji/1F4E6.svg";
import XKbJKUiLNH from "/public/openmoji/1F4E7.svg";
import ePgBEiDVYJ from "/public/openmoji/1F4E8.svg";
import dDtNyBoCii from "/public/openmoji/1F4E9.svg";
import eWijtzkYmk from "/public/openmoji/1F4EA.svg";
import HuuFvWbSXM from "/public/openmoji/1F4EB.svg";
import RBaMIyiEGb from "/public/openmoji/1F4EC.svg";
import CGBHWUitdo from "/public/openmoji/1F4ED.svg";
import KUSjVIYjoe from "/public/openmoji/1F4EE.svg";
import eLJOCzhmeo from "/public/openmoji/1F4EF.svg";
import PEttwMizdD from "/public/openmoji/1F4F0.svg";
import iDarSbFTgz from "/public/openmoji/1F4F1.svg";
import VwnqVkCXZw from "/public/openmoji/1F4F2.svg";
import TEfOpjRiCX from "/public/openmoji/1F4F3.svg";
import JsaietyIVO from "/public/openmoji/1F4F4.svg";
import PZXCUzQjCv from "/public/openmoji/1F4F5.svg";
import SeCPbqEQWM from "/public/openmoji/1F4F6.svg";
import kFWJqgifyr from "/public/openmoji/1F4F7.svg";
import xgCxHSpifi from "/public/openmoji/1F4F8.svg";
import fUjIGZUGGs from "/public/openmoji/1F4F9.svg";
import jDUGbPfEJe from "/public/openmoji/1F4FA.svg";
import UXFcmFqYxi from "/public/openmoji/1F4FB.svg";
import KrUUTQsScv from "/public/openmoji/1F4FC.svg";
import DjIHOVsunw from "/public/openmoji/1F4FD.svg";
import qhpNxdKniN from "/public/openmoji/1F4FF.svg";
import GOUiXQHzRp from "/public/openmoji/1F500.svg";
import QIiTYfGqNX from "/public/openmoji/1F501.svg";
import RndTNfRVJc from "/public/openmoji/1F502.svg";
import OlEmyjoCvR from "/public/openmoji/1F503.svg";
import LEawXdqUhJ from "/public/openmoji/1F504.svg";
import hQewAeGnfU from "/public/openmoji/1F505.svg";
import HnztEvcVvN from "/public/openmoji/1F506.svg";
import LuWmmEqrDZ from "/public/openmoji/1F507.svg";
import IJTufzhzKd from "/public/openmoji/1F508.svg";
import iFLJHQfmBQ from "/public/openmoji/1F509.svg";
import EoZgDKBIZM from "/public/openmoji/1F50A.svg";
import bkkUUVlKRi from "/public/openmoji/1F50B.svg";
import jnFxIpdIZU from "/public/openmoji/1F50C.svg";
import aYYmMDpAsa from "/public/openmoji/1F50D.svg";
import aOATsIZhbZ from "/public/openmoji/1F50E.svg";
import nmipGnOibd from "/public/openmoji/1F50F.svg";
import WvPEPodcdv from "/public/openmoji/1F510.svg";
import OhVXHWJvBG from "/public/openmoji/1F511.svg";
import GPjmsiLbgY from "/public/openmoji/1F512.svg";
import JtORlAHAJm from "/public/openmoji/1F513.svg";
import VPPxokkkZp from "/public/openmoji/1F514.svg";
import NfOBaFcCIU from "/public/openmoji/1F515.svg";
import yOePBljgGD from "/public/openmoji/1F516.svg";
import XgFLUdisbc from "/public/openmoji/1F517.svg";
import ahblXNzqRr from "/public/openmoji/1F518.svg";
import uSiUuBvblD from "/public/openmoji/1F519.svg";
import cxxTGfrZdv from "/public/openmoji/1F51A.svg";
import kunvABXXeR from "/public/openmoji/1F51B.svg";
import VsVjOpCuyB from "/public/openmoji/1F51C.svg";
import yasVoPztWP from "/public/openmoji/1F51D.svg";
import wilSHExUjN from "/public/openmoji/1F51E.svg";
import hdXFRnaRNP from "/public/openmoji/1F51F.svg";
import zhjLMwAYhj from "/public/openmoji/1F520.svg";
import wwiyhDXdNu from "/public/openmoji/1F521.svg";
import PeUzTuZpDE from "/public/openmoji/1F522.svg";
import PiobMYWMHU from "/public/openmoji/1F523.svg";
import yCuVKawltk from "/public/openmoji/1F524.svg";
import dUMLClrvpL from "/public/openmoji/1F525.svg";
import yyVuQWmDVo from "/public/openmoji/1F526.svg";
import umMXzlXcDp from "/public/openmoji/1F527.svg";
import IsVrHohMlk from "/public/openmoji/1F528.svg";
import UmYqlLfpMH from "/public/openmoji/1F529.svg";
import VEMDjQbXDt from "/public/openmoji/1F52A.svg";
import JwNQCTGEZX from "/public/openmoji/1F52B.svg";
import BsVYjgrrDh from "/public/openmoji/1F52C.svg";
import FmLebFeIDb from "/public/openmoji/1F52D.svg";
import GuhMitnrXg from "/public/openmoji/1F52E.svg";
import PoiQAMBGdq from "/public/openmoji/1F52F.svg";
import NOtQUkifwk from "/public/openmoji/1F530.svg";
import LqwFXOEZpc from "/public/openmoji/1F531.svg";
import ZMiNMgxApw from "/public/openmoji/1F532.svg";
import NCbDZHOHFU from "/public/openmoji/1F533.svg";
import bgSZWDMnvD from "/public/openmoji/1F534.svg";
import aleBNBsxxN from "/public/openmoji/1F535.svg";
import VCYKAjzEXv from "/public/openmoji/1F536.svg";
import ngEBOcUDor from "/public/openmoji/1F537.svg";
import TZAbOFKuxi from "/public/openmoji/1F538.svg";
import QSNsXpeRFe from "/public/openmoji/1F539.svg";
import RuCWWLJZQK from "/public/openmoji/1F53A.svg";
import gKqSLcdyjw from "/public/openmoji/1F53B.svg";
import GenXWbcHPk from "/public/openmoji/1F53C.svg";
import wdDsXgCJDx from "/public/openmoji/1F53D.svg";
import UnksbpQbwP from "/public/openmoji/1F549.svg";
import OaAsxzVjDF from "/public/openmoji/1F54A.svg";
import eTikHrhiyK from "/public/openmoji/1F54B.svg";
import rCxDItMpqg from "/public/openmoji/1F54C.svg";
import fVuzQlerGT from "/public/openmoji/1F54D.svg";
import tjQEqQzhkr from "/public/openmoji/1F54E.svg";
import mqrBuaKiMh from "/public/openmoji/1F550.svg";
import uLczsKzdbT from "/public/openmoji/1F551.svg";
import rhpIXEHKBW from "/public/openmoji/1F552.svg";
import BmwkTqHOpV from "/public/openmoji/1F553.svg";
import DVneMjTuxx from "/public/openmoji/1F554.svg";
import fSBAfyLkXW from "/public/openmoji/1F555.svg";
import VeyMwrjVJA from "/public/openmoji/1F556.svg";
import YuicGWpiPo from "/public/openmoji/1F557.svg";
import WvcbAEAwhA from "/public/openmoji/1F558.svg";
import QHaMPGXCMA from "/public/openmoji/1F559.svg";
import MIDKasMxUw from "/public/openmoji/1F55A.svg";
import DgyBASvUCr from "/public/openmoji/1F55B.svg";
import kjHJsSGtwh from "/public/openmoji/1F55C.svg";
import VKuGYhHazj from "/public/openmoji/1F55D.svg";
import ENOqEnWQeL from "/public/openmoji/1F55E.svg";
import XFPNjzRPcf from "/public/openmoji/1F55F.svg";
import hObolyGIvk from "/public/openmoji/1F560.svg";
import xLpjXaoHUF from "/public/openmoji/1F561.svg";
import NVFcqBlqsy from "/public/openmoji/1F562.svg";
import rFvNaIhPRo from "/public/openmoji/1F563.svg";
import fpGzMhsOYr from "/public/openmoji/1F564.svg";
import AlBJMSJbCr from "/public/openmoji/1F565.svg";
import jeKPqhTJEQ from "/public/openmoji/1F566.svg";
import CvDAhXjbjs from "/public/openmoji/1F567.svg";
import aCJkfAXYPL from "/public/openmoji/1F56F.svg";
import gifvmRqnel from "/public/openmoji/1F570.svg";
import eOIopzoIVT from "/public/openmoji/1F573.svg";
import qXNtMPCdKj from "/public/openmoji/1F574-1F3FB.svg";
import sonbkJDZkP from "/public/openmoji/1F574-1F3FC.svg";
import NKVagnfcKJ from "/public/openmoji/1F574-1F3FD.svg";
import SGPeOyPNVc from "/public/openmoji/1F574-1F3FE.svg";
import MLyEXOHysP from "/public/openmoji/1F574-1F3FF.svg";
import WOAbHRhjSD from "/public/openmoji/1F574.svg";
import fGaKLiUNEc from "/public/openmoji/1F575-1F3FB-200D-2640-FE0F.svg";
import IaQgbcuEgs from "/public/openmoji/1F575-1F3FB-200D-2642-FE0F.svg";
import ieDJMlWBdr from "/public/openmoji/1F575-1F3FB.svg";
import vCNHMOObbK from "/public/openmoji/1F575-1F3FC-200D-2640-FE0F.svg";
import YOjnGWduqK from "/public/openmoji/1F575-1F3FC-200D-2642-FE0F.svg";
import zfKIoGPVMU from "/public/openmoji/1F575-1F3FC.svg";
import EKyoLXguMu from "/public/openmoji/1F575-1F3FD-200D-2640-FE0F.svg";
import zqyWOhJgYn from "/public/openmoji/1F575-1F3FD-200D-2642-FE0F.svg";
import OBLZpxBVJZ from "/public/openmoji/1F575-1F3FD.svg";
import evTkDgDREe from "/public/openmoji/1F575-1F3FE-200D-2640-FE0F.svg";
import rnqZROMBzD from "/public/openmoji/1F575-1F3FE-200D-2642-FE0F.svg";
import HwNnpVGwIc from "/public/openmoji/1F575-1F3FE.svg";
import IaktFHsiZk from "/public/openmoji/1F575-1F3FF-200D-2640-FE0F.svg";
import nukFsIpVZI from "/public/openmoji/1F575-1F3FF-200D-2642-FE0F.svg";
import NpbtwtXcDx from "/public/openmoji/1F575-1F3FF.svg";
import vLRwmjANdQ from "/public/openmoji/1F575-FE0F-200D-2640-FE0F.svg";
import aKItoaOlWn from "/public/openmoji/1F575-FE0F-200D-2642-FE0F.svg";
import EaQkDiqdnv from "/public/openmoji/1F575.svg";
import QdeVqiZbPR from "/public/openmoji/1F576.svg";
import CadRhpVgOD from "/public/openmoji/1F577.svg";
import dLKvHItwZe from "/public/openmoji/1F578.svg";
import wpQlZnEjJS from "/public/openmoji/1F579.svg";
import zHzNiIMnwa from "/public/openmoji/1F57A-1F3FB.svg";
import VFtFOegTMA from "/public/openmoji/1F57A-1F3FC.svg";
import paCjDlAQcl from "/public/openmoji/1F57A-1F3FD.svg";
import cJbIzQvqPT from "/public/openmoji/1F57A-1F3FE.svg";
import KcnplzGaoo from "/public/openmoji/1F57A-1F3FF.svg";
import EttpiurMWS from "/public/openmoji/1F57A.svg";
import xzJzdXxbGm from "/public/openmoji/1F587.svg";
import gnLWOdtvnd from "/public/openmoji/1F58A.svg";
import GhnXRvglen from "/public/openmoji/1F58B.svg";
import dAtFqwylAA from "/public/openmoji/1F58C.svg";
import KayOOqpmDH from "/public/openmoji/1F58D.svg";
import lgSovKevMH from "/public/openmoji/1F590-1F3FB.svg";
import bEgWrcyHaK from "/public/openmoji/1F590-1F3FC.svg";
import ZEiKDymcrA from "/public/openmoji/1F590-1F3FD.svg";
import rhwargxfsK from "/public/openmoji/1F590-1F3FE.svg";
import FJCwOamgbr from "/public/openmoji/1F590-1F3FF.svg";
import AfNcAHAfHx from "/public/openmoji/1F590.svg";
import JsEjHnYcOK from "/public/openmoji/1F595-1F3FB.svg";
import RcaqiMzqkg from "/public/openmoji/1F595-1F3FC.svg";
import dAPZWiBqLx from "/public/openmoji/1F595-1F3FD.svg";
import ghcQeUSPTS from "/public/openmoji/1F595-1F3FE.svg";
import tYmcfQBTiT from "/public/openmoji/1F595-1F3FF.svg";
import pOBREjNqse from "/public/openmoji/1F595.svg";
import xdJYrRWnrK from "/public/openmoji/1F596-1F3FB.svg";
import TnCSNqkXDp from "/public/openmoji/1F596-1F3FC.svg";
import VSnDcGGmWh from "/public/openmoji/1F596-1F3FD.svg";
import FanAugURCw from "/public/openmoji/1F596-1F3FE.svg";
import MqBoTmYvck from "/public/openmoji/1F596-1F3FF.svg";
import QoZuyxUUdc from "/public/openmoji/1F596.svg";
import DTZDsRhDzj from "/public/openmoji/1F5A4.svg";
import vdNlHWntgA from "/public/openmoji/1F5A5.svg";
import uzBezxHYpd from "/public/openmoji/1F5A8.svg";
import onsDfUztNc from "/public/openmoji/1F5B1.svg";
import GmhFddggyx from "/public/openmoji/1F5B2.svg";
import SeuXKXCzmG from "/public/openmoji/1F5BC.svg";
import MbjGWvcvaF from "/public/openmoji/1F5C2.svg";
import DuksoWNMkE from "/public/openmoji/1F5C3.svg";
import YDeebPCicZ from "/public/openmoji/1F5C4.svg";
import gghsneEgXZ from "/public/openmoji/1F5D1.svg";
import fiYPvzHqxF from "/public/openmoji/1F5D2.svg";
import GgkNzOLRCX from "/public/openmoji/1F5D3.svg";
import TBgiqhrDRF from "/public/openmoji/1F5DC.svg";
import yjbAlczaEh from "/public/openmoji/1F5DD.svg";
import UztlQJUfzh from "/public/openmoji/1F5DE.svg";
import nJiDUXiNWP from "/public/openmoji/1F5E1.svg";
import IMQiyJaLKp from "/public/openmoji/1F5E3.svg";
import KrcIxYhrXi from "/public/openmoji/1F5E8.svg";
import TRQMsMLztp from "/public/openmoji/1F5EF.svg";
import BVaXNVGcgY from "/public/openmoji/1F5F3.svg";
import wnwgcJPYJN from "/public/openmoji/1F5FA.svg";
import MefyGaLaGT from "/public/openmoji/1F5FB.svg";
import pcJLYcNtEl from "/public/openmoji/1F5FC.svg";
import fallXZUzIC from "/public/openmoji/1F5FD.svg";
import tiOeLpKOri from "/public/openmoji/1F5FE.svg";
import CArAPaTPuo from "/public/openmoji/1F5FF.svg";
import CxAwWPVBhD from "/public/openmoji/1F600.svg";
import qrXcSDFJMG from "/public/openmoji/1F601.svg";
import pVEeUoCAMG from "/public/openmoji/1F602.svg";
import TjwzyZLdJa from "/public/openmoji/1F603.svg";
import DSsHRmDvxD from "/public/openmoji/1F604.svg";
import ZYUdLDsLej from "/public/openmoji/1F605.svg";
import JWDkFKxMLA from "/public/openmoji/1F606.svg";
import LGZNYbpuLb from "/public/openmoji/1F607.svg";
import qRdKrYbNNT from "/public/openmoji/1F608.svg";
import wslIydaQOu from "/public/openmoji/1F609.svg";
import BdBhblGsPP from "/public/openmoji/1F60A.svg";
import hQJxNAJHfs from "/public/openmoji/1F60B.svg";
import saoMCVbFkG from "/public/openmoji/1F60C.svg";
import sZTDDVWmGB from "/public/openmoji/1F60D.svg";
import WfwpKvHVOp from "/public/openmoji/1F60E.svg";
import fCHTLhDiuR from "/public/openmoji/1F60F.svg";
import HVlRDUIRGo from "/public/openmoji/1F610.svg";
import zUpyNqYWyQ from "/public/openmoji/1F611.svg";
import IZiPvMEDHR from "/public/openmoji/1F612.svg";
import rOyFLdxJkf from "/public/openmoji/1F613.svg";
import edhAGkShwn from "/public/openmoji/1F614.svg";
import bOywVKocWD from "/public/openmoji/1F615.svg";
import ZkKIuvjFBB from "/public/openmoji/1F616.svg";
import RCFhfzVjRB from "/public/openmoji/1F617.svg";
import JkHgEkkTQV from "/public/openmoji/1F618.svg";
import KKEGQdGMmX from "/public/openmoji/1F619.svg";
import EmxUgMvkVq from "/public/openmoji/1F61A.svg";
import vfHhojzewV from "/public/openmoji/1F61B.svg";
import HWdgTqEHhD from "/public/openmoji/1F61C.svg";
import cLIoBWbwEJ from "/public/openmoji/1F61D.svg";
import AcGPnwBgoT from "/public/openmoji/1F61E.svg";
import nNdemHUbTi from "/public/openmoji/1F61F.svg";
import PmlEcfeZpv from "/public/openmoji/1F620.svg";
import uORfqHETko from "/public/openmoji/1F621.svg";
import dLfWjbmTid from "/public/openmoji/1F622.svg";
import CwqGpniICw from "/public/openmoji/1F623.svg";
import gEAwiPlqEu from "/public/openmoji/1F624.svg";
import ZgTkWLIUGv from "/public/openmoji/1F625.svg";
import KVaOzJtfbY from "/public/openmoji/1F626.svg";
import QdfEVubrub from "/public/openmoji/1F627.svg";
import cwZcQTAxJg from "/public/openmoji/1F628.svg";
import PYVBWMMrWh from "/public/openmoji/1F629.svg";
import BBVcNHdick from "/public/openmoji/1F62A.svg";
import LWVlDLLSUV from "/public/openmoji/1F62B.svg";
import uhhJRfIBIO from "/public/openmoji/1F62C.svg";
import gtyCtTZTGm from "/public/openmoji/1F62D.svg";
import oudmNmkBph from "/public/openmoji/1F62E-200D-1F4A8.svg";
import jfqrZVRiWS from "/public/openmoji/1F62E.svg";
import wSFXsEWCoD from "/public/openmoji/1F62F.svg";
import lacdjgnCvu from "/public/openmoji/1F630.svg";
import JtPsKBreYQ from "/public/openmoji/1F631.svg";
import dbyOnZbAKK from "/public/openmoji/1F632.svg";
import icWuIDAtOX from "/public/openmoji/1F633.svg";
import vRocIEDTtz from "/public/openmoji/1F634.svg";
import KWGqNbwcyK from "/public/openmoji/1F635-200D-1F4AB.svg";
import HWWDZpZRaB from "/public/openmoji/1F635.svg";
import HwzNCJRclV from "/public/openmoji/1F636-200D-1F32B-FE0F.svg";
import GJKyHpxWjE from "/public/openmoji/1F636.svg";
import aQafctAinE from "/public/openmoji/1F637.svg";
import bpAIdkFvBG from "/public/openmoji/1F638.svg";
import WKvvhadVAy from "/public/openmoji/1F639.svg";
import nyMHmIXlDG from "/public/openmoji/1F63A.svg";
import yAEQHbBYNi from "/public/openmoji/1F63B.svg";
import pxkUJxQyUQ from "/public/openmoji/1F63C.svg";
import hOIsndZrTp from "/public/openmoji/1F63D.svg";
import JtrpwJRvjv from "/public/openmoji/1F63E.svg";
import uBjZiImejH from "/public/openmoji/1F63F.svg";
import kEMNfKPWqD from "/public/openmoji/1F640.svg";
import iJPXgISZCS from "/public/openmoji/1F641.svg";
import fttAQsbDyK from "/public/openmoji/1F642.svg";
import ohXkpobDFt from "/public/openmoji/1F643.svg";
import MbUjFPSIyG from "/public/openmoji/1F644.svg";
import zHILExdTfJ from "/public/openmoji/1F645-1F3FB-200D-2640-FE0F.svg";
import QFsZCQukKI from "/public/openmoji/1F645-1F3FB-200D-2642-FE0F.svg";
import zTCiZVpsur from "/public/openmoji/1F645-1F3FB.svg";
import ZFtzGxiohd from "/public/openmoji/1F645-1F3FC-200D-2640-FE0F.svg";
import ZFKRTsPTmH from "/public/openmoji/1F645-1F3FC-200D-2642-FE0F.svg";
import WPutDdEhVj from "/public/openmoji/1F645-1F3FC.svg";
import dGaoIMSxPf from "/public/openmoji/1F645-1F3FD-200D-2640-FE0F.svg";
import FMiXrTVjaC from "/public/openmoji/1F645-1F3FD-200D-2642-FE0F.svg";
import lPPMqdSdrr from "/public/openmoji/1F645-1F3FD.svg";
import EnUeeodojZ from "/public/openmoji/1F645-1F3FE-200D-2640-FE0F.svg";
import ieYTyUcMsd from "/public/openmoji/1F645-1F3FE-200D-2642-FE0F.svg";
import gccJfWUdFl from "/public/openmoji/1F645-1F3FE.svg";
import swEmVXRRXR from "/public/openmoji/1F645-1F3FF-200D-2640-FE0F.svg";
import NFtdHvLfmO from "/public/openmoji/1F645-1F3FF-200D-2642-FE0F.svg";
import ffOyzDtgHD from "/public/openmoji/1F645-1F3FF.svg";
import FCawFYBxkn from "/public/openmoji/1F645-200D-2640-FE0F.svg";
import hCzwsKrOOb from "/public/openmoji/1F645-200D-2642-FE0F.svg";
import eoOWGWGKgZ from "/public/openmoji/1F645.svg";
import evWseuRnFZ from "/public/openmoji/1F646-1F3FB-200D-2640-FE0F.svg";
import GJFskkCiOp from "/public/openmoji/1F646-1F3FB-200D-2642-FE0F.svg";
import bJYVnJSwcp from "/public/openmoji/1F646-1F3FB.svg";
import aGPhDjoKqD from "/public/openmoji/1F646-1F3FC-200D-2640-FE0F.svg";
import NguIzTTvRk from "/public/openmoji/1F646-1F3FC-200D-2642-FE0F.svg";
import DNYiIMmEEK from "/public/openmoji/1F646-1F3FC.svg";
import AiSxaRXWlk from "/public/openmoji/1F646-1F3FD-200D-2640-FE0F.svg";
import gxRrvkiBOO from "/public/openmoji/1F646-1F3FD-200D-2642-FE0F.svg";
import FEEtFjBNzp from "/public/openmoji/1F646-1F3FD.svg";
import mJXclGyDWG from "/public/openmoji/1F646-1F3FE-200D-2640-FE0F.svg";
import RUWNHcbbkC from "/public/openmoji/1F646-1F3FE-200D-2642-FE0F.svg";
import wjhnHMvwJt from "/public/openmoji/1F646-1F3FE.svg";
import NWkorZPGFc from "/public/openmoji/1F646-1F3FF-200D-2640-FE0F.svg";
import PYTrxynoep from "/public/openmoji/1F646-1F3FF-200D-2642-FE0F.svg";
import TncnBGPNOD from "/public/openmoji/1F646-1F3FF.svg";
import RCcRkuhKLX from "/public/openmoji/1F646-200D-2640-FE0F.svg";
import mJYcHBdxUG from "/public/openmoji/1F646-200D-2642-FE0F.svg";
import VYitTQgMgu from "/public/openmoji/1F646.svg";
import bMrqagJobC from "/public/openmoji/1F647-1F3FB-200D-2640-FE0F.svg";
import irBEymGBGb from "/public/openmoji/1F647-1F3FB-200D-2642-FE0F.svg";
import HEDOopfZwc from "/public/openmoji/1F647-1F3FB.svg";
import XSthYxrJhq from "/public/openmoji/1F647-1F3FC-200D-2640-FE0F.svg";
import UWFmuEDgSQ from "/public/openmoji/1F647-1F3FC-200D-2642-FE0F.svg";
import zZAtmUZfSg from "/public/openmoji/1F647-1F3FC.svg";
import wuGyqmLMzR from "/public/openmoji/1F647-1F3FD-200D-2640-FE0F.svg";
import MMspHTLGDn from "/public/openmoji/1F647-1F3FD-200D-2642-FE0F.svg";
import pYnjqDdPoi from "/public/openmoji/1F647-1F3FD.svg";
import MIRcAVotan from "/public/openmoji/1F647-1F3FE-200D-2640-FE0F.svg";
import KYpzpQeQHW from "/public/openmoji/1F647-1F3FE-200D-2642-FE0F.svg";
import IrCRxCuHhb from "/public/openmoji/1F647-1F3FE.svg";
import sTWVoxzHDN from "/public/openmoji/1F647-1F3FF-200D-2640-FE0F.svg";
import voEKZTmlfa from "/public/openmoji/1F647-1F3FF-200D-2642-FE0F.svg";
import XghCtGTJhO from "/public/openmoji/1F647-1F3FF.svg";
import pOOXbawfLT from "/public/openmoji/1F647-200D-2640-FE0F.svg";
import mHNwZVNDrH from "/public/openmoji/1F647-200D-2642-FE0F.svg";
import JnDHuCRmDi from "/public/openmoji/1F647.svg";
import ptVQlYtyfh from "/public/openmoji/1F648.svg";
import kHugPCbMIC from "/public/openmoji/1F649.svg";
import ZEICPJLVQA from "/public/openmoji/1F64A.svg";
import UlyPHrrWCY from "/public/openmoji/1F64B-1F3FB-200D-2640-FE0F.svg";
import WjaoQtOOHK from "/public/openmoji/1F64B-1F3FB-200D-2642-FE0F.svg";
import mCLPjOXoJg from "/public/openmoji/1F64B-1F3FB.svg";
import CgKuJbhjwX from "/public/openmoji/1F64B-1F3FC-200D-2640-FE0F.svg";
import VxYXAwXigu from "/public/openmoji/1F64B-1F3FC-200D-2642-FE0F.svg";
import PpbXHJnHhe from "/public/openmoji/1F64B-1F3FC.svg";
import cPsueekOBq from "/public/openmoji/1F64B-1F3FD-200D-2640-FE0F.svg";
import VidhDumGrE from "/public/openmoji/1F64B-1F3FD-200D-2642-FE0F.svg";
import pJaZiQQhcO from "/public/openmoji/1F64B-1F3FD.svg";
import TipoZdBsVu from "/public/openmoji/1F64B-1F3FE-200D-2640-FE0F.svg";
import EIzulNuzZp from "/public/openmoji/1F64B-1F3FE-200D-2642-FE0F.svg";
import xnRonnfrga from "/public/openmoji/1F64B-1F3FE.svg";
import dnqloNaRFe from "/public/openmoji/1F64B-1F3FF-200D-2640-FE0F.svg";
import zcwfKqzVGS from "/public/openmoji/1F64B-1F3FF-200D-2642-FE0F.svg";
import GhATCYwRzO from "/public/openmoji/1F64B-1F3FF.svg";
import dXWYxxEKgb from "/public/openmoji/1F64B-200D-2640-FE0F.svg";
import BiUkLyXzUm from "/public/openmoji/1F64B-200D-2642-FE0F.svg";
import sMCRULVKrw from "/public/openmoji/1F64B.svg";
import FDQTchBoYB from "/public/openmoji/1F64C-1F3FB.svg";
import HfOMwqGcOF from "/public/openmoji/1F64C-1F3FC.svg";
import JVKlXHIQBP from "/public/openmoji/1F64C-1F3FD.svg";
import ePvTMcnBKO from "/public/openmoji/1F64C-1F3FE.svg";
import AvtlfLDlJv from "/public/openmoji/1F64C-1F3FF.svg";
import VPNtbkHojk from "/public/openmoji/1F64C.svg";
import xsHKNcPNXP from "/public/openmoji/1F64D-1F3FB-200D-2640-FE0F.svg";
import EyaUTbszCc from "/public/openmoji/1F64D-1F3FB-200D-2642-FE0F.svg";
import AbteGXoIgu from "/public/openmoji/1F64D-1F3FB.svg";
import bNqePbBKTR from "/public/openmoji/1F64D-1F3FC-200D-2640-FE0F.svg";
import SQtxLWKoRz from "/public/openmoji/1F64D-1F3FC-200D-2642-FE0F.svg";
import rXGfqlvaMN from "/public/openmoji/1F64D-1F3FC.svg";
import tdoZNPgUpZ from "/public/openmoji/1F64D-1F3FD-200D-2640-FE0F.svg";
import ivfrHKpqhN from "/public/openmoji/1F64D-1F3FD-200D-2642-FE0F.svg";
import MDuqikKfYp from "/public/openmoji/1F64D-1F3FD.svg";
import wSGbElraMY from "/public/openmoji/1F64D-1F3FE-200D-2640-FE0F.svg";
import jfKWLeOHOX from "/public/openmoji/1F64D-1F3FE-200D-2642-FE0F.svg";
import BzaZBmpRMN from "/public/openmoji/1F64D-1F3FE.svg";
import CoNIsBZdkm from "/public/openmoji/1F64D-1F3FF-200D-2640-FE0F.svg";
import jPQFsumrWR from "/public/openmoji/1F64D-1F3FF-200D-2642-FE0F.svg";
import wvzVlZXxAp from "/public/openmoji/1F64D-1F3FF.svg";
import YxdZmAdIbZ from "/public/openmoji/1F64D-200D-2640-FE0F.svg";
import dTrpZXRWmq from "/public/openmoji/1F64D-200D-2642-FE0F.svg";
import jZiVotKlGT from "/public/openmoji/1F64D.svg";
import oTPAoHKZEH from "/public/openmoji/1F64E-1F3FB-200D-2640-FE0F.svg";
import AycUzFkXLY from "/public/openmoji/1F64E-1F3FB-200D-2642-FE0F.svg";
import XNsQarZfqE from "/public/openmoji/1F64E-1F3FB.svg";
import AKVGuyeZZh from "/public/openmoji/1F64E-1F3FC-200D-2640-FE0F.svg";
import enzfEwnfvd from "/public/openmoji/1F64E-1F3FC-200D-2642-FE0F.svg";
import SaoluHENvU from "/public/openmoji/1F64E-1F3FC.svg";
import ZwzEiBLSfN from "/public/openmoji/1F64E-1F3FD-200D-2640-FE0F.svg";
import kFmiabsGib from "/public/openmoji/1F64E-1F3FD-200D-2642-FE0F.svg";
import mwkBjvQLyx from "/public/openmoji/1F64E-1F3FD.svg";
import ojjPWSQyCV from "/public/openmoji/1F64E-1F3FE-200D-2640-FE0F.svg";
import RBGVvTJXRm from "/public/openmoji/1F64E-1F3FE-200D-2642-FE0F.svg";
import jozzGZObUK from "/public/openmoji/1F64E-1F3FE.svg";
import DWKFlKsnlm from "/public/openmoji/1F64E-1F3FF-200D-2640-FE0F.svg";
import oASylAkaCU from "/public/openmoji/1F64E-1F3FF-200D-2642-FE0F.svg";
import uUbqvVaxLA from "/public/openmoji/1F64E-1F3FF.svg";
import mSIZMHEGKm from "/public/openmoji/1F64E-200D-2640-FE0F.svg";
import WXzxkqWDeN from "/public/openmoji/1F64E-200D-2642-FE0F.svg";
import WoLVlMcxth from "/public/openmoji/1F64E.svg";
import kcjdeJtaQo from "/public/openmoji/1F64F-1F3FB.svg";
import KPDZtGKbZR from "/public/openmoji/1F64F-1F3FC.svg";
import TXBncgtDhS from "/public/openmoji/1F64F-1F3FD.svg";
import xeDChTfToz from "/public/openmoji/1F64F-1F3FE.svg";
import LQCVKTHXtp from "/public/openmoji/1F64F-1F3FF.svg";
import RSffFWbGuN from "/public/openmoji/1F64F.svg";
import nFEgRdpirS from "/public/openmoji/1F680.svg";
import vbDOAiqPtZ from "/public/openmoji/1F681.svg";
import jeCVfSUOHt from "/public/openmoji/1F682.svg";
import etXKFAHgMP from "/public/openmoji/1F683.svg";
import UTFeMmsDUR from "/public/openmoji/1F684.svg";
import zSBfpoWbEX from "/public/openmoji/1F685.svg";
import PWGiHzmtPR from "/public/openmoji/1F686.svg";
import tKNndzhZyP from "/public/openmoji/1F687.svg";
import aNaxnnoAlo from "/public/openmoji/1F688.svg";
import hDoQSNwgnm from "/public/openmoji/1F689.svg";
import TelYcpxckG from "/public/openmoji/1F68A.svg";
import ESopZvQZUF from "/public/openmoji/1F68B.svg";
import bZgDDiVKID from "/public/openmoji/1F68C.svg";
import KVJbuzWOhR from "/public/openmoji/1F68D.svg";
import vmtliZAvbB from "/public/openmoji/1F68E.svg";
import niMadqvGWa from "/public/openmoji/1F68F.svg";
import EvPUNBoIVH from "/public/openmoji/1F690.svg";
import yocbfQJOtc from "/public/openmoji/1F691.svg";
import imKgeMfVMS from "/public/openmoji/1F692.svg";
import TwNZDwkPlZ from "/public/openmoji/1F693.svg";
import MewpKkoGuI from "/public/openmoji/1F694.svg";
import fkhTloqgOV from "/public/openmoji/1F695.svg";
import ZkXnLeDBNY from "/public/openmoji/1F696.svg";
import rrlQiZnGZL from "/public/openmoji/1F697.svg";
import taTrzgOhnx from "/public/openmoji/1F698.svg";
import bWGZzWFraN from "/public/openmoji/1F699.svg";
import zjreRIoDat from "/public/openmoji/1F69A.svg";
import ktHPtdFgtL from "/public/openmoji/1F69B.svg";
import PWXMaTWdcO from "/public/openmoji/1F69C.svg";
import zQrAUSZfTW from "/public/openmoji/1F69D.svg";
import nVSpPhXSJB from "/public/openmoji/1F69E.svg";
import fEbWeMWTlr from "/public/openmoji/1F69F.svg";
import GXIzxuerXm from "/public/openmoji/1F6A0.svg";
import eKIpyTzpOy from "/public/openmoji/1F6A1.svg";
import VoxKUoYgBG from "/public/openmoji/1F6A2.svg";
import LhIuBvAOQq from "/public/openmoji/1F6A3-1F3FB-200D-2640-FE0F.svg";
import pIaZPikJgG from "/public/openmoji/1F6A3-1F3FB-200D-2642-FE0F.svg";
import EJYhGBFnYa from "/public/openmoji/1F6A3-1F3FB.svg";
import GVKutETEHC from "/public/openmoji/1F6A3-1F3FC-200D-2640-FE0F.svg";
import fIIKnXaSOI from "/public/openmoji/1F6A3-1F3FC-200D-2642-FE0F.svg";
import mFnAGNZvQn from "/public/openmoji/1F6A3-1F3FC.svg";
import WBYnmJpWGI from "/public/openmoji/1F6A3-1F3FD-200D-2640-FE0F.svg";
import QBQbPeidjd from "/public/openmoji/1F6A3-1F3FD-200D-2642-FE0F.svg";
import CObRIBnnOh from "/public/openmoji/1F6A3-1F3FD.svg";
import GLLWjtGoqd from "/public/openmoji/1F6A3-1F3FE-200D-2640-FE0F.svg";
import JwnlFaCHOR from "/public/openmoji/1F6A3-1F3FE-200D-2642-FE0F.svg";
import lsfqeJfJsO from "/public/openmoji/1F6A3-1F3FE.svg";
import DKkXkvvmec from "/public/openmoji/1F6A3-1F3FF-200D-2640-FE0F.svg";
import bcJJeAgDtY from "/public/openmoji/1F6A3-1F3FF-200D-2642-FE0F.svg";
import YubEvIUPjM from "/public/openmoji/1F6A3-1F3FF.svg";
import rOSTDeYivA from "/public/openmoji/1F6A3-200D-2640-FE0F.svg";
import hqZmxpGwXn from "/public/openmoji/1F6A3-200D-2642-FE0F.svg";
import HTMwNFPqJV from "/public/openmoji/1F6A3.svg";
import XGvtxAdGva from "/public/openmoji/1F6A4.svg";
import ZjCkrkeJkl from "/public/openmoji/1F6A5.svg";
import dpyIElEiCg from "/public/openmoji/1F6A6.svg";
import BWjqzWNjdE from "/public/openmoji/1F6A7.svg";
import AOjHygfOVF from "/public/openmoji/1F6A8.svg";
import lwghrmNZcD from "/public/openmoji/1F6A9.svg";
import eCblCXjBFH from "/public/openmoji/1F6AA.svg";
import SCwALMZUae from "/public/openmoji/1F6AB.svg";
import hFuDcDgJcB from "/public/openmoji/1F6AC.svg";
import wJBZLnpnbL from "/public/openmoji/1F6AD.svg";
import QuTwyNdJnO from "/public/openmoji/1F6AE.svg";
import aizvNRRYNP from "/public/openmoji/1F6AF.svg";
import ixUVeRdIFX from "/public/openmoji/1F6B0.svg";
import iNHoJBQFDE from "/public/openmoji/1F6B1.svg";
import MeStmkRNZU from "/public/openmoji/1F6B2.svg";
import dPVuaxSVDt from "/public/openmoji/1F6B3.svg";
import hXYaoADgqr from "/public/openmoji/1F6B4-1F3FB-200D-2640-FE0F.svg";
import yTJyEiBNkA from "/public/openmoji/1F6B4-1F3FB-200D-2642-FE0F.svg";
import DFboqhHjWE from "/public/openmoji/1F6B4-1F3FB.svg";
import WaglGqPgUa from "/public/openmoji/1F6B4-1F3FC-200D-2640-FE0F.svg";
import GYtkiRfoYl from "/public/openmoji/1F6B4-1F3FC-200D-2642-FE0F.svg";
import HgHYdAeKkG from "/public/openmoji/1F6B4-1F3FC.svg";
import twBLkpekYN from "/public/openmoji/1F6B4-1F3FD-200D-2640-FE0F.svg";
import sJEkwNgKmR from "/public/openmoji/1F6B4-1F3FD-200D-2642-FE0F.svg";
import BzAcDdLPEI from "/public/openmoji/1F6B4-1F3FD.svg";
import LHlKEzMvif from "/public/openmoji/1F6B4-1F3FE-200D-2640-FE0F.svg";
import SoyzfGyMsc from "/public/openmoji/1F6B4-1F3FE-200D-2642-FE0F.svg";
import SuvVXksnUC from "/public/openmoji/1F6B4-1F3FE.svg";
import JMxfjYdWyH from "/public/openmoji/1F6B4-1F3FF-200D-2640-FE0F.svg";
import IPrAUfiuMo from "/public/openmoji/1F6B4-1F3FF-200D-2642-FE0F.svg";
import EVhhGAIPBG from "/public/openmoji/1F6B4-1F3FF.svg";
import gafiYSmxuz from "/public/openmoji/1F6B4-200D-2640-FE0F.svg";
import eczDLQxaZn from "/public/openmoji/1F6B4-200D-2642-FE0F.svg";
import cWvYbaoVPW from "/public/openmoji/1F6B4.svg";
import aOmrhAwwNO from "/public/openmoji/1F6B5-1F3FB-200D-2640-FE0F.svg";
import HbSGLqZwpi from "/public/openmoji/1F6B5-1F3FB-200D-2642-FE0F.svg";
import yNnjFpHNJM from "/public/openmoji/1F6B5-1F3FB.svg";
import NwChuLeXRm from "/public/openmoji/1F6B5-1F3FC-200D-2640-FE0F.svg";
import TGXPmphhCu from "/public/openmoji/1F6B5-1F3FC-200D-2642-FE0F.svg";
import MwuGSPpkes from "/public/openmoji/1F6B5-1F3FC.svg";
import iWUxYfetVw from "/public/openmoji/1F6B5-1F3FD-200D-2640-FE0F.svg";
import qAmkOivHIG from "/public/openmoji/1F6B5-1F3FD-200D-2642-FE0F.svg";
import sCGeWOROfZ from "/public/openmoji/1F6B5-1F3FD.svg";
import qChlwnbOsb from "/public/openmoji/1F6B5-1F3FE-200D-2640-FE0F.svg";
import bZHOhIqIoD from "/public/openmoji/1F6B5-1F3FE-200D-2642-FE0F.svg";
import duuBpbXphJ from "/public/openmoji/1F6B5-1F3FE.svg";
import PosdAcjOjU from "/public/openmoji/1F6B5-1F3FF-200D-2640-FE0F.svg";
import XtaUwjPUly from "/public/openmoji/1F6B5-1F3FF-200D-2642-FE0F.svg";
import eIaiKLdpXP from "/public/openmoji/1F6B5-1F3FF.svg";
import ErgcVnsrGx from "/public/openmoji/1F6B5-200D-2640-FE0F.svg";
import xvpImeyvfm from "/public/openmoji/1F6B5-200D-2642-FE0F.svg";
import VCmxlTcAli from "/public/openmoji/1F6B5.svg";
import xjZxvCuqIa from "/public/openmoji/1F6B6-1F3FB-200D-2640-FE0F.svg";
import JHfsZVzNqb from "/public/openmoji/1F6B6-1F3FB-200D-2642-FE0F.svg";
import JdDhsQKKKf from "/public/openmoji/1F6B6-1F3FB.svg";
import WDkbFRVpBX from "/public/openmoji/1F6B6-1F3FC-200D-2640-FE0F.svg";
import jitNLKOOhg from "/public/openmoji/1F6B6-1F3FC-200D-2642-FE0F.svg";
import ZuBwXRRucJ from "/public/openmoji/1F6B6-1F3FC.svg";
import lKcdgZfhJW from "/public/openmoji/1F6B6-1F3FD-200D-2640-FE0F.svg";
import FHPhYVAcqt from "/public/openmoji/1F6B6-1F3FD-200D-2642-FE0F.svg";
import vuayFNxcBN from "/public/openmoji/1F6B6-1F3FD.svg";
import fBsYKsdvqz from "/public/openmoji/1F6B6-1F3FE-200D-2640-FE0F.svg";
import NbiDpRzFry from "/public/openmoji/1F6B6-1F3FE-200D-2642-FE0F.svg";
import rypFtUbZez from "/public/openmoji/1F6B6-1F3FE.svg";
import FTGQouUurB from "/public/openmoji/1F6B6-1F3FF-200D-2640-FE0F.svg";
import EqhUevSFJm from "/public/openmoji/1F6B6-1F3FF-200D-2642-FE0F.svg";
import PpuRtFSSNp from "/public/openmoji/1F6B6-1F3FF.svg";
import XcygDzEzTL from "/public/openmoji/1F6B6-200D-2640-FE0F.svg";
import pyhhijMPgF from "/public/openmoji/1F6B6-200D-2642-FE0F.svg";
import BgpmYCHxuI from "/public/openmoji/1F6B6.svg";
import drRnmlEYvz from "/public/openmoji/1F6B7.svg";
import FWEiNxFfHm from "/public/openmoji/1F6B8.svg";
import zyRWLluaRP from "/public/openmoji/1F6B9.svg";
import tJoAvbEiPa from "/public/openmoji/1F6BA.svg";
import VztZETAEeG from "/public/openmoji/1F6BB.svg";
import eeILGpqImT from "/public/openmoji/1F6BC.svg";
import BLrXBgtQCv from "/public/openmoji/1F6BD.svg";
import dveEXPLRbN from "/public/openmoji/1F6BE.svg";
import SCGAuStuSR from "/public/openmoji/1F6BF.svg";
import NWDKJkxzPB from "/public/openmoji/1F6C0-1F3FB.svg";
import DHXAevqwcX from "/public/openmoji/1F6C0-1F3FC.svg";
import yizbDHBvQJ from "/public/openmoji/1F6C0-1F3FD.svg";
import dTwdUpQKAV from "/public/openmoji/1F6C0-1F3FE.svg";
import gCxNGSUrFr from "/public/openmoji/1F6C0-1F3FF.svg";
import OlwOJDdhfR from "/public/openmoji/1F6C0.svg";
import QeoeyyejFc from "/public/openmoji/1F6C1.svg";
import qlfJbgdhfV from "/public/openmoji/1F6C2.svg";
import rKsOGZYcKa from "/public/openmoji/1F6C3.svg";
import ItdwNMHrLO from "/public/openmoji/1F6C4.svg";
import pdPPpYJISr from "/public/openmoji/1F6C5.svg";
import fniUyouNCT from "/public/openmoji/1F6CB.svg";
import ihfOzowhmD from "/public/openmoji/1F6CC-1F3FB.svg";
import nfXbKhFSHu from "/public/openmoji/1F6CC-1F3FC.svg";
import BcKamRrBjo from "/public/openmoji/1F6CC-1F3FD.svg";
import UOdnmDvHuB from "/public/openmoji/1F6CC-1F3FE.svg";
import CVecHCPvDx from "/public/openmoji/1F6CC-1F3FF.svg";
import RlpDNCymTM from "/public/openmoji/1F6CC.svg";
import aJaIdeQOeF from "/public/openmoji/1F6CD.svg";
import kHpnzVebqo from "/public/openmoji/1F6CE.svg";
import eEkMTxprQK from "/public/openmoji/1F6CF.svg";
import JnuVKNUrup from "/public/openmoji/1F6D0.svg";
import AYwdfttFVm from "/public/openmoji/1F6D1.svg";
import PihxArVQbL from "/public/openmoji/1F6D2.svg";
import eyeuHWwbGe from "/public/openmoji/1F6D5.svg";
import ezmhfnqEHN from "/public/openmoji/1F6D6.svg";
import OcDZZfWXiF from "/public/openmoji/1F6D7.svg";
import zjSYWyNzck from "/public/openmoji/1F6DC.svg";
import QogLVMHnzN from "/public/openmoji/1F6DD.svg";
import kOKDMNjMUg from "/public/openmoji/1F6DE.svg";
import vFetvPSBrE from "/public/openmoji/1F6DF.svg";
import NUbWWDOkXD from "/public/openmoji/1F6E0.svg";
import eOLqCCAeco from "/public/openmoji/1F6E1.svg";
import SVuKFNSswh from "/public/openmoji/1F6E2.svg";
import mwYlITpfwM from "/public/openmoji/1F6E3.svg";
import iFgWGYiYoG from "/public/openmoji/1F6E4.svg";
import BmFuibJuRa from "/public/openmoji/1F6E5.svg";
import mTlDxcwSie from "/public/openmoji/1F6E9.svg";
import uMJtuwtqgF from "/public/openmoji/1F6EB.svg";
import XYVYMqhaAO from "/public/openmoji/1F6EC.svg";
import udDEGtNGmB from "/public/openmoji/1F6F0.svg";
import CctXxlBzau from "/public/openmoji/1F6F3.svg";
import DurJfTMxkO from "/public/openmoji/1F6F4.svg";
import scJNqWRTrN from "/public/openmoji/1F6F5.svg";
import guCBaRWJdn from "/public/openmoji/1F6F6.svg";
import peWquEQaha from "/public/openmoji/1F6F7.svg";
import bOzGHrBvHD from "/public/openmoji/1F6F8.svg";
import yVTsenFffH from "/public/openmoji/1F6F9.svg";
import ltkKdNXjVz from "/public/openmoji/1F6FA.svg";
import dLzHhiILKx from "/public/openmoji/1F6FB.svg";
import gVZlDnZLNb from "/public/openmoji/1F6FC.svg";
import qgfeBiqgNx from "/public/openmoji/1F7E0.svg";
import pOlXOFwhBT from "/public/openmoji/1F7E1.svg";
import xudZNIrCvq from "/public/openmoji/1F7E2.svg";
import hwyWqwzwgl from "/public/openmoji/1F7E3.svg";
import vCZRidhLBs from "/public/openmoji/1F7E4.svg";
import nyVQGEIjje from "/public/openmoji/1F7E5.svg";
import LUSpiKgzeK from "/public/openmoji/1F7E6.svg";
import kQGBtuyPHf from "/public/openmoji/1F7E7.svg";
import IFfYSUfGSy from "/public/openmoji/1F7E8.svg";
import mNYoJrhdvB from "/public/openmoji/1F7E9.svg";
import sIxHTEVzdy from "/public/openmoji/1F7EA.svg";
import arrUmRlDqg from "/public/openmoji/1F7EB.svg";
import CggtQrROMJ from "/public/openmoji/1F7F0.svg";
import YtFhsHEhQP from "/public/openmoji/1F90C-1F3FB.svg";
import YsMnSMwtFg from "/public/openmoji/1F90C-1F3FC.svg";
import EuswoywnkD from "/public/openmoji/1F90C-1F3FD.svg";
import HKObONvzxR from "/public/openmoji/1F90C-1F3FE.svg";
import KMdIVsscgz from "/public/openmoji/1F90C-1F3FF.svg";
import bCmJMdiyBw from "/public/openmoji/1F90C.svg";
import ztqzzqsaEB from "/public/openmoji/1F90D.svg";
import FshZajIMWG from "/public/openmoji/1F90E.svg";
import NcYnIFEUXY from "/public/openmoji/1F90F-1F3FB.svg";
import NTeAfmKldp from "/public/openmoji/1F90F-1F3FC.svg";
import zElhijsLtR from "/public/openmoji/1F90F-1F3FD.svg";
import KmYHNpnoRw from "/public/openmoji/1F90F-1F3FE.svg";
import wCofFzfvvk from "/public/openmoji/1F90F-1F3FF.svg";
import nDhZBNlKBZ from "/public/openmoji/1F90F.svg";
import ORnUsPSfBV from "/public/openmoji/1F910.svg";
import CeSmysvTsC from "/public/openmoji/1F911.svg";
import frRfUzsrzU from "/public/openmoji/1F912.svg";
import LoYZATeteg from "/public/openmoji/1F913.svg";
import QXztHoZfBR from "/public/openmoji/1F914.svg";
import hzSoHMSYqS from "/public/openmoji/1F915.svg";
import PLaKXkXYuO from "/public/openmoji/1F916.svg";
import jIGJPndjQt from "/public/openmoji/1F917.svg";
import tsWbCqxJkh from "/public/openmoji/1F918-1F3FB.svg";
import SvxjRFbqjh from "/public/openmoji/1F918-1F3FC.svg";
import VaTaeOSZYW from "/public/openmoji/1F918-1F3FD.svg";
import zwIJVYuVEr from "/public/openmoji/1F918-1F3FE.svg";
import PqATtRLmeI from "/public/openmoji/1F918-1F3FF.svg";
import QcaRCIoPHa from "/public/openmoji/1F918.svg";
import UFeMuWyBSI from "/public/openmoji/1F919-1F3FB.svg";
import FGwxFbCVDa from "/public/openmoji/1F919-1F3FC.svg";
import ThKWkGRbTW from "/public/openmoji/1F919-1F3FD.svg";
import LgSyIvzdQA from "/public/openmoji/1F919-1F3FE.svg";
import tlIDyBldce from "/public/openmoji/1F919-1F3FF.svg";
import tpBVNCpyIL from "/public/openmoji/1F919.svg";
import JZnkblPwxj from "/public/openmoji/1F91A-1F3FB.svg";
import YyYxYYCUJt from "/public/openmoji/1F91A-1F3FC.svg";
import mCcwsQGkyD from "/public/openmoji/1F91A-1F3FD.svg";
import urtIWQbwGE from "/public/openmoji/1F91A-1F3FE.svg";
import cMSeuNmdUW from "/public/openmoji/1F91A-1F3FF.svg";
import aghEqrBAIu from "/public/openmoji/1F91A.svg";
import jLcWwKvdpP from "/public/openmoji/1F91B-1F3FB.svg";
import biLMVAOcdG from "/public/openmoji/1F91B-1F3FC.svg";
import DuimTGbjIj from "/public/openmoji/1F91B-1F3FD.svg";
import OzEkFcArwo from "/public/openmoji/1F91B-1F3FE.svg";
import WOzlMbrPik from "/public/openmoji/1F91B-1F3FF.svg";
import lPolNmiNNN from "/public/openmoji/1F91B.svg";
import wqIfvsdNvr from "/public/openmoji/1F91C-1F3FB.svg";
import unrmbAWJke from "/public/openmoji/1F91C-1F3FC.svg";
import UWOSVgWDNz from "/public/openmoji/1F91C-1F3FD.svg";
import ODpDQFESog from "/public/openmoji/1F91C-1F3FE.svg";
import uQwhZNqeUN from "/public/openmoji/1F91C-1F3FF.svg";
import srgmsscqby from "/public/openmoji/1F91C.svg";
import KLuXuPIhLy from "/public/openmoji/1F91D-1F3FB.svg";
import KFDiygKNje from "/public/openmoji/1F91D-1F3FC.svg";
import mpAyUwjQBm from "/public/openmoji/1F91D-1F3FD.svg";
import mxNLiLBTcS from "/public/openmoji/1F91D-1F3FE.svg";
import zXTxiQGFZx from "/public/openmoji/1F91D-1F3FF.svg";
import lLEyOqnyQB from "/public/openmoji/1F91D.svg";
import ZsLRuQaugO from "/public/openmoji/1F91E-1F3FB.svg";
import nBHmPFoKCg from "/public/openmoji/1F91E-1F3FC.svg";
import jWzjGHCFQt from "/public/openmoji/1F91E-1F3FD.svg";
import gBIauZHlow from "/public/openmoji/1F91E-1F3FE.svg";
import yZmxwkTUcD from "/public/openmoji/1F91E-1F3FF.svg";
import tJpokefLPc from "/public/openmoji/1F91E.svg";
import AMpCHQhmVN from "/public/openmoji/1F91F-1F3FB.svg";
import aDLLCadzeG from "/public/openmoji/1F91F-1F3FC.svg";
import OCimHGNlVH from "/public/openmoji/1F91F-1F3FD.svg";
import DmEKPWSEdp from "/public/openmoji/1F91F-1F3FE.svg";
import MbHTEuwZZL from "/public/openmoji/1F91F-1F3FF.svg";
import jnRmDKzuxx from "/public/openmoji/1F91F.svg";
import OnFtSoOlXo from "/public/openmoji/1F920.svg";
import txIKrdegzz from "/public/openmoji/1F921.svg";
import zefswlXfrP from "/public/openmoji/1F922.svg";
import CdVGHXLhOB from "/public/openmoji/1F923.svg";
import UKBornAHhW from "/public/openmoji/1F924.svg";
import JPjJSjVCIx from "/public/openmoji/1F925.svg";
import QyFFKAVnho from "/public/openmoji/1F926-1F3FB-200D-2640-FE0F.svg";
import scEUepXDFc from "/public/openmoji/1F926-1F3FB-200D-2642-FE0F.svg";
import WtMXseQHhD from "/public/openmoji/1F926-1F3FB.svg";
import RUdDLdGkjB from "/public/openmoji/1F926-1F3FC-200D-2640-FE0F.svg";
import aOWkTcKHHa from "/public/openmoji/1F926-1F3FC-200D-2642-FE0F.svg";
import VShtAdYGdz from "/public/openmoji/1F926-1F3FC.svg";
import MszegFIFaf from "/public/openmoji/1F926-1F3FD-200D-2640-FE0F.svg";
import AmTLadjHtF from "/public/openmoji/1F926-1F3FD-200D-2642-FE0F.svg";
import aSDHcvzVgk from "/public/openmoji/1F926-1F3FD.svg";
import XNpEPdROjl from "/public/openmoji/1F926-1F3FE-200D-2640-FE0F.svg";
import nhSHwfPCMp from "/public/openmoji/1F926-1F3FE-200D-2642-FE0F.svg";
import kuPcyotxUQ from "/public/openmoji/1F926-1F3FE.svg";
import wCyqsMLnyu from "/public/openmoji/1F926-1F3FF-200D-2640-FE0F.svg";
import zCPsjlKuTC from "/public/openmoji/1F926-1F3FF-200D-2642-FE0F.svg";
import gmLxcVWfaS from "/public/openmoji/1F926-1F3FF.svg";
import fQNzxaYqcy from "/public/openmoji/1F926-200D-2640-FE0F.svg";
import TbdZgWSfDX from "/public/openmoji/1F926-200D-2642-FE0F.svg";
import QigIaPzBvB from "/public/openmoji/1F926.svg";
import lIgLrZslxz from "/public/openmoji/1F927.svg";
import ThiTENdnmm from "/public/openmoji/1F928.svg";
import moRbjsLcyl from "/public/openmoji/1F929.svg";
import gLFqhLGWtP from "/public/openmoji/1F92A.svg";
import PpwSzfXRMP from "/public/openmoji/1F92B.svg";
import hbNNgKemvi from "/public/openmoji/1F92C.svg";
import WSmCUryCjj from "/public/openmoji/1F92D.svg";
import cckRcyTNde from "/public/openmoji/1F92E.svg";
import lZtyPojxyE from "/public/openmoji/1F92F.svg";
import KQhwWkMhwO from "/public/openmoji/1F930-1F3FB.svg";
import SDCnWrpUTA from "/public/openmoji/1F930-1F3FC.svg";
import xnvJvFQPVE from "/public/openmoji/1F930-1F3FD.svg";
import FaFJFwmpdE from "/public/openmoji/1F930-1F3FE.svg";
import CMljKRctJj from "/public/openmoji/1F930-1F3FF.svg";
import lRoeuIhWnM from "/public/openmoji/1F930.svg";
import enwQXSziHO from "/public/openmoji/1F931-1F3FB.svg";
import OlvyzHaXxp from "/public/openmoji/1F931-1F3FC.svg";
import fHTYRrDdns from "/public/openmoji/1F931-1F3FD.svg";
import TpqsPzyPyR from "/public/openmoji/1F931-1F3FE.svg";
import gMVhHBdjsN from "/public/openmoji/1F931-1F3FF.svg";
import WChRRqiNbT from "/public/openmoji/1F931.svg";
import gCyFCqiMoR from "/public/openmoji/1F932-1F3FB.svg";
import VZlAquuIIE from "/public/openmoji/1F932-1F3FC.svg";
import DOqfRXgLxF from "/public/openmoji/1F932-1F3FD.svg";
import VAskgTeWUi from "/public/openmoji/1F932-1F3FE.svg";
import BGDipRCuIY from "/public/openmoji/1F932-1F3FF.svg";
import PuTFTWuHsC from "/public/openmoji/1F932.svg";
import EapfiAZNnW from "/public/openmoji/1F933-1F3FB.svg";
import ezlNxNVffX from "/public/openmoji/1F933-1F3FC.svg";
import gbtptskeeM from "/public/openmoji/1F933-1F3FD.svg";
import IEyfpVDhEx from "/public/openmoji/1F933-1F3FE.svg";
import AHAjefZxol from "/public/openmoji/1F933-1F3FF.svg";
import UAAGmNqoxk from "/public/openmoji/1F933.svg";
import IwbncTQbwE from "/public/openmoji/1F934-1F3FB.svg";
import ZfjdlqfzKk from "/public/openmoji/1F934-1F3FC.svg";
import zEaoQfdsty from "/public/openmoji/1F934-1F3FD.svg";
import qUeRZoVrkz from "/public/openmoji/1F934-1F3FE.svg";
import FQCDWERBBT from "/public/openmoji/1F934-1F3FF.svg";
import RAnTpMoAoC from "/public/openmoji/1F934.svg";
import DhBglRBmoc from "/public/openmoji/1F935-1F3FB-200D-2640-FE0F.svg";
import LKxQqAEdZB from "/public/openmoji/1F935-1F3FB-200D-2642-FE0F.svg";
import fyBmWJJcAG from "/public/openmoji/1F935-1F3FB.svg";
import KWqoGIliea from "/public/openmoji/1F935-1F3FC-200D-2640-FE0F.svg";
import foKysuUaiS from "/public/openmoji/1F935-1F3FC-200D-2642-FE0F.svg";
import qddbvqMNbS from "/public/openmoji/1F935-1F3FC.svg";
import oeNERKaSBN from "/public/openmoji/1F935-1F3FD-200D-2640-FE0F.svg";
import bZMdeedYlw from "/public/openmoji/1F935-1F3FD-200D-2642-FE0F.svg";
import etyNHWvPpL from "/public/openmoji/1F935-1F3FD.svg";
import xAbczeaBNU from "/public/openmoji/1F935-1F3FE-200D-2640-FE0F.svg";
import WqKRfyhrDv from "/public/openmoji/1F935-1F3FE-200D-2642-FE0F.svg";
import TiUglBUrwd from "/public/openmoji/1F935-1F3FE.svg";
import hYYsTWwspN from "/public/openmoji/1F935-1F3FF-200D-2640-FE0F.svg";
import WBUGaBqGkA from "/public/openmoji/1F935-1F3FF-200D-2642-FE0F.svg";
import lClYuQENLa from "/public/openmoji/1F935-1F3FF.svg";
import wTLahcjtEF from "/public/openmoji/1F935-200D-2640-FE0F.svg";
import FJQcHWZLjS from "/public/openmoji/1F935-200D-2642-FE0F.svg";
import POaIJujrWT from "/public/openmoji/1F935.svg";
import NcSSzYnjeI from "/public/openmoji/1F936-1F3FB.svg";
import tAaAeatITM from "/public/openmoji/1F936-1F3FC.svg";
import WBJVjDPdpL from "/public/openmoji/1F936-1F3FD.svg";
import BznfIBUvQe from "/public/openmoji/1F936-1F3FE.svg";
import lljuwrIDdz from "/public/openmoji/1F936-1F3FF.svg";
import bCZnhZCxsJ from "/public/openmoji/1F936.svg";
import sgYzyUPhen from "/public/openmoji/1F937-1F3FB-200D-2640-FE0F.svg";
import kgxcUNOalX from "/public/openmoji/1F937-1F3FB-200D-2642-FE0F.svg";
import atHwQcnGap from "/public/openmoji/1F937-1F3FB.svg";
import YbKHLsKMuX from "/public/openmoji/1F937-1F3FC-200D-2640-FE0F.svg";
import CvXfbozfJD from "/public/openmoji/1F937-1F3FC-200D-2642-FE0F.svg";
import TpqNqERtSb from "/public/openmoji/1F937-1F3FC.svg";
import unoqeRleUG from "/public/openmoji/1F937-1F3FD-200D-2640-FE0F.svg";
import xmEjTnyzTD from "/public/openmoji/1F937-1F3FD-200D-2642-FE0F.svg";
import mkxMccWZpv from "/public/openmoji/1F937-1F3FD.svg";
import FwykfRxNeg from "/public/openmoji/1F937-1F3FE-200D-2640-FE0F.svg";
import avfPRHtOTk from "/public/openmoji/1F937-1F3FE-200D-2642-FE0F.svg";
import dBWBiUauZP from "/public/openmoji/1F937-1F3FE.svg";
import msLQAnfReh from "/public/openmoji/1F937-1F3FF-200D-2640-FE0F.svg";
import bXazgHncIe from "/public/openmoji/1F937-1F3FF-200D-2642-FE0F.svg";
import LOTSjXQpzX from "/public/openmoji/1F937-1F3FF.svg";
import YNpkQRvGXx from "/public/openmoji/1F937-200D-2640-FE0F.svg";
import xIywcwycRU from "/public/openmoji/1F937-200D-2642-FE0F.svg";
import WjYDLcDDik from "/public/openmoji/1F937.svg";
import cLNfATLPHJ from "/public/openmoji/1F938-1F3FB-200D-2640-FE0F.svg";
import xxrJEYsivI from "/public/openmoji/1F938-1F3FB-200D-2642-FE0F.svg";
import xiiPlwLGwm from "/public/openmoji/1F938-1F3FB.svg";
import fFoHDImIra from "/public/openmoji/1F938-1F3FC-200D-2640-FE0F.svg";
import woPqvfnICc from "/public/openmoji/1F938-1F3FC-200D-2642-FE0F.svg";
import wJneuetMnw from "/public/openmoji/1F938-1F3FC.svg";
import GJFaccGzVg from "/public/openmoji/1F938-1F3FD-200D-2640-FE0F.svg";
import tNPTLzLDZw from "/public/openmoji/1F938-1F3FD-200D-2642-FE0F.svg";
import lpYNAoMXkY from "/public/openmoji/1F938-1F3FD.svg";
import OldJakQUTk from "/public/openmoji/1F938-1F3FE-200D-2640-FE0F.svg";
import JsuzhBhthp from "/public/openmoji/1F938-1F3FE-200D-2642-FE0F.svg";
import sOyNbqivNy from "/public/openmoji/1F938-1F3FE.svg";
import WBjIUGaTai from "/public/openmoji/1F938-1F3FF-200D-2640-FE0F.svg";
import pQOJzBJtyE from "/public/openmoji/1F938-1F3FF-200D-2642-FE0F.svg";
import IWdaTuKtlL from "/public/openmoji/1F938-1F3FF.svg";
import SdGFBFSANT from "/public/openmoji/1F938-200D-2640-FE0F.svg";
import ANncrfSmxA from "/public/openmoji/1F938-200D-2642-FE0F.svg";
import FbchAEJhDX from "/public/openmoji/1F938.svg";
import XZILYWmDaB from "/public/openmoji/1F939-1F3FB-200D-2640-FE0F.svg";
import BIvhKdxcGv from "/public/openmoji/1F939-1F3FB-200D-2642-FE0F.svg";
import zfaCEABrFS from "/public/openmoji/1F939-1F3FB.svg";
import YWLABnuehk from "/public/openmoji/1F939-1F3FC-200D-2640-FE0F.svg";
import XQevABnpVi from "/public/openmoji/1F939-1F3FC-200D-2642-FE0F.svg";
import ErYpdgGWzw from "/public/openmoji/1F939-1F3FC.svg";
import KmveerqmCa from "/public/openmoji/1F939-1F3FD-200D-2640-FE0F.svg";
import WVNXVpoIYU from "/public/openmoji/1F939-1F3FD-200D-2642-FE0F.svg";
import jAAtUfAHaJ from "/public/openmoji/1F939-1F3FD.svg";
import BgHjyBKYLQ from "/public/openmoji/1F939-1F3FE-200D-2640-FE0F.svg";
import pZuuRpDZZs from "/public/openmoji/1F939-1F3FE-200D-2642-FE0F.svg";
import TrsajNHpvq from "/public/openmoji/1F939-1F3FE.svg";
import KoEILEdscA from "/public/openmoji/1F939-1F3FF-200D-2640-FE0F.svg";
import mlvTXdoOrw from "/public/openmoji/1F939-1F3FF-200D-2642-FE0F.svg";
import kJIZbxBstU from "/public/openmoji/1F939-1F3FF.svg";
import IFVGLrwxFf from "/public/openmoji/1F939-200D-2640-FE0F.svg";
import dOrAHHQiLZ from "/public/openmoji/1F939-200D-2642-FE0F.svg";
import TaMbSiwUGx from "/public/openmoji/1F939.svg";
import kNJxpakWJh from "/public/openmoji/1F93A.svg";
import JKSIvYTcLk from "/public/openmoji/1F93C-200D-2640-FE0F.svg";
import EXHhgWJAVS from "/public/openmoji/1F93C-200D-2642-FE0F.svg";
import fCcBJdnYtY from "/public/openmoji/1F93C.svg";
import gLCyUhikDN from "/public/openmoji/1F93D-1F3FB-200D-2640-FE0F.svg";
import GaVDYhlifn from "/public/openmoji/1F93D-1F3FB-200D-2642-FE0F.svg";
import wmdmPUvzut from "/public/openmoji/1F93D-1F3FB.svg";
import jPEqBBzgsV from "/public/openmoji/1F93D-1F3FC-200D-2640-FE0F.svg";
import bwWKeLElLh from "/public/openmoji/1F93D-1F3FC-200D-2642-FE0F.svg";
import lElJxpNlSE from "/public/openmoji/1F93D-1F3FC.svg";
import DxkxVzTBBm from "/public/openmoji/1F93D-1F3FD-200D-2640-FE0F.svg";
import udzkEMFbrR from "/public/openmoji/1F93D-1F3FD-200D-2642-FE0F.svg";
import orDqfFfaFp from "/public/openmoji/1F93D-1F3FD.svg";
import EfIvDFlRFZ from "/public/openmoji/1F93D-1F3FE-200D-2640-FE0F.svg";
import CBMdGMtdPQ from "/public/openmoji/1F93D-1F3FE-200D-2642-FE0F.svg";
import hkgrvITIHm from "/public/openmoji/1F93D-1F3FE.svg";
import RPFpXkmBqG from "/public/openmoji/1F93D-1F3FF-200D-2640-FE0F.svg";
import OhsPezZQVI from "/public/openmoji/1F93D-1F3FF-200D-2642-FE0F.svg";
import wEFLMOqflV from "/public/openmoji/1F93D-1F3FF.svg";
import gkjIjTpLys from "/public/openmoji/1F93D-200D-2640-FE0F.svg";
import tBwtJCFZGy from "/public/openmoji/1F93D-200D-2642-FE0F.svg";
import UmbljvpGCJ from "/public/openmoji/1F93D.svg";
import LqjBMCHLje from "/public/openmoji/1F93E-1F3FB-200D-2640-FE0F.svg";
import HUrIuyjxJm from "/public/openmoji/1F93E-1F3FB-200D-2642-FE0F.svg";
import FbRrYvHuCx from "/public/openmoji/1F93E-1F3FB.svg";
import oyKUzZUARQ from "/public/openmoji/1F93E-1F3FC-200D-2640-FE0F.svg";
import UaslNugeqA from "/public/openmoji/1F93E-1F3FC-200D-2642-FE0F.svg";
import bgYZxQvFaG from "/public/openmoji/1F93E-1F3FC.svg";
import QENDvUozfd from "/public/openmoji/1F93E-1F3FD-200D-2640-FE0F.svg";
import iwttDNvwZX from "/public/openmoji/1F93E-1F3FD-200D-2642-FE0F.svg";
import TXmuRfRkNa from "/public/openmoji/1F93E-1F3FD.svg";
import VyumbSvail from "/public/openmoji/1F93E-1F3FE-200D-2640-FE0F.svg";
import xhtVggLDVy from "/public/openmoji/1F93E-1F3FE-200D-2642-FE0F.svg";
import iaZDuemJAU from "/public/openmoji/1F93E-1F3FE.svg";
import wnanPkxmcg from "/public/openmoji/1F93E-1F3FF-200D-2640-FE0F.svg";
import PlEQFifWtg from "/public/openmoji/1F93E-1F3FF-200D-2642-FE0F.svg";
import qINXJOqKHK from "/public/openmoji/1F93E-1F3FF.svg";
import ixfAuoOixj from "/public/openmoji/1F93E-200D-2640-FE0F.svg";
import hNwlVFEMfw from "/public/openmoji/1F93E-200D-2642-FE0F.svg";
import SsUvfSqUmk from "/public/openmoji/1F93E.svg";
import tiLiHIHIas from "/public/openmoji/1F93F.svg";
import eqOcBdaNhQ from "/public/openmoji/1F940.svg";
import GTGDfYoiIS from "/public/openmoji/1F941.svg";
import MjridDYNwV from "/public/openmoji/1F942.svg";
import qUVjByqBrW from "/public/openmoji/1F943.svg";
import TCiXjcDhit from "/public/openmoji/1F944.svg";
import QHlgKXsBpq from "/public/openmoji/1F945.svg";
import pXIOfFWomT from "/public/openmoji/1F947.svg";
import EAWndRFYMS from "/public/openmoji/1F948.svg";
import tOxZNkPTEE from "/public/openmoji/1F949.svg";
import gLPtYMcfjI from "/public/openmoji/1F94A.svg";
import fbXmPMqTJJ from "/public/openmoji/1F94B.svg";
import RGjjMteRPK from "/public/openmoji/1F94C.svg";
import fNRhWAuLaC from "/public/openmoji/1F94D.svg";
import qFQpYryuWq from "/public/openmoji/1F94E.svg";
import vGjmXksmoS from "/public/openmoji/1F94F.svg";
import NhfnEpDJYH from "/public/openmoji/1F950.svg";
import NwvpeXowKs from "/public/openmoji/1F951.svg";
import vkKVUxZKeK from "/public/openmoji/1F952.svg";
import icdKkHlslR from "/public/openmoji/1F953.svg";
import eSUWlFgUPt from "/public/openmoji/1F954.svg";
import uiLnHizGHi from "/public/openmoji/1F955.svg";
import VNSfRojnMA from "/public/openmoji/1F956.svg";
import KAthffiTpe from "/public/openmoji/1F957.svg";
import VTkZcIqree from "/public/openmoji/1F958.svg";
import GWQnCLrmOV from "/public/openmoji/1F959.svg";
import BNYeCTlIHy from "/public/openmoji/1F95A.svg";
import UKcaiqSstP from "/public/openmoji/1F95B.svg";
import pznhBbggex from "/public/openmoji/1F95C.svg";
import QTSgAqbqMZ from "/public/openmoji/1F95D.svg";
import YoZWWksIuB from "/public/openmoji/1F95E.svg";
import KnHVAtqIKs from "/public/openmoji/1F95F.svg";
import nALaynIERp from "/public/openmoji/1F960.svg";
import eeiLwmdjhY from "/public/openmoji/1F961.svg";
import LlAojOBXqx from "/public/openmoji/1F962.svg";
import ZayVpwELjM from "/public/openmoji/1F963.svg";
import lNadenZBpL from "/public/openmoji/1F964.svg";
import qETfkPHCUQ from "/public/openmoji/1F965.svg";
import birGKDpqLn from "/public/openmoji/1F966.svg";
import aoCRHcLeMl from "/public/openmoji/1F967.svg";
import yPznQsEOTB from "/public/openmoji/1F968.svg";
import FUWfjutSBD from "/public/openmoji/1F969.svg";
import TzSbMFCPgr from "/public/openmoji/1F96A.svg";
import JWqUtkvxkc from "/public/openmoji/1F96B.svg";
import WqvvRzzlWw from "/public/openmoji/1F96C.svg";
import WzmzPvXqBV from "/public/openmoji/1F96D.svg";
import UVQRMWtFHT from "/public/openmoji/1F96E.svg";
import dnXKQGPyjz from "/public/openmoji/1F96F.svg";
import ivzzHxejrX from "/public/openmoji/1F970.svg";
import GdzBAGpdjf from "/public/openmoji/1F971.svg";
import AcetWsNcCR from "/public/openmoji/1F972.svg";
import xPSjVpixHP from "/public/openmoji/1F973.svg";
import VyRQLvQClD from "/public/openmoji/1F974.svg";
import PIQRpUVpwI from "/public/openmoji/1F975.svg";
import IWIbyrakCu from "/public/openmoji/1F976.svg";
import FMikMbGgRc from "/public/openmoji/1F977-1F3FB.svg";
import abzDPlgtYb from "/public/openmoji/1F977-1F3FC.svg";
import thLeEaqxLb from "/public/openmoji/1F977-1F3FD.svg";
import tjRrmoXjRH from "/public/openmoji/1F977-1F3FE.svg";
import epIrjGRFWK from "/public/openmoji/1F977-1F3FF.svg";
import AuzCXBWlFG from "/public/openmoji/1F977.svg";
import ttwiEuGacb from "/public/openmoji/1F978.svg";
import UajPIIptDE from "/public/openmoji/1F979.svg";
import FFiEOruMmH from "/public/openmoji/1F97A.svg";
import hWWqswrAri from "/public/openmoji/1F97B.svg";
import CFOckqnhNT from "/public/openmoji/1F97C.svg";
import jZNJvyrMoR from "/public/openmoji/1F97D.svg";
import kHLcdMPurC from "/public/openmoji/1F97E.svg";
import qJMirhYpwo from "/public/openmoji/1F97F.svg";
import WeIzsgYPVh from "/public/openmoji/1F980.svg";
import UOpjtyJbZc from "/public/openmoji/1F981.svg";
import VfJEOfwxAk from "/public/openmoji/1F982.svg";
import khxdwjrcBv from "/public/openmoji/1F983.svg";
import GuUtxnnuDY from "/public/openmoji/1F984.svg";
import XprniWdUYY from "/public/openmoji/1F985.svg";
import XiDyuUtZzG from "/public/openmoji/1F986.svg";
import NsYIGzJEFL from "/public/openmoji/1F987.svg";
import gWhtFeZtja from "/public/openmoji/1F988.svg";
import OBXaNNQfYF from "/public/openmoji/1F989.svg";
import eleWZflNNN from "/public/openmoji/1F98A.svg";
import WemniBSsKR from "/public/openmoji/1F98B.svg";
import QGSjtLIFkR from "/public/openmoji/1F98C.svg";
import GekMKcyuDs from "/public/openmoji/1F98D.svg";
import ibnoMJPRuf from "/public/openmoji/1F98E.svg";
import uXuosnMFhB from "/public/openmoji/1F98F.svg";
import iffTyYlsAY from "/public/openmoji/1F990.svg";
import jqPWrrpEQa from "/public/openmoji/1F991.svg";
import lzGQqdOrwq from "/public/openmoji/1F992.svg";
import cNMDkMNPRY from "/public/openmoji/1F993.svg";
import AfJUdfCAup from "/public/openmoji/1F994.svg";
import rMaFqpeeXd from "/public/openmoji/1F995.svg";
import enjjnESrgz from "/public/openmoji/1F996.svg";
import OqxacVKAmZ from "/public/openmoji/1F997.svg";
import epPfcANYGa from "/public/openmoji/1F998.svg";
import HhCpMhPFSO from "/public/openmoji/1F999.svg";
import UCYNLhrbAJ from "/public/openmoji/1F99A.svg";
import fEIvqGHvCa from "/public/openmoji/1F99B.svg";
import fHRHglChvs from "/public/openmoji/1F99C.svg";
import MakkfsnmlC from "/public/openmoji/1F99D.svg";
import TELORAutnN from "/public/openmoji/1F99E.svg";
import WszLvADjhp from "/public/openmoji/1F99F.svg";
import dBWlLCZXze from "/public/openmoji/1F9A0.svg";
import spmHwmqoIE from "/public/openmoji/1F9A1.svg";
import SYBwilebTC from "/public/openmoji/1F9A2.svg";
import uuKcwguzSN from "/public/openmoji/1F9A3.svg";
import ISKLfWMweb from "/public/openmoji/1F9A4.svg";
import jMUDwVtfqW from "/public/openmoji/1F9A5.svg";
import gVHtjpsgcP from "/public/openmoji/1F9A6.svg";
import EoDCfZSLGx from "/public/openmoji/1F9A7.svg";
import aqCtnkAyei from "/public/openmoji/1F9A8.svg";
import ybsjGgobYl from "/public/openmoji/1F9A9.svg";
import jcTOlDXxki from "/public/openmoji/1F9AA.svg";
import rMlxxMfESn from "/public/openmoji/1F9AB.svg";
import qKOZQWgLuG from "/public/openmoji/1F9AC.svg";
import ltSlzgXCxq from "/public/openmoji/1F9AD.svg";
import jPAtFrSIZI from "/public/openmoji/1F9AE.svg";
import SyefYdtUiS from "/public/openmoji/1F9AF.svg";
import EighvSAnyI from "/public/openmoji/1F9B0.svg";
import OpqJnyCqay from "/public/openmoji/1F9B1.svg";
import vwtlpuzFIU from "/public/openmoji/1F9B2.svg";
import eYBsZwExBc from "/public/openmoji/1F9B3.svg";
import zZToCjCRjq from "/public/openmoji/1F9B4.svg";
import xGKJBlYQYp from "/public/openmoji/1F9B5-1F3FB.svg";
import IjkGvteuAC from "/public/openmoji/1F9B5-1F3FC.svg";
import rrulDYghpq from "/public/openmoji/1F9B5-1F3FD.svg";
import RGBPgUxZvX from "/public/openmoji/1F9B5-1F3FE.svg";
import olEyARTNgX from "/public/openmoji/1F9B5-1F3FF.svg";
import XOaUlkpRbM from "/public/openmoji/1F9B5.svg";
import zGlxZbyneo from "/public/openmoji/1F9B6-1F3FB.svg";
import iOcLMsUdRR from "/public/openmoji/1F9B6-1F3FC.svg";
import ZHdagzXkZT from "/public/openmoji/1F9B6-1F3FD.svg";
import GybbkIICOF from "/public/openmoji/1F9B6-1F3FE.svg";
import EyxkRNRaoW from "/public/openmoji/1F9B6-1F3FF.svg";
import FaIdUPDTAD from "/public/openmoji/1F9B6.svg";
import tJpWyysLtA from "/public/openmoji/1F9B7.svg";
import bqtVZPlsCn from "/public/openmoji/1F9B8-1F3FB-200D-2640-FE0F.svg";
import BXYLiNFehR from "/public/openmoji/1F9B8-1F3FB-200D-2642-FE0F.svg";
import IqgSFqODAh from "/public/openmoji/1F9B8-1F3FB.svg";
import UHTFwmnksV from "/public/openmoji/1F9B8-1F3FC-200D-2640-FE0F.svg";
import UAnyjFfSZA from "/public/openmoji/1F9B8-1F3FC-200D-2642-FE0F.svg";
import zAAyymJiYi from "/public/openmoji/1F9B8-1F3FC.svg";
import HtkRqrhabN from "/public/openmoji/1F9B8-1F3FD-200D-2640-FE0F.svg";
import XcGUpOoUAZ from "/public/openmoji/1F9B8-1F3FD-200D-2642-FE0F.svg";
import YxQuEqQcvL from "/public/openmoji/1F9B8-1F3FD.svg";
import IZZRwqBTQu from "/public/openmoji/1F9B8-1F3FE-200D-2640-FE0F.svg";
import tXEVnPMSro from "/public/openmoji/1F9B8-1F3FE-200D-2642-FE0F.svg";
import GdzLSULkPm from "/public/openmoji/1F9B8-1F3FE.svg";
import VxXKxCjFIc from "/public/openmoji/1F9B8-1F3FF-200D-2640-FE0F.svg";
import RHkZsxcjzK from "/public/openmoji/1F9B8-1F3FF-200D-2642-FE0F.svg";
import WbRJTyawQx from "/public/openmoji/1F9B8-1F3FF.svg";
import NDPkwOYXss from "/public/openmoji/1F9B8-200D-2640-FE0F.svg";
import djNEXvdyvR from "/public/openmoji/1F9B8-200D-2642-FE0F.svg";
import lIYTDevMEA from "/public/openmoji/1F9B8.svg";
import lbiAUHQdTv from "/public/openmoji/1F9B9-1F3FB-200D-2640-FE0F.svg";
import SIjsuNmiiH from "/public/openmoji/1F9B9-1F3FB-200D-2642-FE0F.svg";
import pIYVUNSsWy from "/public/openmoji/1F9B9-1F3FB.svg";
import bgoXekmAqQ from "/public/openmoji/1F9B9-1F3FC-200D-2640-FE0F.svg";
import uJEdAZyHnK from "/public/openmoji/1F9B9-1F3FC-200D-2642-FE0F.svg";
import rmzFpJQXkQ from "/public/openmoji/1F9B9-1F3FC.svg";
import IDzbrVvcJs from "/public/openmoji/1F9B9-1F3FD-200D-2640-FE0F.svg";
import uIpUsuKzae from "/public/openmoji/1F9B9-1F3FD-200D-2642-FE0F.svg";
import YkdXtKbjVf from "/public/openmoji/1F9B9-1F3FD.svg";
import TpjkWnVoba from "/public/openmoji/1F9B9-1F3FE-200D-2640-FE0F.svg";
import SycZsXTjMb from "/public/openmoji/1F9B9-1F3FE-200D-2642-FE0F.svg";
import PkZGfPEESY from "/public/openmoji/1F9B9-1F3FE.svg";
import ODhrIQBIfM from "/public/openmoji/1F9B9-1F3FF-200D-2640-FE0F.svg";
import iEdDwyTMEv from "/public/openmoji/1F9B9-1F3FF-200D-2642-FE0F.svg";
import PDxxzHcsNu from "/public/openmoji/1F9B9-1F3FF.svg";
import TdFgInkLIH from "/public/openmoji/1F9B9-200D-2640-FE0F.svg";
import HeFCKQSCDq from "/public/openmoji/1F9B9-200D-2642-FE0F.svg";
import oOUkdTgdXk from "/public/openmoji/1F9B9.svg";
import mbQOiCixET from "/public/openmoji/1F9BA.svg";
import ROQhFKGgIv from "/public/openmoji/1F9BB-1F3FB.svg";
import gJgMRUsLZt from "/public/openmoji/1F9BB-1F3FC.svg";
import UuWBcwMEpn from "/public/openmoji/1F9BB-1F3FD.svg";
import AtjIcnSUio from "/public/openmoji/1F9BB-1F3FE.svg";
import FINwEBnYbr from "/public/openmoji/1F9BB-1F3FF.svg";
import ZvvRKNoBJl from "/public/openmoji/1F9BB.svg";
import uPPpbfhlzo from "/public/openmoji/1F9BC.svg";
import VttWvhQhAS from "/public/openmoji/1F9BD.svg";
import dcWakrvPgL from "/public/openmoji/1F9BE.svg";
import QcTjxSSRkM from "/public/openmoji/1F9BF.svg";
import xYVxasWIxx from "/public/openmoji/1F9C0.svg";
import fLxfjpYeMe from "/public/openmoji/1F9C1.svg";
import NskuzaPwJf from "/public/openmoji/1F9C2.svg";
import VTbcxOCJBY from "/public/openmoji/1F9C3.svg";
import XrsoYvZNUF from "/public/openmoji/1F9C4.svg";
import NXrGBjFZAi from "/public/openmoji/1F9C5.svg";
import sGkeUXkCkl from "/public/openmoji/1F9C6.svg";
import ERLVlpwtxU from "/public/openmoji/1F9C7.svg";
import vOQLrMshaF from "/public/openmoji/1F9C8.svg";
import lZirtFaFKx from "/public/openmoji/1F9C9.svg";
import jgfwolrqsg from "/public/openmoji/1F9CA.svg";
import mTQojRuJvf from "/public/openmoji/1F9CB.svg";
import hegNXmBcJc from "/public/openmoji/1F9CC.svg";
import OkfOxiWRDS from "/public/openmoji/1F9CD-1F3FB-200D-2640-FE0F.svg";
import XPvJqabCCo from "/public/openmoji/1F9CD-1F3FB-200D-2642-FE0F.svg";
import dBbzplHtPF from "/public/openmoji/1F9CD-1F3FB.svg";
import JpjCmbtnCP from "/public/openmoji/1F9CD-1F3FC-200D-2640-FE0F.svg";
import FRLIolBDhB from "/public/openmoji/1F9CD-1F3FC-200D-2642-FE0F.svg";
import MBRDmjmRQC from "/public/openmoji/1F9CD-1F3FC.svg";
import eEfofITlpA from "/public/openmoji/1F9CD-1F3FD-200D-2640-FE0F.svg";
import qXSTswTcJJ from "/public/openmoji/1F9CD-1F3FD-200D-2642-FE0F.svg";
import tMmWPqbxQs from "/public/openmoji/1F9CD-1F3FD.svg";
import zKGuduqnnj from "/public/openmoji/1F9CD-1F3FE-200D-2640-FE0F.svg";
import ESoWTExrTZ from "/public/openmoji/1F9CD-1F3FE-200D-2642-FE0F.svg";
import SOpKCEPLsR from "/public/openmoji/1F9CD-1F3FE.svg";
import eRjsJYHXXU from "/public/openmoji/1F9CD-1F3FF-200D-2640-FE0F.svg";
import vsEvSLsncl from "/public/openmoji/1F9CD-1F3FF-200D-2642-FE0F.svg";
import PiqHClREiQ from "/public/openmoji/1F9CD-1F3FF.svg";
import GuUKjTnuNl from "/public/openmoji/1F9CD-200D-2640-FE0F.svg";
import wNaNuGjJda from "/public/openmoji/1F9CD-200D-2642-FE0F.svg";
import bODeckVgbC from "/public/openmoji/1F9CD.svg";
import WjAxwnhATB from "/public/openmoji/1F9CE-1F3FB-200D-2640-FE0F.svg";
import yvyRTDOSMd from "/public/openmoji/1F9CE-1F3FB-200D-2642-FE0F.svg";
import HLlIxgNALg from "/public/openmoji/1F9CE-1F3FB.svg";
import YeOsueXRRK from "/public/openmoji/1F9CE-1F3FC-200D-2640-FE0F.svg";
import UTggWbDAqy from "/public/openmoji/1F9CE-1F3FC-200D-2642-FE0F.svg";
import yCEvIuAmMO from "/public/openmoji/1F9CE-1F3FC.svg";
import VZgAfhiUJW from "/public/openmoji/1F9CE-1F3FD-200D-2640-FE0F.svg";
import lJLHuKSQSB from "/public/openmoji/1F9CE-1F3FD-200D-2642-FE0F.svg";
import xqXtLkBbhF from "/public/openmoji/1F9CE-1F3FD.svg";
import IjuxUZbjWj from "/public/openmoji/1F9CE-1F3FE-200D-2640-FE0F.svg";
import ixVvjzaBbl from "/public/openmoji/1F9CE-1F3FE-200D-2642-FE0F.svg";
import ReLhLskgEr from "/public/openmoji/1F9CE-1F3FE.svg";
import oSJbtzyorE from "/public/openmoji/1F9CE-1F3FF-200D-2640-FE0F.svg";
import oIEvXtzuds from "/public/openmoji/1F9CE-1F3FF-200D-2642-FE0F.svg";
import ygxVYzAtVu from "/public/openmoji/1F9CE-1F3FF.svg";
import cdpWQiTkDu from "/public/openmoji/1F9CE-200D-2640-FE0F.svg";
import egnLGriddk from "/public/openmoji/1F9CE-200D-2642-FE0F.svg";
import eEwzzFKlvM from "/public/openmoji/1F9CE.svg";
import ovWVTSxiOo from "/public/openmoji/1F9CF-1F3FB-200D-2640-FE0F.svg";
import KQfWjWKiGo from "/public/openmoji/1F9CF-1F3FB-200D-2642-FE0F.svg";
import jfHnxvbrQi from "/public/openmoji/1F9CF-1F3FB.svg";
import DklFhNyBar from "/public/openmoji/1F9CF-1F3FC-200D-2640-FE0F.svg";
import NJVziEWsWe from "/public/openmoji/1F9CF-1F3FC-200D-2642-FE0F.svg";
import dGrIetarxm from "/public/openmoji/1F9CF-1F3FC.svg";
import yqGnBHxMUJ from "/public/openmoji/1F9CF-1F3FD-200D-2640-FE0F.svg";
import rUSxWIOkfE from "/public/openmoji/1F9CF-1F3FD-200D-2642-FE0F.svg";
import ASKtzfBcdY from "/public/openmoji/1F9CF-1F3FD.svg";
import kdBLwcoFJT from "/public/openmoji/1F9CF-1F3FE-200D-2640-FE0F.svg";
import AZbKQNYIqX from "/public/openmoji/1F9CF-1F3FE-200D-2642-FE0F.svg";
import LAodtGwPkN from "/public/openmoji/1F9CF-1F3FE.svg";
import aKhZRZFqiC from "/public/openmoji/1F9CF-1F3FF-200D-2640-FE0F.svg";
import feZqNAsvTZ from "/public/openmoji/1F9CF-1F3FF-200D-2642-FE0F.svg";
import NbtiGywwLs from "/public/openmoji/1F9CF-1F3FF.svg";
import SmMQJTtygV from "/public/openmoji/1F9CF-200D-2640-FE0F.svg";
import eegnbylROE from "/public/openmoji/1F9CF-200D-2642-FE0F.svg";
import UaBXncgNwO from "/public/openmoji/1F9CF.svg";
import vwsLzcsYSn from "/public/openmoji/1F9D0.svg";
import khIsuaHzDS from "/public/openmoji/1F9D1-1F3FB-200D-1F33E.svg";
import oWQkPVHKtq from "/public/openmoji/1F9D1-1F3FB-200D-1F373.svg";
import YGKnShLRZy from "/public/openmoji/1F9D1-1F3FB-200D-1F37C.svg";
import TiihDFpOVV from "/public/openmoji/1F9D1-1F3FB-200D-1F384.svg";
import qWlCLsBxbq from "/public/openmoji/1F9D1-1F3FB-200D-1F393.svg";
import yvnOgTLIWg from "/public/openmoji/1F9D1-1F3FB-200D-1F3A4.svg";
import BesNgLxyfD from "/public/openmoji/1F9D1-1F3FB-200D-1F3A8.svg";
import OYwfXjVoBc from "/public/openmoji/1F9D1-1F3FB-200D-1F3EB.svg";
import IgbqkafjWL from "/public/openmoji/1F9D1-1F3FB-200D-1F3ED.svg";
import SSwnVuZCTM from "/public/openmoji/1F9D1-1F3FB-200D-1F4BB.svg";
import FgfYwGgRLB from "/public/openmoji/1F9D1-1F3FB-200D-1F4BC.svg";
import LaDtGdkYgX from "/public/openmoji/1F9D1-1F3FB-200D-1F527.svg";
import eJFPaypISh from "/public/openmoji/1F9D1-1F3FB-200D-1F52C.svg";
import wdGNfNZBiS from "/public/openmoji/1F9D1-1F3FB-200D-1F680.svg";
import tqPjZXIRQJ from "/public/openmoji/1F9D1-1F3FB-200D-1F692.svg";
import NjwLcYWCuN from "/public/openmoji/1F9D1-1F3FB-200D-1F91D-200D-1F9D1-1F3FB.svg";
import zpHTQlLeVd from "/public/openmoji/1F9D1-1F3FB-200D-1F91D-200D-1F9D1-1F3FC.svg";
import zYoNdvuVUK from "/public/openmoji/1F9D1-1F3FB-200D-1F91D-200D-1F9D1-1F3FD.svg";
import qESZaVIkLa from "/public/openmoji/1F9D1-1F3FB-200D-1F91D-200D-1F9D1-1F3FE.svg";
import cpItGCUPCK from "/public/openmoji/1F9D1-1F3FB-200D-1F91D-200D-1F9D1-1F3FF.svg";
import sEkSRjooYd from "/public/openmoji/1F9D1-1F3FB-200D-1F9AF.svg";
import OOqOCTBvpm from "/public/openmoji/1F9D1-1F3FB-200D-1F9B0.svg";
import uFhyMEyaHl from "/public/openmoji/1F9D1-1F3FB-200D-1F9B1.svg";
import XTTrzgciDv from "/public/openmoji/1F9D1-1F3FB-200D-1F9B2.svg";
import AhUbPVKhda from "/public/openmoji/1F9D1-1F3FB-200D-1F9B3.svg";
import yBnGQyruYK from "/public/openmoji/1F9D1-1F3FB-200D-1F9BC.svg";
import VOAYUAvxjo from "/public/openmoji/1F9D1-1F3FB-200D-1F9BD.svg";
import BgKguZPncc from "/public/openmoji/1F9D1-1F3FB-200D-2695-FE0F.svg";
import EBjQTYQPyH from "/public/openmoji/1F9D1-1F3FB-200D-2696-FE0F.svg";
import qsCtuSnQvk from "/public/openmoji/1F9D1-1F3FB-200D-2708-FE0F.svg";
import XcnCuErkFS from "/public/openmoji/1F9D1-1F3FB-200D-2764-FE0F-200D-1F48B-200D-1F9D1-1F3FC.svg";
import eLAZkTraKj from "/public/openmoji/1F9D1-1F3FB-200D-2764-FE0F-200D-1F48B-200D-1F9D1-1F3FD.svg";
import TqDIUJyKjb from "/public/openmoji/1F9D1-1F3FB-200D-2764-FE0F-200D-1F48B-200D-1F9D1-1F3FE.svg";
import KHzTRczMtG from "/public/openmoji/1F9D1-1F3FB-200D-2764-FE0F-200D-1F48B-200D-1F9D1-1F3FF.svg";
import fGmPgSpQkk from "/public/openmoji/1F9D1-1F3FB-200D-2764-FE0F-200D-1F9D1-1F3FC.svg";
import PbVobDSMFJ from "/public/openmoji/1F9D1-1F3FB-200D-2764-FE0F-200D-1F9D1-1F3FD.svg";
import mLNEaRsNUL from "/public/openmoji/1F9D1-1F3FB-200D-2764-FE0F-200D-1F9D1-1F3FE.svg";
import SMbomBSgQA from "/public/openmoji/1F9D1-1F3FB-200D-2764-FE0F-200D-1F9D1-1F3FF.svg";
import gGcVTWxCmn from "/public/openmoji/1F9D1-1F3FB.svg";
import zyPHDmxwBS from "/public/openmoji/1F9D1-1F3FC-200D-1F33E.svg";
import jpBgwwdlgf from "/public/openmoji/1F9D1-1F3FC-200D-1F373.svg";
import rGacoMonri from "/public/openmoji/1F9D1-1F3FC-200D-1F37C.svg";
import AhtTrxIzjV from "/public/openmoji/1F9D1-1F3FC-200D-1F384.svg";
import LEdkAEpGjn from "/public/openmoji/1F9D1-1F3FC-200D-1F393.svg";
import KJolWLVoYN from "/public/openmoji/1F9D1-1F3FC-200D-1F3A4.svg";
import SxFNDYQoZq from "/public/openmoji/1F9D1-1F3FC-200D-1F3A8.svg";
import wsttnmmLUE from "/public/openmoji/1F9D1-1F3FC-200D-1F3EB.svg";
import BzkecYhSof from "/public/openmoji/1F9D1-1F3FC-200D-1F3ED.svg";
import HrRRtuXhbR from "/public/openmoji/1F9D1-1F3FC-200D-1F4BB.svg";
import VZbxSlDNYp from "/public/openmoji/1F9D1-1F3FC-200D-1F4BC.svg";
import tTGYYdQHyL from "/public/openmoji/1F9D1-1F3FC-200D-1F527.svg";
import LwEcSsAuHi from "/public/openmoji/1F9D1-1F3FC-200D-1F52C.svg";
import ggxlZOatEe from "/public/openmoji/1F9D1-1F3FC-200D-1F680.svg";
import gyXKjplctd from "/public/openmoji/1F9D1-1F3FC-200D-1F692.svg";
import FNDaFWNixA from "/public/openmoji/1F9D1-1F3FC-200D-1F91D-200D-1F9D1-1F3FB.svg";
import tlFtvxoToN from "/public/openmoji/1F9D1-1F3FC-200D-1F91D-200D-1F9D1-1F3FC.svg";
import HoCnfmOEqq from "/public/openmoji/1F9D1-1F3FC-200D-1F91D-200D-1F9D1-1F3FD.svg";
import GVxogFxskx from "/public/openmoji/1F9D1-1F3FC-200D-1F91D-200D-1F9D1-1F3FE.svg";
import uSWmzfCRAv from "/public/openmoji/1F9D1-1F3FC-200D-1F91D-200D-1F9D1-1F3FF.svg";
import veCeWrCmSE from "/public/openmoji/1F9D1-1F3FC-200D-1F9AF.svg";
import HxZRJxOznq from "/public/openmoji/1F9D1-1F3FC-200D-1F9B0.svg";
import qLPyiXveXg from "/public/openmoji/1F9D1-1F3FC-200D-1F9B1.svg";
import esBtDvvajT from "/public/openmoji/1F9D1-1F3FC-200D-1F9B2.svg";
import HlDSDXzPqp from "/public/openmoji/1F9D1-1F3FC-200D-1F9B3.svg";
import vwDbVnnqDD from "/public/openmoji/1F9D1-1F3FC-200D-1F9BC.svg";
import veWDuDJlvb from "/public/openmoji/1F9D1-1F3FC-200D-1F9BD.svg";
import DsuoubtwmS from "/public/openmoji/1F9D1-1F3FC-200D-2695-FE0F.svg";
import QQoidUzFLX from "/public/openmoji/1F9D1-1F3FC-200D-2696-FE0F.svg";
import XehfEagbhe from "/public/openmoji/1F9D1-1F3FC-200D-2708-FE0F.svg";
import kZoKXdUdWX from "/public/openmoji/1F9D1-1F3FC-200D-2764-FE0F-200D-1F48B-200D-1F9D1-1F3FB.svg";
import pmSCriDrKx from "/public/openmoji/1F9D1-1F3FC-200D-2764-FE0F-200D-1F48B-200D-1F9D1-1F3FD.svg";
import AfHQSfAjWF from "/public/openmoji/1F9D1-1F3FC-200D-2764-FE0F-200D-1F48B-200D-1F9D1-1F3FE.svg";
import iWUEFCJaul from "/public/openmoji/1F9D1-1F3FC-200D-2764-FE0F-200D-1F48B-200D-1F9D1-1F3FF.svg";
import pAODNnansf from "/public/openmoji/1F9D1-1F3FC-200D-2764-FE0F-200D-1F9D1-1F3FB.svg";
import CXIRgmoDie from "/public/openmoji/1F9D1-1F3FC-200D-2764-FE0F-200D-1F9D1-1F3FD.svg";
import NghFhwHekf from "/public/openmoji/1F9D1-1F3FC-200D-2764-FE0F-200D-1F9D1-1F3FE.svg";
import GbjUOvOsqr from "/public/openmoji/1F9D1-1F3FC-200D-2764-FE0F-200D-1F9D1-1F3FF.svg";
import bUoOovKiiU from "/public/openmoji/1F9D1-1F3FC.svg";
import vvAMDQyDFH from "/public/openmoji/1F9D1-1F3FD-200D-1F33E.svg";
import ykVCFOAoyz from "/public/openmoji/1F9D1-1F3FD-200D-1F373.svg";
import idydZMqYwl from "/public/openmoji/1F9D1-1F3FD-200D-1F37C.svg";
import tePEflNoKP from "/public/openmoji/1F9D1-1F3FD-200D-1F384.svg";
import oHJPtDpuUD from "/public/openmoji/1F9D1-1F3FD-200D-1F393.svg";
import bfLZdmLtAg from "/public/openmoji/1F9D1-1F3FD-200D-1F3A4.svg";
import DbNAWhXmse from "/public/openmoji/1F9D1-1F3FD-200D-1F3A8.svg";
import HJlCfuBUWq from "/public/openmoji/1F9D1-1F3FD-200D-1F3EB.svg";
import hMkMGyBcqf from "/public/openmoji/1F9D1-1F3FD-200D-1F3ED.svg";
import PSoEQSYVpB from "/public/openmoji/1F9D1-1F3FD-200D-1F4BB.svg";
import vfGpVKNXEK from "/public/openmoji/1F9D1-1F3FD-200D-1F4BC.svg";
import QvSTaEFXRj from "/public/openmoji/1F9D1-1F3FD-200D-1F527.svg";
import rTAvGasGpp from "/public/openmoji/1F9D1-1F3FD-200D-1F52C.svg";
import VurEUNwadz from "/public/openmoji/1F9D1-1F3FD-200D-1F680.svg";
import NbbwqBXNUP from "/public/openmoji/1F9D1-1F3FD-200D-1F692.svg";
import DpDeJZWqBH from "/public/openmoji/1F9D1-1F3FD-200D-1F91D-200D-1F9D1-1F3FB.svg";
import pjradwvxFr from "/public/openmoji/1F9D1-1F3FD-200D-1F91D-200D-1F9D1-1F3FC.svg";
import MvoBtoTDxt from "/public/openmoji/1F9D1-1F3FD-200D-1F91D-200D-1F9D1-1F3FD.svg";
import swWjtlQnXj from "/public/openmoji/1F9D1-1F3FD-200D-1F91D-200D-1F9D1-1F3FE.svg";
import oREbprOWLL from "/public/openmoji/1F9D1-1F3FD-200D-1F91D-200D-1F9D1-1F3FF.svg";
import xoIqFdYGCG from "/public/openmoji/1F9D1-1F3FD-200D-1F9AF.svg";
import ArHpLNyYce from "/public/openmoji/1F9D1-1F3FD-200D-1F9B0.svg";
import QkUjfeTEbe from "/public/openmoji/1F9D1-1F3FD-200D-1F9B1.svg";
import UFRGuFWsQr from "/public/openmoji/1F9D1-1F3FD-200D-1F9B2.svg";
import apmxUeFoyf from "/public/openmoji/1F9D1-1F3FD-200D-1F9B3.svg";
import LZxWjswMGN from "/public/openmoji/1F9D1-1F3FD-200D-1F9BC.svg";
import NKoczOpEAc from "/public/openmoji/1F9D1-1F3FD-200D-1F9BD.svg";
import UNPckHXMeb from "/public/openmoji/1F9D1-1F3FD-200D-2695-FE0F.svg";
import oSvjfCHUpl from "/public/openmoji/1F9D1-1F3FD-200D-2696-FE0F.svg";
import NRotfkjKcp from "/public/openmoji/1F9D1-1F3FD-200D-2708-FE0F.svg";
import RZcMJyzzHo from "/public/openmoji/1F9D1-1F3FD-200D-2764-FE0F-200D-1F48B-200D-1F9D1-1F3FB.svg";
import fpQKPbryWJ from "/public/openmoji/1F9D1-1F3FD-200D-2764-FE0F-200D-1F48B-200D-1F9D1-1F3FC.svg";
import uYYqqvHkWO from "/public/openmoji/1F9D1-1F3FD-200D-2764-FE0F-200D-1F48B-200D-1F9D1-1F3FE.svg";
import tfwcRNfspb from "/public/openmoji/1F9D1-1F3FD-200D-2764-FE0F-200D-1F48B-200D-1F9D1-1F3FF.svg";
import RvSIHucwmI from "/public/openmoji/1F9D1-1F3FD-200D-2764-FE0F-200D-1F9D1-1F3FB.svg";
import OtkUtdoIJY from "/public/openmoji/1F9D1-1F3FD-200D-2764-FE0F-200D-1F9D1-1F3FC.svg";
import jaMNxzZrUm from "/public/openmoji/1F9D1-1F3FD-200D-2764-FE0F-200D-1F9D1-1F3FE.svg";
import ApygJxWRxV from "/public/openmoji/1F9D1-1F3FD-200D-2764-FE0F-200D-1F9D1-1F3FF.svg";
import BqdXnCHqCx from "/public/openmoji/1F9D1-1F3FD.svg";
import PGdadbcsim from "/public/openmoji/1F9D1-1F3FE-200D-1F33E.svg";
import yiovBbGFbN from "/public/openmoji/1F9D1-1F3FE-200D-1F373.svg";
import enHoozbJzl from "/public/openmoji/1F9D1-1F3FE-200D-1F37C.svg";
import KOiIkKwqTS from "/public/openmoji/1F9D1-1F3FE-200D-1F384.svg";
import lOFmpyMMeE from "/public/openmoji/1F9D1-1F3FE-200D-1F393.svg";
import zQDpoZoQuY from "/public/openmoji/1F9D1-1F3FE-200D-1F3A4.svg";
import aggJKulufp from "/public/openmoji/1F9D1-1F3FE-200D-1F3A8.svg";
import SelEBvrbdP from "/public/openmoji/1F9D1-1F3FE-200D-1F3EB.svg";
import MdqWviucpn from "/public/openmoji/1F9D1-1F3FE-200D-1F3ED.svg";
import txqtCitiBh from "/public/openmoji/1F9D1-1F3FE-200D-1F4BB.svg";
import ROQSnswHei from "/public/openmoji/1F9D1-1F3FE-200D-1F4BC.svg";
import YFMTHXFgKZ from "/public/openmoji/1F9D1-1F3FE-200D-1F527.svg";
import gYvapSKXNc from "/public/openmoji/1F9D1-1F3FE-200D-1F52C.svg";
import lPpNimwEIR from "/public/openmoji/1F9D1-1F3FE-200D-1F680.svg";
import yASmiOdJmj from "/public/openmoji/1F9D1-1F3FE-200D-1F692.svg";
import WOsOyGZcLp from "/public/openmoji/1F9D1-1F3FE-200D-1F91D-200D-1F9D1-1F3FB.svg";
import HFIOmtkoFI from "/public/openmoji/1F9D1-1F3FE-200D-1F91D-200D-1F9D1-1F3FC.svg";
import HUqximQHez from "/public/openmoji/1F9D1-1F3FE-200D-1F91D-200D-1F9D1-1F3FD.svg";
import sjxIfaoaAY from "/public/openmoji/1F9D1-1F3FE-200D-1F91D-200D-1F9D1-1F3FE.svg";
import wVSQXWYKMe from "/public/openmoji/1F9D1-1F3FE-200D-1F91D-200D-1F9D1-1F3FF.svg";
import POvJdIXTrt from "/public/openmoji/1F9D1-1F3FE-200D-1F9AF.svg";
import OQLDkewadz from "/public/openmoji/1F9D1-1F3FE-200D-1F9B0.svg";
import UOZNBcRTCj from "/public/openmoji/1F9D1-1F3FE-200D-1F9B1.svg";
import HKivMpfOrC from "/public/openmoji/1F9D1-1F3FE-200D-1F9B2.svg";
import dfYsJnEDEn from "/public/openmoji/1F9D1-1F3FE-200D-1F9B3.svg";
import iqvvHtlIMu from "/public/openmoji/1F9D1-1F3FE-200D-1F9BC.svg";
import bxPHznZsss from "/public/openmoji/1F9D1-1F3FE-200D-1F9BD.svg";
import ccSvIKWAub from "/public/openmoji/1F9D1-1F3FE-200D-2695-FE0F.svg";
import emFlqNKoRY from "/public/openmoji/1F9D1-1F3FE-200D-2696-FE0F.svg";
import HbBbSYNjnt from "/public/openmoji/1F9D1-1F3FE-200D-2708-FE0F.svg";
import XoAFkodCTl from "/public/openmoji/1F9D1-1F3FE-200D-2764-FE0F-200D-1F48B-200D-1F9D1-1F3FB.svg";
import tQBbSxkigk from "/public/openmoji/1F9D1-1F3FE-200D-2764-FE0F-200D-1F48B-200D-1F9D1-1F3FC.svg";
import REWReetWjC from "/public/openmoji/1F9D1-1F3FE-200D-2764-FE0F-200D-1F48B-200D-1F9D1-1F3FD.svg";
import TxQLEsIzRZ from "/public/openmoji/1F9D1-1F3FE-200D-2764-FE0F-200D-1F48B-200D-1F9D1-1F3FF.svg";
import fcoADoQtlH from "/public/openmoji/1F9D1-1F3FE-200D-2764-FE0F-200D-1F9D1-1F3FB.svg";
import pOtwzKUrBK from "/public/openmoji/1F9D1-1F3FE-200D-2764-FE0F-200D-1F9D1-1F3FC.svg";
import DZtEbYyPjr from "/public/openmoji/1F9D1-1F3FE-200D-2764-FE0F-200D-1F9D1-1F3FD.svg";
import GSBjQIXGPA from "/public/openmoji/1F9D1-1F3FE-200D-2764-FE0F-200D-1F9D1-1F3FF.svg";
import EGWSNJSlKy from "/public/openmoji/1F9D1-1F3FE.svg";
import ylRlTuHcoW from "/public/openmoji/1F9D1-1F3FF-200D-1F33E.svg";
import TWHaFNXpWv from "/public/openmoji/1F9D1-1F3FF-200D-1F373.svg";
import GzVmNsLsbF from "/public/openmoji/1F9D1-1F3FF-200D-1F37C.svg";
import HffQumzVPi from "/public/openmoji/1F9D1-1F3FF-200D-1F384.svg";
import cRKAWumGbr from "/public/openmoji/1F9D1-1F3FF-200D-1F393.svg";
import hobLlqTEgL from "/public/openmoji/1F9D1-1F3FF-200D-1F3A4.svg";
import fYjoETdaQS from "/public/openmoji/1F9D1-1F3FF-200D-1F3A8.svg";
import xrbxUSkvZc from "/public/openmoji/1F9D1-1F3FF-200D-1F3EB.svg";
import hDVcisztiG from "/public/openmoji/1F9D1-1F3FF-200D-1F3ED.svg";
import aDBvOvytHv from "/public/openmoji/1F9D1-1F3FF-200D-1F4BB.svg";
import LkbYCZZHbW from "/public/openmoji/1F9D1-1F3FF-200D-1F4BC.svg";
import BnaOXTpvEH from "/public/openmoji/1F9D1-1F3FF-200D-1F527.svg";
import uRkBWqGPsW from "/public/openmoji/1F9D1-1F3FF-200D-1F52C.svg";
import zEnlEQbKlQ from "/public/openmoji/1F9D1-1F3FF-200D-1F680.svg";
import WMJXnOafVW from "/public/openmoji/1F9D1-1F3FF-200D-1F692.svg";
import nhlGmzyDWl from "/public/openmoji/1F9D1-1F3FF-200D-1F91D-200D-1F9D1-1F3FB.svg";
import PwUOMOgrxo from "/public/openmoji/1F9D1-1F3FF-200D-1F91D-200D-1F9D1-1F3FC.svg";
import remToRTyjy from "/public/openmoji/1F9D1-1F3FF-200D-1F91D-200D-1F9D1-1F3FD.svg";
import HARJeodPUG from "/public/openmoji/1F9D1-1F3FF-200D-1F91D-200D-1F9D1-1F3FE.svg";
import kIJFJxkXtl from "/public/openmoji/1F9D1-1F3FF-200D-1F91D-200D-1F9D1-1F3FF.svg";
import rbYEIqFRBk from "/public/openmoji/1F9D1-1F3FF-200D-1F9AF.svg";
import zaZnVpSDbo from "/public/openmoji/1F9D1-1F3FF-200D-1F9B0.svg";
import zCUpPGgKun from "/public/openmoji/1F9D1-1F3FF-200D-1F9B1.svg";
import deBsmAgCyR from "/public/openmoji/1F9D1-1F3FF-200D-1F9B2.svg";
import biTjFrQQGa from "/public/openmoji/1F9D1-1F3FF-200D-1F9B3.svg";
import ylnUSWkGcL from "/public/openmoji/1F9D1-1F3FF-200D-1F9BC.svg";
import iWVBsArJDf from "/public/openmoji/1F9D1-1F3FF-200D-1F9BD.svg";
import fISeEDCCDS from "/public/openmoji/1F9D1-1F3FF-200D-2695-FE0F.svg";
import GkmPNBRDtm from "/public/openmoji/1F9D1-1F3FF-200D-2696-FE0F.svg";
import ISzJWimkPz from "/public/openmoji/1F9D1-1F3FF-200D-2708-FE0F.svg";
import gqAstpLEcP from "/public/openmoji/1F9D1-1F3FF-200D-2764-FE0F-200D-1F48B-200D-1F9D1-1F3FB.svg";
import dfqzpChYwY from "/public/openmoji/1F9D1-1F3FF-200D-2764-FE0F-200D-1F48B-200D-1F9D1-1F3FC.svg";
import YWqzyazunD from "/public/openmoji/1F9D1-1F3FF-200D-2764-FE0F-200D-1F48B-200D-1F9D1-1F3FD.svg";
import pycCjmDxxS from "/public/openmoji/1F9D1-1F3FF-200D-2764-FE0F-200D-1F48B-200D-1F9D1-1F3FE.svg";
import hKvZJhrroC from "/public/openmoji/1F9D1-1F3FF-200D-2764-FE0F-200D-1F9D1-1F3FB.svg";
import pcLVrbQomo from "/public/openmoji/1F9D1-1F3FF-200D-2764-FE0F-200D-1F9D1-1F3FC.svg";
import wJHmHQJrEV from "/public/openmoji/1F9D1-1F3FF-200D-2764-FE0F-200D-1F9D1-1F3FD.svg";
import ysjrGXSOrp from "/public/openmoji/1F9D1-1F3FF-200D-2764-FE0F-200D-1F9D1-1F3FE.svg";
import OPbviSgKyQ from "/public/openmoji/1F9D1-1F3FF.svg";
import JCWqyUUhFf from "/public/openmoji/1F9D1-200D-1F33E.svg";
import IsXlIQCrba from "/public/openmoji/1F9D1-200D-1F373.svg";
import oKUCxPNERC from "/public/openmoji/1F9D1-200D-1F37C.svg";
import yrUatTWHGC from "/public/openmoji/1F9D1-200D-1F384.svg";
import qNdIDSIKMU from "/public/openmoji/1F9D1-200D-1F393.svg";
import MHZndZoxih from "/public/openmoji/1F9D1-200D-1F3A4.svg";
import qzCaVaHRFj from "/public/openmoji/1F9D1-200D-1F3A8.svg";
import dshAcpfvGy from "/public/openmoji/1F9D1-200D-1F3EB.svg";
import TESBIgimBy from "/public/openmoji/1F9D1-200D-1F3ED.svg";
import OCMyjrxPhC from "/public/openmoji/1F9D1-200D-1F4BB.svg";
import vBOgddYJPP from "/public/openmoji/1F9D1-200D-1F4BC.svg";
import HibqlzBWcD from "/public/openmoji/1F9D1-200D-1F527.svg";
import xpBBRrybud from "/public/openmoji/1F9D1-200D-1F52C.svg";
import JzUIvccvrA from "/public/openmoji/1F9D1-200D-1F680.svg";
import qxwHlyAClI from "/public/openmoji/1F9D1-200D-1F692.svg";
import GkpYtmwcPZ from "/public/openmoji/1F9D1-200D-1F91D-200D-1F9D1.svg";
import oLlfWBlwVQ from "/public/openmoji/1F9D1-200D-1F9AF.svg";
import iPDKbrmSkb from "/public/openmoji/1F9D1-200D-1F9B0.svg";
import SldLtogilc from "/public/openmoji/1F9D1-200D-1F9B1.svg";
import ackYwUmOUb from "/public/openmoji/1F9D1-200D-1F9B2.svg";
import ANpMPMATBo from "/public/openmoji/1F9D1-200D-1F9B3.svg";
import AqmobxlhDJ from "/public/openmoji/1F9D1-200D-1F9BC.svg";
import GhAPRHOvdD from "/public/openmoji/1F9D1-200D-1F9BD.svg";
import xMKmkGFVye from "/public/openmoji/1F9D1-200D-1FAA9.svg";
import RQWHjHvsxI from "/public/openmoji/1F9D1-200D-2695-FE0F.svg";
import NLuWTfGhSL from "/public/openmoji/1F9D1-200D-2696-FE0F.svg";
import MAzQxuGxzN from "/public/openmoji/1F9D1-200D-2708-FE0F.svg";
import ZwXylalYqQ from "/public/openmoji/1F9D1.svg";
import DboFQdwoGf from "/public/openmoji/1F9D2-1F3FB.svg";
import XyzadnWgEq from "/public/openmoji/1F9D2-1F3FC.svg";
import PFgLcmJTOa from "/public/openmoji/1F9D2-1F3FD.svg";
import edZIpXnLhh from "/public/openmoji/1F9D2-1F3FE.svg";
import DrHzgATbDC from "/public/openmoji/1F9D2-1F3FF.svg";
import tzIklswQbZ from "/public/openmoji/1F9D2.svg";
import icNBrSQbTx from "/public/openmoji/1F9D3-1F3FB.svg";
import VcClrpqily from "/public/openmoji/1F9D3-1F3FC.svg";
import iLKRtEnzvy from "/public/openmoji/1F9D3-1F3FD.svg";
import PAywLFlwsY from "/public/openmoji/1F9D3-1F3FE.svg";
import GkYvKmnGbn from "/public/openmoji/1F9D3-1F3FF.svg";
import FDLnzPYOgi from "/public/openmoji/1F9D3.svg";
import InpyedUuFP from "/public/openmoji/1F9D4-1F3FB-200D-2640-FE0F.svg";
import WOkwHLGaPU from "/public/openmoji/1F9D4-1F3FB-200D-2642-FE0F.svg";
import RGIIIpOiFz from "/public/openmoji/1F9D4-1F3FB.svg";
import EHeObTKKOD from "/public/openmoji/1F9D4-1F3FC-200D-2640-FE0F.svg";
import CEbskpJaVY from "/public/openmoji/1F9D4-1F3FC-200D-2642-FE0F.svg";
import cgAnWvgUQH from "/public/openmoji/1F9D4-1F3FC.svg";
import njGPBPfanm from "/public/openmoji/1F9D4-1F3FD-200D-2640-FE0F.svg";
import goONddicuU from "/public/openmoji/1F9D4-1F3FD-200D-2642-FE0F.svg";
import roSHGNbkOg from "/public/openmoji/1F9D4-1F3FD.svg";
import cHRGrGgPkl from "/public/openmoji/1F9D4-1F3FE-200D-2640-FE0F.svg";
import KQNTUcPWod from "/public/openmoji/1F9D4-1F3FE-200D-2642-FE0F.svg";
import SYxgpuNqBt from "/public/openmoji/1F9D4-1F3FE.svg";
import cMFggsbpGr from "/public/openmoji/1F9D4-1F3FF-200D-2640-FE0F.svg";
import YTRdCvTEPJ from "/public/openmoji/1F9D4-1F3FF-200D-2642-FE0F.svg";
import uJFbBTsZpx from "/public/openmoji/1F9D4-1F3FF.svg";
import zpEHnlYexf from "/public/openmoji/1F9D4-200D-2640-FE0F.svg";
import QgYzamJvoa from "/public/openmoji/1F9D4-200D-2642-FE0F.svg";
import jBvvlggwte from "/public/openmoji/1F9D4.svg";
import nItoBCwryX from "/public/openmoji/1F9D5-1F3FB.svg";
import iXioBZPdDv from "/public/openmoji/1F9D5-1F3FC.svg";
import NTMGPKfLAp from "/public/openmoji/1F9D5-1F3FD.svg";
import WozhLbktGD from "/public/openmoji/1F9D5-1F3FE.svg";
import tLIhiAlTGY from "/public/openmoji/1F9D5-1F3FF.svg";
import pFcccGuXAi from "/public/openmoji/1F9D5.svg";
import GWARijGVPi from "/public/openmoji/1F9D6-1F3FB-200D-2640-FE0F.svg";
import fsgmtVNXic from "/public/openmoji/1F9D6-1F3FB-200D-2642-FE0F.svg";
import clYUzoWJMr from "/public/openmoji/1F9D6-1F3FB.svg";
import aVjzxUVdib from "/public/openmoji/1F9D6-1F3FC-200D-2640-FE0F.svg";
import pakcKQQmjg from "/public/openmoji/1F9D6-1F3FC-200D-2642-FE0F.svg";
import aFooxzocjs from "/public/openmoji/1F9D6-1F3FC.svg";
import RfyEOKOijG from "/public/openmoji/1F9D6-1F3FD-200D-2640-FE0F.svg";
import SZwzPqXtPT from "/public/openmoji/1F9D6-1F3FD-200D-2642-FE0F.svg";
import eMyxxfqJoK from "/public/openmoji/1F9D6-1F3FD.svg";
import boKfoJYhVq from "/public/openmoji/1F9D6-1F3FE-200D-2640-FE0F.svg";
import MZuuTyqYAa from "/public/openmoji/1F9D6-1F3FE-200D-2642-FE0F.svg";
import SnMOhcyMQn from "/public/openmoji/1F9D6-1F3FE.svg";
import vPWNbcEhIk from "/public/openmoji/1F9D6-1F3FF-200D-2640-FE0F.svg";
import bZeRowmiIK from "/public/openmoji/1F9D6-1F3FF-200D-2642-FE0F.svg";
import GpUhReNjRT from "/public/openmoji/1F9D6-1F3FF.svg";
import ydRFMppXnX from "/public/openmoji/1F9D6-200D-2640-FE0F.svg";
import sZRBisMdzA from "/public/openmoji/1F9D6-200D-2642-FE0F.svg";
import IYJhMgVhyl from "/public/openmoji/1F9D6.svg";
import EkUaTgRQRG from "/public/openmoji/1F9D7-1F3FB-200D-2640-FE0F.svg";
import PstKCiYsNk from "/public/openmoji/1F9D7-1F3FB-200D-2642-FE0F.svg";
import TtVQcFiNQC from "/public/openmoji/1F9D7-1F3FB.svg";
import jUzTuZkOvw from "/public/openmoji/1F9D7-1F3FC-200D-2640-FE0F.svg";
import ayifFNBCRk from "/public/openmoji/1F9D7-1F3FC-200D-2642-FE0F.svg";
import PuEwTJijNw from "/public/openmoji/1F9D7-1F3FC.svg";
import SSYFEfBfge from "/public/openmoji/1F9D7-1F3FD-200D-2640-FE0F.svg";
import wQrMerFYGm from "/public/openmoji/1F9D7-1F3FD-200D-2642-FE0F.svg";
import iwNVfsQyYW from "/public/openmoji/1F9D7-1F3FD.svg";
import nISoDpmXbN from "/public/openmoji/1F9D7-1F3FE-200D-2640-FE0F.svg";
import ESnfTqtBAq from "/public/openmoji/1F9D7-1F3FE-200D-2642-FE0F.svg";
import boeTOZQjGO from "/public/openmoji/1F9D7-1F3FE.svg";
import TAWcdhVdEQ from "/public/openmoji/1F9D7-1F3FF-200D-2640-FE0F.svg";
import SomlWbsCQc from "/public/openmoji/1F9D7-1F3FF-200D-2642-FE0F.svg";
import XnwwrPJxze from "/public/openmoji/1F9D7-1F3FF.svg";
import dKaAZrDRnL from "/public/openmoji/1F9D7-200D-2640-FE0F.svg";
import RiZpPOBkOP from "/public/openmoji/1F9D7-200D-2642-FE0F.svg";
import qnXiTxnxPX from "/public/openmoji/1F9D7.svg";
import oiSGqpojgd from "/public/openmoji/1F9D8-1F3FB-200D-2640-FE0F.svg";
import APcTiqRwGf from "/public/openmoji/1F9D8-1F3FB-200D-2642-FE0F.svg";
import FGaAUJlanB from "/public/openmoji/1F9D8-1F3FB.svg";
import JrZWVWpkML from "/public/openmoji/1F9D8-1F3FC-200D-2640-FE0F.svg";
import pFjdgYXNyU from "/public/openmoji/1F9D8-1F3FC-200D-2642-FE0F.svg";
import llXxAPPYno from "/public/openmoji/1F9D8-1F3FC.svg";
import cReWaQGKbB from "/public/openmoji/1F9D8-1F3FD-200D-2640-FE0F.svg";
import lLHPVqqdYc from "/public/openmoji/1F9D8-1F3FD-200D-2642-FE0F.svg";
import xYJbUHcUOr from "/public/openmoji/1F9D8-1F3FD.svg";
import DcPLpPImdS from "/public/openmoji/1F9D8-1F3FE-200D-2640-FE0F.svg";
import WopMTEktbj from "/public/openmoji/1F9D8-1F3FE-200D-2642-FE0F.svg";
import ixJWFkSMNN from "/public/openmoji/1F9D8-1F3FE.svg";
import WKTenEIywP from "/public/openmoji/1F9D8-1F3FF-200D-2640-FE0F.svg";
import aHEHuChWfj from "/public/openmoji/1F9D8-1F3FF-200D-2642-FE0F.svg";
import RSgFnyOUuz from "/public/openmoji/1F9D8-1F3FF.svg";
import fvpDbzqbfG from "/public/openmoji/1F9D8-200D-2640-FE0F.svg";
import RBHrxrSNOK from "/public/openmoji/1F9D8-200D-2642-FE0F.svg";
import SYiXJiJkzk from "/public/openmoji/1F9D8.svg";
import IdyHUdvYXb from "/public/openmoji/1F9D9-1F3FB-200D-2640-FE0F.svg";
import lMKmKUMneQ from "/public/openmoji/1F9D9-1F3FB-200D-2642-FE0F.svg";
import qHaOPdWalT from "/public/openmoji/1F9D9-1F3FB.svg";
import mnTEmcbGzH from "/public/openmoji/1F9D9-1F3FC-200D-2640-FE0F.svg";
import wWVHpssjLe from "/public/openmoji/1F9D9-1F3FC-200D-2642-FE0F.svg";
import hPEHjklamm from "/public/openmoji/1F9D9-1F3FC.svg";
import eFbGYZyjXg from "/public/openmoji/1F9D9-1F3FD-200D-2640-FE0F.svg";
import pgddzHTEOA from "/public/openmoji/1F9D9-1F3FD-200D-2642-FE0F.svg";
import ZFxOOaSLRN from "/public/openmoji/1F9D9-1F3FD.svg";
import XgmVhVQSgu from "/public/openmoji/1F9D9-1F3FE-200D-2640-FE0F.svg";
import nahrObHFtH from "/public/openmoji/1F9D9-1F3FE-200D-2642-FE0F.svg";
import wVHGTtutve from "/public/openmoji/1F9D9-1F3FE.svg";
import eJSUGSDOSI from "/public/openmoji/1F9D9-1F3FF-200D-2640-FE0F.svg";
import KxQzQbYJrj from "/public/openmoji/1F9D9-1F3FF-200D-2642-FE0F.svg";
import idNSAaejwE from "/public/openmoji/1F9D9-1F3FF.svg";
import ebDsbHaFng from "/public/openmoji/1F9D9-200D-2640-FE0F.svg";
import QjVlVmfTFH from "/public/openmoji/1F9D9-200D-2642-FE0F.svg";
import tximIzvspz from "/public/openmoji/1F9D9.svg";
import gjZgUYAapG from "/public/openmoji/1F9DA-1F3FB-200D-2640-FE0F.svg";
import OTnqTZQcAA from "/public/openmoji/1F9DA-1F3FB-200D-2642-FE0F.svg";
import iDqekNmaym from "/public/openmoji/1F9DA-1F3FB.svg";
import hWNYOisdSK from "/public/openmoji/1F9DA-1F3FC-200D-2640-FE0F.svg";
import KuZqZoVLgM from "/public/openmoji/1F9DA-1F3FC-200D-2642-FE0F.svg";
import OYajJzqFUc from "/public/openmoji/1F9DA-1F3FC.svg";
import fGHshuiTMk from "/public/openmoji/1F9DA-1F3FD-200D-2640-FE0F.svg";
import wHcixYIuIH from "/public/openmoji/1F9DA-1F3FD-200D-2642-FE0F.svg";
import qtMbjUxPnH from "/public/openmoji/1F9DA-1F3FD.svg";
import aXGUgJXUWT from "/public/openmoji/1F9DA-1F3FE-200D-2640-FE0F.svg";
import QXZlmDZBbD from "/public/openmoji/1F9DA-1F3FE-200D-2642-FE0F.svg";
import vPLQOvvtoN from "/public/openmoji/1F9DA-1F3FE.svg";
import emZXSEPirG from "/public/openmoji/1F9DA-1F3FF-200D-2640-FE0F.svg";
import sPdukSqWaY from "/public/openmoji/1F9DA-1F3FF-200D-2642-FE0F.svg";
import koaVjiDhjM from "/public/openmoji/1F9DA-1F3FF.svg";
import TRgIypZUvN from "/public/openmoji/1F9DA-200D-2640-FE0F.svg";
import JEQNFhunEr from "/public/openmoji/1F9DA-200D-2642-FE0F.svg";
import nBUGUYqcDm from "/public/openmoji/1F9DA.svg";
import ehtOukSGJL from "/public/openmoji/1F9DB-1F3FB-200D-2640-FE0F.svg";
import bMBUEczDAz from "/public/openmoji/1F9DB-1F3FB-200D-2642-FE0F.svg";
import hCfuXbPvis from "/public/openmoji/1F9DB-1F3FB.svg";
import ATYwLZYYTA from "/public/openmoji/1F9DB-1F3FC-200D-2640-FE0F.svg";
import tyftTskJMU from "/public/openmoji/1F9DB-1F3FC-200D-2642-FE0F.svg";
import saojKFhAeW from "/public/openmoji/1F9DB-1F3FC.svg";
import KfcxaqsBiN from "/public/openmoji/1F9DB-1F3FD-200D-2640-FE0F.svg";
import pPXqtEWqFV from "/public/openmoji/1F9DB-1F3FD-200D-2642-FE0F.svg";
import VEYglVbLQc from "/public/openmoji/1F9DB-1F3FD.svg";
import PYQYbzeocK from "/public/openmoji/1F9DB-1F3FE-200D-2640-FE0F.svg";
import SaKauwKzzD from "/public/openmoji/1F9DB-1F3FE-200D-2642-FE0F.svg";
import kPYLKQKrOr from "/public/openmoji/1F9DB-1F3FE.svg";
import HqOIbPWeVC from "/public/openmoji/1F9DB-1F3FF-200D-2640-FE0F.svg";
import IZWXGFcZoG from "/public/openmoji/1F9DB-1F3FF-200D-2642-FE0F.svg";
import qeYAotldAq from "/public/openmoji/1F9DB-1F3FF.svg";
import EqtBKVsDys from "/public/openmoji/1F9DB-200D-2640-FE0F.svg";
import YpuIkIuPFy from "/public/openmoji/1F9DB-200D-2642-FE0F.svg";
import jXJeWLniJj from "/public/openmoji/1F9DB.svg";
import bhacvmvCKY from "/public/openmoji/1F9DC-1F3FB-200D-2640-FE0F.svg";
import VxffbEippU from "/public/openmoji/1F9DC-1F3FB-200D-2642-FE0F.svg";
import PYOOkhjUdv from "/public/openmoji/1F9DC-1F3FB.svg";
import XIaheCKMdC from "/public/openmoji/1F9DC-1F3FC-200D-2640-FE0F.svg";
import muEBHxjbsR from "/public/openmoji/1F9DC-1F3FC-200D-2642-FE0F.svg";
import loNmGQMHqD from "/public/openmoji/1F9DC-1F3FC.svg";
import SUkMMZmNPs from "/public/openmoji/1F9DC-1F3FD-200D-2640-FE0F.svg";
import mRrrOeqTwu from "/public/openmoji/1F9DC-1F3FD-200D-2642-FE0F.svg";
import qnYQOEyaDS from "/public/openmoji/1F9DC-1F3FD.svg";
import UKgOfKOWBL from "/public/openmoji/1F9DC-1F3FE-200D-2640-FE0F.svg";
import cwaqAxNqeN from "/public/openmoji/1F9DC-1F3FE-200D-2642-FE0F.svg";
import FKxZidDmis from "/public/openmoji/1F9DC-1F3FE.svg";
import KQOHVLjuoR from "/public/openmoji/1F9DC-1F3FF-200D-2640-FE0F.svg";
import suehMSzlHn from "/public/openmoji/1F9DC-1F3FF-200D-2642-FE0F.svg";
import YtVhsRcXSf from "/public/openmoji/1F9DC-1F3FF.svg";
import bHApQeIYHU from "/public/openmoji/1F9DC-200D-2640-FE0F.svg";
import uHgpnvQhtH from "/public/openmoji/1F9DC-200D-2642-FE0F.svg";
import dDSAaPtXEZ from "/public/openmoji/1F9DC.svg";
import HNqXhcLAHN from "/public/openmoji/1F9DD-1F3FB-200D-2640-FE0F.svg";
import TioffbbUcO from "/public/openmoji/1F9DD-1F3FB-200D-2642-FE0F.svg";
import JiiErfnVhM from "/public/openmoji/1F9DD-1F3FB.svg";
import vkvqbJOifw from "/public/openmoji/1F9DD-1F3FC-200D-2640-FE0F.svg";
import NuGbjOwayV from "/public/openmoji/1F9DD-1F3FC-200D-2642-FE0F.svg";
import VbaOEyhnqd from "/public/openmoji/1F9DD-1F3FC.svg";
import jrSjkRxRmZ from "/public/openmoji/1F9DD-1F3FD-200D-2640-FE0F.svg";
import fdOOxxktPl from "/public/openmoji/1F9DD-1F3FD-200D-2642-FE0F.svg";
import WXWNQmcSLb from "/public/openmoji/1F9DD-1F3FD.svg";
import NKhjWNcIJS from "/public/openmoji/1F9DD-1F3FE-200D-2640-FE0F.svg";
import YeOYSzjcdB from "/public/openmoji/1F9DD-1F3FE-200D-2642-FE0F.svg";
import NlrgtPmOQu from "/public/openmoji/1F9DD-1F3FE.svg";
import ZjoLTbAOSb from "/public/openmoji/1F9DD-1F3FF-200D-2640-FE0F.svg";
import IHtAsJgzeF from "/public/openmoji/1F9DD-1F3FF-200D-2642-FE0F.svg";
import dSguTEPgCD from "/public/openmoji/1F9DD-1F3FF.svg";
import uxjvfuWgGC from "/public/openmoji/1F9DD-200D-2640-FE0F.svg";
import EZYRYvcBeH from "/public/openmoji/1F9DD-200D-2642-FE0F.svg";
import cWZitYJuwf from "/public/openmoji/1F9DD.svg";
import FweWnUVMZD from "/public/openmoji/1F9DE-200D-2640-FE0F.svg";
import WOLTULSzXo from "/public/openmoji/1F9DE-200D-2642-FE0F.svg";
import PjakDfaQyz from "/public/openmoji/1F9DE.svg";
import qCBlhqQchm from "/public/openmoji/1F9DF-200D-2640-FE0F.svg";
import koiMDjyMXX from "/public/openmoji/1F9DF-200D-2642-FE0F.svg";
import JbQeVLjHUZ from "/public/openmoji/1F9DF.svg";
import fFrtYXCaAg from "/public/openmoji/1F9E0.svg";
import xZQtKFUNGx from "/public/openmoji/1F9E1.svg";
import limeUeJIyi from "/public/openmoji/1F9E2.svg";
import CgSjHvUZHz from "/public/openmoji/1F9E3.svg";
import FwqcrqVXRA from "/public/openmoji/1F9E4.svg";
import qQnDrrPPda from "/public/openmoji/1F9E5.svg";
import QymGfBnEKq from "/public/openmoji/1F9E6.svg";
import oitMlKXeKQ from "/public/openmoji/1F9E7.svg";
import pDAZlubXKu from "/public/openmoji/1F9E8.svg";
import juZQxQEPZe from "/public/openmoji/1F9E9.svg";
import KkbiedsEyr from "/public/openmoji/1F9EA.svg";
import gVOfokpVaR from "/public/openmoji/1F9EB.svg";
import FgXewtFzts from "/public/openmoji/1F9EC.svg";
import BkciGEvqwR from "/public/openmoji/1F9ED.svg";
import QybRFgGTcM from "/public/openmoji/1F9EE.svg";
import YNSOZiTTSo from "/public/openmoji/1F9EF.svg";
import GDHIUhEnPx from "/public/openmoji/1F9F0.svg";
import JdaWNcPJQH from "/public/openmoji/1F9F1.svg";
import RIpjdLcvcO from "/public/openmoji/1F9F2.svg";
import xEwuxCUctC from "/public/openmoji/1F9F3.svg";
import cWjNuOiWiK from "/public/openmoji/1F9F4.svg";
import EQlWBxRFda from "/public/openmoji/1F9F5.svg";
import mSCnPbKCPN from "/public/openmoji/1F9F6.svg";
import EZekrMwwuh from "/public/openmoji/1F9F7.svg";
import AtWLliJWuu from "/public/openmoji/1F9F8.svg";
import TRCtPCCzvE from "/public/openmoji/1F9F9.svg";
import GrfokvIecH from "/public/openmoji/1F9FA.svg";
import PlqQqKOluR from "/public/openmoji/1F9FB.svg";
import GPsSIKveEK from "/public/openmoji/1F9FC.svg";
import pYoiCPoowB from "/public/openmoji/1F9FD.svg";
import KpKIrLmRSS from "/public/openmoji/1F9FE.svg";
import gPzurVBZQz from "/public/openmoji/1F9FF.svg";
import XcxDGQvHUb from "/public/openmoji/1FA70.svg";
import xQYewYfGzu from "/public/openmoji/1FA71.svg";
import OGNEgPHVtK from "/public/openmoji/1FA72.svg";
import MKNOJKRlVu from "/public/openmoji/1FA73.svg";
import YiChipnezB from "/public/openmoji/1FA74.svg";
import mwzUrJGFIa from "/public/openmoji/1FA75.svg";
import neANDdaSMh from "/public/openmoji/1FA76.svg";
import EQGWCxWiFt from "/public/openmoji/1FA77.svg";
import ZRFNVzHezM from "/public/openmoji/1FA78.svg";
import vgFUhXNqVr from "/public/openmoji/1FA79.svg";
import ZXajAieupO from "/public/openmoji/1FA7A.svg";
import gKvhsTwvSi from "/public/openmoji/1FA7B.svg";
import SIIKjlKRPQ from "/public/openmoji/1FA7C.svg";
import dGlsWzEMOK from "/public/openmoji/1FA80.svg";
import svizKLRkzM from "/public/openmoji/1FA81.svg";
import KxeKodYesT from "/public/openmoji/1FA82.svg";
import nhRCiPyphd from "/public/openmoji/1FA83.svg";
import wEtfkdMIHQ from "/public/openmoji/1FA84.svg";
import CzGsZtIWaB from "/public/openmoji/1FA85.svg";
import UlwlHwPuNt from "/public/openmoji/1FA86.svg";
import xPYzthdZgi from "/public/openmoji/1FA87.svg";
import aGaWAmKPRt from "/public/openmoji/1FA88.svg";
import mYMjTMvmxs from "/public/openmoji/1FA90.svg";
import nnyyJNDmHb from "/public/openmoji/1FA91.svg";
import ZrzKbQeHEU from "/public/openmoji/1FA92.svg";
import qOIQJtkAoP from "/public/openmoji/1FA93.svg";
import dxrnVmkOvt from "/public/openmoji/1FA94.svg";
import ifBIxXyQzu from "/public/openmoji/1FA95.svg";
import gSnEptvtna from "/public/openmoji/1FA96.svg";
import atroxsxSfN from "/public/openmoji/1FA97.svg";
import QvGGNwVmCb from "/public/openmoji/1FA98.svg";
import xBkRnmITHo from "/public/openmoji/1FA99.svg";
import xzVrUPvfuC from "/public/openmoji/1FA9A.svg";
import eODLoRqWeD from "/public/openmoji/1FA9B.svg";
import kNryDxKIMV from "/public/openmoji/1FA9C.svg";
import deROgTQhug from "/public/openmoji/1FA9D.svg";
import jFfOHgHXpI from "/public/openmoji/1FA9E.svg";
import yMszYYpQuq from "/public/openmoji/1FA9F.svg";
import OwwcgOhVAt from "/public/openmoji/1FAA0.svg";
import bQlxPvcoDz from "/public/openmoji/1FAA1.svg";
import hqGgzVHPgX from "/public/openmoji/1FAA2.svg";
import wELcGOhVdK from "/public/openmoji/1FAA3.svg";
import OZwMfevLzN from "/public/openmoji/1FAA4.svg";
import kpzygopzPb from "/public/openmoji/1FAA5.svg";
import IunAqDYueh from "/public/openmoji/1FAA6.svg";
import cUWIYKdBaS from "/public/openmoji/1FAA7.svg";
import PStHkuZVEo from "/public/openmoji/1FAA8.svg";
import IYDIPWzgWY from "/public/openmoji/1FAA9.svg";
import QwWFgnoFPI from "/public/openmoji/1FAAA.svg";
import aEUyqEzSQV from "/public/openmoji/1FAAB.svg";
import ECQXJkrxhh from "/public/openmoji/1FAAC.svg";
import agPsYUzJUu from "/public/openmoji/1FAAD.svg";
import CGCtOkBCxv from "/public/openmoji/1FAAE.svg";
import OlbnKZSTKz from "/public/openmoji/1FAAF.svg";
import VWpYdnQyxe from "/public/openmoji/1FAB0.svg";
import dmZyAmApVg from "/public/openmoji/1FAB1.svg";
import lOmnrLgnTY from "/public/openmoji/1FAB2.svg";
import ERhPtXHrXE from "/public/openmoji/1FAB3.svg";
import hrTvwbYuRz from "/public/openmoji/1FAB4.svg";
import FLJeDKkATF from "/public/openmoji/1FAB5.svg";
import DBhnjJJQJR from "/public/openmoji/1FAB6.svg";
import WRfusEabpA from "/public/openmoji/1FAB7.svg";
import NFWjwyOilH from "/public/openmoji/1FAB8.svg";
import LOVJaOJKQo from "/public/openmoji/1FAB9.svg";
import SIOTYTfAIK from "/public/openmoji/1FABA.svg";
import PtdeFSNrgp from "/public/openmoji/1FABB.svg";
import gyIEoBwVjO from "/public/openmoji/1FABC.svg";
import kxWfSobZuI from "/public/openmoji/1FABD.svg";
import zNMDEJZDDi from "/public/openmoji/1FABF.svg";
import CEdLNdkjhY from "/public/openmoji/1FAC0.svg";
import oSfRrxWcYU from "/public/openmoji/1FAC1.svg";
import EnCCLBiKyb from "/public/openmoji/1FAC2.svg";
import KJbWOdhJoT from "/public/openmoji/1FAC3-1F3FB.svg";
import PZxOEXUVSd from "/public/openmoji/1FAC3-1F3FC.svg";
import HUaiMqVMbZ from "/public/openmoji/1FAC3-1F3FD.svg";
import CtFhDCFscv from "/public/openmoji/1FAC3-1F3FE.svg";
import EmhkuppZMi from "/public/openmoji/1FAC3-1F3FF.svg";
import MBvTdVLmCn from "/public/openmoji/1FAC3.svg";
import RdiyaZkCJL from "/public/openmoji/1FAC4-1F3FB.svg";
import NXNZyxoMCN from "/public/openmoji/1FAC4-1F3FC.svg";
import GxIDrqYRTf from "/public/openmoji/1FAC4-1F3FD.svg";
import BfYMclwGqK from "/public/openmoji/1FAC4-1F3FE.svg";
import OmWZEtemsN from "/public/openmoji/1FAC4-1F3FF.svg";
import mqTBQBbKaj from "/public/openmoji/1FAC4.svg";
import yIDeYxkisk from "/public/openmoji/1FAC5-1F3FB.svg";
import ruMaYZAdga from "/public/openmoji/1FAC5-1F3FC.svg";
import iaRGnLQaeH from "/public/openmoji/1FAC5-1F3FD.svg";
import CXyJPXrFNI from "/public/openmoji/1FAC5-1F3FE.svg";
import uwxGQvFOeR from "/public/openmoji/1FAC5-1F3FF.svg";
import RROswprAmZ from "/public/openmoji/1FAC5.svg";
import SqCRerwmGj from "/public/openmoji/1FACE.svg";
import XXGVyPxppy from "/public/openmoji/1FACF.svg";
import sbugOccQsD from "/public/openmoji/1FAD0.svg";
import GdRLCACSMv from "/public/openmoji/1FAD1.svg";
import toEySbBhrf from "/public/openmoji/1FAD2.svg";
import LypPAffRnQ from "/public/openmoji/1FAD3.svg";
import GoZZQtwUco from "/public/openmoji/1FAD4.svg";
import SoWJEcZshE from "/public/openmoji/1FAD5.svg";
import BsVyLiZNzT from "/public/openmoji/1FAD6.svg";
import lGUhRRQJNC from "/public/openmoji/1FAD7.svg";
import rReKMRjOJP from "/public/openmoji/1FAD8.svg";
import LmAuoFuIzY from "/public/openmoji/1FAD9-200D-1F7E5.svg";
import ntKcNZOGeF from "/public/openmoji/1FAD9-200D-1F7E6.svg";
import jvjVCiSdbO from "/public/openmoji/1FAD9-200D-1F7E7.svg";
import zWGFButVwN from "/public/openmoji/1FAD9-200D-1F7E8.svg";
import nwSDouyPkV from "/public/openmoji/1FAD9-200D-1F7E9.svg";
import CIkBYuInbf from "/public/openmoji/1FAD9-200D-1F7EA.svg";
import lAPCoEwPeE from "/public/openmoji/1FAD9-200D-1F7EB.svg";
import JkwmnmHmIG from "/public/openmoji/1FAD9.svg";
import FSNTNYvWHT from "/public/openmoji/1FADA.svg";
import CCbweKdTcU from "/public/openmoji/1FADB.svg";
import CSxHbzGZlk from "/public/openmoji/1FAE0.svg";
import JCWfGmxHnR from "/public/openmoji/1FAE1.svg";
import AwazCnTeYo from "/public/openmoji/1FAE2.svg";
import PXAIHFvWRK from "/public/openmoji/1FAE3.svg";
import CCBDvLcRoD from "/public/openmoji/1FAE4.svg";
import aacRuPoXGW from "/public/openmoji/1FAE5.svg";
import wGOEhqqELb from "/public/openmoji/1FAE6.svg";
import kkxClEFdkf from "/public/openmoji/1FAE7.svg";
import lYiivGRowa from "/public/openmoji/1FAE8.svg";
import jrhQLqpyfv from "/public/openmoji/1FAF0-1F3FB.svg";
import ttxZArwtbc from "/public/openmoji/1FAF0-1F3FC.svg";
import ridUIMqjCU from "/public/openmoji/1FAF0-1F3FD.svg";
import nOkNKCsney from "/public/openmoji/1FAF0-1F3FE.svg";
import iZhRartxOr from "/public/openmoji/1FAF0-1F3FF.svg";
import CLuBLvSguR from "/public/openmoji/1FAF0.svg";
import gGVwZxICSh from "/public/openmoji/1FAF1-1F3FB-200D-1FAF2-1F3FC.svg";
import lrDCdDfqga from "/public/openmoji/1FAF1-1F3FB-200D-1FAF2-1F3FD.svg";
import bSXtuEFOVK from "/public/openmoji/1FAF1-1F3FB-200D-1FAF2-1F3FE.svg";
import lyRXWQSrBQ from "/public/openmoji/1FAF1-1F3FB-200D-1FAF2-1F3FF.svg";
import nTClBOIRYK from "/public/openmoji/1FAF1-1F3FB.svg";
import RSxlZyufnT from "/public/openmoji/1FAF1-1F3FC-200D-1FAF2-1F3FB.svg";
import MqRNGqBWKw from "/public/openmoji/1FAF1-1F3FC-200D-1FAF2-1F3FD.svg";
import BcuLKKwxkG from "/public/openmoji/1FAF1-1F3FC-200D-1FAF2-1F3FE.svg";
import jjluxBxwMz from "/public/openmoji/1FAF1-1F3FC-200D-1FAF2-1F3FF.svg";
import fwzoHJlsHK from "/public/openmoji/1FAF1-1F3FC.svg";
import OqKQtOfwbo from "/public/openmoji/1FAF1-1F3FD-200D-1FAF2-1F3FB.svg";
import MrGCeTTSsz from "/public/openmoji/1FAF1-1F3FD-200D-1FAF2-1F3FC.svg";
import SDVIWxXJvS from "/public/openmoji/1FAF1-1F3FD-200D-1FAF2-1F3FE.svg";
import sPNNoFrVFe from "/public/openmoji/1FAF1-1F3FD-200D-1FAF2-1F3FF.svg";
import qkkygJJlAi from "/public/openmoji/1FAF1-1F3FD.svg";
import DqhcEDueEG from "/public/openmoji/1FAF1-1F3FE-200D-1FAF2-1F3FB.svg";
import AekNFCwzbK from "/public/openmoji/1FAF1-1F3FE-200D-1FAF2-1F3FC.svg";
import pbZMeOBQJY from "/public/openmoji/1FAF1-1F3FE-200D-1FAF2-1F3FD.svg";
import CRKWfSkebe from "/public/openmoji/1FAF1-1F3FE-200D-1FAF2-1F3FF.svg";
import MClqIbZCmr from "/public/openmoji/1FAF1-1F3FE.svg";
import ZtAQdAnsTF from "/public/openmoji/1FAF1-1F3FF-200D-1FAF2-1F3FB.svg";
import llKYUTevqO from "/public/openmoji/1FAF1-1F3FF-200D-1FAF2-1F3FC.svg";
import hhTheWpHLS from "/public/openmoji/1FAF1-1F3FF-200D-1FAF2-1F3FD.svg";
import xZLhjYRgem from "/public/openmoji/1FAF1-1F3FF-200D-1FAF2-1F3FE.svg";
import cGjLHgIUgS from "/public/openmoji/1FAF1-1F3FF.svg";
import OKCkrNkJEk from "/public/openmoji/1FAF1.svg";
import jValglNUNn from "/public/openmoji/1FAF2-1F3FB.svg";
import xGnVJmTLvO from "/public/openmoji/1FAF2-1F3FC.svg";
import agAojKraFK from "/public/openmoji/1FAF2-1F3FD.svg";
import TXPsNIZRVI from "/public/openmoji/1FAF2-1F3FE.svg";
import VeYBlVbfat from "/public/openmoji/1FAF2-1F3FF.svg";
import pNRVdCnkTR from "/public/openmoji/1FAF2.svg";
import rQiMsTYWVE from "/public/openmoji/1FAF3-1F3FB.svg";
import PxoqbdSdZr from "/public/openmoji/1FAF3-1F3FC.svg";
import oUOuqeJTQD from "/public/openmoji/1FAF3-1F3FD.svg";
import efDDKVuzJK from "/public/openmoji/1FAF3-1F3FE.svg";
import gXvGDAlTKC from "/public/openmoji/1FAF3-1F3FF.svg";
import PCEdneeisi from "/public/openmoji/1FAF3.svg";
import NWijhtzxqM from "/public/openmoji/1FAF4-1F3FB.svg";
import ddSPgpkMyf from "/public/openmoji/1FAF4-1F3FC.svg";
import tuyFMrSTSi from "/public/openmoji/1FAF4-1F3FD.svg";
import LRiwzIorAo from "/public/openmoji/1FAF4-1F3FE.svg";
import DuUJDyaJvX from "/public/openmoji/1FAF4-1F3FF.svg";
import wRJQdcSigJ from "/public/openmoji/1FAF4.svg";
import wACZIsNiwg from "/public/openmoji/1FAF5-1F3FB.svg";
import cHtQfVHVdb from "/public/openmoji/1FAF5-1F3FC.svg";
import ewVrTKgvhb from "/public/openmoji/1FAF5-1F3FD.svg";
import rLiEiORZQC from "/public/openmoji/1FAF5-1F3FE.svg";
import dWzQOkDDOt from "/public/openmoji/1FAF5-1F3FF.svg";
import SdKWHlDBSI from "/public/openmoji/1FAF5.svg";
import FPlXiUpvnm from "/public/openmoji/1FAF6-1F3FB.svg";
import iUIjBKMJkV from "/public/openmoji/1FAF6-1F3FC.svg";
import itruYJMlnC from "/public/openmoji/1FAF6-1F3FD.svg";
import uyNKuHcIuX from "/public/openmoji/1FAF6-1F3FE.svg";
import BhvrsJWgPo from "/public/openmoji/1FAF6-1F3FF.svg";
import axlIvMxZNx from "/public/openmoji/1FAF6.svg";
import HsscaSQvZh from "/public/openmoji/1FAF7-1F3FB.svg";
import bNpnQrMPhV from "/public/openmoji/1FAF7-1F3FC.svg";
import mkUfEcwBNe from "/public/openmoji/1FAF7-1F3FD.svg";
import ermnxlxWrR from "/public/openmoji/1FAF7-1F3FE.svg";
import YYaxcDTfss from "/public/openmoji/1FAF7-1F3FF.svg";
import mHXRmuQfIE from "/public/openmoji/1FAF7.svg";
import RfQAsgTmet from "/public/openmoji/1FAF8-1F3FB.svg";
import SIcQsgwjxZ from "/public/openmoji/1FAF8-1F3FC.svg";
import SOHlQrehVl from "/public/openmoji/1FAF8-1F3FD.svg";
import mqdoMBElCw from "/public/openmoji/1FAF8-1F3FE.svg";
import qjoKbdXFbT from "/public/openmoji/1FAF8-1F3FF.svg";
import vHYobeXYPY from "/public/openmoji/1FAF8.svg";
import SmDheCVFco from "/public/openmoji/1FBC5.svg";
import cWrNoURvul from "/public/openmoji/1FBC6-200D-1F457.svg";
import tTZWMsYUPQ from "/public/openmoji/1FBC6.svg";
import JLXAlrkFVb from "/public/openmoji/1FBC7-200D-1F457.svg";
import EPubucuEql from "/public/openmoji/1FBC7.svg";
import txhBNFfuNo from "/public/openmoji/1FBC8-200D-1F457.svg";
import AlbeOxgfJN from "/public/openmoji/1FBC8.svg";
import fmdnGVHRFG from "/public/openmoji/1FBC9.svg";
import LsTqaErSXY from "/public/openmoji/203C.svg";
import druWzXAhbn from "/public/openmoji/2049.svg";
import lFlqopHflu from "/public/openmoji/2117.svg";
import OfQxxQZQmh from "/public/openmoji/2120.svg";
import PhNsMOgMEY from "/public/openmoji/2122.svg";
import fRhFUBfKWs from "/public/openmoji/2139.svg";
import jazpxLiQrh from "/public/openmoji/2194.svg";
import aZvRyshKxp from "/public/openmoji/2195.svg";
import KoZXlcHCti from "/public/openmoji/2196.svg";
import IiLmlGhttr from "/public/openmoji/2197.svg";
import sSUFEWRMoM from "/public/openmoji/2198.svg";
import QpTlguneVj from "/public/openmoji/2199.svg";
import ngWGDPxdjP from "/public/openmoji/21A9.svg";
import HnTxQkVdfV from "/public/openmoji/21AA.svg";
import jDVioxhiUn from "/public/openmoji/229C.svg";
import cysBNWQEGT from "/public/openmoji/231A.svg";
import QqaRNLizIC from "/public/openmoji/231B.svg";
import EmCKhAbrAM from "/public/openmoji/2328.svg";
import xXbKNDkwsC from "/public/openmoji/23CF.svg";
import XXRsPUwjKI from "/public/openmoji/23E9.svg";
import WCwppbLuqH from "/public/openmoji/23EA.svg";
import KnvMTVVSnw from "/public/openmoji/23EB.svg";
import qffXIuPIsf from "/public/openmoji/23EC.svg";
import ErYbrrriyt from "/public/openmoji/23ED.svg";
import UMUBgfEuho from "/public/openmoji/23EE.svg";
import dawPYomVWR from "/public/openmoji/23EF.svg";
import IQgVjbMlCm from "/public/openmoji/23F0.svg";
import xcxhrYfJsN from "/public/openmoji/23F1.svg";
import vLmeCAoybl from "/public/openmoji/23F2.svg";
import wvtMVXuEiD from "/public/openmoji/23F3.svg";
import CREXXlprMM from "/public/openmoji/23F8.svg";
import hoefYHtcMU from "/public/openmoji/23F9.svg";
import OlHBJYhHul from "/public/openmoji/23FA.svg";
import FMMFizPkqP from "/public/openmoji/23FB.svg";
import uOJEvheiwq from "/public/openmoji/23FC.svg";
import LiiSXwDmmX from "/public/openmoji/23FD.svg";
import EriUCstGDu from "/public/openmoji/23FE.svg";
import GavcqljykT from "/public/openmoji/24C2.svg";
import CcGRNaCzAR from "/public/openmoji/25A1.svg";
import kEtkyxdXse from "/public/openmoji/25AA.svg";
import CDmFZHpiGu from "/public/openmoji/25AB.svg";
import JthUseFfhB from "/public/openmoji/25AC.svg";
import GsTNSDxtzF from "/public/openmoji/25AD.svg";
import PRJqBoGGEp from "/public/openmoji/25AE.svg";
import FeUzlCYKed from "/public/openmoji/25B6.svg";
import ujtwmrRwdJ from "/public/openmoji/25C0.svg";
import nJdbzUPXWW from "/public/openmoji/25C9-FE0F-200D-1F534-200D-25AE-FE0F.svg";
import SVemTbNkMS from "/public/openmoji/25C9-FE0F-200D-1F534.svg";
import bbDgibuAgK from "/public/openmoji/25C9.svg";
import TvorFAhQRt from "/public/openmoji/25D0.svg";
import ZMfXKUnWIq from "/public/openmoji/25D1.svg";
import mGGamGQQfb from "/public/openmoji/25E7.svg";
import zfBNLKrRtS from "/public/openmoji/25E8.svg";
import tSJlwwtykc from "/public/openmoji/25E9.svg";
import sKOyuqLvjo from "/public/openmoji/25EA.svg";
import dxuNFWClVP from "/public/openmoji/25ED.svg";
import oyUknhdWsX from "/public/openmoji/25EE.svg";
import tfKxRUcKxa from "/public/openmoji/25FB.svg";
import WLAVAsYtad from "/public/openmoji/25FC.svg";
import dCuvHjeMfy from "/public/openmoji/25FD.svg";
import FBVihhfLfS from "/public/openmoji/25FE.svg";
import FnIiLklJZO from "/public/openmoji/2600.svg";
import DgjUzDxQya from "/public/openmoji/2601.svg";
import uigwjbBIMx from "/public/openmoji/2602.svg";
import iQdjdfSwPZ from "/public/openmoji/2603.svg";
import gUvKgsCWVC from "/public/openmoji/2604.svg";
import DNkhhUahZo from "/public/openmoji/2605.svg";
import yAYgixrnFZ from "/public/openmoji/260E.svg";
import ZfBlezSSuq from "/public/openmoji/2611.svg";
import LrQijKMzuo from "/public/openmoji/2614.svg";
import rCIhQytxOg from "/public/openmoji/2615.svg";
import cGzPoGIqDM from "/public/openmoji/2618.svg";
import XLhBIHnXZL from "/public/openmoji/261D-1F3FB.svg";
import wYkmcbPYLT from "/public/openmoji/261D-1F3FC.svg";
import UlSvPgJBKx from "/public/openmoji/261D-1F3FD.svg";
import euxMdWnQxG from "/public/openmoji/261D-1F3FE.svg";
import kNBoaSRyzq from "/public/openmoji/261D-1F3FF.svg";
import pddZwXlWcx from "/public/openmoji/261D.svg";
import pbuUNRDpEc from "/public/openmoji/2620.svg";
import QQSapYylZI from "/public/openmoji/2622.svg";
import fjuRZZdkIH from "/public/openmoji/2623.svg";
import cITIAZYPTt from "/public/openmoji/2626.svg";
import slSbsdQmfI from "/public/openmoji/262A.svg";
import IHRrVEuuds from "/public/openmoji/262E.svg";
import ZQqcqUDhoU from "/public/openmoji/262F.svg";
import PdPHsfxokq from "/public/openmoji/2638.svg";
import ZLbIczLDMy from "/public/openmoji/2639.svg";
import cNIxdtMVWI from "/public/openmoji/263A.svg";
import kBoVfHRnrV from "/public/openmoji/2640.svg";
import IRusfIkXSd from "/public/openmoji/2642.svg";
import jRwuqBITem from "/public/openmoji/2648.svg";
import QgHjDMLRSY from "/public/openmoji/2649.svg";
import UQWkRdGNOV from "/public/openmoji/264A.svg";
import lfGZyWQjId from "/public/openmoji/264B.svg";
import UxeaQXdDfc from "/public/openmoji/264C.svg";
import upmefmISZO from "/public/openmoji/264D.svg";
import FSqZmPnGYr from "/public/openmoji/264E.svg";
import YzJFYiiXwg from "/public/openmoji/264F.svg";
import VACFnrkmlI from "/public/openmoji/2650.svg";
import FzJywAYsCD from "/public/openmoji/2651.svg";
import wnfmatURBE from "/public/openmoji/2652.svg";
import EUYdDcykCb from "/public/openmoji/2653.svg";
import DzJqHdgjNT from "/public/openmoji/265F.svg";
import QntojsYHOM from "/public/openmoji/2660.svg";
import bvvueaPNau from "/public/openmoji/2663.svg";
import RSMHeoMLoN from "/public/openmoji/2665.svg";
import EcGSFtBNNr from "/public/openmoji/2666.svg";
import GHoBKDSdaJ from "/public/openmoji/2668.svg";
import lShRUZuSvG from "/public/openmoji/267B.svg";
import JZpjIAvTCf from "/public/openmoji/267E.svg";
import FVCtmoVxep from "/public/openmoji/267F.svg";
import nZEWJpyTAi from "/public/openmoji/2691-FE0F-200D-1F7E5.svg";
import yRaerzeCwy from "/public/openmoji/2691-FE0F-200D-1F7E6.svg";
import jZweeeGWpS from "/public/openmoji/2691-FE0F-200D-1F7E7.svg";
import MFhglyNxJN from "/public/openmoji/2691-FE0F-200D-1F7E8.svg";
import tMAlAAucTS from "/public/openmoji/2691-FE0F-200D-1F7E9-200D-2605-FE0F.svg";
import mAozEcqXTP from "/public/openmoji/2691-FE0F-200D-1F7E9.svg";
import jSHthJnsWT from "/public/openmoji/2691-FE0F-200D-1F7EA.svg";
import XkaJkrtYZW from "/public/openmoji/2691-FE0F-200D-1F7EB.svg";
import xHeYsyHfNV from "/public/openmoji/2692.svg";
import fkTzIDyuwx from "/public/openmoji/2693.svg";
import GkLyfRyZMD from "/public/openmoji/2694.svg";
import ihNoFgPByL from "/public/openmoji/2695.svg";
import pYPBHHIXAh from "/public/openmoji/2696.svg";
import QqQHBTUaJa from "/public/openmoji/2697.svg";
import buNwPujEsK from "/public/openmoji/2699.svg";
import IfNlYmsVHZ from "/public/openmoji/269B.svg";
import LvyECddXAU from "/public/openmoji/269C.svg";
import uGAPTTpvYX from "/public/openmoji/26A0.svg";
import UDixmRvgTA from "/public/openmoji/26A1.svg";
import VGKPUvFMYx from "/public/openmoji/26A7.svg";
import qOKQuNsHEF from "/public/openmoji/26AA.svg";
import qkmJsqNwPx from "/public/openmoji/26AB.svg";
import SAiMrbyvFv from "/public/openmoji/26B0.svg";
import ylDhhocCxQ from "/public/openmoji/26B1.svg";
import elbzqxcjZX from "/public/openmoji/26BD.svg";
import LvzZfzctcD from "/public/openmoji/26BE.svg";
import yxWhFiUkFS from "/public/openmoji/26C4.svg";
import wPmSIykWrS from "/public/openmoji/26C5.svg";
import gxdtmDIqzC from "/public/openmoji/26C8.svg";
import AeSUOTlztV from "/public/openmoji/26CE.svg";
import UbfWdZjPEe from "/public/openmoji/26CF.svg";
import XViWpHeedj from "/public/openmoji/26D1.svg";
import sQEYClcWBr from "/public/openmoji/26D3.svg";
import BTIEiHcUDl from "/public/openmoji/26D4.svg";
import sQDtLaqXVl from "/public/openmoji/26E9.svg";
import NPAxaPYpha from "/public/openmoji/26EA.svg";
import nTFGTruuaY from "/public/openmoji/26F0.svg";
import vwbxYvvead from "/public/openmoji/26F1.svg";
import iZtNajcixm from "/public/openmoji/26F2.svg";
import RjYCYrrQha from "/public/openmoji/26F3.svg";
import NgGYrpiRpV from "/public/openmoji/26F4.svg";
import dVixNRZNza from "/public/openmoji/26F5.svg";
import XaPLvpQoqq from "/public/openmoji/26F7.svg";
import BwZEQdKnIS from "/public/openmoji/26F8.svg";
import BJqitbqMTh from "/public/openmoji/26F9-1F3FB-200D-2640-FE0F.svg";
import uJcHnlZDZQ from "/public/openmoji/26F9-1F3FB-200D-2642-FE0F.svg";
import oGvzctoPxk from "/public/openmoji/26F9-1F3FB.svg";
import gPNHekxXJE from "/public/openmoji/26F9-1F3FC-200D-2640-FE0F.svg";
import ccCsElsjmH from "/public/openmoji/26F9-1F3FC-200D-2642-FE0F.svg";
import rGjkySmYdj from "/public/openmoji/26F9-1F3FC.svg";
import QWbdLQpfxa from "/public/openmoji/26F9-1F3FD-200D-2640-FE0F.svg";
import XNNkENumtn from "/public/openmoji/26F9-1F3FD-200D-2642-FE0F.svg";
import nEXMpVCikJ from "/public/openmoji/26F9-1F3FD.svg";
import VlWrgrhtNm from "/public/openmoji/26F9-1F3FE-200D-2640-FE0F.svg";
import wcOidVRqny from "/public/openmoji/26F9-1F3FE-200D-2642-FE0F.svg";
import jHRehnGiMi from "/public/openmoji/26F9-1F3FE.svg";
import FHqCzblwhC from "/public/openmoji/26F9-1F3FF-200D-2640-FE0F.svg";
import bUEEjFkNFj from "/public/openmoji/26F9-1F3FF-200D-2642-FE0F.svg";
import MjujwpPVfU from "/public/openmoji/26F9-1F3FF.svg";
import nUBMplecxp from "/public/openmoji/26F9-FE0F-200D-2640-FE0F.svg";
import pGYUmFpnws from "/public/openmoji/26F9-FE0F-200D-2642-FE0F.svg";
import tkPXDriPVb from "/public/openmoji/26F9.svg";
import jVUTQhyGWR from "/public/openmoji/26FA.svg";
import stfrJcqoNg from "/public/openmoji/26FD.svg";
import gdKnebpTeJ from "/public/openmoji/2702.svg";
import bWAjSItrNZ from "/public/openmoji/2705.svg";
import QEXFRKLJJr from "/public/openmoji/2708.svg";
import hNUFbovISZ from "/public/openmoji/2709.svg";
import KnZjtsyrjL from "/public/openmoji/270A-1F3FB.svg";
import MwFsusaUmQ from "/public/openmoji/270A-1F3FC.svg";
import IeFWLglzOL from "/public/openmoji/270A-1F3FD.svg";
import CJydYoDfkK from "/public/openmoji/270A-1F3FE.svg";
import LkrBEvylEQ from "/public/openmoji/270A-1F3FF.svg";
import jLYAfxcqzX from "/public/openmoji/270A.svg";
import gkMoogFwKI from "/public/openmoji/270B-1F3FB.svg";
import dcIhDFwIyF from "/public/openmoji/270B-1F3FC.svg";
import asYozjNFXp from "/public/openmoji/270B-1F3FD.svg";
import QVkzdWpqae from "/public/openmoji/270B-1F3FE.svg";
import FPPcJaiFaw from "/public/openmoji/270B-1F3FF.svg";
import xxTLjCVBWg from "/public/openmoji/270B.svg";
import jUTEXwpmtt from "/public/openmoji/270C-1F3FB.svg";
import pVxIniNbkx from "/public/openmoji/270C-1F3FC.svg";
import YzKqSsNcWc from "/public/openmoji/270C-1F3FD.svg";
import xDWOrJZFuo from "/public/openmoji/270C-1F3FE.svg";
import eTEGRELGqK from "/public/openmoji/270C-1F3FF.svg";
import OsbZvaKDyo from "/public/openmoji/270C.svg";
import untezWqseb from "/public/openmoji/270D-1F3FB.svg";
import vlLSQouFst from "/public/openmoji/270D-1F3FC.svg";
import XheJXWRVWU from "/public/openmoji/270D-1F3FD.svg";
import NoYUlJFBTJ from "/public/openmoji/270D-1F3FE.svg";
import GXRjEcoYIn from "/public/openmoji/270D-1F3FF.svg";
import LkEgyPyrZV from "/public/openmoji/270D.svg";
import VNYuApMpHE from "/public/openmoji/270F.svg";
import CZMaCHsAyH from "/public/openmoji/2712.svg";
import QXPUBHDORA from "/public/openmoji/2714.svg";
import uzQLCdlDuG from "/public/openmoji/2716.svg";
import KLNNMycPCb from "/public/openmoji/271D.svg";
import GtcHhzEDOD from "/public/openmoji/2721.svg";
import QSGbsXwJRJ from "/public/openmoji/2728.svg";
import WlzwinuPtp from "/public/openmoji/2733.svg";
import YOFfLxxbta from "/public/openmoji/2734.svg";
import ONNzQGYGwu from "/public/openmoji/2744.svg";
import xLsjGMyspF from "/public/openmoji/2747.svg";
import ctlwnKcgcF from "/public/openmoji/274C.svg";
import zITRWqnUno from "/public/openmoji/274E.svg";
import MffKkJvcjl from "/public/openmoji/2753.svg";
import sLtYJqoYyP from "/public/openmoji/2754.svg";
import WilhajqVkp from "/public/openmoji/2755.svg";
import hTYFOEVaSi from "/public/openmoji/2757.svg";
import kNxyxOLCwH from "/public/openmoji/2763.svg";
import ypPYsKOuOE from "/public/openmoji/2764-FE0F-200D-1F525.svg";
import QaibyTaVnB from "/public/openmoji/2764-FE0F-200D-1FA79.svg";
import UaFylpeWpB from "/public/openmoji/2764.svg";
import YLXKVclylH from "/public/openmoji/2795.svg";
import mFYHPtGwgu from "/public/openmoji/2796.svg";
import tAJSVfUHjz from "/public/openmoji/2797.svg";
import tserKbbaGr from "/public/openmoji/27A1.svg";
import plioQQsyDl from "/public/openmoji/27B0.svg";
import TJWBPxTaTZ from "/public/openmoji/27BF.svg";
import ywzXJYkzDL from "/public/openmoji/2934.svg";
import FumEHbFpQT from "/public/openmoji/2935.svg";
import EUfTpcclZE from "/public/openmoji/2B05.svg";
import asvIooETrI from "/public/openmoji/2B06.svg";
import YeBsUcYKMo from "/public/openmoji/2B07.svg";
import MjVFmCqAVq from "/public/openmoji/2B0C.svg";
import XHsiOnmFao from "/public/openmoji/2B0D.svg";
import WcSvjAewdU from "/public/openmoji/2B1B.svg";
import SAxMsMBKda from "/public/openmoji/2B1C.svg";
import WTjdBEVbhA from "/public/openmoji/2B1F.svg";
import hNiVKvEHZO from "/public/openmoji/2B20.svg";
import XolVcfqfUP from "/public/openmoji/2B21-FE0F-200D-1F308.svg";
import nKnzWkjTZv from "/public/openmoji/2B21-FE0F-200D-1F7E5.svg";
import QvexYtrkBZ from "/public/openmoji/2B21-FE0F-200D-1F7E6.svg";
import GlzxyMvlaN from "/public/openmoji/2B21-FE0F-200D-1F7E7.svg";
import DacZTtkQIe from "/public/openmoji/2B21-FE0F-200D-1F7E8.svg";
import tzbzNfDBOf from "/public/openmoji/2B21-FE0F-200D-1F7E9.svg";
import eGhseCFqlf from "/public/openmoji/2B21-FE0F-200D-1F7EA.svg";
import EeJsYFmFic from "/public/openmoji/2B21-FE0F-200D-1F7EB.svg";
import HOFxdDIgfG from "/public/openmoji/2B21.svg";
import EvFBLvrsWo from "/public/openmoji/2B22.svg";
import DvIQfpeaPh from "/public/openmoji/2B23.svg";
import rRDPMydpld from "/public/openmoji/2B24.svg";
import nMxdznykdz from "/public/openmoji/2B2E.svg";
import faEkTJTEPD from "/public/openmoji/2B2F.svg";
import orcfpyGfSC from "/public/openmoji/2B50.svg";
import csPxuBvIei from "/public/openmoji/2B55.svg";
import GfZPriqFAR from "/public/openmoji/2B58.svg";
import HXsvlZNmWP from "/public/openmoji/2B8F.svg";
import kpDyaOXXSt from "/public/openmoji/2BBA.svg";
import mSdBpGDlZg from "/public/openmoji/2BBB.svg";
import favOZVNYjX from "/public/openmoji/2BBC.svg";
import DnmZkdqMHd from "/public/openmoji/2BC3.svg";
import dgLtinSCUW from "/public/openmoji/2BC4.svg";
import GFgapMnBBb from "/public/openmoji/2BEA.svg";
import tphJvGsQNY from "/public/openmoji/2BEB.svg";
import XhTkSLCufG from "/public/openmoji/3030.svg";
import nnUsUXvsQe from "/public/openmoji/303D.svg";
import kZkNrpauOH from "/public/openmoji/3297.svg";
import tnmsWZarvv from "/public/openmoji/3299.svg";
import RFYTMuMWGI from "/public/openmoji/E000.svg";
import mHHhDdNhJT from "/public/openmoji/E001.svg";
import zvvQzQtcdp from "/public/openmoji/E002.svg";
import yGXsdCecBp from "/public/openmoji/E003.svg";
import ZctnGXjgPt from "/public/openmoji/E004.svg";
import IibnrEUZWv from "/public/openmoji/E005.svg";
import RQjicgjpSw from "/public/openmoji/E006.svg";
import GjAzJvMfkf from "/public/openmoji/E007.svg";
import HwdrHpbZHd from "/public/openmoji/E008.svg";
import XpxHZIhGiA from "/public/openmoji/E009.svg";
import JQkFRtaoCB from "/public/openmoji/E010.svg";
import NpXqTXRKUk from "/public/openmoji/E011.svg";
import wZEYIzhbBd from "/public/openmoji/E040.svg";
import qpNHajpAqg from "/public/openmoji/E041.svg";
import rmxyIciPmL from "/public/openmoji/E042.svg";
import gLqkFsMXyj from "/public/openmoji/E043.svg";
import YhzyCIewzz from "/public/openmoji/E044.svg";
import ygKQtAwGLs from "/public/openmoji/E045.svg";
import eTIvWxamyj from "/public/openmoji/E046.svg";
import zwfFZtmWMb from "/public/openmoji/E047.svg";
import JthYmniYQs from "/public/openmoji/E048.svg";
import cSCbBKbteG from "/public/openmoji/E049.svg";
import WcwwCkCkcy from "/public/openmoji/E04A.svg";
import AAAIVaZxlK from "/public/openmoji/E04B.svg";
import fUWwwVUcBl from "/public/openmoji/E050.svg";
import QpPrsKSxiu from "/public/openmoji/E051.svg";
import vzPclhgkwI from "/public/openmoji/E052.svg";
import wXcIHdwyow from "/public/openmoji/E053.svg";
import mosHYnCDKJ from "/public/openmoji/E054.svg";
import zxypaWvONn from "/public/openmoji/E055.svg";
import YgwdnpVvpD from "/public/openmoji/E056.svg";
import nGexEYlLHb from "/public/openmoji/E057.svg";
import uehRsnKAKZ from "/public/openmoji/E058.svg";
import TzyMKCBejj from "/public/openmoji/E059.svg";
import FgwTfwrEfx from "/public/openmoji/E05A.svg";
import HXTUrDnQpv from "/public/openmoji/E05B.svg";
import mbXOGSoFVU from "/public/openmoji/E05C.svg";
import EFSKXMPWDz from "/public/openmoji/E05D.svg";
import uyGVERMWtF from "/public/openmoji/E05E.svg";
import XGSfFWldzI from "/public/openmoji/E05F.svg";
import GucwmvpGRj from "/public/openmoji/E060.svg";
import QUZGOZpxhw from "/public/openmoji/E061.svg";
import uiPMnnxlqQ from "/public/openmoji/E062.svg";
import kssMDBWWZp from "/public/openmoji/E063.svg";
import hhkaPrPwvi from "/public/openmoji/E064.svg";
import YFgpJhKoMf from "/public/openmoji/E065.svg";
import EvnzESYJSA from "/public/openmoji/E066.svg";
import gYnULsybaM from "/public/openmoji/E067.svg";
import YsgKaHzjcW from "/public/openmoji/E068.svg";
import AhSJUwnzkt from "/public/openmoji/E069.svg";
import IzIshlLtvd from "/public/openmoji/E06A.svg";
import pGTktSuvqP from "/public/openmoji/E06B.svg";
import DhvtqSqnYL from "/public/openmoji/E06C.svg";
import XYgVZCSxqC from "/public/openmoji/E06D.svg";
import zNMIsPOMML from "/public/openmoji/E080.svg";
import IwOtQTmwTY from "/public/openmoji/E081.svg";
import fmQWxQNsEI from "/public/openmoji/E082.svg";
import YpWulqgiHW from "/public/openmoji/E083.svg";
import apgYMcEiZs from "/public/openmoji/E084.svg";
import oISHqBtKFB from "/public/openmoji/E085.svg";
import aTYmYVkbqx from "/public/openmoji/E086.svg";
import JQrEiaIxRT from "/public/openmoji/E087.svg";
import mVKLOWIPus from "/public/openmoji/E088.svg";
import gAmksnhGLf from "/public/openmoji/E089.svg";
import jVCVrobiuw from "/public/openmoji/E08A.svg";
import RKrUYLekyv from "/public/openmoji/E08B.svg";
import qjCocFUtJH from "/public/openmoji/E08C.svg";
import SHOUCkkHVQ from "/public/openmoji/E08D.svg";
import TSsIWMZfaW from "/public/openmoji/E08E.svg";
import YosthEuPEj from "/public/openmoji/E08F.svg";
import YQJjLHNHnm from "/public/openmoji/E090.svg";
import TVNbWuwMvK from "/public/openmoji/E091.svg";
import yGHJSKXemu from "/public/openmoji/E092.svg";
import kRPwczodKJ from "/public/openmoji/E093.svg";
import ySKXQCSqsz from "/public/openmoji/E094.svg";
import miJzRBDRqi from "/public/openmoji/E095.svg";
import PvsKBJCYEO from "/public/openmoji/E096.svg";
import WEceDyqVxo from "/public/openmoji/E097.svg";
import zmCtCvvcdG from "/public/openmoji/E098.svg";
import hRDDEhQSEh from "/public/openmoji/E099.svg";
import VZsVfWorBb from "/public/openmoji/E09A.svg";
import ORYMqKjoLz from "/public/openmoji/E09B.svg";
import GvvqjRdexO from "/public/openmoji/E09C.svg";
import zXujqgvvuu from "/public/openmoji/E09D.svg";
import NbOhwvHDvy from "/public/openmoji/E09E.svg";
import TuyIdRtgtt from "/public/openmoji/E09F.svg";
import wYOLYrhVFI from "/public/openmoji/E0A0.svg";
import RjxRYwIVUS from "/public/openmoji/E0A1.svg";
import vpqCdTPgnU from "/public/openmoji/E0A2.svg";
import UhdYzSVaoh from "/public/openmoji/E0A3.svg";
import tqPEiBefKr from "/public/openmoji/E0A4.svg";
import bQSrxyXSKm from "/public/openmoji/E0A5.svg";
import sGYeVCUkYI from "/public/openmoji/E0A6.svg";
import FwOjepQIIl from "/public/openmoji/E0A7.svg";
import ATyzGEdRJB from "/public/openmoji/E0A8.svg";
import cJmNLNHJZm from "/public/openmoji/E0A9.svg";
import egjTVQWHGg from "/public/openmoji/E0AA.svg";
import bpIGAMyAEM from "/public/openmoji/E0AB.svg";
import JEACimnrjq from "/public/openmoji/E0AC-200D-2640-FE0F.svg";
import QIOCHyOGav from "/public/openmoji/E0AC-200D-2642-FE0F.svg";
import xlDliOQZGd from "/public/openmoji/E0AC.svg";
import fDgzNSIwmE from "/public/openmoji/E0AD-200D-2640-FE0F.svg";
import HLNOrjbiYD from "/public/openmoji/E0AD-200D-2642-FE0F.svg";
import KSyYDDDMWp from "/public/openmoji/E0AD.svg";
import FGMVsrLSjl from "/public/openmoji/E0AE.svg";
import zQOqWTctSs from "/public/openmoji/E0AF.svg";
import LPsBBHogiN from "/public/openmoji/E0B0.svg";
import ilbxCzPGRJ from "/public/openmoji/E0B1.svg";
import mGcwqQcsTs from "/public/openmoji/E0B2.svg";
import RDoUgthdun from "/public/openmoji/E0B3.svg";
import xuhYxHkXSF from "/public/openmoji/E0B4.svg";
import bBCEDjjeLn from "/public/openmoji/E0C0.svg";
import mbZuBuQqGb from "/public/openmoji/E0C1.svg";
import HYuMzxFnQS from "/public/openmoji/E0C2.svg";
import OhRviCzgyN from "/public/openmoji/E0C3.svg";
import ALdIoCKVbT from "/public/openmoji/E0C4.svg";
import rHTReUxaqY from "/public/openmoji/E0C5.svg";
import gWFrtwBjqn from "/public/openmoji/E0C6.svg";
import HVbhyzRjNl from "/public/openmoji/E0C7.svg";
import tRctIOQcIt from "/public/openmoji/E0C8.svg";
import TsJUebGCPs from "/public/openmoji/E0C9.svg";
import sIgalTJbeu from "/public/openmoji/E0CA.svg";
import jDTXYYXMAx from "/public/openmoji/E0CB.svg";
import PzZazkRoCm from "/public/openmoji/E0CC.svg";
import XZUlyiSpYC from "/public/openmoji/E0FF.svg";
import bMNtamCHHC from "/public/openmoji/E100.svg";
import oHBpdQwrgP from "/public/openmoji/E101.svg";
import UqsPIiQzVy from "/public/openmoji/E102.svg";
import xCniKvixXX from "/public/openmoji/E103.svg";
import evdHoXrvHQ from "/public/openmoji/E104.svg";
import SWFQZCEvYI from "/public/openmoji/E105.svg";
import lIPrSSoEny from "/public/openmoji/E106.svg";
import rHjWdTpGcf from "/public/openmoji/E107.svg";
import WVrEITTnji from "/public/openmoji/E108.svg";
import QZYyweTomw from "/public/openmoji/E109.svg";
import otSAIbNuSK from "/public/openmoji/E10A.svg";
import ecGwlTRmUC from "/public/openmoji/E10B.svg";
import YTieRMMLXq from "/public/openmoji/E10C.svg";
import ScUlQogRYt from "/public/openmoji/E10D.svg";
import uWyBfojBBo from "/public/openmoji/E140.svg";
import tirSBYZrie from "/public/openmoji/E141.svg";
import yDWYmTcIPa from "/public/openmoji/E142.svg";
import wXYJLAvvWG from "/public/openmoji/E143.svg";
import zKzyJWDkwK from "/public/openmoji/E144.svg";
import HoHOFuHYra from "/public/openmoji/E145.svg";
import jxNuhuxsAL from "/public/openmoji/E146.svg";
import FDihjkUiJX from "/public/openmoji/E147.svg";
import PyIjqmHwZj from "/public/openmoji/E148.svg";
import IicrfteArN from "/public/openmoji/E149.svg";
import NyJCcHTcpl from "/public/openmoji/E14A.svg";
import ALUijinpUL from "/public/openmoji/E150.svg";
import ofEOEOFDSP from "/public/openmoji/E151.svg";
import spAQmEVkgU from "/public/openmoji/E152.svg";
import vFpZNicFjF from "/public/openmoji/E153.svg";
import qyVqprGaWS from "/public/openmoji/E154.svg";
import cSkCxgkJGY from "/public/openmoji/E155.svg";
import kmnNFXVjMX from "/public/openmoji/E156.svg";
import tizjeZCGtK from "/public/openmoji/E157.svg";
import iLRkGxRSdw from "/public/openmoji/E181.svg";
import gGhOXEVdvI from "/public/openmoji/E182.svg";
import dDVzFyyzhH from "/public/openmoji/E183.svg";
import xFfunAQKDd from "/public/openmoji/E184.svg";
import ctTcnayFHl from "/public/openmoji/E185.svg";
import MFuNGwuSuC from "/public/openmoji/E186.svg";
import ljElKwTJrj from "/public/openmoji/E187.svg";
import kuordztOby from "/public/openmoji/E188.svg";
import JnCfMWIGVX from "/public/openmoji/E189.svg";
import hOfPPASIpK from "/public/openmoji/E1C0.svg";
import HHReVmxrpU from "/public/openmoji/E1C1.svg";
import SwjHEdlxNg from "/public/openmoji/E1C2.svg";
import vxPEesLLGj from "/public/openmoji/E1C3.svg";
import KmtdWGNGaH from "/public/openmoji/E1C4.svg";
import UeXnNLmcLc from "/public/openmoji/E1C6.svg";
import tjzozqecVb from "/public/openmoji/E1C7.svg";
import HbOMXIijDd from "/public/openmoji/E1C8.svg";
import DEeclPeLFq from "/public/openmoji/E1C9.svg";
import kqDPggkcRj from "/public/openmoji/E1CA.svg";
import XoXVlQitSQ from "/public/openmoji/E1CB.svg";
import CftbKGdPXT from "/public/openmoji/E1CC.svg";
import fjHVddIQYA from "/public/openmoji/E1CD.svg";
import uQrFJfEBNG from "/public/openmoji/E1CE.svg";
import ppYcrCwgFi from "/public/openmoji/E1CF.svg";
import pgXFyeQXYZ from "/public/openmoji/E1D0.svg";
import eJLHCeOXBX from "/public/openmoji/E1D1.svg";
import muokGlmVSu from "/public/openmoji/E1D2.svg";
import LdsfynFISk from "/public/openmoji/E1D3.svg";
import RWQmfOnBqG from "/public/openmoji/E1D4.svg";
import MUmWDkExjR from "/public/openmoji/E1D5.svg";
import DjZtMpsoWZ from "/public/openmoji/E1D6.svg";
import WDdDShKstd from "/public/openmoji/E1D7.svg";
import BmipqGdLTQ from "/public/openmoji/E1D8.svg";
import hsLkqMSbSW from "/public/openmoji/E1D9.svg";
import UVumONUcjA from "/public/openmoji/E200.svg";
import oufsVyxfio from "/public/openmoji/E201.svg";
import zFthQAGgwh from "/public/openmoji/E202.svg";
import sBVQnPuhqi from "/public/openmoji/E203.svg";
import PfcilUlaDY from "/public/openmoji/E204.svg";
import npxnCkZiww from "/public/openmoji/E205.svg";
import GjcSnthcFC from "/public/openmoji/E206.svg";
import hHtTTuQMEt from "/public/openmoji/E207.svg";
import CFwqEfyYAc from "/public/openmoji/E208.svg";
import cbRHawtkeX from "/public/openmoji/E209.svg";
import xQWrpIopKB from "/public/openmoji/E20A.svg";
import nWFcMSVwhH from "/public/openmoji/E20B.svg";
import jjtlAIuluh from "/public/openmoji/E20C.svg";
import NCOvfcrYFt from "/public/openmoji/E20D.svg";
import EUFsPFPwCQ from "/public/openmoji/E20E.svg";
import kQiNBOGXOb from "/public/openmoji/E20F.svg";
import TcFXtkIRmz from "/public/openmoji/E210.svg";
import jhHiWrawXC from "/public/openmoji/E211.svg";
import EIjNLPGbdP from "/public/openmoji/E212.svg";
import ZBbunCSMmB from "/public/openmoji/E213.svg";
import cEHwyGjODu from "/public/openmoji/E214.svg";
import LjhvIgzSSY from "/public/openmoji/E215.svg";
import lnFfYrUPka from "/public/openmoji/E216.svg";
import PcsavzBpHF from "/public/openmoji/E240.svg";
import XyjnSzmgAE from "/public/openmoji/E241.svg";
import xVJmQDwwHY from "/public/openmoji/E242.svg";
import QDoQxLynZX from "/public/openmoji/E243.svg";
import QKZGfYdmVp from "/public/openmoji/E244.svg";
import cyOBVyPmPe from "/public/openmoji/E245.svg";
import kYTaVFQckv from "/public/openmoji/E246.svg";
import FfEicHqlSb from "/public/openmoji/E247.svg";
import gOBFNMZnKq from "/public/openmoji/E248.svg";
import sahVbpVVGy from "/public/openmoji/E249.svg";
import ZIBKJkZDzF from "/public/openmoji/E24A.svg";
import uqdFpDpvbX from "/public/openmoji/E24B.svg";
import CFUsTlOrWR from "/public/openmoji/E24C.svg";
import bBJXVIcvzP from "/public/openmoji/E24D.svg";
import gXjJRjJpOg from "/public/openmoji/E24E.svg";
import VrrNFYpoYG from "/public/openmoji/E24F.svg";
import teoHIGKwfW from "/public/openmoji/E250.svg";
import HpEsMXlFTa from "/public/openmoji/E251.svg";
import pLBvCxwByL from "/public/openmoji/E252.svg";
import LpeOkjxcwT from "/public/openmoji/E253.svg";
import IaacJhadjb from "/public/openmoji/E254.svg";
import XBplNYgXkY from "/public/openmoji/E255.svg";
import DMBjeWMkRV from "/public/openmoji/E256.svg";
import XLGkmYUcaO from "/public/openmoji/E257.svg";
import gcMcmugXDN from "/public/openmoji/E258.svg";
import ftADryOMsz from "/public/openmoji/E259.svg";
import jYOljPnUVD from "/public/openmoji/E25A.svg";
import AlGatQeyIO from "/public/openmoji/E25B.svg";
import vntzrlMusr from "/public/openmoji/E25C.svg";
import vHurbuqYuT from "/public/openmoji/E25D.svg";
import GApbjooqhY from "/public/openmoji/E25E.svg";
import olFRseZdfP from "/public/openmoji/E25F.svg";
import mzrSANkgoU from "/public/openmoji/E260.svg";
import lSaFfpgXYy from "/public/openmoji/E261.svg";
import fjoVFALzGE from "/public/openmoji/E262.svg";
import zYToeTEQKS from "/public/openmoji/E263.svg";
import fscecdGgdn from "/public/openmoji/E264.svg";
import uOODRnnBOU from "/public/openmoji/E265.svg";
import UNwdusupAc from "/public/openmoji/E266.svg";
import gaHHVcjWBI from "/public/openmoji/E267.svg";
import JRJeGhnkNS from "/public/openmoji/E268.svg";
import mAjxqGwyMg from "/public/openmoji/E269.svg";
import bGwLXQjHex from "/public/openmoji/E280.svg";
import zmqBeyqpXu from "/public/openmoji/E281.svg";
import fAXDXNYRPx from "/public/openmoji/E282.svg";
import CZrXkPDvNF from "/public/openmoji/E283.svg";
import ktuOltyCSL from "/public/openmoji/E2C0.svg";
import FPtKRxKSoQ from "/public/openmoji/E2C1.svg";
import FNqmeIiPLw from "/public/openmoji/E2C2.svg";
import AechduEEmT from "/public/openmoji/E2C3.svg";
import BEhvbcjDLI from "/public/openmoji/E2C4.svg";
import HmRNpmnxmq from "/public/openmoji/E2C6.svg";
import rEDMuskSQw from "/public/openmoji/E2C7.svg";
import spfeaWoYgc from "/public/openmoji/E2C8.svg";
import YWsTzJoDss from "/public/openmoji/E2C9.svg";
import vJwGJrHPZK from "/public/openmoji/E2CA.svg";
import nNbQLeivSM from "/public/openmoji/E2CB.svg";
import drzBlKlxHI from "/public/openmoji/E2CC.svg";
import IwySqZiwGf from "/public/openmoji/E2CD.svg";
import PadVDhTqav from "/public/openmoji/E2CE.svg";
import cWiGbcjNkh from "/public/openmoji/E2CF.svg";
import byUiQpLtUt from "/public/openmoji/E2D0.svg";
import QoUBxAHvsW from "/public/openmoji/E2D1.svg";
import nQvufOwqVt from "/public/openmoji/E2D2.svg";
import qUuTdbgJwb from "/public/openmoji/E2D3.svg";
import KAnFRUuYfg from "/public/openmoji/E2D4.svg";
import nFdLWsSPZu from "/public/openmoji/E2D5.svg";
import kEtZnKDJhp from "/public/openmoji/E2D6.svg";
import vdaSlYgKLZ from "/public/openmoji/E2D7.svg";
import KPAtjqecxa from "/public/openmoji/E2D8.svg";
import jOKzhDohcK from "/public/openmoji/E2D9.svg";
import XwtQRsMOpI from "/public/openmoji/E2DA.svg";
import MKlOjuqkmZ from "/public/openmoji/E300.svg";
import EeiEeEjHWy from "/public/openmoji/E301.svg";
import jpnWAeRVIm from "/public/openmoji/E302.svg";
import dmSKFPFVoj from "/public/openmoji/E303.svg";
import KGchjaQOBQ from "/public/openmoji/E305.svg";
import BaFTiOzyyW from "/public/openmoji/E306.svg";
import gNeswHDXcI from "/public/openmoji/E307.svg";
import ioHPiryuPZ from "/public/openmoji/E308.svg";
import dTpblWLzar from "/public/openmoji/E309.svg";
import rLNEckfWMA from "/public/openmoji/E30A.svg";
import zyXayUAPJv from "/public/openmoji/E30B.svg";
import lHXGzOGLym from "/public/openmoji/E30C.svg";
import LEWkEfCZYb from "/public/openmoji/E30D.svg";
import UEyFmgFlDx from "/public/openmoji/E30E.svg";
import wbqXdyDbVK from "/public/openmoji/E30F.svg";
import UQQOQMEbAK from "/public/openmoji/E312.svg";
import oLyvOGkRbz from "/public/openmoji/E313.svg";
import NCzmFUZtWU from "/public/openmoji/E314.svg";
import VDpHNPTDBl from "/public/openmoji/E315.svg";
import OfsVmomuZY from "/public/openmoji/E316.svg";
import xgsBWMvixP from "/public/openmoji/E318.svg";
import CHiqEwMKXx from "/public/openmoji/E319.svg";
import VvogqckruU from "/public/openmoji/E31A.svg";
import zjAQjibWFj from "/public/openmoji/E31B.svg";
import dtJgsMiFpB from "/public/openmoji/E31C.svg";
import NepTCqdDtW from "/public/openmoji/E31D.svg";
import GEUVyifxsF from "/public/openmoji/E31E.svg";
import DJDHKgKUfa from "/public/openmoji/E31F.svg";
import EZMkcHkkrt from "/public/openmoji/E320.svg";
import EBSYvdEjlM from "/public/openmoji/E321.svg";
import QoheNSyMoM from "/public/openmoji/E322.svg";
import HJtbAQIrTJ from "/public/openmoji/E324.svg";
import xwsgEFNEqO from "/public/openmoji/E325.svg";
import BNgDOLnegk from "/public/openmoji/E326.svg";
import jdVLCJCnff from "/public/openmoji/E327.svg";
import dvxRDArkcl from "/public/openmoji/E328.svg";
import viRRshkWRS from "/public/openmoji/E329.svg";
import MIyeIvtuIH from "/public/openmoji/E32B.svg";
import wWNIytaaCx from "/public/openmoji/E340.svg";
import ZqOFvPsiPq from "/public/openmoji/E341.svg";
import NwxIFrKDfc from "/public/openmoji/E342.svg";
import fDCEOcDpUD from "/public/openmoji/E343.svg";
import kaAnAaBaXP from "/public/openmoji/E344.svg";
import FPeRbotwof from "/public/openmoji/E345.svg";
import CghBZWqrOT from "/public/openmoji/E346.svg";
import EZlQHIiVXR from "/public/openmoji/E347.svg";
import MFQEAFEfhF from "/public/openmoji/E348.svg";
import zXXQnqOwOw from "/public/openmoji/E380.svg";
import gYThLlQpLc from "/public/openmoji/E381.svg";
import BOHxuNeYmH from "/public/openmoji/F000.svg";
import xpDilbcvFF from "/public/openmoji/F77A.svg";
import pRGXJnkmzz from "/public/openmoji/F8FF.svg";