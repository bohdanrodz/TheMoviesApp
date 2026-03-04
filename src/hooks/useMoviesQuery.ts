import {useNavigate, useSearchParams} from "react-router";

export function useMoviesQuery() {
    const [params, setParams] = useSearchParams({page: '1'});
    const navigate = useNavigate();
    const page = Number(params.get('page')) || 1;
    const query = params.get("search") || '';
    const genre = params.get('genre') || '';

    const setPage = (page: number) => {
        const searchParams = new URLSearchParams(params);
        searchParams.set('page', page.toString());
        setParams(searchParams);
    }
    const setSearch = (query: string) => {
        const searchParams = new URLSearchParams();
        const value = query.trim();
        if (value) searchParams.set("search", value);
        else searchParams.delete("search");
        searchParams.set("page", "1");
        searchParams.delete("genre");
        navigate('/');
        setParams(searchParams);
    };
    const setGenre = (genre: number) => {
        const searchParams = new URLSearchParams(params);
        searchParams.set('genre', genre.toString());
        searchParams.set('page', '1');
        searchParams.delete('search');
        navigate('/');
        setParams(searchParams);
    }
    return {page, query, genre, setPage, setSearch, setGenre};
}