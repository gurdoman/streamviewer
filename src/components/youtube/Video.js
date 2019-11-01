import React, { Component } from 'react'
import './Video.css';
import * as StompJS from '@stomp/stompjs'
import axios from 'axios'
import Chat from './Chat';

export default class Video extends Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.connectToLivestreamSocket();
    this.getInitialVideos();
  }

  connectToLivestreamSocket = () =>{
    var ws = StompJS.Stomp.over(()=>{
      return new WebSocket("ws://localhost:3001/youtube/websocket");
    });
    let wsConnect = () =>{
      console.log("Connected to YouTube Websocket")
      ws.subscribe("/livestream/status", this.props.handleStatus, '');
      ws.subscribe("/livestream/videos", this.props.getVideos, '');
    };
    let wsError = (error) =>{console.log("Error connecting")};
    ws.connect({},wsConnect, wsError);
    ws.reconnect_delay = 5000;
  };

  getInitialVideos(){
    axios.get("http://localhost:3001/videos").then(response =>{
      this.props.getVideos(response.data);
      if(response.data[0] != null){
        let firstVideo = response.data[0];
        this.props.handleVideo(firstVideo);
        this.props.handleStatus({body : firstVideo.status});
        this.props.handleChatId(firstVideo.id);
      }
    }).catch(error =>{
      console.log(error);
    })
  }

  render() {
    const {id, title, description} = this.props.video
    const isMobile = this.props.isMobile ? 'mobile ' : '';
    let video;
    if(id){
      let src = `https://www.youtube.com/embed/${id}?autoplay=1&livemonitor=1`;
      video = <iframe src={src} className="video-player_main-video" title="YouTube Video" allow="accelerometer; autoplay; gyroscope; picture-in-picture" frameBorder="0"></iframe>
    }
    let chat = isMobile ? '' : 
          <div className="video-extras-chat">
            <Chat
              chatVideoId={this.props.chatVideoId}
              isMobile={this.props.isMobile}
              logged={this.props.logged}
              />
          </div>
    return (
      this.props.video ? 
      <div className="video-player-container">
        <div className="video-player">
          {video}
        </div>
        <div className="video-extras-container">
          <div className="video-extras_data">
            <div className={isMobile+"video-title"}>
              {title}
            </div>
            <div className={isMobile+"video-description"}>
              {description}
            </div>
          </div> 
          {chat}
        </div>
      </div> : ''
    )
  }
}
