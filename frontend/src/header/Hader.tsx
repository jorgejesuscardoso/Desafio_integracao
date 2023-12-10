import React, { ReactNode } from 'react';

interface HeaderProps {
    children: ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
    return (
        <header>
            <h1>{children}</h1>
        </header>
    );
};

export default Header;
