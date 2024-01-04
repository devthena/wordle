import { useEffect } from 'react';
import styles from './index.module.scss';

const row1 = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o'];
const row2 = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
const row3 = ['enter', 'z', 'x', 'c', ' v', 'b', 'n', 'm', 'delete'];

type KeyType = {
  id: string;
};

const KeyTile = ({ id }: KeyType) => {
  return <div className={styles.keyTile}>{id}</div>;
};

const Keyboard = () => {
  const handleKeyUp = (evt: KeyboardEvent) => {
    console.log('keyup event', evt.key);
  };

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp, true);
    return window.removeEventListener('keyup', handleKeyUp);
  }, []);

  return (
    <div className={styles.container}>
      <div>
        {row1.map(id => {
          return <KeyTile id={id} key={id} />;
        })}
      </div>
      <div>
        {row2.map(id => {
          return <KeyTile id={id} key={id} />;
        })}
      </div>
      <div>
        {row3.map(id => {
          return <KeyTile id={id} key={id} />;
        })}
      </div>
    </div>
  );
};

export default Keyboard;
