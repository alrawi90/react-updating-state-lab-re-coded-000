const React = require('react');

class YouTubeDebugger extends React.Component{
  constructor(props) {
  super();
  this.state = {
     errors: [], settings: { bitrate: 8, video: { resolution: '1080p' } }, user: null
};
  this.changeResolution=this.changeResolution.bind(this)
  this.changeBitrate=this.changeBitrate.bind(this)

}

  changeBitrate(e){
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        bitrate: 12,
      }),
    });
  }
  changeResolution(e){
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        video:Object.assign({},this.state.settings.video,{resolution: '720p',})
      }),
    });
  }

  render(){

    return(
    <div className="YouTubeDebugger" >
    <button className="bitrate" onClick={this.changeBitrate} >change bitrate</button>
    <button className="resolution" onClick={this.changeResolution} >change resolution</button>
   </div>
    )

  }

}


module.exports=YouTubeDebugger
