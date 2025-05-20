// Uncomment this line to use CSS modules
import styles from './app.module.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { FetchMemes } from './FetchMemes';

import { RenderMemes } from './RenderMemes';

import { useState } from 'react';

import { MemesForm } from './MemesForm';

import { MemeInterface } from './MemeInterface';

const queryClient = new QueryClient();

export function App() {
  const [memesArr, setMemesArr] = useState<MemeInterface[] | null>(null);

  const [topText, setTopText] = useState<string>('');

  const [bottomText, setBottomText] = useState<string>('');

  return (
    <QueryClientProvider client={queryClient}>
      <MemesForm setTopText={setTopText} setBottomText={setBottomText} />
      <FetchMemes memesArr={memesArr} setMemesArr={setMemesArr} />
      <RenderMemes
        memesArr={memesArr}
        setMemesArr={setMemesArr}
        topText={topText}
        bottomText={bottomText}
      />
    </QueryClientProvider>
  );
}

export default App;
