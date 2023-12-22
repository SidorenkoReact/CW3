import {ValidTypes} from "../Hooks/useValidate";
import React from "react";

export interface IPost {
    userId: number;
    id: number;
    title: string;
    body: string;
    [key: string]: any
}

export interface IPostComments {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}

export type TUser = {
    email: string;
    password: string;
} | null

export interface IAuthContext  {
    user: TUser
    signIn: (user: TUser, callback: Function) => void;
    signOut: (callback: Function) => void;
}

export type TValidator = {
    type: ValidTypes;
    option?: number
}

export type TValidators = {
    [key in ValidTypes]: (option?: number) => TValidator
}

export type ValidMessages = {
    [key in ValidTypes]: string;
}

export enum PaginationType {
    PAGE = 'PAGE',
    INFINITY = 'INFINITY',
}



// declare module "react" {
//     function forwardRef<T, P = {}>(
//         render: (props: P, ref: React.Ref<T>) => React.ReactNode | null
//     ): (props: P & React.RefAttributes<T>) => React.ReactNode | null;
// }
