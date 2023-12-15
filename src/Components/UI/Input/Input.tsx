import React, {forwardRef, FunctionComponent, InputHTMLAttributes, RefObject} from "react";
import styles from "./Input.module.css"

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    margin?: string;
    width?: string;
}

const Input = forwardRef<HTMLInputElement, Props>(({margin, width, ...rest}, ref) => {
    return (
        <input ref={ref} {...rest} className={styles.root} style={{margin, width}}/>
    )
})


export {Input}