import React, { Component } from 'react';
import Image from './componenets/Image'
import Navbar from './componenets/Navbar'
import Jumbo from './componenets/Jumbo'
import Footer from './componenets/Footer'
import images from './images.json'


class App extends Component {

  state = {
    pictures: this.shuffle(images)
  }

  shuffle(array) {
      array.sort(() => Math.random() - 0.5)
      return array
  }

  render() {
    return (
      <div>
      <Navbar/>
      <Jumbo/>
        <div className="container center" style={{}}>
          {this.state.pictures.map(
            (image) => <Image
                              id={image.id}
                              sourceURL={image.image}
                              alternateWords={image.name}
                              />
          )}
        </div>
      <Footer/>
      </div>
    );
  }
}

export default App;
