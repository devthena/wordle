import { BackspaceIcon } from '../../constants/icons';
import { KeyboardProps, KeyTileProps } from '../../constants/types';

import styles from './index.module.scss';

const Keyboard = ({ onKeyUp, keyColors, keys }: KeyboardProps) => {
  const KeyTile = ({ id }: KeyTileProps) => {
    const isBackspace = id === 'Backspace';
    let styleNames = keyColors[id]
      ? styles[keyColors[id]]
      : isBackspace
      ? styles.backspace
      : undefined;

    return (
      <button className={styleNames} onClick={() => onKeyUp(id)}>
        {isBackspace ? <BackspaceIcon /> : id}
      </button>
    );
  };

  return (
    <div className={styles.container}>
      {keys.map((row, i) => (
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
