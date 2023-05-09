import { useEffect } from 'react';

function ScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
    console.log("masuk")
  }, []);

  return null;
}

export default ScrollToTop;