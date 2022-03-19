import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion";
import {Rating} from "./components/Rating";
import {AppTitle} from "./components/AppTitle";


function App() {
  return (
    <div>
        <AppTitle title={"Rating of articles"}/>

        <h2>Article 1</h2>
        <Accordion titleValue={'Menu'} collapsed={false}/>
        <Rating value={2}/>

        <h2>Article 2</h2>
        <Accordion titleValue={'Users'} collapsed={true}/>
        <Rating value={1}/>
        <Rating value={2}/>
        <Rating value={3}/>
        <Rating value={4}/>
        <Rating value={5}/>
    </div>
  );
}

export default App;
