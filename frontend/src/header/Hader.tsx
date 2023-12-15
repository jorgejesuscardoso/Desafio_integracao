import React, { ReactNode } from 'react';
import { Banner, BannerImg } from './style';
import { GetPersonalData } from '../utils/getUserData';
import { User } from '../types';

interface HeaderProps {
    children: ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
    const { user } = GetPersonalData();
    const { banner } = user as User;
    return (
        <Banner>
            <BannerImg src={ banner || '' } alt="Banner" />
            <div>{children}</div>
        </Banner>
    );
};

export default Header;
