import React, {RefObject, useEffect, useRef, useState} from "react";
import styles from "./PopUpToolkit.module.css"

interface IPopUpToolkitProps {
    children: React.ReactNode;
    content: React.ReactNode;
    isActive: boolean;
    inputRef: RefObject<HTMLInputElement | null>;
}

const PopUpToolkit: React.FC<IPopUpToolkitProps> = ({children, content, isActive, inputRef}) => {
    const [position, setPosition] = useState(0)
    const canvasRef = useRef<HTMLCanvasElement>(null)

    function shiftWindowPosition(inputRef: HTMLInputElement, canvasRef: HTMLCanvasElement) {
        const context = canvasRef.getContext('2d')
        const inputWidth = inputRef.getBoundingClientRect().width
        const inputValue = inputRef.value || ' '
        const inputStyles = getComputedStyle(inputRef)

        if (context) {
            context.font = inputStyles.font
            const textMeasure = context.measureText(inputValue)

            if (inputWidth > textMeasure.width)
                setPosition(textMeasure.width)
        }
    }

    useEffect(() => {
        if (inputRef.current && canvasRef.current)
            shiftWindowPosition(inputRef.current, canvasRef.current)
        console.log(content === null)
    }, [inputRef.current?.value])


    return (
        <div className={styles.root}>
            <div className={styles.popupWindow} style={{opacity: !isActive ? 0 : 1}}>
                <div className={styles.triangle} style={{left: position + 2, display: !isActive ? 'none' : ''}}></div>
                <div className={styles.window} style={{left: position, display: !isActive ? 'none' : ''}}>
                    <div className={styles.content}>
                        {content}
                    </div>
                </div>
            </div>
            {children}
            <canvas ref={canvasRef} className={styles.canvas}/>
        </div>
    )
}


export {PopUpToolkit}

