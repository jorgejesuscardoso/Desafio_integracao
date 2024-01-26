import React, { ReactNode, useEffect, useState } from 'react';
import { Banner, BannerImg } from './style';
import { GetPersonalData } from '../utils/getUserData';
import { User } from '../../types';
import { BannerDefault } from '../utils/exports';

interface HeaderProps {
    children: ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  const [banners, setBanners] = useState(BannerDefault);
  const { user } = GetPersonalData();
  useEffect(() => {
    const { banner } = user as User;
    if (banner) {
      setBanners(banner);
    }
  }, [user]);
  return (
    <Banner>
      <BannerImg src={ banners } alt="Banner" />
      <div>{children}</div>
    </Banner>
  );
};

export default Header;
