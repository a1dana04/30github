import LayoutSite from '@/components/layout/LayoutSite';
import LayoutPersonalAccount from '@/components/pages/personal-account/LayoutPersonalAccount/LayoutPersonalAccount';
import React, { FC, ReactNode } from 'react';

interface ILayoutProps{
    children:ReactNode
}

const Layout:FC<ILayoutProps> = ({children}) => {
    return (
        <LayoutPersonalAccount>
            {children}
        </LayoutPersonalAccount>
    );
};

export default Layout;