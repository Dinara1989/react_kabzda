import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion";
import {Rating} from "./components/Rating";
import {AppTitle} from "./components/AppTitle";
import {OnOff} from "./components/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion";
import UncontrolledRating from "./components/UncontrolledRating";


function App() {
  return (
    <div className={"App"}>
        <AppTitle title={"Rating of articles"}/>
        <OnOff />
        <OnOff />
        <h2>Article 1</h2>
        <UncontrolledAccordion title={'-- Menu --'}/>
        <UncontrolledRating />

        <h2>Article 2</h2>
        <Accordion titleValue={'Users'} collapsed={false}/>
        <Rating value={1}/>
        <Rating value={2}/>
        <Rating value={3}/>
        <Rating value={4}/>
        <Rating value={5}/>
    </div>
  );
}

export default App;
