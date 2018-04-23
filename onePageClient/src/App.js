import React, { Component } from 'react';
import './stylesheets/html5doctor.css';
import './App.css';
import Contents from './Contents.js'
import poem_db from './Data.js'
import FlatButton from 'material-ui/FlatButton';

function View(props) {
  return (
    <div className={props.class}>
      {props.children}
    </div>
  )
}

function Title(props) {
  return (
    <div className="title">
      {props.title}
    </div>
  )
}

function Author(props) {
  return (
    <div className="author">
      {props.author}
    </div>
  )
}

function Text(props) {
  const line_list = props.text.split("\n")
  const paragraphItem = line_list.map((item, index) => <span key={index}>{item}<br /></span>)
  return (
    <div className="text">
      {paragraphItem}
    </div>
  )
}

function Interface(props) {
  return (
    <div className="Interface">
      <FlatButton onClick={props.handlePrivius}><i className="fas fa-angle-left"></i></FlatButton>
      <FlatButton onClick={props.handleNext}><i className="fas fa-angle-right"></i></FlatButton>
    </div>
  )
}

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit(event) {
    console.log(this.state.value);

    this.setState((prevState) => {
      alert('submit ' + prevState.value);

      return {
        value: ""
      }
    });
    event.preventDefault();
  }

  render() {
    return (
      <form className="postInterface" onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

class App extends Component {
  constructor(props) {
    super(props);

    this.handleNextClick = this.handleNextClick.bind(this);
    this.handleViewOff = this.handleViewOff.bind(this);
    this.state = {
      poem: [poem_db[0], poem_db[1], poem_db[2]],
      view: true
    }
  }

  handleNextClick() {
    this.setState({
      view: false
    });
  }

  handleViewOff() {
    const random_index = getRandomInt(poem_db.length);
    this.setState(prevState => {
      prevState.poem.shift();
      prevState.poem.push(poem_db[random_index]);
      return {
        poem: prevState.poem,
        view: true
      }
    });
  }

  render() {
    return (
      <div className="App" >
        <main>
          <View class="left">
            <Contents in={this.state.view} onExit={this.handleViewOff} backgroundImage={process.env.PUBLIC_URL + "/images/backgrounds/" + this.state.poem[0].backgroundImage}>
              <Title title={this.state.poem[0].title} />
              <Author author={this.state.poem[0].author} />
              <Text text={this.state.poem[0].text} />
            </Contents>
          </View>
          <View >
            <Contents in={this.state.view} onExit={this.handleViewOff} backgroundImage={process.env.PUBLIC_URL + "/images/backgrounds/" + this.state.poem[1].backgroundImage}>
              <Title title={this.state.poem[1].title} />
              <Author author={this.state.poem[1].author} />
              <Text text={this.state.poem[1].text} />
            </Contents>
          </View>
          <View class="right">
            <Contents in={this.state.view} onExit={this.handleViewOff} backgroundImage={process.env.PUBLIC_URL + "/images/backgrounds/" + this.state.poem[2].backgroundImage}>
              <Title title={this.state.poem[2].title} />
              <Author author={this.state.poem[2].author} />
              <Text text={this.state.poem[2].text} />
            </Contents>
          </View>
          <Interface handleNext={this.handleNextClick} />
        </main>
        <footer>
        </footer>
      </div>
    );
  }
}
export default App;
