import React from 'react';
import './Home.css';
function Button() {
  return (
    <form action="https://spotifytrackr.herokuapp.com/login">
    <button className="HomeButton">Begin track'n</button>
    </form>
  );
}
// function Login(){

//   var xhr = new XMLHttpRequest();
//   xhr.open('GET', 'https://aqueous-basin-92272.herokuapp.com:8888/login');
//   xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
//   xhr.setRequestHeader('Access-Control-Allow-Headers', 'X-Requested-With')
//   xhr.setRequestHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
//   xhr.setRequestHeader('Access-Control-Allow-Credentials', 'true')
//   xhr.setRequestHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');
//   xhr.send();
// }
class Home extends React.Component {
  constructor(props){
    super(props);
  }
  componentWillMount(){
    document.body.style.backgroundImage = "url('background.png')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
  
  }

  render(){
    return (
    <div className="Main">
        <p className="Title">
          TrackR
        </p>
        <p className="Description">
        Listen freely and {"\n"} never miss a single beat again.
        </p>
        {Button()}    
    </div>
  );
}
}
export default Home;