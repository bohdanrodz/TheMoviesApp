import {Header} from "../components/header/Header.tsx";
import {MovieDetailsComponent} from "../components/movie-details/MovieDetailsComponent.tsx";


export const MovieDetailsPage = () => {

    return (
        <div className={'movie-details-page'}>
            <Header/>
            <MovieDetailsComponent/>
        </div>
    );
};