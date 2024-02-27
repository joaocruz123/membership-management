import { ReactNode } from 'react'

interface ModalProps {
  key: string;
  title: string;
  content: ReactNode;
  open: boolean;
  actions: ReactNode;
}
export default function Modal({
  key,
  title,
  content,
  open,
  actions
}: ModalProps) {
  return (
    <dialog
      id={key}
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
            {/* if there is a button in form, it will close the modal */}
            {actions}
          </form>
        </div>
      </div>
    </dialog>
  )
}
