import { ReactNode } from 'react';
import ReactModal, { Props as ReactModalProps } from 'react-modal';

function Modal({ children, ...props }: ReactModalProps & { children: ReactNode }) {
    return (
        <ReactModal
            overlayClassName="ReactModalOverlayOverride"
            className="ReactModalContentOverride"
            closeTimeoutMS={400}
            ariaHideApp={false}
            {...props}
        >
            {children}
        </ReactModal>
    )
}

export default Modal;
