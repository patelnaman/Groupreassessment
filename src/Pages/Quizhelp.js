import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Quiz.css';

const Quizhelp = () => {
    return (
        <>
            <div>
            <h1> Thank you for taking the Quiz</h1>
            
            <h1> Remember all answers are confidential and wont be shared anywhere</h1>

            <h1> You have taken your quiz succesfully and below are the government websites fot the help</h1>

            <h1> Please read these links for more information on how to get the help you need</h1>

            <ul class="colorul">
                
            <h2><a href="https://www.nationaldahelpline.org.uk/Your-rights-and-options">N A T I O N A L-D A-H E L P L I N E</a></h2>
            <h2><a href="https://www.gov.uk/guidance/domestic-abuse-how-to-get-help">UK-GOVERNMENT-WEBSITE</a></h2>
            <h2><a href="https://www.nhs.uk/live-well/healthy-body/getting-help-for-domestic-violence/">NHS</a></h2>
            <h2><a href="https://www.womensaid.org.uk/information-support/">WOMEN'SAID</a></h2>
            
            </ul>
    </div>

    <div>
    <h1><   Link to=''><span className="btn"> Home Page </span></Link></h1>
        

    </div>
    </>
    )
}

export default Quizhelp;