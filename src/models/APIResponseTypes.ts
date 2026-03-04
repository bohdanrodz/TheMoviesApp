import type IMovie from "./IMovie.ts";
import type {IGenre} from "./IGenre.ts";

export type APIResponseTypes = {
    page: number;
    total_pages: number;
    total_results: number;
}
export type APIResponseMoviesType = APIResponseTypes & { results: IMovie[] }

export type APIResponseGenresType = { genres: IGenre[] }







