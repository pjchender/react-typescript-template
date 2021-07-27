/**
 * https://medium.com/@michael.kutateladze/react-router-with-a-single-config-file-61777f306b4f
 * */

import { ComponentType, lazy, LazyExoticComponent, ReactNode, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from 'views/Homepage';

interface IRoute {
  path: string;
  exact?: boolean;
  fallback: NonNullable<ReactNode> | null;
  component?: LazyExoticComponent<ComponentType<any>> | ComponentType<any>;
  routes?: IRoute[];
  redirect?: string;
}

const Fallback = (): JSX.Element => <div> Loading... </div>;

export const routes: IRoute[] = [
  {
    path: '/',
    exact: true,
    component: Homepage,
    fallback: Fallback,
  },
  {
    path: '/render-props',
    component: lazy(() => import('views/DemoRenderProps')),
    fallback: Fallback,
  },
  {
    path: '/portal',
    component: lazy(() => import('views/DemoPortal')),
    fallback: Fallback,
  },
  {
    path: '/custom-hooks',
    component: lazy(() => import('views/DemoCustomHooks')),
    fallback: Fallback,
  },
  {
    path: '/use-context',
    component: lazy(() => import('views/DemoContext')),
    fallback: Fallback,
  },
  {
    path: '/use-context-reducer-i',
    component: lazy(() => import('views/DemoContextAndReducerI')),
    fallback: Fallback,
  },
  {
    path: '/use-context-reducer-ii',
    component: lazy(() => import('views/DemoContextAndReducerII')),
    fallback: Fallback,
  },
  {
    path: '/use-context-reducer-iii',
    component: lazy(() => import('views/DemoContextAndReducerIII')),
    fallback: Fallback,
  },
  {
    path: '/callback-ref',
    component: lazy(() => import('views/DemoCallbackRef')),
    fallback: Fallback,
  },
];

export const RouteWithSubRoutes = (route: IRoute): JSX.Element => {
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const { path, routes, fallback } = route;
  return (
    <Suspense fallback={fallback}>
      <Route
        path={path}
        render={props => (
          // pass the sub-routes down to keep nesting
          // eslint-disable-next-line react/jsx-props-no-spreading
          <>{route.component && <route.component {...props} routes={routes} />}</>
        )}
      />
    </Suspense>
  );
};

// eslint-disable-next-line @typescript-eslint/no-shadow
export const Router = ({ routes }: { routes: IRoute[] }): JSX.Element => {
  return (
    <Switch>
      {routes.map((route: IRoute) => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <RouteWithSubRoutes key={route.path} {...route} />
      ))}
    </Switch>
  );
};
