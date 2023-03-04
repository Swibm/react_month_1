import AboutPage from "../pages/AboutPage"
import IdTodo from "../pages/IdTodo"
import MainPage from "../pages/MainPage"

export const PATHS = {
    MAIN: '/',
    ABOUT: '/about',
    TODO: '/:id',
}

export const routes = [
    {
        path: PATHS.MAIN,
        element: <MainPage/>
    },
    {
        path: PATHS.ABOUT,
        element: <AboutPage/>
    },
    {
        path: PATHS.TODO,
        element: <IdTodo/>
    }
]