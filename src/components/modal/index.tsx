import { ModalContent } from '../../constants/enums';
import { CloseIcon } from '../../constants/icons';
import { ModalProps } from '../../constants/types';
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
        {content === ModalContent.CreateRoom && (
          <div className={styles.formContainer}>
            <h1>Create Room</h1>
          </div>
        )}
        {content === ModalContent.Stats && (
          <div className={styles.statsContainer}>
            <h1>Stats</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
