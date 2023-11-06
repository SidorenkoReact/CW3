import React from "react";
import styles from "./Button.module.css"

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    children: React.ReactNode
    margin?: string;
    width?: string;
    isActive?: boolean;

}

const Button: React.FC<Props> = ({children, margin, width, isActive, ...rest}) => {
    return (
        <button
            {...rest}
            style={{margin, width}}
            className={[styles.root, isActive && styles.active].join(' ')}>{children}</button>
    )
}


export {Button}