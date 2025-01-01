import { createRoot } from 'react-dom/client';
import './styles/index.scss';
import './styles/body.scss';
import { App } from './components/app/App';
import girls from './images/girls.jpg';
document.addEventListener('DOMContentLoaded', () => {
	// Ждем загрузки DOM
	const body = document.querySelector('body');

	if (body) {
		body.style.backgroundImage = `url(${girls})`;
	} else {
		console.error('Body element not found!');
	}
});
const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);
navigator.geolocation.getCurrentPosition(success, error, {
	enableHighAccuracy: true,
});

function success({ coords }: any) {
	// получаем широту и долготу
	const { latitude, longitude } = coords;
	const position = [latitude, longitude];
	console.log(position); // [широта, долгота]
}
function error({ message }: any) {
	console.log(message); // при отказе в доступе получаем PositionError: User denied Geolocation
}
root.render(<App />);
