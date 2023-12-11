import { Link } from 'react-router-dom';
import { menuIcon, notPhotoIco } from '../utils/exports';
import { Nav, ImgMenuIcon, UserPhoto } from './style';
import { useState } from 'react';
import { FloatMenu } from '../float-menu/FloatMenu';
import Header from '../header/Hader';

export function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  }
  return (
    <Header>
      <Nav>
        <Link to='/profile' className='userphoto'>
          <UserPhoto src={ notPhotoIco } alt="Foto do usuário" />
        </Link>
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/profile">Profile</a>
          </li>
          <li>
            <button onClick={ handleMenu } >            
              <ImgMenuIcon src={ menuIcon } alt="Icone de menu" />
            </button>          
          </li>
        </ul>
      </Nav>
      { showMenu && <FloatMenu /> }
    </Header>
  )
}