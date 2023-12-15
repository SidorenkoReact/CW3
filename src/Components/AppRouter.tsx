import {Route, Routes} from "react-router-dom";
import {Main} from "./Pages/Main/Main";
import {Layout} from "./Layout";
import {About} from "./Pages/About/About";
import {ErrorPage} from "./Pages/Error/ErrorPage";
import {Login} from "./Pages/Login/Login";
import {Post} from "./Pages/Post/Post";
import {RequireAuth} from "../HOC/RequireAuth";
import ErrorBoundary from "../HOC/ErrorBoundary";


const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<ErrorBoundary><Layout/></ErrorBoundary>}>
                <Route index element={<RequireAuth><ErrorBoundary><Main/></ErrorBoundary></RequireAuth>}/>
                <Route path="about" element={<ErrorBoundary><About/></ErrorBoundary>}/>
                <Route path="login" element={<ErrorBoundary><Login/></ErrorBoundary>}/>
                <Route path="post/:id" element={<RequireAuth><ErrorBoundary><Post/></ErrorBoundary></RequireAuth>}/>
                <Route path="*" element={<ErrorBoundary><ErrorPage/></ErrorBoundary>}/>
            </Route>
        </Routes>
    )
}

export {AppRouter}
