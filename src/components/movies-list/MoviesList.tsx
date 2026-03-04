import {MoviesListCard} from "../movies-list-card/MoviesListCard.tsx";
import './MoviesList.css'
import {PaginationComponent} from "../pagination/PaginationComponent.tsx";
import {useMoviesQuery} from "../../hooks/useMoviesQuery.ts";
import {useMovieListData} from "../../hooks/useMovieListData.ts";

export const MoviesList = () => {
    const {page, query, genre} = useMoviesQuery();
    const {movies, loading, error} = useMovieListData(page, query, genre);
    if (loading || movies === null) return <div className={'text-3xl mt-10 ml-10'}>Loading...</div>
    if (error) return <div>{error}</div>
    if (movies.length === 0) return <div className={'text-3xl mt-10 ml-10'}>No films found</div>;
    return (
        <>
            <div className={'movies-container'}>
                {movies.map(movie => <MoviesListCard movie={movie} key={movie.id}/>)}
            </div>
            <PaginationComponent/>
        </>
    );
}