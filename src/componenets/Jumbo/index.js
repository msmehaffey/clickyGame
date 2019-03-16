import React, { Component } from 'react';




function Jumbo(props) {
    return (
      <div class="jumbotron jumbotron-fluid" id="jumbotronStyle"> 
      <div class="container"> 
      <h2 >{props.instruction} </h2>
      <h1 class="display-3">Dodger Memory Game!</h1> 
      <p class="lead">Click all the Dodgers but be careful not to click the same player twice!</p> 
      </div> 
      </div>
    );
}

export default Jumbo;