import { MainBoard } from "@/pages/MainBoard";
import React from "react";

export interface IRoute {
    path: string;
    component: React.ComponentType;
}

export enum RouteNames {
    HOME = '/',
}

export const AllRoutes:IRoute[] = [
    {path: RouteNames.HOME, component: MainBoard}
]

