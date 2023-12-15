import {useEffect} from "react";


const About = () => {

    useEffect(() => {
        throw new Error('Вот такая ошибка')
        // throw new Error('Вот такая ошибка')
    }, [])

    return (

        <div>
            <h4>Страница о нас</h4>
        </div>
    )
}


export {About}
