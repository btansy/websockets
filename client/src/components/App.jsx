import React, { Component } from 'react';
import Form from './Form.jsx';
import Message from './Message.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      ws: new WebSocket("ws://localhost:8080"),
      timeout: 250
    };
    this.sendMessage = this.sendMessage.bind(this);
    this.connect = this.connect.bind(this);
  }

  sendMessage(name, message) {
    this.state.ws.send([name,message]);
  }

  componentDidMount() {
    this.connect();
  }

  connect() {
    var ws = new WebSocket("ws://localhost:8080");
      ws.onopen = () => {
        console.log("connected websocket main component");
        this.setState({ ws: ws });
      };
    this.state.ws.onmessage = evt => {
      var temp = this.state.messages.slice()
      if (temp.length > 20) {
        temp.shift();
      }
      temp.push([evt.data.split(',')[0],evt.data.split(',')[1]]);
      console.log(temp);
      this.setState({
        messages: temp
      });
    }
    ws.onclose = e => {
      console.log(
        `Socket is closed. Reconnect will be attempted in ${Math.min(
          10000 / 1000,
          (that.timeout + that.timeout) / 1000
        )} second.`,
        e.reason
      );
      that.timeout = that.timeout + that.timeout; //increment retry interval
      connectInterval = setTimeout(this.check, Math.min(10000, that.timeout)); //call check function after timeout
    };
    ws.onerror = err => {
      console.error(
        "Socket encountered error: ",
        err.message,
        "Closing socket"
      );
    ws.close();
    };
  }; 
  render() {
    var counter = 0;
    var helper = function() {
      counter += 1;
      return counter;
    }
    return (
      <div>
        <Form send={this.sendMessage}/>
        {this.state.messages.map(function(inputArr) {
            return <Message key={helper()} name={inputArr[0]} message={inputArr[1]} />
          }
        )}
      </div>
    );
  }
}

export default App;