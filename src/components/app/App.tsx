import { Helmet } from 'react-helmet-async';
import { Home } from '../pages/home';
import flags from '../../images/flags.jpg';
export const App = () => {
	return (
		<>
			<Helmet>
				<link rel='icon' type='image/jpg' href={flags} />
				<meta
					property='og:url'
					content='https://diamondstudiesproduction.github.io/EnglishLearning/'
				/>
				<meta property='og:site_name' content='English Learning' />
				<meta
					property='og:image'
					content='https://i.pinimg.com/originals/28/84/a2/2884a28141a35375d125ef70fc1f913c.jpg'
				/>
			</Helmet>
			<Home />
		</>
	);
};
