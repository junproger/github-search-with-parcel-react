import { createRoot } from 'react-dom/client';

import { appContainer } from './constants/appContainer';

import { App } from './components/app/App';

const ROOT = createRoot(appContainer as HTMLElement);

ROOT.render(<App />);
