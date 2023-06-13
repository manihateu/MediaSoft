import { BoardPage } from "@/pages/BoardPage";
import { MainBoard } from "@/pages/MainBoard";
import React from "react";

export interface IRoute {
    path: string;
    component: React.ComponentType;
}

export enum RouteNames {
    HOME = '/',
    BOARD_PAGE = '/board/:boardId'
}

export const AllRoutes:IRoute[] = [
    {path: RouteNames.HOME, component: MainBoard},
    {path: RouteNames.BOARD_PAGE, component: BoardPage}
]

