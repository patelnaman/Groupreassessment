import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Quiz.css';

const Quizend = () => {
    return (
        <>
              
            <div id="home" class=" flex-column flex-center">   

            <div>
            <h1><   Link to='/Quizmain'><span className="btn"> Start Quiz Again </span></Link></h1>
            </div>
            <div>
            <h1><   Link to=''><span className="btn"> Home Page </span></Link></h1>
            </div>
            <div>
            <h1><   Link to='/Quizhelp'><span className="btn"> Help </span></Link></h1>
            
            
            
            </div>
            </div>
        </>
            )
}

export default Quizend;