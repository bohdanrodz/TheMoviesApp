import type {FC} from "react";
import type IMovie from "../../models/IMovie.ts";
import {GenreBadge} from "../genre-badge/GenreBadge.tsx";
import './MovieInfo.css'
import {sliceText} from "../../utils/sliceText.ts";

interface MovieInfoProps {
    movie: IMovie
}

export const MovieInfo: FC<MovieInfoProps> = ({movie}) => {
    return (
        <div className={'movie-info'}>
            <h3 className={'title'}>{movie.title}</h3>
            <p className={'description'}>{sliceText(movie.overview, 200)}</p>
            <GenreBadge genresArr={movie.genre_ids}/>
        </div>
    );
};