import React, { Component } from 'react'
import axios from 'axios';

const divStyle = {
  backgroundColor: '#f3f9fe'
}

export default class Landing extends Component {
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
      <div style={divStyle}>
       <div className="row">
       <div className="col" align="center">
      <h1 className ="skivvy">muuy biien</h1>
     
      {/* <p>3,310,490 views</p> */}
      </div>
      </div> 
      <div className="row">
      <div className="col-lg-4 col-md-6 col-sm-6 align-self-center" align="center">
        <p></p>
          <img className ="img-fluid" src={require('./img/age.jpg')} alt="argentina flag"/>
          <p></p>
        </div>
      <div className="col-lg-4 col-md-6 col-sm-6 align-self-center" align="center">
        <p></p>
          <img className ="img-fluid" src={require('./img/cover_promo.jpg')} alt="argentina flag"/>
          <p></p>
        </div>
      <div className="col-lg-4 col-md-6 col-sm-6 align-self-center" align="center">
        <p></p>
          <img className ="img-fluid" src={require('./img/age.jpg')} alt="argentina flag"/>
          <p></p>
        </div>
      {/* <button type="button" className="btn btn-success"
        onClick={this.findVideoData.bind(this,'Bjhel5M0pog')}
        >Fetch Data</button> */}
        <div className="col-lg-4 col-md-6 col-sm-6 align-self-center" align="center">
        <p></p>
          <img className ="img-fluid" src={require('./img/age.jpg')} alt="argentina flag"/>
          <p></p>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 align-self-center" align="center">
        <p></p>
          <img className ="img-fluid" src={require('./img/age.jpg')} alt="argentina flag"/>
          <p></p>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 align-self-center" align="center">
        <p></p>
          <img className ="img-fluid" src={require('./img/age.jpg')} alt="argentina flag"/>
          <p></p>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 align-self-center" align="center">
        <p></p>
          <img className ="img-fluid" src={require('./img/age.jpg')} alt="argentina flag"/>
          <p></p>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 align-self-center" align="center">
        <p></p>
          <img className ="img-fluid" src={require('./img/age.jpg')} alt="argentina flag"/>
          <p></p>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 align-self-center" align="center">
        <p></p>
          <img className ="img-fluid" src={require('./img/age.jpg')} alt="argentina flag"/>
          <p></p>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 align-self-center" align="center">
        <p></p>
          <img className ="img-fluid" src={require('./img/age.jpg')} alt="argentina flag"/>
          <p></p>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 align-self-center" align="center">
        <p></p>
          <img className ="img-fluid" src={require('./img/age.jpg')} alt="argentina flag"/>
          <p></p>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 align-self-center" align="center">
        <p></p>
          <img className ="img-fluid" src={require('./img/age.jpg')} alt="argentina flag"/>
          <p></p>
        </div>
      </div>
      </div>
      
    )
  }
}
