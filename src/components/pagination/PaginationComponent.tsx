import './PaginationComponent.css'
import {useMoviesQuery} from "../../hooks/useMoviesQuery.ts";

export const PaginationComponent = () => {
    const {page, setPage} = useMoviesQuery()
    return (
        <div className={'pagination'}>
            <button disabled={+page <= 1} onClick={() => setPage(page - 1)}>Previous page</button>
            <p>{page}</p>
            <button onClick={() => setPage(page + 1)}>Next page</button>
        </div>
    );
};