import React from 'react';

class Message extends React.Component {
  render() {
    return (
      <p>
        <strong>{this.props.name}</strong> <em>{this.props.message}</em>
      </p>
    );
  }
}

export default Message;