import { MemeInterface } from './MemeInterface';

export interface AddTexToMemeProps {
  meme: MemeInterface;
  memesArr: MemeInterface[] | null;
  setMemesArr: (memesArr: MemeInterface[]) => void;
  topText: string;
  bottomText: string;
}

export function AddTexToMeme({
  meme,
  memesArr,
  setMemesArr,
  topText,
  bottomText,
}: AddTexToMemeProps) {
  function getClickedMeme(meme: MemeInterface) {
    if (memesArr !== null) {
      const updateMemeObject = memesArr.map((memeObj) => {
        if (memeObj.id === meme.id) {
          return { ...memeObj, topText: topText, bottomText: bottomText };
        } else {
          return memeObj;
        }
      });

      setMemesArr(updateMemeObject);
    }
  }

  return <button onClick={() => getClickedMeme(meme)}>Click</button>;
}
