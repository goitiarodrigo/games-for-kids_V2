import React, { lazy, LazyExoticComponent } from 'react';

type JSXComponent = () => React.JSX.Element;

interface IRoutes {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
    private?: boolean;
}

const LazyHome = lazy(() => import(/*webpackChunkName: "LazyHome*/ '../Pages/Home'));
const LazyLog = lazy(() => import(/*webpackChunkName: "LazyLog*/ '../Pages/Log'));
const LazyHighscore = lazy(() => import(/*webpackChunkName: "LazyHighscore*/ '../Pages/Highscore'));
const LazyGames = lazy(() => import(/*webpackChunkName: "LazyGames*/ '../Pages/Games'));
const LazyGame = lazy(() => import(/*webpackChunkName: "LazyGames*/ '../Pages/Game/Game'));

export const routes: IRoutes[] = [
    {
        to: '/',
        path: '/',
        Component: LazyHome,
        name: 'Inicio',
        private: false,
    },
    {
        to: '/login',
        path: '/login',
        Component: LazyLog,
        name: 'Log',
        private: false,
    },
    {
        to: '/highscore',
        path: '/highscore',
        Component: LazyHighscore,
        name: 'Highscore',
        private: false,
    },
    {
        to: '/games',
        path: '/games',
        Component: LazyGames,
        name: 'Games',
        private: false,
    },
    {
        to: '/game/:gameId',
        path: '/game/:gameId',
        Component: LazyGame,
        name: 'Game Details',
        private: false,
    },
];
