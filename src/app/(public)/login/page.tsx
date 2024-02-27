'use client'

import Image from 'next/image'
import Logo from '@/assets/partner-logo-no-text.png'
import { Form, Formik } from 'formik'
import { motion } from 'framer-motion'
import { InputText } from '@/components'
import { AuthSchema } from '@/validators/AuthSchema'
import { FormAuthenticationInterface } from '@/interfaces/auth'
import { useLogin } from '@/hooks/useAuthentication'
import { useEffect } from 'react'
import { redirect } from 'next/navigation'

export default function LoginPage() {
  const { mutate, isSuccess, isError, isLoading } = useLogin()
  const handleSubmit = (credentials: FormAuthenticationInterface) => {
    mutate(credentials)
  }

  useEffect(() => {
    if (isSuccess) {
      redirect('/home')
    }
  }, [isSuccess])

  return (
    <main>
      <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
          <motion.div
            initial={{ y: -16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: 0.75 }}
          >
            <Image
              className='mx-auto h-48 w-auto'
              src={Logo}
              alt='Your Company'
            />
            <h2 className='mt-0 text-center text-2xl font-bold leading-9 tracking-tight '>
              Membership Management
            </h2>
            <h2 className='mt-2 text-center text-md leading-6 tracking-tight'>
              Bem-vindo ao sistema de gerenciamento de associados! Entre com a
              sua conta.
            </h2>
          </motion.div>
          {isError && (
            <motion.div
              initial={{ y: -16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ease: 'backIn', duration: 0.75 }}
            >
              <div role='alert' className='alert alert-error mt-6 text-xs'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='stroke-current shrink-0 h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
                <span>Usuário ou senha incorretos. Tente novamente!</span>
              </div>
            </motion.div>
          )}
        </div>
        <motion.div
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: 'easeInOut', duration: 0.75 }}
        >
          <Formik
            initialValues={{
              username: '',
              password: ''
            }}
            validationSchema={AuthSchema()}
            onSubmit={(values: FormAuthenticationInterface) => {
              handleSubmit(values)
            }}
          >
            <Form>
              <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
                <div>
                  <div className='mt-2'>
                    <InputText
                      name='username'
                      id='username'
                      type='text'
                      placeholder='Usuário'
                    />
                  </div>
                </div>
                <div>
                  <div className='mt-2'>
                    <InputText
                      name='password'
                      id='password'
                      type='password'
                      placeholder='Senha'
                    />
                  </div>
                </div>
                <div className='mt-5'>
                  <button
                    type='submit'
                    className='flex w-full justify-center rounded-md btn btn-secondary'
                    disabled={isLoading}
                  >
                    {isLoading && (
                      <span className='loading loading-spinner'></span>
                    )}
                    Entrar
                  </button>
                </div>
                <input
                  type='checkbox'
                  value='cupcake'
                  className='checkbox theme-controller'
                />

                <p className='mt-10 text-center text-sm text-slate-300'>
                  Não é membro?{' '}
                  <a href='#' className='font-semibold leading-6 text-accent'>
                    Faça seu cadastro aqui.
                  </a>
                </p>
              </div>
            </Form>
          </Formik>
        </motion.div>
      </div>
    </main>
  )
}
