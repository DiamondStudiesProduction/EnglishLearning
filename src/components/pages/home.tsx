import { Form } from '../form/form';
import { Coordinates } from '../coordinates/coordinates';

export const Home = () => {
	return (
		<>
			<Form />
			<div>
				<h1>
					<Coordinates />
				</h1>
			</div>
		</>
	);
};
