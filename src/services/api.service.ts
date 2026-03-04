import axios from "axios";
import type {APIResponseGenresType, APIResponseMoviesType} from "../models/APIResponseTypes.ts";
import type {IGenre} from "../models/IGenre.ts";
import type IMovieDetails from "../models/IMovieDetails.ts";

let token = import.meta.env.VITE_API_TOKEN;

const axiosInstance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
        'accept': 'application/json'
    }
})

export const getMovies = async (page: number, genreId?: number): Promise<APIResponseMoviesType> => {
    const response = await axiosInstance.get<APIResponseMoviesType>('/discover/movie', {
            params:
                {
                    page,
                    ...(genreId ? {with_genres: genreId} : {})
                }
        })
    ;
    return response.data;
}

let genresCache: IGenre[] | null = null;
let genresPromise: Promise<IGenre[]> | null = null;

const getGenres = async (): Promise<IGenre[]> => {
    if (genresCache) return genresCache;
    if (genresPromise) return genresPromise;

    genresPromise = axiosInstance.get<APIResponseGenresType>('/genre/movie/list')
        .then(({data}) => {
            genresCache = data.genres;
            return genresCache;
        })
        .finally(() => genresPromise = null);
    return genresPromise;
}

export const getGenreNames = async (genresArr: number[]): Promise<IGenre[]> => {
    const allGenres = await getGenres();
    const genresWithName: IGenre[] = []
    for (const genreId of genresArr) {
        const genreObj = allGenres.find((genre) => genre.id === genreId);
        genreObj && genresWithName.push(genreObj);
    }
    return genresWithName;
}

export const findMovieById = async (movieId: string): Promise<IMovieDetails> => {
    const {data} = await axiosInstance.get<IMovieDetails>(`/movie/${movieId}`);
    return data;
}

export const searchMovies = async (query: string, page: number) => {
    const {data: {results}} = await axiosInstance.get<APIResponseMoviesType>('/search/movie', {
        params: {
            query,
            page
        }
    })
    return results;
}