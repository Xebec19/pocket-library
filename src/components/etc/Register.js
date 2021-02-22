import React from 'react';
import {
Link
} from "react-router-dom";
import 'tachyons';

function Register(props) {
  return (
    <div className='tc bg-white dib br3 pa3 ma2 grow bw shadow-5'>
      
		<main 
		className="pa4 black-80">
		<form 
		className="measure center">
		<fieldset 
		id="sign_up" 
		className="ba b--transparent ph0 mh0">
		<legend 
		className="f4 fw6 ph0 mh0">
		Sign Up
		</legend>
		<div 
		className="mt3">
		<label 
		className="db fw6 lh-copy f6" 
		htmlFor="email-address">
			Email
		</label>
		<input 
		className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
		type="email" 
		name="email-address"  
		id="email-address" />
		</div>
		<div 
		className="mv3">
		<label 
		className="db fw6 lh-copy f6" 
		htmlFor="password">
			Password
		</label>
		<input 
		className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
		type="password" 
		name="password"  
		id="password" />
		</div>
		<label 
		className="pa0 ma0 lh-copy f6 pointer">
		</label>
		</fieldset>
		<div 
		className="">
		<input 
		className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
		type="submit" 
		value="Sign in" />
		</div>
		<div 
		className="lh-copy mt3">
		<Link
		style={{cursor:'pointer'}} 
		to='/'
		className="f6 link dim black db">
		Already have an account ?
		</Link>
		</div>
		</form>
		</main>

    </div>
  );
}

export default Register;
