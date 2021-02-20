import React,{useState} from 'react';
import Login from './Login';
import Register from './Register';
import { FaGithub } from 'react-icons/fa';
import 'tachyons';

const Hero = () => {
	const [user,setUser] = useState('old');
	function set(props){
		setUser(props);
	}
	let form;
	if(user === 'old') 
		form = <Login setUser={() => this.set}/>;
	if(user === 'new') 
		form = <Register setUser={() => this.set}/>;
	const bgImg = {
		backgroundImage: 'url(https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1153&q=80)',
		backgroundRepeat: 'no-repeat',
  		backgroundPosition: 'center',
  		backgroundSize: 'cover' 
	}
  return (
    <div 
    className="App">
		
		<article 
		className="vh-100 dt w-100 hero" 
		style={bgImg}>
			<div 
			className="dtc v-mid tc black ph3 ph4-l">
					{form}
			</div>
		</article>

    </div>
  );
}

export default Hero;
