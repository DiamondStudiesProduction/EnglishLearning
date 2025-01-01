import { SyntheticEvent, useEffect, useState } from 'react';
import { massiveOfEnglishWords } from 'src/constants/articleProps';
import { FormUI } from '../ui/form/form';
import tarkov from '../../images/tarkov.jpg';
function getRandomInRange(min: number, max: number) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const Form = () => {
	const [state, setState] = useState(massiveOfEnglishWords);
	const [count, setCount] = useState(state.length + 1);
	const [input, setInput] = useState('');
	const [word, setWord] = useState('');
	const [randomWord, setRandomWord] = useState(0);
	const [randomLang, setRandomLang] = useState(0);
	const [right, setRigth] = useState(0);
	const [noRight, setNoRight] = useState(0);
	const [noRightWordCounter, setNoRightWordCounter] = useState(0);
	const [rightAnserOrNot, setRightAnserOrNot] = useState<null | boolean>(null);
	const [wrongWord, setWrongWord] = useState('');
	const [wrongWordSaver, setWrongWordSaver] = useState<any>(null);
	const form = document.querySelector('form');
	if (form) {
		form.style.backgroundImage = `url(${tarkov})`;
	}
	const setIntervalFunction = (value: boolean) => {
		if (value) {
			setRightAnserOrNot(true);
		}
		if (!value) {
			setRightAnserOrNot(false);
		}
		setTimeout(() => {
			setRightAnserOrNot(null);
		}, 150);
	};

	const updateWord = () => {
		if (state.length > 0) {
			const newRandomWord = getRandomInRange(0, state.length - 1);
			setRandomWord(newRandomWord);
			setRandomLang(getRandomInRange(0, 1));
			setWord(state[newRandomWord][randomLang]);
		} else {
			setWord('');
		}
	};

	useEffect(() => {
		updateWord();
		setCount(count - 1);
	}, [state]);

	const buttonClick = (e: SyntheticEvent) => {
		e.preventDefault();
		if (input === '') return;
		if (state.length > 0) {
			const inputToLowerCase = input.toLowerCase();
			const inputTrim = inputToLowerCase.trim();
			const foundItem = state[randomWord].find(
				(item: string) => item === inputTrim
			);
			if (foundItem) {
				setWrongWordSaver(null);
				setNoRightWordCounter(0);
				setWrongWord('');
				setIntervalFunction(true);
				setRigth(right + 1);
			} else {
				const wrongWord = `${state[randomWord][0]} - ${state[randomWord][1]}`;
				setWrongWordSaver(wrongWord);
				setNoRightWordCounter(1);
				setWrongWord(input);
				setIntervalFunction(false);
				setNoRight(noRight + 1);
			}
			const wordToRemove = state[randomWord];
			const newState = state.filter((item: any) => item !== wordToRemove);
			setState(newState);
		}
		setInput('');
	};

	return (
		<FormUI
			count={count}
			setInput={setInput}
			input={input}
			buttonClick={buttonClick}
			word={word}
			right={right}
			noRight={noRight}
			rightAnserOrNot={rightAnserOrNot}
			wrongWord={wrongWord}
			noRightWordCounter={noRightWordCounter}
			wrongWordSaver={wrongWordSaver}
		/>
	);
};

/*
export const Form = () => {
	const [state, setState] = useState(massiveOfEnglishWords);
	const [count, setCount] = useState(0);
	const [input, setInput] = useState('');
	const [word, setWord] = useState('');
	const [randomWord, setRandomWord] = useState(
		getRandomInRange(0, state.length - 1)
	);
	const [started, setStarted] = useState(false);
	const [randomLang, setRandomLang] = useState(getRandomInRange(0, 1));

	const buttonClick = (e: SyntheticEvent) => {
		e.preventDefault();
		setStarted(true);

		setRandomWord(getRandomInRange(0, state.length - 1));
		setRandomLang(getRandomInRange(0, 1));
		setWord(state[randomWord][randomLang]);
		const wordToRemove = state[randomWord];
		const newState = state.filter((item: any) => item !== wordToRemove);
		setState(newState);
		console.log(state);
	};
*/
