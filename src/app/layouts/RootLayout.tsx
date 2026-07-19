import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ScrollToTopButton } from '../components/ScrollToTopButton';
import faviconUrl from '../../imports/favicon.png';

const PAGE_TITLES: Record<string, string> = {
  '/': 'DaySeed — Plant Today. Grow Tomorrow.',
  '/privacy': 'Privacy Policy — DaySeed',
  '/terms': 'Terms of Use — DaySeed',
  '/support': 'Support — DaySeed',
};

export function RootLayout() {
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll the fixed container to top on every route change
  useEffect(() => {
    const el = document.getElementById('__ds_root__');
    if (el) el.scrollTop = 0;
  }, [location.pathname]);

  // Update page title on route change
  useEffect(() => {
    try { document.title = PAGE_TITLES[location.pathname] ?? 'DaySeed'; } catch {}
  }, [location.pathname]);

  // Set favicon + viewport + description meta once
  useEffect(() => {
    try {
      let link = document.querySelector<HTMLLinkElement>('link[rel="icon"]');
      if (!link) { link = document.createElement('link'); link.rel = 'icon'; document.head.appendChild(link); }
      link.href = faviconUrl; link.type = 'image/png';
      if (!document.querySelector('meta[name="viewport"]')) {
        const m = document.createElement('meta'); m.name = 'viewport'; m.content = 'width=device-width,initial-scale=1'; document.head.appendChild(m);
      }
      if (!document.querySelector('meta[name="description"]')) {
        const m = document.createElement('meta'); m.name = 'description'; m.content = 'DaySeed is a calm evening planning app for Android. Plant your seed the night before. Wake up knowing exactly what matters.'; document.head.appendChild(m);
      }
    } catch {}
  }, []);

  // Capture-phase interceptor only for in-page section scroll links (#how-it-works etc.)
  // Page navigation (/privacy, /terms, /support) is handled by React Router <Link> components.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const anchor = (e.target as Element).closest('a');
      if (!anchor) return;
      const href = anchor.getAttribute('href') ?? '';
      if (href.startsWith('#') && href.length > 1) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        } else {
          // On a sub-page — store the target and navigate home first
          sessionStorage.setItem('pendingScroll', href);
          navigate('/');
        }
      }
    };
    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, [navigate]);

  return (
    <div style={{ backgroundColor: '#FAF7F2', fontFamily: "'Inter', sans-serif", color: '#1C1C1A', overflowX: 'hidden' }}>
      <Navbar />
      <Outlet />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
