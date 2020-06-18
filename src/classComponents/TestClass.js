import React from 'react';

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            answer: "yes"
        };
    }

    getMyName() {
        return "Cari" + " " + "Payne";
    }

    render() {
        return (
            <div>
                <p>Hello, my name is {this.getMyName()}</p>
                <p>Is state important to know? {this.state.answer}</p>
            </div>
        );
    }
}

export default App;