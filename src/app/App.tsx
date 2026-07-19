import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { router } from './routes';

function DaySeedApp() {
  return <RouterProvider router={router} />;
}

const __mountDaySeed = () => {
  if (document.getElementById('__ds_root__')) return;
  const el = document.createElement('div');
  el.id = '__ds_root__';
  el.style.cssText = 'position:fixed;inset:0;z-index:1;overflow-y:auto;overflow-x:hidden;background:#FAF7F2;';
  document.body.style.margin = '0';
  document.body.appendChild(el);
  createRoot(el).render(<DaySeedApp />);
};

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', __mountDaySeed);
  } else {
    __mountDaySeed();
  }
}

// Figma renders this — no hooks, just a placeholder so preview isn't blank.
export default function App() {
  return <div style={{ width: '100%', minHeight: '100vh', backgroundColor: '#FAF7F2' }} />;
}
