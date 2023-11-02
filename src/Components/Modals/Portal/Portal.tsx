import {createPortal} from "react-dom";
import React, {useEffect, useRef} from "react";
import styles from "./Portal.module.css"

interface Props {
    children: React.ReactNode;
    isVisible: boolean;
    setIsVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const Portal: React.FC<Props> = ({children, isVisible,setIsVisible}) => {
    const rootElement = useRef<HTMLElement | null>(null)

    useEffect(() => {
        rootElement.current = document.getElementById('portal')

    }, [])

    return (rootElement.current && isVisible)
        ? createPortal(
            <div onClick={() => setIsVisible((prevState => !prevState))} className={styles.root}>
                <div onClick={event => event.stopPropagation()} className={styles.modalContent}>
                    {children}
                </div>
            </div>
            , rootElement.current)
        : null
}


export {Portal}