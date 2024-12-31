import { createRoot } from 'react-dom/client';
import './styles/index.scss';
import './styles/body.scss';
import { App } from './components/app/App';
import dick from './images/dick.jpg';
document.addEventListener('DOMContentLoaded', () => {
	// Ждем загрузки DOM
	const body = document.querySelector('body');

	if (body) {
		body.style.backgroundImage = `url(${dick})`;
	} else {
		console.error('Body element not found!');
	}
});
const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

root.render(<App />);
