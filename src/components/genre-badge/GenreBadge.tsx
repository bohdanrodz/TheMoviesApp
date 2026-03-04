import {type FC, useEffect, useState} from "react";
import {Badge} from 'reactstrap';
import {getGenreNames} from "../../services/api.service.ts";
import type {IGenre} from "../../models/IGenre.ts";
import './GenreBadge.css'
import {useMoviesQuery} from "../../hooks/useMoviesQuery.ts";

interface GenreBadgeProps {
    genresArr?: number[],
    genresObjArr?: IGenre[]
}

export const GenreBadge: FC<GenreBadgeProps> = ({genresArr, genresObjArr}) => {
    const {setGenre} = useMoviesQuery()
    const [genres, setGenres] = useState<IGenre[]>([])

    const clickHandler = (e: React.MouseEvent<HTMLElement>, genreId: number) => {
        e.stopPropagation()
        setGenre(genreId)
    };

    useEffect(() => {
        if (genresArr) getGenreNames(genresArr).then(data => setGenres(data))
        if (genresObjArr) setGenres(genresObjArr)
    }, [genresArr, genresObjArr]);

    return (
        <div className={'genres'}>
            {
                genres.map(genre => <Badge color={''} onClick={(e) => clickHandler(e, genre.id)} key={genre.id}>{genre.name}</Badge>)
            }
        </div>
    );
};

