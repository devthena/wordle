import { BackspaceIcon } from '../../constants/icons';
import { KeyboardProps, KeyTileProps } from '../../constants/types';

import styles from './index.module.scss';

const KeyTile = ({ id }: KeyTileProps) => {
  const isBackspace = id === 'Backspace';
  return (
    <button className={isBackspace ? styles.backspace : undefined}>
      {isBackspace ? <BackspaceIcon /> : id}
    </button>
  );
};

const Keyboard = ({ keys }: KeyboardProps) => {
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
