import {useEffect, useState} from "react";
import type IMovieDetails from "../models/IMovieDetails.ts";
import {findMovieById} from "../services/api.service.ts";

export const useMovieDetails = (id?: string) => {
    const [movie, setMovie] = useState<IMovieDetails>()
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        if (!id) return;
        setLoading(true);
        findMovieById(id)
            .then((movie: IMovieDetails) => {
                setMovie(movie)
            })
            .finally(() => setLoading(false));
    }, [id]);
    return {movie, loading};
}