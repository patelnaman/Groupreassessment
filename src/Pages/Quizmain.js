
import "./Quiz.css"
import { Link } from 'react-router-dom';


import React, { useState } from 'react';

export default function Quizmain() {
	const questions = [
		{
			questionsss: 'Did anyone tried to control your life?',
			answersss: [
				{ answer: 'YES', right: true },
				{ answer: 'NO', right: false },
				
			],
		},
		{
			questionsss: 'Did anyone tried to insult you or put you down?',
			answersss: [
				{ answer: 'YES', right: true },
				{ answer: 'NO', right: false },
			],
		},
		{
			questionsss: 'Did anyone physically threatened you?',
			answersss: [
				{ answer: 'YES', right: true },
				{ answer: 'NO', right: false },
			],
		},
        {
			questionsss: 'Did anyone tried to keep you away from your closed ones?',
			answersss: [
				{ answer: 'YES', right: true },
				{ answer: 'NO', right: false },
			],
		},
        {
			questionsss: 'Did anyone pushed,hit,kicked or otherwise physically hurted you?',
			answersss: [
                { answer: 'YES', right: true },
				{ answer: 'NO', right: false },
			],
		},
        {
			questionsss: 'Did anyone sexually harassed you?',
			answersss: [
                { answer: 'YES', right: true },
				{ answer: 'NO', right: false },
			],
		},
        {
			questionsss: 'Are you afraid to disagree with someone?',
			answersss: [
				{ answer: 'YES', right: true },
				{ answer: 'NO', right: false },
			],
		},
        {
			questionsss: 'Do you feel physcially threatened by someone?',
			answersss: [
				{ answer: 'YES', right: true },
				{ answer: 'NO', right: false },
			],
		},
        {
			questionsss: 'Do you feel safe in your current relationship?',
			answersss: [
				{ answer: 'YES', right: true },
				{ answer: 'NO', right: false },
			],
		},
		{
			questionsss: 'Is there anyone that makes you feel unsafe?',
			answersss: [
				{ answer: 'YES', right: true },
				{ answer: 'NO', right: false },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showPercent, setShowPercent] = useState(false);
	const [percent, setPercent] = useState(0);

	const handleAnswerOptionClick = (right) => {
		if (right) {
			setPercent(percent + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowPercent(true);
		}
	};
	return (
		<div className='app'>
			{showPercent ? (
				<div className='score-section'>
					<div id="container" className="flex-column flex-center">
            
				<h1>	YOU ARE IN {'['}{percent}0 %{']'} DANGER </h1>
				</div>
                
                <div>
                  <h1>  IF YOUR DANGER IS {'>'} 50 % GET IMMEDIATE HELP BY PRESSING HELP BUTTON ELSE PRESS END BUTTON TO END THE QUIZ </h1>
                    <div>
                    <h1><   Link to='/Quizhelp'><span className="btn"> Help </span></Link></h1>
                    <div>
                    <h1><   Link to='/Quizend'><span className="btn"> End </span></Link></h1>
					<div>
					<h1><   Link to='/Quizstart'><span className="btn"> Start Quiz Again </span></Link></h1>
					</div>
                        </div>
                    </div>
                    
				</div>
                </div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionsss}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answersss.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.right)}>{answerOption.answer}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}