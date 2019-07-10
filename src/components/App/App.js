import React, {Component} from 'react';
import Header from '../Header/Header'
import './App.css';


class App extends Component {

  //class constructor, takes in props which we will talk about later today
  // constructor(props) {
  //   // Call our parent class constructor
  //   super(props)

  //   // Create our local component state - this will hold our message to show
  //   this.state = { message: 'React is fun!' }
  // }

  // handleChange = event => {
  //   console.log(event.target.value);
  // }

  //Shortcut way to create a component with local state
  state = {
    newMessage: {message: 'React is Fun!', user: 'Playfair'},
    history: [],
  }

  // handleChangeMessage = event => {
  //   console.log(event.target.value);
  //   this.setState({ message: event.target.value} )

  // }

  // handleChangeUser = event => {
  //   console.log(event.target.value);
  //   this.setState({ user: event.target.value})
  // }

  handleClick = (propertyToChange) => {
    // You might think we should *push* into our array in state, cuz we've done that in the past! BUT DON'T!
    this.setState({history: [...this.state.history, this.state.newMessage], newMessage: {user: '', message: ''}})
  }

  handleChange = (event, propertyToChange) => {
    this.setState({newMessage: {...this.state.newMessage, [propertyToChange]: event.target.value}})
  }

  renderMessage = () => {
    let stuffToShow = '';
    if (this.state.history.length > 0){
      let lastThingFromHistory = this.state.history[this.state.history.length -1]
      stuffToShow = <p> { lastThingFromHistory.user }: { lastThingFromHistory.message }</p>
    }
    return stuffToShow;
  }
  //Every time the component local state changes render is called
  render() {
    console.log('In render, current state:', this.state);
    return (
      <div className="App">
        <Header />
        <main>
          <label>User:</label>
          <input type="text" value={this.state.newMessage.user} onChange={(event) => this.handleChange(event, 'user')} />
          <br />
          <label>Message: </label>
          <input type="text" value={this.state.newMessage.message} onChange={(event) => this.handleChange(event, 'message')} />
          <button onClick={this.handleClick}>Click me!</button>
          {/* This is one way to conditionally render */}
          {/* {this.state.newMessage.user !== '' ?
          <p>{this.state.newMessage.user}: {this.state.newMessage.message}</p> : ''} */}
          {/* Another way is using a function... */}
          <h2>Last Message</h2>
          {this.renderMessage()}
          {/* Gets stuff on the dom */}
          <div>
            <h2>Message History</h2>
              <ul>
                {this.state.history.map((item, i) => <li key={i}> {item.user}: {item.message} </li>)}
              </ul>

          </div>
        </main>          
      </div>
    );
  }
}

export default App;
