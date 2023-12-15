import React from "react";
import styles from "./ValidationMessages.module.css"


interface IValidationMessages {
    messages: string[] | false;
}


const ValidationMessages: React.FC<IValidationMessages> = ({messages}) => {
    if (!messages) return null

    return (
        <div className={styles.root}>
            {messages.map(message => <div className={styles.item} key={message}>{message}</div>)}
        </div>
    )
}



export {ValidationMessages}