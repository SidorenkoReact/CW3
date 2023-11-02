import React from "react";
import {Modal} from "../Modal/Modal";
import {Portal} from "../Portal/Portal";

interface PropsType {
    children: React.ReactNode;
    modalType: string;
    isVisible: boolean;
    setIsVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const ModalSwitch: React.FC<PropsType> = ({children, modalType, isVisible, setIsVisible}) => {

    if (modalType === 'Css') {
        return (
            <Modal isVisible={isVisible} setIsVisible={setIsVisible}>
                {children}
            </Modal>
        )
    }

    if (modalType === 'Portal') {
        return (
            <Portal isVisible={isVisible} setIsVisible={setIsVisible}>
                {children}
            </Portal>
        )
    }

    return null
}


export {ModalSwitch}