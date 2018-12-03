import React from 'react'

export default function Sites() {
  return (
    <div>

   <div className="row">
   <div className= "col-lg-12" align="center"><h2>My work has appeared here:</h2></div>
   <div className="col-lg-4 col-md-6 col-sm-6 align-self-center">
      <a href="http://www.sfweekly.com/"><img className="img-fluid" src={require('../img/SF-Weekly-Logo.jpg')} alt="SF Weekly logo"/></a>
        <p>SF Weekly</p>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 align-self-center">
      <a href="https://pitchfork.com/"><img className="img-fluid" src={require('../img/pitchfork.jpg')} alt="Pitchfork logo"/></a>
        <p>Pitchfork</p>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 align-self-center">
      <a href="https://4ad.com/"><img className="img-fluid" src={require('../img/4ad.png')} alt="4ad logo"/></a>
        <p>4AD Records</p>
        </div>
   {/* <button type="button" className="btn btn-success"
     onClick={this.findVideoData.bind(this,'Bjhel5M0pog')}
     >Fetch Data</button> */}
     <div className="col-lg-4 col-md-6 col-sm-6 align-self-center">
      <a href="https://www.pastemagazine.com/"><img className="img-fluid" src={require('../img/paste.png')} alt="paste magazine logo"/></a>
        <p>Paste Magazine</p>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 align-self-center">
      <a href="https://genius.com/"><img className="img-fluid" src={require('../img/genius.png')} alt="genius logo"/></a>
        <p>Genius.com</p>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 align-self-center">
       <a href="https://www.billboard.com/"><img className="img-fluid" src={require('../img/Billboard_logo.png')} alt="billboard magazine logo"/></a>
        <p>Billboard.com</p>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 align-self-center">
       <a href="https://www.gqmagazine.fr/"><img className="img-fluid" src={require('../img/gq-magazine-france-thumb.jpg')} alt="GQ France logo"/></a>
        <p>GQ France</p>
        </div>
     <div className="col-lg-4 col-md-6 col-sm-6 align-self-center">
       <a href='https://mixi.jp/'><img className="img-fluid" src={require('../img/Mixi_logo.png')} alt="mixi logo"/></a>
        <p>Mixi.jp</p>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 align-self-center">
       <a href="https://hipersonica.com/"><img className="img-fluid" src={require('../img/hipersonica.jpeg')} alt="mixi logo"/></a>
        <p>Hipersonica.com</p>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 align-self-center">
       <a href="https://www.lesinrocks.com/"><img className="img-fluid" src={require('../img/inrocks.jpg')} alt="leinrocks logo"/></a>
        <p>LesinRocks.com</p>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 align-self-center">
       <a href="https://www.nme.com/"><img className="img-fluid" src={require('../img/nme.png')} alt="nme logo"/></a>
        <p>NME.com</p>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 align-self-center">
       <a href="https://www.sopitas.com/"><img className="img-fluid" src={require('../img/SOPITAS_LOGO.png')} alt="soptias.com logo"/></a>
        <p>sopitas.com</p>
        </div>
   </div>
   </div>
  )
}
