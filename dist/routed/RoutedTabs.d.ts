import { Helpers } from 'devfractal-ui-core';
import React from 'react';
declare type RoutedTabsSize = 'small' | 'medium' | 'large';
declare type RoutedTabsAlignment = 'centered' | 'right';
declare type RoutedTabsStyle = 'boxed' | 'toggle' | 'toggle-rounded';
export interface RoutedTabsItemProps extends React.LiHTMLAttributes<HTMLLIElement>, Helpers {
    readonly value: string;
}
export declare const RoutedTabsItem: React.FC<RoutedTabsItemProps>;
export interface RoutedTabsProps extends React.HTMLAttributes<HTMLDivElement>, Helpers {
    readonly size?: RoutedTabsSize;
    readonly alignment?: RoutedTabsAlignment;
    readonly fullWidth?: boolean;
    readonly tabsStyle?: RoutedTabsStyle;
    readonly to?: string;
    readonly urlSeparator?: string;
}
export declare const RoutedTabs: React.FC<RoutedTabsProps>;
export {};
//# sourceMappingURL=RoutedTabs.d.ts.map