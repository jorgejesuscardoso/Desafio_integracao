import { Link } from 'react-router-dom';
import { Nav, UserPhoto } from './style';
import { useState } from 'react';
import { FloatMenu } from '../float-menu/FloatMenu';
import { IconesNav } from './Icones';
import { ProfilePhoto } from '../photo/ProfilePhoto';

export function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }
  return (
    <header>
      <Nav>
        <Link to='/profile' className='userphoto'>
          <UserPhoto>
            <ProfilePhoto />
          </UserPhoto>
        </Link>
        <IconesNav
          toggleMenu={ toggleMenu }
        />
      </Nav>
      { showMenu && <FloatMenu /> }
    </header>
  )
}