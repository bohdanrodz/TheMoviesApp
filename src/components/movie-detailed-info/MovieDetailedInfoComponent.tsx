import type {FC} from "react";
import type IMovieDetails from "../../models/IMovieDetails.ts";
import {PosterPreview} from "../poster-preview/PosterPreview.tsx";
import {GenreBadge} from "../genre-badge/GenreBadge.tsx";
import './MovieDetailedInfoComponent.css'
import {StarsRating} from "../stars-rating/StarsRating.tsx";

interface Props {
    movie: IMovieDetails;
}

export const MovieDetailedInfoComponent: FC<Props> = ({movie}) => {
    return (
        <div className={'detailed-info-container'}>
            <div className="poster-container">
                <PosterPreview pathToImg={movie.poster_path}/>
            </div>
            <div className={'wrapper'}>
                <h3 className={'title'}>{movie.title}</h3>
                <GenreBadge genresObjArr={movie.genres}/>
                {movie.status === 'Released' ? <p className={'mt-2'}>Status: {movie.status}</p> : <p className={'mt-2'}>Release date: {movie.release_date}</p>}
                {movie.adult ? <p>Age restrictions: Adults only</p> : <p>Age restrictions: For every age!</p>}
                {movie.budget != 0 && <p>Film budget: {movie.budget}</p>}
                <p className={'movie-description'}>{movie.overview}</p>
                <StarsRating rating={movie.vote_average}/>
                <p className={'mt-3 mb-0'}>Production companies:</p>
                <ul className={'list-disc'}>{movie.production_companies.map(company => <li>{company.name}</li>)}</ul>


            </div>
        </div>
    );
};