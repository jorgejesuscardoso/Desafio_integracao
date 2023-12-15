/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { AsideLeftProfile } from "../asides/AsideLeftProfile"
import { AsideRightProfile } from "../asides/AsideRightProfile"
import { IconsMenu, Main, MainContentProfile, ProfileImg } from "./Style";
import { HasToken } from "../utils/storage";
import { ProfilePhoto } from "../photo/ProfilePhoto";
import Header from "../header/Hader";
import { Feed } from "../feed/Feed";
import { IconesNav } from "../navbar/Icones";
import { FloatMenu } from "../float-menu/FloatMenu";

export function Profile() {
  const [showFloatMenu, setShowFloatMenu] = useState(false);

  useEffect(() => {
    HasToken();
  },[])

  const toggleMenu = () => {
    setShowFloatMenu(!showFloatMenu);
  }

 return (
   <Main>
    <Header>
      <ProfileImg>      
        <ProfilePhoto />
      </ProfileImg>
    </Header>
    <MainContentProfile>
      <IconsMenu>
        <IconesNav
          toggleMenu={ toggleMenu }
        />
      </IconsMenu>
      { showFloatMenu && <FloatMenu />}
      <AsideLeftProfile />
      <AsideRightProfile />
      <Feed />
    </MainContentProfile>
   </Main>
 )
}