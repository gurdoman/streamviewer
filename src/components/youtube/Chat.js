import React, { Component } from 'react'

export default class Chat extends Component {

  constructor(props){
    super(props);

    this.state = {src : ''}

    this.generateChatSrc = this.generateChatSrc.bind(this);
  }
  
  generateChatSrc(){
    const chatId  = this.props.chatVideoId;
    if(chatId !== ''){
      this.setState({
        src : `https://gaming.youtube.com/live_chat?v=${this.props.chatVideoId}&embed_domain=${window.location.hostname}`
      })
    }else{
      this.setState({
        src : ''
      })
    }
    
  }

  componentDidMount(){
    this.generateChatSrc();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.chatVideoId !== this.props.chatVideoId) {
      this.generateChatSrc();
    }
  }


  render() {

    let iframe = this.state.src !== '' && this.props.logged !== 'NO' ? <iframe src={this.state.src} title="YouTube Chat" width="400" height="500" frameBorder="0"></iframe> : '';

    return (
        <div>
          {iframe}
        </div> 
    )
  }
}
