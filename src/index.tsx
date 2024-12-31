import { createRoot } from 'react-dom/client';
import './styles/index.scss';
import './styles/body.scss'
import { App } from './components/app/App';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

root.render(<App />);
