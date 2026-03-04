import {useParams} from "react-router";
import {MovieDetailedInfoComponent} from "../movie-detailed-info/MovieDetailedInfoComponent.tsx";
import {useMovieDetails} from "../../hooks/useMovieDetails.ts";

export const MovieDetailsComponent = () => {
    const {id} = useParams();
    const {movie, loading} = useMovieDetails(id);
    if (loading || !movie) return <div className={'text-3xl mt-10 ml-10'}>Loading...</div>
    return (<MovieDetailedInfoComponent movie={movie}/>);
};