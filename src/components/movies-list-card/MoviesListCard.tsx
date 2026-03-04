import type {FC} from "react";
import type IMovie from "../../models/IMovie.ts";
import './MoviesListCard.css'
import {PosterPreview} from "../poster-preview/PosterPreview.tsx";
import {StarsRating} from "../stars-rating/StarsRating.tsx";
import {MovieInfo} from "../movie-info/MovieInfo.tsx";
import {useNavigate} from "react-router";

interface MovieCardProps {
    movie: IMovie
}

export const MoviesListCard: FC<MovieCardProps> = ({movie}) => {
    const navigate = useNavigate();
    const cardHandler = () => navigate(`movies/${movie.id}`);
    return (
        <div className={'card'} onClick={cardHandler}>
            <PosterPreview pathToImg={movie.poster_path}/>
            <MovieInfo movie={movie}/>
            <StarsRating rating={movie.vote_average}/>
        </div>
    );
};