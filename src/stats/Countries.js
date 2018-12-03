import React from 'react'

const divStyle = {
  backgroundColor: '#f3f9fe'
}

export default function Countries() {
  return (
    <div style={divStyle}>
   
      <div className="row">
      <div className= "col-lg-12" align="center"><h2>My work has been viewed here:</h2></div>
      <div className="col-lg-4 col-md-6 col-sm-6" align="center">
        <p>Sweden</p>
          <img src={require('../png250px/se.png')} alt="Irish flag"/>
          <p>14165 views</p>
        </div>
      <div className="col-lg-4 col-md-6 col-sm-6" align="center">
        <p>Ireland</p>
          <img src={require('../png250px/ie.png')} alt="Irish flag"/>
          <p>15903 views</p>
        </div>
      <div className="col-lg-4 col-md-6 col-sm-6" align="center">
        <p>Austria</p>
          <img src={require('../png250px/at.png')} alt="austrian flag"/>
          <p>16463 views</p>
        </div>
      <div className="col-lg-4 col-md-6 col-sm-6" align="center">
        <p>Malaysia</p>
          <img src={require('../png250px/my.png')} alt="malaysian flag"/>
          <p>18104 views</p>
        </div>
      <div className="col-lg-4 col-md-6 col-sm-6" align="center">
        <p>Greece</p>
          <img src={require('../png250px/dk.png')} alt="greek flag"/>
          <p>19555 views</p>
        </div>
      <div className="col-lg-4 col-md-6 col-sm-6" align="center">
        <p>Denmark</p>
          <img src={require('../png250px/dk.png')} alt="denmark flag"/>
          <p>21138 views</p>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6" align="center">
        <p>Chile</p>
          <img src={require('../png250px/cl.png')} alt="chilean flag"/>
          <p>22883 views</p>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6" align="center">
        <p>Argentina</p>
          <img src={require('../png250px/ar.png')} alt="argentinian flag"/>
          <p>23742 views</p>
        </div>
      {/* <button type="button" className="btn btn-success"
        onClick={this.findVideoData.bind(this,'Bjhel5M0pog')}
        >Fetch Data</button> */}
        <div className="col-lg-4 col-md-6 col-sm-6" align="center">
        <p>Norway</p>
          <img src={require('../png250px/no.png')} alt="Norweigian flag"/>
          <p>25066 views</p>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6" align="center">
        <p>Belgium</p>
          <img src={require('../png250px/be.png')} alt="belgian flag"/>
          <p>28508 views</p>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6" align="center">
        <p>Netherlands</p>
          <img src={require('../png250px/nl.png')} alt="dutch flag"/>
          <p>32297 views</p>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6" align="center">
        <p>Indonesia</p>
          <img src={require('../png250px/id.png')} alt="Indonesian flag"/>
          <p>21138 views</p>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6" align="center">
        <p>Brazil</p>
          <img src={require('../png250px/br.png')} alt="brazilian flag"/>
          <p>51317 views</p>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6" align="center">
        <p>Australia</p>
          <img src={require('../png250px/au.png')} alt="austrailian flag"/>
          <p>51694 views</p>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6" align="center">
        <p>Poland</p>
          <img src={require('../png250px/pl.png')} alt="polish flag"/>
          <p>54336 views</p>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6" align="center">
        <p>Japan</p>
          <img src={require('../png250px/jp.png')} alt="japanese flag"/>
          <p>56579 views</p>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6" align="center">
        <p>Portugal</p>
          <img src={require('../png250px/pt.png')} alt="portuguese flag"/>
          <p>67541 views</p>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6" align="center">
        <p>Italy</p>
          <img src={require('../png250px/it.png')} alt="italian flag"/>
          <p>85408 views</p>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6" align="center">
        <p>Spain</p>
          <img src={require('../png250px/es.png')} alt="spanish flag"/>
          <p>92490 views</p>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6" align="center">
        <p>France</p>
          <img src={require('../png250px/fr.png')} alt="french flag"/>
          <p>123878 views</p>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6" align="center">
        <p>Canada</p>
          <img src={require('../png250px/ca.png')} alt="canadian flag"/>
          <p>135711 views</p>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6" align="center">
        <p>Mexico</p>
          <img src={require('../png250px/mx.png')} alt="mexican flag"/>
          <p>138446 views</p>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6" align="center">
        <p>Germany</p>
          <img src={require('../png250px/de.png')} alt="German flag"/>
          <p>155910 views</p>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6" align="center">
        <p>Great Britain</p>
          <img src={require('../png250px/gb.png')} alt="British flag"/>
          <p>194224 views</p>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6" align="center">
        <p>United States</p>
          <img src={require('../png250px/us.png')} alt="USA flag"/>
          <p>1150441 views</p>
        </div>
        


        </div>
      </div>
    
  )
}
