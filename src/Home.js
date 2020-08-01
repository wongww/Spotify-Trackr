import React from 'react';
import './Home.css';
import {Link, Redirect} from 'react-router-dom';
function Button() {
  return (
    <form action="https://spotifytrackr.herokuapp.com/login">
    <button className="HomeButton" type="submit">Begin track'n</button>
    </form>
  );
}
// function Button2() {
//   return (
//     <Link to="/history">
//     <button className="HomeButton">Begin track'n</button>
//     </Link>
//   );
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
    
    console.log("About to check path");
    const path = this.props.history.location;
    const checkPath = () => {
        if (path.hash) {
            if (path.hash.includes('#!/history')) {
              console.log("Redirecting");
                return (<Redirect to='/history'></Redirect>);
                console.log("I shouldnot see this line of text");
            }
        }
        else{
            console.log("rendering home");
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
    return checkPath();
    
}
}
export default Home;