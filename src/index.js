import React from "react";
import ReactDOM from "react-dom";

import Team from './Team';

class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      team: 'IDAM',
    };
    this.teamRef = React.createRef();
  }

 updateState = (team) => {
   this.setState({ team });
   this.teamRef.current. changeName(team);
 }

  render() {
    return (
      <>
        <label>
          <b>Choose Team to view: </b>
          <select
            value={this.state.team}
            onChange={e => this.updateState( e.target.value) }>
            <option value="IDAM">IDAM</option>
            <option value="Cosmos">Cosmos</option>
          </select>
        </label>
        <h1>Welcome to {this.state.team}’s On Call schedule!</h1>
        <div>
          <Team team={this.state.team} ref={this.teamRef}/>
        </div>
      </>
    )
  }
}


const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
