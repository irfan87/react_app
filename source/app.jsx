'use strict';

import React from 'react';
import { render } from 'react-dom';

export default class App extends React.Component {
    render(){
        return(
            <section>
                <h1>My ReactJS Scaffold</h1>
                <p>Hello World!</p>
            </section>
        )
    }
}

render(<App />, document.getElementById('container'))