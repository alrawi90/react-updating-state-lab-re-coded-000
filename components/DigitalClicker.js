const React = require('react');

class DigitalClicker extends React.Component{
  constructor(props) {
  super();
  this.state = {
  timesClicked: 0,
};
  this.callBack=this.callBack.bind(this)

}

  callBack(e){
    alert();
    this.setState({

      timesClicked:this.state.timesClicked+=1,
    })
  }

  render(){

    return(
    <div className="DigitalClicker" >
    <button onClick={this.callBack} >{this.state.timesClicked}</button>
   </div>
    )

  }

}


module.exports=DigitalClicker
