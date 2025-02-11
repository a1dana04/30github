import LayoutSite from '@/components/layout/LayoutSite';
import React, { FC, ReactNode } from 'react';

interface ILayoutProps{
    children:ReactNode
}

const Layout:FC<ILayoutProps> = ({children}) => {
    return (
        <LayoutSite>
            {children}
        </LayoutSite>
    );
};

export default Layout;