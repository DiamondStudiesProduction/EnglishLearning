import { forwardRef } from 'react';
import styles from './form.module.css';
export const FormUI = forwardRef((props: any, refInput: any) => {
	return (
		<form className={styles.form} name='check-form'>
			<p className={styles.words}>{props.word}</p>
			<div className={styles.inputStatusContainer}>
				<div className={styles.inputContainer}>
					<input
						type='text'
						ref={refInput}
						autoFocus
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
					<button onClick={props.buttonClick} className={styles.buttonClick}>
						Проверить
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
