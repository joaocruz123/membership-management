'use client'
import { InputText } from '@/components'
import { InputSelect } from '@/components/inputs/input-select'
import { InputFormMask } from '@/components/masks/cpf-mask'
import { FormPartnerInterface } from '@/interfaces/partners'
import { PartnerSchema } from '@/validators/PhartnerSchema'
import { Form, Formik } from 'formik'
import { useRouter } from 'next/navigation'
import { FaArrowLeft } from 'react-icons/fa'

const dataMaritalStatus = [
  { value: '', label: 'Estado Civil', disabled: true, selected: true },
  {
    value: 'Solteiro (a)',
    label: 'Solteiro (a)',
    disabled: false,
    selected: false
  },
  {
    value: 'Casado (a)',
    label: 'Casado (a)',
    disabled: false,
    selected: false
  },
  { value: 'Viúvo (a)', label: 'Viúvo (a)', disabled: false, selected: false },
  {
    value: 'Divorciado (a)',
    label: 'Divorciado (a)',
    disabled: false,
    selected: false
  }
]
export default function EditCreatePartnerPage() {
  const isLoading = false
  const route = useRouter()
  return (
    <Formik
      initialValues={{
        name: '',
        residence: '',
        maritalStatus: '',
        dateBirth: '',
        nationality: '',
        naturalness: '',
        rg: '',
        workRegister: '',
        series: '',
        cpf: '',
        voterRegistration: '',
        session: '',
        zone: '',
        mother: '',
        father: '',
        company: '',
        function: '',
        companyAddress: '',
        status: true
      }}
      validationSchema={PartnerSchema()}
      onSubmit={(values: FormPartnerInterface) => {
        //handleSubmit(values)
      }}
    >
      <Form>
        <div className='flex flex-row justify-between items-center sm:mx-auto sm:w-full sm:max-w-5xl'>
          <h1 className='text-xl font-bold text-secondary'>
            Cadastro de associado
          </h1>
          <button
          type='button'
            className='btn btn-secondary btn-outline'
            onClick={() => route.push('/socio')}
          >
            <FaArrowLeft />
            Voltar
          </button>
        </div>
        <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-5xl'>
          <h2>Dados Pessoais</h2>
          <div className='divider' />
          <div className='grid grid-cols-3 gap-2'>
            <div className='mt-2'>
              <InputText
                name='name'
                id='name'
                type='text'
                placeholder='Nome do sócio'
              />
            </div>
            <div className='mt-2'>
              <InputText
                name='residence'
                id='residence'
                type='text'
                placeholder='Endereço'
              />
            </div>
            <div className='mt-2'>
              <InputSelect
                name='maritalStatus'
                id='maritalStatus'
                className='select select-bordered w-full'
                data={dataMaritalStatus}
              />
            </div>
            <div className='mt-2'>
              <InputText
                name='dateBirth'
                id='dateBirth'
                type='date'
                placeholder='Data de Nascimento'
              />
            </div>
            <div className='mt-2'>
              <InputText
                name='nationality'
                id='nationality'
                type='text'
                placeholder='Nacionalidade'
              />
            </div>
            <div className='mt-2'>
              <InputText
                name='naturalness'
                id='naturalness'
                type='text'
                placeholder='Naturalidade'
              />
            </div>
            <div className='mt-2'>
              <InputText
                name='father'
                id='father'
                type='text'
                placeholder='Nome do Pai'
              />
            </div>
            <div className='mt-2'>
              <InputText
                name='mother'
                id='mother'
                type='text'
                placeholder='Nome da Mãe'
              />
            </div>
          </div>
          <h2 className='mt-7'>Documentos</h2>
          <div className='divider' />
          <div className='grid grid-cols-3 gap-2'>
            <div className='mt-2'>
              <InputFormMask
                name='cpf'
                id='cpf'
                type='text'
                placeholder='CPF'
                mask='999.999.999-99'
              />
            </div>
            <div className='mt-2'>
              <InputFormMask
                name='rg'
                id='rg'
                type='text'
                placeholder='RG'
                mask='9999-999'
              />
            </div>
            <div className='mt-2'>
              <InputFormMask
                name='workRegister'
                id='workRegister'
                type='text'
                placeholder='Carteira Profissional'
                mask='9999999/9999'
              />
            </div>
            <div className='mt-2'>
              <InputText
                name='series'
                id='series'
                type='text'
                placeholder='Series'
              />
            </div>
            <div className='mt-2'>
              <InputFormMask
                name='voterRegistration'
                id='voterRegistration'
                type='text'
                placeholder='Número título de eleitor'
                mask='9999 9999 9999 99'
              />
            </div>
            <div className='mt-2'>
              <InputText
                name='session'
                id='session'
                type='number'
                placeholder='Sessão'
              />
            </div>
            <div className='mt-2'>
              <InputText
                name='zone'
                id='zone'
                type='number'
                placeholder='Zona'
              />
            </div>
          </div>
          <h2 className='mt-7'>Dados da Empresa</h2>
          <div className='divider' />
          <div className='grid grid-cols-2 gap-2'>
            <div className='mt-2'>
              <InputText
                name='company'
                id='company'
                type='text'
                placeholder='Nome da Empresa'
              />
            </div>
            <div className='mt-2'>
              <InputText
                name='function'
                id='function'
                type='text'
                placeholder='Função que exerce'
              />
            </div>
            <div className='mt-2'>
              <InputText
                name='companyAddress'
                id='companyAddress'
                type='text'
                placeholder='Endereço da empresa'
              />
            </div>
          </div>
          <div className='flex flex-row justify-end my-6'>
            <button
              type='submit'
              className='flex w-28 justify-center rounded-md btn btn-secondary'
              disabled={isLoading}
            >
              {isLoading && <span className='loading loading-spinner'></span>}
              Salvar
            </button>
          </div>
        </div>
      </Form>
    </Formik>
  )
}
