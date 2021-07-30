import React from 'react';
import { Link } from 'react-router-dom';
import './Quiz.css';
const Quizstart = () => {
    return (
        <>
            
            <div className="app">
        
            <h1>QUIZ</h1>
            
            
           <Link to='/Quizmain'><span className="btnstartt"> Start </span></Link>
            
        </div>
    
        </>
    )
}

export default Quizstart;