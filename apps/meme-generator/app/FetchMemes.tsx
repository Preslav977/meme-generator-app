import { useQuery } from '@tanstack/react-query';

import { useEffect } from 'react';

import { MemeInterface } from './MemeInterface';

export interface FetchMemesProps {
  memesArr: MemeInterface[] | null;
  setMemesArr: (memesArr: null) => void;
}

export function FetchMemes({ setMemesArr }: FetchMemesProps) {
  const { isPending, error, data } = useQuery({
    queryKey: [''],
    queryFn: async () => {
      const response = await fetch('https://api.imgflip.com/get_memes');

      return response.json();
    },
  });

  useEffect(() => {
    if (!isPending && data !== undefined) {
      setMemesArr(data.data.memes);
    }
  }, [data]);

  if (isPending) {
    return <p>Loading...</p>;
  }

  if (error) return 'An network error has encountered: ' + error.message;
}
