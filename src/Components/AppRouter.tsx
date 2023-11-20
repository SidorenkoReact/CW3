import {Route, Routes} from "react-router-dom";
import {Main} from "./Pages/Main/Main";
import {Layout} from "./Layout";
import {About} from "./Pages/About/About";
import {ErrorPage} from "./Pages/Error/ErrorPage";
import {Login} from "./Pages/Login/Login";
import {Post} from "./Pages/Post/Post";


const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Main/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="post" element={<Post/>}/>
                <Route path="*" element={<ErrorPage/>}/>
            </Route>
        </Routes>
    )
}

export {AppRouter}