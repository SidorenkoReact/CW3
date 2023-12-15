import { Input } from "../Input/Input"
import React, {HTMLAttributes} from "react";
import styles from "./Checkbox.module.css"

interface Props extends HTMLAttributes<HTMLInputElement>{
    label: string;
}

const Checkbox: React.FC<Props> = ({label, ...rest}) => {
    return (
        <label className={styles.root}>
            <Input {...rest} type="checkbox"/>
            <span className={styles.label}>{label}</span>
        </label>
    )
}


export {Checkbox}
