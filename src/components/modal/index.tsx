import { useWordleState } from '../../context';
import { ModalContent } from '../../lib/enums';
import { CloseIcon } from '../../lib/icons';

import Rules from '../rules';
import Stats from '../stats';

import styles from './index.module.scss';

const Modal = () => {
  const { modal, setModal } = useWordleState();

  if (!modal || !modal.display) return;

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.buttonContainer}>
          <button
            className={styles.close}
            onClick={() => setModal({ display: false })}>
            <CloseIcon />
          </button>
        </div>
        {modal.content === ModalContent.Rules && (
          <div className={styles.formContainer}>
            <Rules />
          </div>
        )}
        {modal.content === ModalContent.Stats && (
          <div className={styles.statsContainer}>
            <Stats />
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
