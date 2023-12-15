import {Button} from "../UI/Button/Button";
import React from "react";
import styles from "./Header.module.css"
import {Link, useNavigate} from "react-router-dom";
import {useAuth} from "../../Hooks/useAuth";


const Header = () => {
    const {user, signOut} = useAuth()
    const navigate = useNavigate()

    const onClickButton = () => {

        // fetch('http://localhost:3001/users', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({id: 2, name: 'Sergey'})
        // })

        // fetch('http://localhost:3001/users/2', {
        //     method: 'DELETE'
        // })

        // fetch('http://localhost:3001/users/2', {
        //     method: 'PUT',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({id: 2, name: 'Andrey'})
        // })


        // fetch('http://localhost:3001/users')
        //     .then(res => res.json()).then(res => console.log(res))

        // fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json())
        //     .then(res => fetch('http://localhost:3001/posts', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify({})
        //     }))
    }

    return (
        <header className={styles.root}>
            {!user
                ? <Button
                    onClick={() => navigate("login")}
                    margin={"0px 0px 0px 10px"}>Войти</Button>
                : <Button
                    onClick={() => signOut(() => navigate('/', {replace: true}))}
                    margin={"0px 0px 0px 10px"}>Выйти</Button>
            }

            <nav className={styles.links}>
                <Link to="about">О сайте</Link>
                <Link to="/">Посты</Link>
            </nav>
        </header>
    )
}


export {Header}