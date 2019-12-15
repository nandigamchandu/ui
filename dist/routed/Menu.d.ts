import { Helpers } from 'devfractal-ui-core';
import React from 'react';
declare type MenuSize = 'small' | 'medium' | 'large';
export interface MenuProps extends React.HTMLAttributes<HTMLElement>, Helpers {
    /**
     * To resize the Menu Content
     */
    readonly size?: MenuSize;
    readonly baseURL?: string;
}
export declare const Menu: React.FC<MenuProps>;
export interface MenuLabelProps extends React.HTMLAttributes<HTMLElement>, Helpers {
}
export declare const MenuLabel: React.FC<MenuLabelProps>;
export interface MenuListProps extends React.HTMLAttributes<HTMLElement>, Helpers {
}
export declare const MenuList: React.FC<MenuListProps>;
export interface MenuItemProps extends React.LiHTMLAttributes<HTMLLIElement>, Helpers {
    readonly href?: string;
    readonly active?: boolean;
    readonly value?: string;
}
export declare const MenuItem: React.FC<MenuItemProps>;
export {};
//# sourceMappingURL=Menu.d.ts.map