import React from 'react';
type appTitlePropsType = {
    title: string
}

export const AppTitle = (props:appTitlePropsType) => {
    return (
        <div>
            <h1>{props.title}</h1>
        </div>
    );
};
