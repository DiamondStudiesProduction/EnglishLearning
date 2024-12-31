import { createRoot } from 'react-dom/client';
import './styles/index.scss';
import './styles/body.scss';
import { App } from './components/app/App';
import mishaImg from './images/misha.jpg';
document.addEventListener('DOMContentLoaded', () => {
	// Ждем загрузки DOM
	const body = document.querySelector('body');
	
	if (body) {
		body.style.backgroundImage = `url(${mishaImg})`;
	} else {
		console.error('Body element not found!');
	}
});
const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

root.render(<App />);
