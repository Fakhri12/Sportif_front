import React from 'react';
import { Link } from "react-router-dom";
import './header.css';

var email = document.querySelector('#email');
var password = document.querySelector('#password');
var upperCaseLetters = /[A-Z]/g;
var numbers = /[0-9]/g;


function myFunction() {

    if	(email.value=='') {(alert('bbb'))}
    if 	(password.value=='') {(alert('ddd'))}
    

        else alert ('Bienvenue')
    
    
    if (password.value.length<8) alert('length min 8')
    if (!password.value.match(numbers)) alert('password undefined')
    if(!password.value.match(upperCaseLetters)) alert('password upperCase undefined')
    }

const Header = () =>{
    return (
        <div className="aa-header">
            <div className="header-left">
                <img alt="" src="https://www.openplay.co.uk/assets/images/logo.png"></img>
            </div>
            <div className="header-right">
                <div className="header-right-top">
                    <ul className="header-list">
                        <li className="username"><input id="email" type="text" name="email" className="user" placeholder="User Name"/></li>
                        <li className="username"><input id="password" type="password" name="password" className="user" placeholder="Password"/></li>
                        <li className="connect"><button type="button" id="mybutton" onClick={myFunction}>connect</button> </li>
                        <li className="login"><Link to="/sign-up">Sign-Up</Link></li>
                    </ul>
                </div>
                <div className="header-left-buttom">
                    <ul className="header-lists">
                        <li className="header-list"><a href=""><span>Home </span><i className="fas fa-chevron-down"></i></a></li>
                        <li className="header-list"><a href=""><span>News </span><i className="fas fa-chevron-down"></i></a></li>
                        <li className="header-list"><a href=""><span>Contact </span><i className="fas fa-chevron-down"></i></a></li>
                        <li className="header-list"><a href=""><span>About </span><i className="fas fa-chevron-down"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Header