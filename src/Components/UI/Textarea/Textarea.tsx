import React from "react";
import styles from "./Textarea.module.css"

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {

}


const Textarea: React.FC<Props> = ({...rest}) => {
    return (
        <textarea className={styles.root} {...rest}/>
    )
}


export {Textarea}