import React from 'react';
import ReactPlayer from 'react-player';

const Video = () => {
  return (
    <ReactPlayer
    url='/React JS - React Tutorial for Beginners.mp4'
    width='100%'
    height='100vh'
    playing
    controls='true'
    playIcon={<button><img src='/html5.gif' /></button>}
    />
  )
}

export default Video