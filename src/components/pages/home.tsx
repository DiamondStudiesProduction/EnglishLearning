import { Form } from '../form/form';

export const Home = () => {
	return <Form />
};
/*
import { useEffect, useState } from 'react';

export const Coordinates = () => {
	const [coord, setCoord] = useState<any>();

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(success, error, {
			enableHighAccuracy: true,
		});

		function success({ coords }: any) {
			// получаем широту и долготу
			const { latitude, longitude } = coords;
			const position = [latitude, longitude];
			setCoord(position);
		}
		function error({ message }: any) {
			console.log(message); // при отказе в доступе получаем PositionError: User denied Geolocation
		}
	}, []);
	console.log(coord);
	return <>Координаты: {coord}</>;
};

*/