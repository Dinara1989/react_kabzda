import React, {useState} from 'react';
type PropsType = {
    title: string
}

 export const UncontrolledAccordion = (props: PropsType) => {
    let [collapsed, setCollapsed] = useState(false);
    return (
        <div>
            <h3>{props.title}<button onClick={ () => { setCollapsed(!collapsed)} }>TOGGLE</button></h3>
            { !collapsed &&  <AccordionBody/> }
        </div>
    );
};

function AccordionBody(){
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}