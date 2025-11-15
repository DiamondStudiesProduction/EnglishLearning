import { SyntheticEvent, useEffect, useRef, useState } from 'react';
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
	const [grade, setGrade] = useState('');

	const form = document.querySelector('form');
	const refInput = useRef<any>();
	if (form) {
		form.style.backgroundImage = `url("https://c.wallhere.com/photos/1e/b8/minimalism-201373.jpg!d")`;
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

	const gradeDef = () => {
		if (state.length == 0) {
			const procent = (noRight / massiveOfEnglishWords.length) * 100;
			console.log(`Процент ошибок (${procent}%)`);
			if (procent == 0) {
				setGrade('A+');
			} else if (procent <= 1) {
				setGrade('A');
			} else if (procent <= 2) {
				setGrade('B');
			} else if (procent <= 3) {
				setGrade('C');
			} else if (procent <= 4) {
				setGrade('D');
			} else {
				setGrade('F');
			}
		}
	};

	const resetStates = () => {
		setState(massiveOfEnglishWords);
		console.log(state);
		setCount(massiveOfEnglishWords.length + 1);
		setInput('');
		setWord('');
		setRandomWord(0);
		setRandomLang(0);
		setRigth(0);
		setNoRight(0);
		setNoRightWordCounter(0);
		setRightAnserOrNot(null);
		setWrongWord('');
		setWrongWordSaver(null);
		setGrade('');
	};

	const triggerFormReset = (e: SyntheticEvent) => {
		e.preventDefault();
		resetStates();
	};

	useEffect(() => {
		updateWord();
		setCount(count - 1);
		gradeDef();
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
			refInput={refInput}
			grade={grade}
			state={state}
			triggerFormReset={triggerFormReset}
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
