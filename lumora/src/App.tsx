import { useEffect, useRef } from 'react';
import markup from './markup.html?raw';
import { initPage } from './initPage.js';

export default function App() {
  const started = useRef(false);

  useEffect(() => {
    // Run once (guards against double-invocation in dev).
    if (started.current) return;
    started.current = true;
    initPage();
  }, []);

  return <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: markup }} />;
}
