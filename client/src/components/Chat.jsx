import React, { Component } from 'react';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      message: ''
    };
  }

  render() {
    return (
      <p>
        Chat loaded
      </p>
    );
  }
}
export default Chat;