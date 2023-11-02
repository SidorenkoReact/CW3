import React from "react";
import styles from "./Modal.module.css"


interface Props {
    children: React.ReactNode;
    isVisible: boolean;
    setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: React.FC<Props> = ({children, isVisible, setIsVisible}) => {
    return (
        <div onClick={() => setIsVisible(false)} className={[styles.root, isVisible && styles.root_visible].join(' ')}>
            <div onClick={(event) => event.stopPropagation()} className={styles.content}>
                {children}
            </div>
        </div>
    )
}


export {Modal}