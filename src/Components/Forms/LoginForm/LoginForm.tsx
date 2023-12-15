import {Input} from "../../UI/Input/Input";
import {Button} from "../../UI/Button/Button";
import styles from "./LoginForm.module.css"
import {useInput} from "../../../Hooks/useInput";
import {validators, ValidTypes} from "../../../Hooks/useValidate";
import React, {RefObject, useRef} from "react";

import {TUser} from "../../../types/types";
import {useAuth} from "../../../Hooks/useAuth";
import {useLocation, useNavigate} from "react-router-dom";
import {PopUpToolkit} from "../../Modals/PopUpToolkit/PopUpToolkit";
import {ValidationMessages} from "../../ValidationMessages/ValidationMessages";

function LoginForm() {
    const emailInputRef = useRef<HTMLInputElement | null>(null)
    const passwordInputRef = useRef<HTMLInputElement | null>(null)
    const {signIn} = useAuth()
    const navigate = useNavigate()
    const location = useLocation()

    const fromPath = location.state?.from?.pathname || '/'

    const email = useInput('',
        [
            validators[ValidTypes.isEmail](),
            validators[ValidTypes.isEmpty](),
        ])
    const password = useInput('',
        [
            validators[ValidTypes.isEmpty](),
            validators[ValidTypes.minLength](3),
            validators[ValidTypes.maxLength](10),
        ])

    const onClickButtonSignIn = (event: React.SyntheticEvent<HTMLButtonElement>) => {
        event.preventDefault()
        const newUser: TUser = {
            email: email.value,
            password: password.value
        }

        signIn(newUser, () => navigate(fromPath, {replace: true}))
    }


    return (
        <form className={styles.root}>
            <h4>Авторизация</h4>
            {/*<ValidationMessages messages={email.validate.messages}/>*/}
            <PopUpToolkit
                content={<ValidationMessages messages={email.validate.messages}/>}
                isActive={email.validate.isValid && email.isDirty}
                inputRef={emailInputRef}
            >
                <Input
                    onChange={email.onChangeInput}
                    onBlur={email.onBlurInput}
                    value={email.value}
                    placeholder="Введите email..."
                    type="email"
                    margin="2px 0px 0px 0px"
                    ref={emailInputRef}
                />
            </PopUpToolkit>

            <PopUpToolkit
                content={<ValidationMessages messages={password.validate.messages}/>}
                isActive={password.isDirty && password.validate.isValid}
                inputRef={passwordInputRef}
            >
                <Input
                    onChange={password.onChangeInput}
                    onBlur={password.onBlurInput}
                    value={password.value}
                    placeholder="Введите пароль..."
                    type="password"
                    margin="5px 0px 0px 0px"
                    ref={passwordInputRef}
                />
            </PopUpToolkit>
            <Button
                disabled={email.validate.isValid || password.validate.isValid}
                onClick={onClickButtonSignIn}
                width="70px"
                margin="10px 0px 2px 0px">Войти</Button>
        </form>
    )
}

export {LoginForm}
