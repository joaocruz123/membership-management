import { ReactNode } from 'react'

type ModalProps = {
  id: string;
  title: string;
  content: ReactNode;
  open: boolean;
  actions: ReactNode;
};

export default function Modal({
  id,
  title,
  content,
  open,
  actions
}: ModalProps) {
  return (
    <dialog
      id={id}
      className={`modal modal-bottom sm:modal-middle ${
        open ? 'modal-open' : ''
      }`}
    >
      <div className='modal-box'>
        <h3 className='font-bold text-lg'>{title}</h3>
        <div className='divider'></div>
        <div className='my-5 text-sm'>{content}</div>
        <div className='divider'></div>
        <div className='modal-action'>
          <form method='dialog'>
            {actions}
          </form>
        </div>
      </div>
    </dialog>
  )
}
