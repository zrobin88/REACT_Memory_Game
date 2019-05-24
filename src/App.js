import React, { Component } from 'react';
import FriendCard from './components/FriendCard'
import Wrapper from './components/Wrapper';
import Title from './components/Title';
import Instructions from './components/Instructions'
import dataStuff from './components/data'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      data: dataStuff,
      score: 0,
      highscore: 10,
    }

    this.arr = [];

  }

  componentDidMount() {
    for (let i = 0; i < this.state.data.length; i++) {
      this.arr.push(false);

    }
  }

  clicked = (id) => {
    this.setState({ data: this.shuffleArray(this.state.data) });

    if (this.arr[id]) {
      this.setState({ score: 0 });

      this.arr = [];

      for (let i = 0; i < this.state.data.length; i++) {
        this.arr.push(false);

      }


    } else {
      this.arr[id] = true;

      this.setState({ score: this.state.score + 1 });

      if(this.state.score > this.state.highscore){
        this.setState({ highscore: this.state.score });
      }
    }

  };

  shuffleArray = array => {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }


  render() {
    return (
      <Wrapper>
       
        <Title score={this.state.score} highscore={this.state.highscore}>
          REACT Rockstar Click-Game 
        </Title>
        {this.state.data.map(data => (
          <FriendCard
            id={data.id}
            name={data.name}
            image={data.image}
            clicked={this.clicked}
          />
        ))}
          <Instructions />
   
      </Wrapper>
    
    );
  }
}

export default App;
