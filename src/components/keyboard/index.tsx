import { useEffect } from 'react';

import { BackspaceIcon } from '../../constants/icons';
import { KeyTileProps } from '../../constants/types';

import styles from './index.module.scss';

const keyIds = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  ['Enter', 'z', 'x', 'c', ' v', 'b', 'n', 'm', 'Backspace'],
];

const KeyTile = ({ id }: KeyTileProps) => {
  const isBackspace = id === 'Backspace';
  return (
    <button className={isBackspace ? styles.backspace : undefined}>
      {isBackspace ? <BackspaceIcon /> : id}
    </button>
  );
};

const Keyboard = () => {
  const handleKeyUp = (evt: KeyboardEvent) => {
    const allKeyIds = keyIds.flat();
    if (allKeyIds.includes(evt.key)) {
      console.log('keyup event id match', evt.key);
    }
  };

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp, true);
    return window.removeEventListener('keyup', handleKeyUp);
  }, []);

  return (
    <div className={styles.container}>
      {keyIds.map((row, i) => (
        <div className={styles.row} key={i}>
          {row.map(id => (
            <KeyTile id={id} key={id} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
