import React, {Component} from 'react';

class Header extends Component {

    handleChange = event => {
        console.log(event.target.value);
    }

    render(){
        return(
            <header className="App-header">
                <h1>React State</h1>
            </header>
        )
    }
}

export default Header;