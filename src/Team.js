import React from 'react';

class Team extends React.Component {
  constructor(props) {
   super(props);
   this.state = {
     error: null,
     isLoaded: false,
     oncall: "",
     team: props.team,
   };
    this.handleClick = this.handleClick.bind(this);
    this.fetchTeam = this.fetchTeam.bind(this);

 }

  fetchTeam = (teamName, callback) => {
    console.log(teamName);
    fetch('http://localhost:3001/mock?team=' + teamName, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    },
    ).then(response => {
      if (response.ok) {
        response.json().then(json => {
          callback(json);
        });
      }
    });
  };
 changeName = (team) => {
    this.setState({
      team });
 }

  handleClick = () => {
    let result = "";
    const { team } = this.state;
    this.fetchTeam(team, jsonBody => {
        result = JSON.stringify(jsonBody, null, 2);
        this.setState({oncall: result});
    })
  };

componentDidMount() {
  this.setState({
    isLoaded: true,
    oncall: "click the button"
  });
  }

  render() {
    return(
    <div>
      <button onClick={this.handleClick}>schedule</button>;
       {this.state.oncall}
    </div>)

  }
}

export default Team;
