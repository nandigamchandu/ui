import { Helpers } from 'devfractal-ui-core';
import React from 'react';
declare type BreadcrumbSize = 'small' | 'medium' | 'large';
declare type BreadcrumbAlignment = 'centered' | 'right';
declare type BreadcrumbSeparator = 'arrow' | 'bullet' | 'dot' | 'succeeds';
export interface BreadcrumbItemProps extends React.LiHTMLAttributes<HTMLLIElement>, Helpers {
    readonly value?: string;
    readonly active?: boolean;
    readonly href?: string;
}
export declare const BreadcrumbItem: React.FC<BreadcrumbItemProps>;
export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement>, Helpers {
    readonly size?: BreadcrumbSize;
    readonly alignment?: BreadcrumbAlignment;
    readonly baseURL?: string;
    readonly separator?: BreadcrumbSeparator;
}
export declare const Breadcrumb: React.FC<BreadcrumbProps>;
export {};
//# sourceMappingURL=Breadcrumb.d.ts.map