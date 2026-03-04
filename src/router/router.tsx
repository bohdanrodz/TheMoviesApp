import {createBrowserRouter} from "react-router";
import {MoviesPage} from "../pages/MoviesPage.tsx";
import {MovieDetailsPage} from "../pages/MovieDetailsPage.tsx";

export const routes = createBrowserRouter([
    {path: '', element: <MoviesPage/>},
    {path: 'movies/:id', element: <MovieDetailsPage/>}
])