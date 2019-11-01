import React, { Component } from 'react'

export default class OtherVideo extends Component {
  render() {
    const {id, publishedAt, thumbnailUrl, title} = this.props.video;

    return (
      <div className="other-video" onClick={this.props.changeVideo.bind(this, this.props.video)}>
        <img className="other-video_image" src={thumbnailUrl} alt={id}/>
        <div className="other-video_description">
          <span className="other-video_title">{title}</span>
          <span className="other-video_date">{Date(publishedAt)}</span>
        </div>
      </div>
    )
  }
}
