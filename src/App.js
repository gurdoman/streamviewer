import React, { Component } from 'react';
import './App.css';
import Menu from './components/menu/Menu';
import Video from './components/youtube/Video'
import {isMobile} from 'react-device-detect';
import axios from 'axios';
import BrandHeader from './components/brand/BrandHeader';
import OtherVideos from './components/youtube/OtherVideos';
import Social from './components/social/Social';

export default class App extends Component {
  constructor(){
    super();

    this.state = {
      logged : '',
      user : {},
      loginError : "",
      status : 'offline',
      videos: [],
      video: {},
      chatVideoId : ''
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleLoginError = this.handleLoginError.bind(this);
    this.logoutUser = this.logoutUser.bind(this);
    this.handleStatus = this.handleStatus.bind(this);
    this.getVideos = this.getVideos.bind(this);
    this.handleChatId = this.handleChatId.bind(this);
    this.handleVideo = this.handleVideo.bind(this); 
    this.changeVideo = this.changeVideo.bind(this); 
  }

  checkLoginStatus(token){
    let tokenId = token;
    let data = {
      "tokenId" : tokenId,
      "source" : "streamviewer"
    }
    axios.post("http://localhost:3001/users", data)
    .then(response =>{
      this.setState({
        logged : "YES",
        user : response.data
      });
      localStorage.setItem('userData', JSON.stringify(response.data))
    }).catch(error =>{
      console.log(error);
      localStorage.removeItem('userData');
      this.setState({logged : "NO"});
    })
  }

  componentDidMount(){
    const userData = JSON.parse(localStorage.getItem('userData'));
    if(userData){
      this.checkLoginStatus(userData.token);
    }else{
      this.setState({logged : "NO"});
    }
  }

  handleLogin(data){
    localStorage.setItem('userData', JSON.stringify(data));
    this.setState({
      logged : 'YES',
      user: data,
      loginError : ''
    })
  }

  handleLoginError(error){
    this.setState({loginError : error});
  }

  logoutUser(){
    localStorage.removeItem('userData');
    this.setState({
      logged : "NO",
      user : {}
    });
  }

  handleStatus(message){
    this.setState({status: message.body});
  }

  getVideos(message){
    let videos = message;
    if(message.body != null){
      videos = JSON.parse(message.body)
    }
    this.setState({
      videos,
      video: videos[0],
      chatVideoId : videos[0].id
    });
  }

  handleChatId(id){
    this.setState({chatVideoId : id});
  }

  handleVideo(video){
    this.setState({video});
  }

  changeVideo(video){
    this.setState({
      video,
      chatVideoId : video.id
    })
  }

  render() {
    return (
      <div className="container">
        <div className="menu-container">
          <Menu 
            logged={this.state.logged} 
            user={this.state.user} 
            handleLogin={this.handleLogin}
            handleLoginError={this.handleLoginError}
            logoutUser={this.logoutUser}
          />
        </div>
        <div className="body-container">
          <BrandHeader />
          <Video 
            handleStatus={this.handleStatus}
            getVideos={this.getVideos}
            video={this.state.video}
            handleChatId={this.handleChatId}
            handleVideo={this.handleVideo}
            isMobile={isMobile}
            chatVideoId={this.state.chatVideoId}
            logged={this.state.logged}
            />
          <OtherVideos 
            videos={this.state.videos}
            video={this.state.video}
            changeVideo={this.changeVideo}
            />
          <Social />
        </div>
        <div className="footer">Disclaimer: Not a real website, this project was done as a portafolio project and Adrian Rossino does not own the images shown, this site is only for development purposes</div>
      </div>
    )
  }
}
