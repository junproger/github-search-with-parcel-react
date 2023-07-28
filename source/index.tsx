import React from 'react';

import { container } from './constants/container';
import { createRoot } from 'react-dom/client';
import { App } from './components/app/app';

const ROOT = createRoot(container as HTMLElement);

ROOT.render(<App />);
