import React, { Component } from 'react';
import Image from './componenets/Image'
import Navbar from './componenets/Navbar'
import Jumbo from './componenets/Jumbo'
import Footer from './componenets/Footer'
import images from './images.json'


class App extends Component {

  state = {
    pictures: this.shuffle(images),
    score: 0,
    highscore: 0,
    guessed: [],
    instruction: "Click to Begin"
  }

  shuffle(array) {
      array.sort(() => Math.random() - 0.5)
      return array
  }

  // pictureHover = (id) => {
  //   console.log(this.state.guessed)
  // }

  pictureClick = (id) => {
    let check = this.state.guessed.filter(num => num === id)
    if(check.length > 0) {
      this.setState({
        guessed: [],
        pictures: this.shuffle(images),
        score: 0,
        instruction: "You Guessed Incorrectly"
      })
    } else {
    this.setState({
      guessed: [...this.state.guessed, id],
      pictures: this.shuffle(images),
      score: this.state.score + 1,
      highscore: (this.state.score + 1 > this.state.highscore ? this.state.score + 1 : this.state.highscore),
      instruction: "You Guessed Correctly"
    })
    console.log(this.state.guessed)
  }

  }


  render() {
    return (
      <div>
      <Navbar current={this.state.score} high={this.state.highscore} instruction={this.state.instruction}/>
      <Jumbo instruction={this.state.instruction}/>
        <div className="container" style={{textAlign: "center", paddingBottom: 40, marginBottom: 40}}>
          {this.state.pictures.map(
            (image) => <Image
                              id={image.id}
                              sourceURL={image.image}
                              alternateWords={image.name}
                              // handleHover={this.pictureHover}
                              onClick={this.pictureClick}
                              />
          )}
        </div>
      <Footer/>
      </div>
    );
  }
}

export default App;
