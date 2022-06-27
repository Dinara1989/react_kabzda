import React from "react";

export type AccordionBodyPropsType = {
    titleValue: string
    collapsed: boolean
}

export function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}