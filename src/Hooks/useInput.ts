import React, {useState} from "react";
import {useValidate} from "./useValidate";
import {TValidator} from "../types/types";

//Надо типизировать!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
export const useInput = (initialValue: string, validType: TValidator[]) => {
    const [value, setValue] = useState(initialValue)
    const [isDirty, setIsDirty] = useState(false)

    const validate = useValidate(value, validType)


    const onChangeInput = (event: React.SyntheticEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value)
    }

    const onBlurInput = () => {
        setIsDirty(true)
    }


    return {
        value,
        isDirty,
        onChangeInput,
        onBlurInput,
        validate,
    }
}