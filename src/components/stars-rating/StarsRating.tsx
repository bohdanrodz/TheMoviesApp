import ReactStars from "react-rating-stars-component";
import type {FC} from "react";
import './StarsRating.css'

interface RatingProps {
    rating: number
}

export const StarsRating: FC<RatingProps> = ({rating}) => {
    return (
        <div className={'star-rating'}>
            <p className={'rating'}>Rating: {Math.floor(rating * 10) / 10}</p>
            <ReactStars
                count={5}
                value={rating / 2}
                size={'24'}
                isHalf={true}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                filledIcon={<i className="fa fa-star"></i>}
                activeColor="#ffd700"
            />
        </div>
    );
};