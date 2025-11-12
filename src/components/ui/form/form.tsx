import { forwardRef } from 'react';
import styles from './form.module.css';
export const FormUI = forwardRef((props: any, refInput: any) => {
	return (
		<form className={styles.form} name='check-form'>
			<span>{props.grade === 'F' ? 'Бездарность ебаная' : ''}</span>
			<span
				className={`${styles.grade} ${
					props.grade === '' ? '' : styles.gradeShow
				}`}>
				{props.grade}
			</span>
			<p className={styles.words}>{props.word}</p>
			<div className={styles.inputStatusContainer}>
				<div className={styles.inputContainer}>
					<input
						type='text'
						ref={refInput}
						autoFocus
						disabled={props.state.length === 0 ? true : false}
						className={`${styles.input} ${
							props.rightAnserOrNot === true
								? styles.inputActive
								: props.rightAnserOrNot === false
								? styles.isFalse
								: ''
						}`}
						onChange={(e) => {
							props.setInput(e.target.value);
						}}
						value={props.input}></input>
					<button
						onClick={props.buttonClick}
						className={`${styles.buttonClick} ${styles.buttonClickShowMobile}`}>
						Проверить
					</button>
					<button
						onClick={props.triggerFormReset}
						className={`${styles.buttonClick} ${
							props.state == 0 ? styles.buttonClickShow : ''
						}`}>
						Заново
					</button>
				</div>

				<div className={styles.rightNo}>
					<p className={styles.rightNoP}>Правильно: {props.right}</p>
					<p className={styles.rightNoP}>Неправильно: {props.noRight}</p>
					<p className={styles.rightNoP}>осталось слов: {props.count}</p>
				</div>

				<div className={styles.noRightWordCounterContainer}>
					{!props.noRightWordCounter ? (
						''
					) : (
						<div className={styles.statusContainer}>
							<p className={styles.rightNoP}>Неправильно: {props.wrongWord}</p>
							<p className={styles.rightNoP}>
								Правильно: {props.wrongWordSaver}
							</p>
						</div>
					)}
				</div>
			</div>
		</form>
	);
});
