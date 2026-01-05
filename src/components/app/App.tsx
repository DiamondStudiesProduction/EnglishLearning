import { Helmet } from 'react-helmet-async';
import { Home } from '../pages/home';
import flags from '../../images/flags.jpg';
import { useEffect, useState } from 'react';
import { supabase } from 'src/utils/supabaseClient';
export const App = () => {
	// useEffect будет выполнен один раз после первого рендера компонента
	return (
		<>
			<Helmet>
				<link rel='icon' type='image/jpg' href={flags} />
				<meta name='description' content='тест по англискому' />
			</Helmet>
			<Home />
		</>
	);
};
