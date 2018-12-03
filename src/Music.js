import React, { Component } from 'react'
import axios from 'axios';

const divStyle = {
  backgroundColor: '#f3f9fe',
  border: '0',
  width: '350px',
  height: '786px'
}

const DYI = {
  backgroundColor: '#f3f9fe',
  border: '0',
  width: '350px',
  height: '786px'
}

export default class Music extends Component {
  constructor(props){
    super(props);
    this.findVideoData = this.findVideoData.bind(this);
  }

  findVideoData(id){
    //id = 'Bjhel5M0pog';
    axios.get(`https://youtubeanalytics.googleapis.com/v2/reports?dimensions=insightPlaybackLocationDetail&endDate=2018-09-13&filters=video%3D%3D${id}%3BinsightPlaybackLocationType%3D%3DEMBEDDED&ids=channel%3D%3DUCXzIKbnT7VS5V-kQLHzPScQ&maxResults=20&metrics=views&sort=-views&startDate=2008-01-01&key=`)
    .then(res => {
      console.log(res)
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <div>
         <div className="row">
      <div  className="col-lg-4 col-md-6 col-sm-6 align-self-center" align="center">
      <iframe style={divStyle} src="https://bandcamp.com/EmbeddedPlayer/album=3526521409/size=large/bgcol=ffffff/linkcol=0687f5/track=3318562928/transparent=true/" seamless><a href="http://muuybiien.bandcamp.com/album/age-of-uncertainty">Age Of Uncertainty by muuy biien</a></iframe>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 align-self-center" align="center">
        <iframe style={DYI} src="https://bandcamp.com/EmbeddedPlayer/album=2073202400/size=large/bgcol=ffffff/linkcol=0687f5/transparent=true/" seamless><a href="http://muuybiien.bandcamp.com/album/d-y-i-2">D.Y.I. by Muuy Biien</a></iframe>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 align-self-center" align="center">
        <iframe style={DYI} src="https://bandcamp.com/EmbeddedPlayer/album=2718383089/size=large/bgcol=ffffff/linkcol=0687f5/transparent=true/" seamless><a href="http://muuybiien.bandcamp.com/album/this-is-what-your-mind-imagines">This Is What Your Mind Imagines by Muuy Biien</a></iframe>   
            </div>
      </div>
      </div>
      
    )
  }
}
