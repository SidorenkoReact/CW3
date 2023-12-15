import {LoginForm} from "../../Forms/LoginForm/LoginForm";
import {useEffect} from "react";
import axios from "axios";
import {PostService} from "../../../API/PostService";
import {IPost} from "../../../types/types";


const Login = () => {

    return (
        <div>
            <LoginForm/>
        </div>
    )
}


export {Login}
