import React, { Component } from 'react'
import OtherVideo from './OtherVideo'
import './OtherVideos.css';

export default class OtherVideos extends Component {
  render() {
    return (
      <div className="other-videos">
        <div className="other-videos_title">My Other Streams</div>
        {
          this.props.videos.filter(v =>
            v.id !== this.props.video.id
          ).map(v =>{
            return <OtherVideo 
                      key={v.id}
                      video={v}
                      changeVideo={this.props.changeVideo}
                    />
          })
        }
      </div>
    )
  }
}
