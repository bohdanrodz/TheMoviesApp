import type {FC} from "react";
import './PosterPreview.css'

interface PosterProps {
    pathToImg: string;
}

export const PosterPreview: FC<PosterProps> = ({pathToImg}) => {
    return (
        <div><img className={'poster'} src={'https://image.tmdb.org/t/p/w500' + pathToImg} alt={'Movie poster'}/></div>
    );
};