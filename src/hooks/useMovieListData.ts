import {useEffect, useState} from "react";
import type IMovie from "../models/IMovie.ts";
import {getMovies, searchMovies} from "../services/api.service.ts";

export function useMovieListData(page: number, search?: string, genre?: string) {
    const [movies, setMovies] = useState<IMovie[] | null>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        (async () => {
            setLoading(true)
            setError(null);
            try {
                if (search && search.trim()) {
                    const movieList = await searchMovies(search, page)
                    setMovies(movieList)
                } else {
                    const genreNum = genre ? Number(genre) : undefined;
                    const movieList = await getMovies(page, genreNum)
                    setMovies(movieList.results)
                }
            } catch (error) {
                setError('Failed to load movies')
            } finally {
                setLoading(false)
            }
        })()
    }, [page, search, genre])
    return {movies, loading, error}
}