import React from 'react';
import './History.css';
import {Link, Redirect} from 'react-router-dom';
import nl2br from 'react-newline-to-break';
import Parser from 'html-react-parser';
var rows = '';
function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)===' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}
class History extends React.Component {


	constructor(props){
		super(props);
		this.state = {
      isFetching: false
    }
	}
	 getData() {
    // create a new XMLHttpRequest
    var xhr = new XMLHttpRequest();
    // get a callback when the server responds
    xhr.addEventListener('load', () => {
      // update the state of the component with the result here
      console.log(xhr.responseText);
      var data =JSON.parse(xhr.responseText);
      for(var i = 0; i<data.length; i++){
		if(data[i].songName !== null && data[i].songName !== '')
		rows+='<tr>'+data[i].songName+'</tr>'; 
	}
	this.setState({
          data: rows,
          isFetching: false
        });

    });
    // open the request with the verb and the url
    xhr.open('GET', 'https://spotifytrackr.herokuapp.com/history');
    // send the request
    xhr.send();
  }
	render(){
		const loggedIn = readCookie("loggedIn");
		if(loggedIn !== "true"){
			return(
				<Redirect to="/" />
			);
		}
		if(this.state.isFetching)return <div>Loading...</div>;
		else{
			var welcomeText = "Every Song You've Ever"
		return(
			<div>
			{Navbar()}
			<p className="Welcome">{nl2br(welcomeText)}Played<span style={{color: "#1DB954",}}>.</span></p>
			<table className="Table">
			{Parser(rows)}
			</table>
			</div>
		)
	}
	}
	componentWillMount(){
		document.body.style.background="none";
    	document.body.style.backgroundColor = "white";
	}
	componentDidMount(){
		this.setState({isFetching: true});
		this.getData();
	}


}

function Navbar(){
	return(
		<div className="Navbar">
		<Link to="/" className="NavLink" onClick={Logout}><p>Logout</p></Link>
		</div>

		);
}
function eraseCookie(name) {   
    document.cookie = name+'=; Max-Age=-99999999;';  
}
 function Logout() {
    const url = 'https://www.spotify.com/logout/';
    var facwin = window.open(url, '_blank');
    setTimeout(function () { facwin.close(); }, 3000);
    eraseCookie('loggedIn');
  }

export default History;