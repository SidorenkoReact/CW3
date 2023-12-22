import styles from "./PaginationOrScrollSelector.module.css"
import {RadioButton} from "../../UI/RadioButton/RadioButton";
import React, {useState} from "react";
import {useAppDispatch} from "../../../Hooks/redux";
import {setPaginationType} from "../../../Store/Reducers/fetchPostsSlice";
import {PaginationType} from "../../../types/types";

interface IPaginationOrScrollSelectorProps {
    options: Array<{name: string, value: PaginationType}>;
    // setPaginationType: React.Dispatch<React.SetStateAction<string>>
}

const PaginationOrScrollSelector: React.FC<IPaginationOrScrollSelectorProps> = ({options}) => {
    const [currentOption, setCurrentOption] = useState<string>(options[0].name)
    const dispatch = useAppDispatch()

    const onChangeOption = (option: {name: string, value: PaginationType}) => {
        setCurrentOption(option.name)
        dispatch(setPaginationType(option.value))
    }

    return (
        <div className={styles.root}>
            <label className={styles.label}>Постраничная навигация:</label>
            {options.map(option =>
                <RadioButton
                    value={option.value}
                    onChange={() => onChangeOption(option)}
                    checked={currentOption === option.name}
                    label={option.name}
                    key={option.name}
                />)}
        </div>
    )
}


export {PaginationOrScrollSelector}
