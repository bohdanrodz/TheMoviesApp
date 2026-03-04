declare module "react-rating-stars-component" {
    import * as React from "react";

    export interface ReactStarsProps {
        classNames?: string | null;

        count?: number;          // default 5
        value?: number;          // default 0
        char?: string;           // default '★'

        color?: string;          // default 'gray'
        activeColor?: string;    // default '#ffd700'

        size?: string;           // default '15px'
        edit?: boolean;          // default true
        isHalf?: boolean;        // default true
        a11y?: boolean;          // default true

        emptyIcon?: React.ReactElement | null;
        halfIcon?: React.ReactElement | null;
        filledIcon?: React.ReactElement | null;

        onChange?: (newRating: number) => void;
    }

    const ReactStars: React.FC<ReactStarsProps>;
    export default ReactStars;
}
