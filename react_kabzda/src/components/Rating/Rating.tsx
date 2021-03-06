import React from 'react';
export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;
type ratingPropsType = {
    value: RatingValueType
}

export const Rating = (props: ratingPropsType) => {
    return (
        <div>
            <Star selected={props.value > 0}/>
            <Star selected={props.value > 1}/>
            <Star selected={props.value > 2}/>
            <Star selected={props.value > 3}/>
            <Star selected={props.value > 4}/>
        </div>
    );
};

type StarPropsType = {
    selected: boolean
}
function Star(props: StarPropsType) {
    return <span>
        {props.selected ? <b> star</b> : " star"}
    </span>
    // if(props.selected === true) {
    //     return <span><b>Star </b></span>
    // } else {
    //     return <span>Star </span>
    // }
}

