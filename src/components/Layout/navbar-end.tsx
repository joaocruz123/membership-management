import { useAuthStore } from '@/infra/store/useAuthStore'
import { FaSignOutAlt, FaSearch } from 'react-icons/fa'
import Modal from '../ui/modal'
import { useState } from 'react'

export default function NavbarEnd() {
  const setSingout = useAuthStore(state => state.logoff)
  const [openSingoutDialog, setOpenSingoutDialog] = useState(false)
  const user = useAuthStore(state => state.auth)

  const handleLogoff = () => {
    setSingout()
    window.location.href = '/'
  }

  return (
    <>
      <div className='navbar-end'>
      <div className='tooltip tooltip-bottom' data-tip='Buscar'>
          <button
            className='btn bg-transparent border-0 text-lg'
            onClick={() => {}}
          >
            <FaSearch />
          </button>
        </div>
        <div className='tooltip tooltip-bottom' data-tip='Deslogar'>
          <button
            className='btn bg-transparent border-0 text-lg'
            onClick={() => setOpenSingoutDialog(!openSingoutDialog)}
          >
            <FaSignOutAlt />
          </button>
        </div>
      </div>
      <Modal
        id={'singout-modal'}
        title='Sair'
        content={
          <span>
            Deseja mesmo deslogar do Membership Management? Todas as infromações
            da sessão serão perdidas.
          </span>
        }
        open={openSingoutDialog}
        actions={
          <>
            <button
              className='btn btn-sm mr-2'
              onClick={() => setOpenSingoutDialog(!openSingoutDialog)}
            >
              Fechar
            </button>
            <button
              className='btn btn-sm btn-outline btn-error'
              onClick={() => handleLogoff()}
            >
              Deslogar
            </button>
          </>
        }
      />
    </>
  )
}
