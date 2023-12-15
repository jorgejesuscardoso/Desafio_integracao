/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { AsideLeftProfile } from "../asides/AsideLeftProfile"
import { AsideRightProfile } from "../asides/AsideRightProfile"
import { menuIcon } from "../utils/exports";
import { FloatMenuIcon, Main, MainContentProfile, ProfileImg } from "./Style";
import { HasToken } from "../utils/storage";
import { FloatMenu } from "../float-menu/FloatMenu";
import { ProfilePhoto } from "../photo/ProfilePhoto";
import Header from "../header/Hader";
import { Feed } from "../feed/Feed";

export function Profile() {
  const [showFloatMenu, setShowFloatMenu] = useState(false);

  useEffect(() => {
    HasToken();
  },[])

  const handleShowFloatMenu = () => {
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
      <FloatMenuIcon
        onClick={ handleShowFloatMenu } >
          <img src={ menuIcon } alt="Menu" />
      </FloatMenuIcon>
      { showFloatMenu && <FloatMenu /> }
    
      <AsideLeftProfile />
      <AsideRightProfile />
      <Feed />
    </MainContentProfile>
   </Main>
 )
}