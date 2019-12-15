import React from 'react';
export interface DynamicRouterResult {
    readonly Routes: React.FC;
    readonly Links: React.FC;
}
export declare function dynamicRouter<T extends {}>(components: T, baseUrl: string): DynamicRouterResult;
//# sourceMappingURL=DynamicRouter.d.ts.map