import { createBrowserRouter, createMemoryRouter } from 'react-router';
import { RootLayout } from './layouts/RootLayout';
import { HomePage } from './pages/HomePage';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfUse } from './pages/TermsOfUse';
import { Support } from './pages/Support';

const routeConfig = [
  {
    path: '/',
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: 'privacy', Component: PrivacyPolicy },
      { path: 'terms', Component: TermsOfUse },
      { path: 'support', Component: Support },
    ],
  },
];

// Inside Figma's preview iframe there is no real browser history — use
// MemoryRouter so navigation works without touching window.location.
// On the live deployed site (top-level window) use BrowserRouter for
// real, bookmarkable, shareable URLs.
const isInsideIframe = (() => {
  try { return window.self !== window.top; } catch { return true; }
})();

export const router = isInsideIframe
  ? createMemoryRouter(routeConfig, { initialEntries: ['/'] })
  : createBrowserRouter(routeConfig);
