import '../styles/globals.css'
import React from 'react'

export default function App({ Component, pageProps }) {
    const [initialRenderComplete, setInitialRenderComplete] = React.useState(false);
  
    // This useEffect will only run once, during the first render
    React.useEffect(() => {
      // Updating a state causes a re-render
      setInitialRenderComplete(true);
    }, []);
  
    // initialRenderComplete will be false on the first render and true on all following renders
    if (!initialRenderComplete) {
      // Returning null will prevent the component from rendering, so the content will simply be missing from
      // the server HTML and also wont render during the first client-side render.
      return null;
    } else {
      return <Component {...pageProps} />
    }

  
}
