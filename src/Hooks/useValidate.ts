import {useEffect, useState} from "react";

export enum ValidTypes {
    isEmail = 'isEmail',
    isEmpty = 'isEmpty',
    minLength = 'minLength',
    maxLength = 'maxLength',
}

type ValidMessages = {
    [key in ValidTypes]: string;
}

const getValidatorMessage = (type: ValidTypes, option: number | undefined): string => {

    const messages: ValidMessages = {
        [ValidTypes.isEmail]: 'Введен не корректный email адрес',
        [ValidTypes.isEmpty]: 'Поле не должно быть пустым',
        [ValidTypes.minLength]: `В поле не должно быть менее ${option} символов`,
        [ValidTypes.maxLength]: `В поле не должно быть более ${option} символов`,
    }

    return messages[type]
}

export type TValidator = {
    type: ValidTypes;
    option?: number
}

export type TValidators = {
    [key in ValidTypes]: (option?: number) => TValidator
}

export const validators: TValidators = {
    [ValidTypes.isEmail]: (option?: number) => ({type: ValidTypes.isEmail, option}),
    [ValidTypes.isEmpty]: (option?: number) => ({type: ValidTypes.isEmpty, option}),
    [ValidTypes.minLength]: (option?: number) => ({type: ValidTypes.minLength, option}),
    [ValidTypes.maxLength]: (option?: number) => ({type: ValidTypes.maxLength, option}),
}


export const useValidate = (value: string, validators: TValidator[]) => {
    const [messages, setMessage] = useState<string[]>([])


    useEffect(() => {
        const newMessages: {[key: string]: any} = {}

        if (validators) {
            for (let validator of validators) {

                switch (validator.type) {
                    case ValidTypes.isEmail: {
                        const isEmail =  /^\S+@\S+\.\S+$/.test(value)

                        if (!isEmail)
                            newMessages[ValidTypes.isEmail] = getValidatorMessage(validator.type, undefined)

                        break
                    }

                    case ValidTypes.isEmpty: {
                        const isEmpty = !value.length

                        if (isEmpty)
                            newMessages[ValidTypes.isEmpty] = getValidatorMessage(validator.type, undefined)

                        break
                    }

                    case ValidTypes.minLength: {
                        const option = validator.option || 3

                        const isMinLength = value.length < option

                        if (isMinLength)
                            newMessages[ValidTypes.minLength] = getValidatorMessage(validator.type, option)

                        break
                    }

                    case ValidTypes.maxLength: {
                        const option = validator.option || 8

                        const isMaxLength = value.length > option

                        if (isMaxLength)
                            newMessages[ValidTypes.maxLength] = getValidatorMessage(validator.type, option)

                        break
                    }
                }
            }

        }
        setMessage(Object.values(newMessages))

    }, [value])


    return {
        messages
    }
}