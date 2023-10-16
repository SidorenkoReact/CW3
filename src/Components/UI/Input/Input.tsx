import React, {FunctionComponent, HTMLAttributes} from "react";
import styles from "./Input.module.css"

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    margin?: string;
    width?: string;
}

const Input: FunctionComponent<Props> = ({margin, width, ...rest}) => {
    return (
        <input {...rest} className={styles.root} style={{margin, width}}/>
    )
}


export {Input}