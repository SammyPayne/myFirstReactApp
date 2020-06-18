import React, {Component} from 'react';

class App extends Component {
    constructor() {
        super();
        this.state = {
            isLoggedIn: "false"
        };
    }

    render() {
        let strLoggedIn;

        if (this.state.isLoggedIn)
            strLoggedIn = "in";
        else
            strLoggedIn = "out";

        // there's nothing wrong with using this.state.isLoggedIn, but teach used a local variable.
        return(
            <div>
                <h1>You are currently logged {strLoggedIn}</h1>
            </div>
        );
    }
}

export default App;