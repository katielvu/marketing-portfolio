import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Disable browser's default scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'auto'
      });
      // Fallback for some browsers
      document.documentElement.scrollTo({
        top: 0,
        left: 0,
        behavior: 'auto'
      });
      document.body.scrollTo({
        top: 0,
        left: 0,
        behavior: 'auto'
      });
    };

    scrollToTop();
    
    // Sometimes a small delay is needed to ensure the DOM has updated
    const timeoutId = setTimeout(scrollToTop, 0);
    
    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return null;
}
