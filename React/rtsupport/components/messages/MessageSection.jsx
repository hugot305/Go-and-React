import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MessageList from './MessageList.jsx';
import MessageForm from './MessageForm.jsx';


class MessageSection extends Component{
  render(){
    let {activeChannel} = this.props;
    return (
      <div className='messages-container panel panel-default'>
        <div className='panel-heading'><strong>{activeChannel.name || 'Select A Channel'}</strong></div>
        <div className='panel-body messages'>
          <MessageList {...this.props} />
          <MessageForm {...this.props} />
        </div>
      </div>
    )
  }
}

MessageSection.propTypes = {
  messages: PropTypes.array.isRequired,
  activeChannel: PropTypes.object.isRequired,
  addMessage: PropTypes.func.isRequired
}

export default MessageSection