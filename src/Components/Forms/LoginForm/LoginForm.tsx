import {Input} from "../../UI/Input/Input";
import {Button} from "../../UI/Button/Button";
import styles from "./LoginForm.module.css"
import {useInput} from "../../../Hooks/useInput";
import {validators, ValidTypes} from "../../../Hooks/useValidate";

function LoginForm() {
    const email = useInput('',
        [
            validators[ValidTypes.isEmail](),
            validators[ValidTypes.isEmpty](),
            validators[ValidTypes.minLength](3),
            validators[ValidTypes.maxLength](10),
        ])
    const password = useInput('', [])


    return (
        <form className={styles.root}>
            <h4>Авторизация</h4>
            <label>{email.validate.messages}</label>
            <Input
                onChange={email.onChangeInput}
                onBlur={email.onBlurInput}
                value={email.value}
                placeholder="Введите email..."
                type="email"
                margin="2px 0px 0px 0px"
            />
            <Input
                onChange={password.onChangeInput}
                onBlur={password.onBlurInput}
                value={password.value}
                placeholder="Введите пароль..."
                type="password"
                margin="5px 0px 0px 0px"
            />
            <Button width="70px" margin="10px 0px 2px 0px">Войти</Button>
        </form>
    )
}

export {LoginForm}