import { ToggleMenu } from "../types";
import { home, menuIcon, profile } from "../utils/exports";
import { HomeIcon, ImgMenuIcon, ProfileIcon } from "./style";

export const IconesNav = ({ toggleMenu }: ToggleMenu) => {
return (
    <ul>
      <li>
        <a href="/home"><HomeIcon src={ home } alt="Icone home" /></a>
      </li>
      <li>
        <a href="/profile"><ProfileIcon src={ profile } alt="Icone de perfil" /></a>
      </li>
      <li>
        <button onClick={ toggleMenu } >            
          <ImgMenuIcon src={ menuIcon } alt="Icone de menu" />
        </button>          
      </li>
    </ul>
  )
};