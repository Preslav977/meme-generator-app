import styles from './app.module.css';
import { AddTexToMeme } from './AddTextToMeme';

import { MemeInterface } from './MemeInterface';

export interface RenderMemesProps {
  memesArr: MemeInterface[] | null;
  setMemesArr: (memesArr: MemeInterface[]) => void;
  topText: string;
  bottomText: string;
}

export function RenderMemes({
  memesArr,
  setMemesArr,
  topText,
  bottomText,
}: RenderMemesProps) {
  return (
    <div className={styles.gridContainer}>
      {memesArr !== null ? (
        <>
          {memesArr.map((meme) => (
            <li key={meme.id}>
              <h1>{meme.name}</h1>
              <AddTexToMeme
                meme={meme}
                memesArr={memesArr}
                setMemesArr={setMemesArr}
                topText={topText}
                bottomText={bottomText}
              />

              <img
                style={{
                  position: 'relative',
                }}
                src={meme.url}
                alt=""
              />

              {meme.topText ? (
                <h2
                  style={{
                    position: 'absolute',
                    zIndex: 1,
                    top: '20%',
                  }}
                >
                  {meme.topText}
                </h2>
              ) : (
                ''
              )}

              {meme.bottomText ? (
                <h2
                  style={{
                    position: 'absolute',
                    zIndex: 1,
                    bottom: '20%',
                  }}
                >
                  {meme.bottomText}
                </h2>
              ) : (
                ''
              )}
            </li>
          ))}
        </>
      ) : (
        ''
      )}
    </div>
  );
}
