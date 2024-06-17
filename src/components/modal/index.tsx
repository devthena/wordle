import { ModalContent } from '../../lib/enums';
import { CloseIcon } from '../../lib/icons';
import { ModalProps } from '../../lib/types';

import Stats from '../stats';
import styles from './index.module.scss';

const Modal = ({
  content = ModalContent.Stats,
  setDisplayModal,
}: ModalProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.buttonContainer}>
          <button
            className={styles.close}
            onClick={() => setDisplayModal(false)}>
            <CloseIcon />
          </button>
        </div>
        {content === ModalContent.Rules && (
          <div className={styles.formContainer}>
            <h1>Rules</h1>
          </div>
        )}
        {content === ModalContent.Stats && (
          <div className={styles.statsContainer}>
            <Stats />
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
