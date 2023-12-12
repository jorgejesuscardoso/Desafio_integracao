import { Link } from 'react-router-dom';
import { notPhotoIco} from '../utils/exports';
import { Nav, UserPhoto } from './style';
import { useState } from 'react';
import { FloatMenu } from '../float-menu/FloatMenu';
import Header from '../header/Hader';
import { IconesNav } from './Icones';

export function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }
  return (
    <Header>
      <Nav>
        <Link to='/profile' className='userphoto'>
          <UserPhoto src={ notPhotoIco } alt="Foto do usuário" />
        </Link>
        <IconesNav
          toggleMenu={ toggleMenu }
        />
      </Nav>
      { showMenu && <FloatMenu /> }
    </Header>
  )
}