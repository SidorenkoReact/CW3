import React from "react";
import styles from "./Button.module.css"

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    children: React.ReactNode
    margin?: string;
    width?: string;

}

const Button: React.FC<Props> = ({children, margin, width, ...rest}) => {
    return (
        <button
            {...rest}
            style={{margin, width}}
            className={styles.root}>{children}</button>
    )
}


export {Button}