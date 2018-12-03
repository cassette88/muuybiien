import React, { Component } from 'react'

const divStyle = {
  backgroundColor: '#f3fffe'
}
const postpunk = {
  backgroundColor: 'black',
  color: 'white'
}

export default class Inspiration extends Component {
  render() {
    return (
      <div className="row" style={divStyle}>
       <div className="col-lg-4 col-md-6 col-sm-6 align-self-center" align="center">
        <a className="line" href="https://www.vice.com/en_us/article/avn45j/a-season-in-hell-with-muuy-biien">A Season in Hell
          <img className ="img-fluid" src={require('./img/vice.png')} alt="vice logo"/>
          <p></p></a>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 align-self-center" align="center">
        <a href="https://www.goldflakepaint.co.uk/review-muuy-biien-d-y-i/">
          <img className ="img-fluid" src={require('./img/gfp-logo-large.jpg')} alt="goldflakepain logo"/>
          <p>muuy biien D.Y.I review</p></a>
        </div>
        <div style ={postpunk} className="col-lg-4 col-md-6 col-sm-6 align-self-center" align="center">
        <a style ={postpunk} href="https://www.post-punk.com/muuy-biien-premiere-moral-compass/">Muuy Biien premiere "Moral Compass"
          <img className ="img-fluid" src={require('./img/postpunkglow.png')} alt="post punk logo"/>
          <p></p></a>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 align-self-center" align="center">
        <a href="https://www.spin.com/2016/09/muuy-biien-take-a-trip-to-the-west-in-their-dangerous-song-bitter-blessings/">Muuy Biien’s Dangerous New Song “Bitter Blessings”
          <img className ="img-fluid" src={require('./img/spin-logo.png')} alt="spin logo"/>
          <p></p></a>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 align-self-center" align="center">
        <a href="https://aquariumdrunkard.com/2016/10/17/the-lagniappe-sessions-muuy-biien-cover-grace-jones-swell-maps/">The Lagniappe Sessions: Muuy Biien cover Grace Jones / Swell Maps
          <img className ="img-fluid" src={require('./img/aquarium-drunkard-logo.jpeg')} alt="aquarium drunkunard logo"/>
          <p></p></a>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 align-self-center" align="center">
        <a href="https://www.popmatters.com/muuy-biien-age-of-uncertainty-2495408231.html">Looks like we have a contender for most prescient album title of the year.
          <img className ="img-fluid" src={require('./img/pop-matters.png')} alt="pop matters logo"/>
          <p></p></a>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 align-self-center" align="center">
        <a href="https://therevue.ca/2016/11/02/muuy-biien-age-of-uncertainty/">Muuy Biien - "Age of Uncertainty"
          <img className ="img-fluid" src={require('./img/revuenew.jpg')} alt="the revue logo"/>
          <p></p></a>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 align-self-center" align="center">
        <a href="http://www.brooklynvegan.com/muuy-biien-share-moral-compass-video-playing-nyc-this-week-other-dates/">Muuy Biien share “Moral Compass” video, playing NYC this week ++ other dates
          <img className ="img-fluid" src={require('./img/brooklyn-vegan-logo.png')} alt="Brooklyn Vegan logo"/>
          <p></p></a>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 align-self-center" align="center">
        <a href="https://www.culturecreature.com/muuy-biien-interview-age-of-uncertainty/">
          <img className ="img-fluid" src={require('./img/culture-creature.jpeg')} alt="culture creature logo"/>
          <p>"I really honestly believe we were the only two people fist-fighting in Canada"</p></a>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 align-self-center" align="center">
        <a href="http://clrvynt.com/muuy-biien-moral-compass-video/">
          <img className ="img-fluid" src={require('./img/clvynt-logo.png')} alt="the revue logo"/>
          <p>Muuy Biien sets its 'Moral Compass' South of Heaven</p></a>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 align-self-center" align="center">
        <a href="https://www.clashmusic.com/videos/muuy-biien-another-degradation">Muuy Biien - Another Degradation 
          <img className ="img-fluid" src={require('./img/clash-logo.png')} alt="Clash logo"/>
          <p></p></a>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 align-self-center" align="center">
        <a href="https://newnoisemagazine.com/album-review-muuy-biien-d-y-i/">
          <img className ="img-fluid" src={require('./img/new-noise-logo.gif')} alt="New Noise logo"/>
          <p>Album Review: Muuy Biien – “D.Y.I.”</p></a>
        </div>
     </div>
    )
  }
}
