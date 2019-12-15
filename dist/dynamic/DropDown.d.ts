import { Helpers } from 'devfractal-ui-core';
import React from 'react';
declare type DropDownModifier = 'hoverable' | 'active';
export interface DropDownProps extends React.HTMLAttributes<HTMLDivElement>, Helpers {
    readonly label?: string;
    /**
     * when should be the Dropdown to be shown Up
     */
    readonly modifier?: DropDownModifier;
    /**
     * To have a right-aligned dropdown
     */
    readonly rightAligned?: boolean;
    /**
     * To have a dropdown menu that appears above the dropdown button
     */
    readonly dropUp?: boolean;
}
export declare const DropDown: React.FC<DropDownProps>;
declare type DropDownItemTag = 'div' | 'a';
export interface DropDownItemProps extends React.HTMLAttributes<HTMLElement>, Helpers {
    readonly active?: boolean;
    readonly as?: DropDownItemTag;
}
export declare const DropDownItem: React.FC<DropDownItemProps>;
export interface DropDownDividerProps extends React.HTMLAttributes<HTMLElement>, Helpers {
}
export declare const DropDownDivider: React.FC<DropDownDividerProps>;
export {};
//# sourceMappingURL=DropDown.d.ts.map