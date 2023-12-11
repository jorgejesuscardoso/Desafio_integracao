/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { AsideLeftProfile } from "../asides/AsideLeftProfile"
import { AsideRightProfile } from "../asides/AsideRightProfile"
import { menuIcon, notPhotoIco } from "../utils/exports";
import { Banner, FloatMenuIcon, Main } from "./Style";
import { HasToken } from "../utils/storage";
import { FloatMenu } from "../float-menu/FloatMenu";

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
    <FloatMenuIcon
      onClick={ handleShowFloatMenu } >
        <img src={ menuIcon } alt="Menu" />
    </FloatMenuIcon>
    { showFloatMenu && <FloatMenu /> }
    <Banner>
      <img src={ notPhotoIco } alt="Foto de Perfil" />
    </Banner>
    <AsideLeftProfile />
    <AsideRightProfile />
   </Main>
 )
}