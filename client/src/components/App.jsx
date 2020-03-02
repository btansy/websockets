import React, { Component } from 'react';
import Form from './Form.jsx';
import Chat from './Chat.jsx';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
  }

  render() {
    return (
      <div>
        <Form />
        <Chat messages={this.state.messages} />
      </div>
    );
  }
}

export default App;