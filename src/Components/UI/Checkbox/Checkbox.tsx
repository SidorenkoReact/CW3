import { Input } from "../Input/Input"
import React from "react";
import styles from "./Checkbox.module.css"

interface Props {
    label: string;
}

const Checkbox: React.FC<Props> = ({label}) => {
    return (
        <label className={styles.root}>
            <Input type="checkbox"/>
            <span className={styles.label}>{label}</span>
        </label>
    )
}


export {Checkbox}