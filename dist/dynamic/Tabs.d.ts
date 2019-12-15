import { ControlledProps, Helpers, ValueChangeEvent } from 'devfractal-ui-core';
import React from 'react';
export interface TabsChangeEvent extends ValueChangeEvent<string> {
}
declare type TabsSize = 'small' | 'medium' | 'large';
declare type TabsAlignment = 'centered' | 'right';
declare type TabsStyle = 'boxed' | 'toggle' | 'toggle-rounded';
export interface TabsItemProps extends React.LiHTMLAttributes<HTMLLIElement>, Helpers {
    readonly value?: string;
}
export declare const TabsItem: React.FC<TabsItemProps>;
interface TabsViewProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'name' | 'value'>, ControlledProps<string>, Helpers {
    readonly size?: TabsSize;
    readonly alignment?: TabsAlignment;
    readonly fullWidth?: boolean;
    readonly tabsStyle?: TabsStyle;
    onChange?(evt: TabsChangeEvent): void;
}
export interface TabsProps extends TabsViewProps {
    readonly defaultValue?: string;
}
export declare const Tabs: React.FC<TabsProps>;
export {};
//# sourceMappingURL=Tabs.d.ts.map