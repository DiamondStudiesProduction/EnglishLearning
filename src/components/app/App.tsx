import { Helmet } from 'react-helmet-async';
import { Home } from '../pages/home';
import flags from '../../images/flags.jpg';
export const App = () => {
	return (
		<>
			<Helmet>
				<link rel='icon' type='image/jpg' href={flags} />
				<meta name="description" content="тест по англискому" />
			</Helmet>
			<Home />
		</>
	);
};
