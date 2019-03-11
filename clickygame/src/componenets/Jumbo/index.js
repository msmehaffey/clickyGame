import React, { Component } from 'react';


const jumbotronStyle = {
  marginBottom: "0px",
  backgroundImage: "url('https://securea.mlb.com/assets/images/2/2/2/299969222/cuts/2568x1445/cut.JPG')",
  backgroundPosition: "0% 60%",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  color: "white",
  textShadow: "black 0.3em 0.3em 0.3em",
  textAlign: "center"
}

class Jumbo extends Component {
  render() {
    return (
      <div class="jumbotron jumbotron-fluid" style={jumbotronStyle}> 
      <div class="container"> 
      <h1 class="display-3">Dodger Memory Game!</h1> 
      <p class="lead">Click all the Dodgers but be careful not to click the same player twice!</p> 
      </div> 
      </div>
    );
  }
}

export default Jumbo;