import React from "react";
import './Quiz.css';
import {Link } from "react-router-dom";

function Home(){
    return (
        

            
        
        <div className="app">
            <h1>Say NO to domestic violence!</h1>
            <h1>National Centre for Domestic Violence: 0207 186 8270</h1>
            <h1>National Domestic Abuse Helpline: 0808 2000 247</h1>
            <h1>Victim Support: 0808 168 9111</h1>
            <h2><a href="https://www.legislation.gov.uk/ukpga/2021/17/contents/enacted">UK LAWS AND LEGISLATION FOR ABUSE</a></h2>
            
            <Link to='/Quizmain'><span className="btnstartt"> Quiz </span></Link>
            <Link to='/information'><span className="btnstartt"> information </span></Link>
            <Link to='/map'><span className="btnstartt"> maps </span></Link>
            <Link to='/chatroom'><span className="btnstartt"> chatroom </span></Link>
            <Link to='/Report'><span className="btnstartt"> Report </span></Link>
            <Link to='/address'><span className="btnstartt"> address </span></Link>
            
            </div>
            

    );
}

export default Home;