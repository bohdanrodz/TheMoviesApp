import type {SubmitEventHandler} from "react";
import './SearchComponent.css'
import {useMoviesQuery} from "../../hooks/useMoviesQuery.ts";

export const SearchComponent = () => {
    const {setSearch} = useMoviesQuery()
    const onSearchHandler: SubmitEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const input = form.search as HTMLInputElement;
        setSearch(input.value.trim());
    }
    return (
        <form className={'search-bar'} name={'search-bar'} onSubmit={onSearchHandler}>
            <input type="text" name="search" placeholder={'Search movies...'}/>
            <button><i className="fa-solid fa-magnifying-glass"></i></button>
        </form>

    );
};