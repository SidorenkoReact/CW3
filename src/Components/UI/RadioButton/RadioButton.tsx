import React from "react";
import styles from "./RadioButton.module.css"

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

const RadioButton: React.FC<Props> = ({label, ...rest}) => {
    return (
        <label className={styles.root}>
            <input {...rest} type="radio"/>
            <span className={styles.label}>{label}</span>
        </label>
    )
}


export {RadioButton}