declare module 'react-router-dom' {
  import * as React from 'react';
  
  export interface RouteProps {
    location?: any;
    component?: React.ComponentType<any> | React.ComponentType<any>;
    render?: (props: any) => React.ReactNode;
    children?: ((props: any) => React.ReactNode) | React.ReactNode;
    path?: string | string[];
    exact?: boolean;
    sensitive?: boolean;
    strict?: boolean;
  }
  
  export interface RedirectProps {
    to: string | object;
    push?: boolean;
    from?: string;
    exact?: boolean;
    strict?: boolean;
  }
  
  export const Route: React.ComponentType<RouteProps>;
  export const Redirect: React.ComponentType<RedirectProps>;
  export const Link: React.ComponentType<any>;
  export const NavLink: React.ComponentType<any>;
  export const Switch: React.ComponentType<any>;
  export const Router: React.ComponentType<any>;
  export const BrowserRouter: React.ComponentType<any>;
  export const HashRouter: React.ComponentType<any>;
  export const MemoryRouter: React.ComponentType<any>;
  export const StaticRouter: React.ComponentType<any>;
  
  export function useHistory(): any;
  export function useLocation(): any;
  export function useParams<T = {}>(): T;
  export function useRouteMatch(path?: string | any): any;
} 