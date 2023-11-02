import React, {useState} from "react";
import {RadioButton} from "../UI/RadioButton/RadioButton";
import styles from "./ModalTypeRadioButtons.module.css"

interface Props {
    options: string[];
    setModalType: React.Dispatch<React.SetStateAction<string>>
}

const ModalTypeRadioButtons: React.FC<Props> = ({options, setModalType}) => {
    const [currentOption, setCurrentOption] = useState(options[1])

    const onChangeRadioOption = (option: string) => {
        setCurrentOption(option)
        setModalType(option)
    }

    return (
        <label className={styles.root}>
            <span className={styles.label}>Тип модального окна:</span>
            <div className={styles.buttonsContainer}>
                {options.map(option =>
                    <RadioButton
                        value={option}
                        checked={option === currentOption}
                        label={option}
                        key={option}
                        onChange={() => onChangeRadioOption(option)}
                    />
                )}
            </div>
        </label>
    )
}


export {ModalTypeRadioButtons}