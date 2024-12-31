import styles from './form.module.css';
export const FormUI = (props: any) => {
	return (
		<form className={styles.form}>
			<div>
				<p className={styles.words}>{props.word}</p>
			</div>
			<div>
				<div className={styles.inputContainer}>
					<input
						type='text'
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
			</div>
		</form>
	);
};
