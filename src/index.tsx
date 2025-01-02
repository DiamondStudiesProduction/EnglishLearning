import { createRoot } from 'react-dom/client';
import './styles/index.scss';
import './styles/body.scss';
import { App } from './components/app/App';
import girls from './images/girls.jpg';
import background from './images/background.jpg';
import { useState } from 'react';
document.addEventListener('DOMContentLoaded', () => {
	// Ждем загрузки DOM
	const body = document.querySelector('body');

	if (body) {
		body.style.backgroundImage = `url(${background})`;
	} else {
		console.error('Body element not found!');
	}
});
const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

root.render(<App />);
