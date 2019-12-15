import { Helpers } from 'devfractal-ui-core';
import React from 'react';
export interface PaginationProps extends React.HTMLAttributes<HTMLElement>, Helpers {
    /**
     * To have rounded pagination items
     */
    readonly rounded?: boolean;
    /**
     * To Resize the Pagination elements
     */
    readonly size?: 'small' | 'medium' | 'large';
    /**
     * To change the order of the elements in PaginationList
     */
    readonly alignment?: 'centered' | 'right';
}
export declare const Pagination: React.FC<PaginationProps>;
export interface PaginationLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement>, Helpers {
    /**
     * To Specify that the page is the current one
     */
    readonly current?: boolean;
    /**
     * You can disable some links if they are not active, or change the amount of page numbers available.
     */
    readonly disabled?: boolean;
}
export declare const PaginationLink: React.FC<PaginationLinkProps>;
export interface PaginationListProps extends React.HTMLAttributes<HTMLElement>, Helpers {
}
export declare const PaginationList: React.FC<PaginationListProps>;
export interface PaginationEllipsisProps extends React.HTMLAttributes<HTMLSpanElement>, Helpers {
}
export declare const PaginationEllipsis: React.FC<PaginationEllipsisProps>;
export interface PaginationPreviousProps extends React.AnchorHTMLAttributes<HTMLAnchorElement>, Helpers {
    /**
     * To disable some links if they are not active
     */
    readonly disabled?: boolean;
}
export declare const PaginationPrevious: React.FC<PaginationPreviousProps>;
export interface PaginationNextProps extends React.AnchorHTMLAttributes<HTMLAnchorElement>, Helpers {
    /**
     * To disable some links if they are not active
     */
    readonly disabled?: boolean;
}
export declare const PaginationNext: React.FC<PaginationNextProps>;
//# sourceMappingURL=Pagination.d.ts.map