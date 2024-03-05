'use client'
import { useField } from 'formik'
import InputMask from 'react-input-mask'

export const InputFormMask = (props: any) => {
  const [field, meta, { setValue }] = useField(props.name)

  return (
    <>
      <InputMask
        {...field}
        {...props}
        mask={props.mask}
        maskChar=''
        placeholder={props.placeholder}
        className='input input-md input-bordered w-full'
        onChange={({ target: { value } }) => setValue(value)}
      />
      {meta.touched && !!meta.error && (
        <span className='text-xs text-red-400 p-2'>
          {meta.touched && meta.error}
        </span>
      )}
    </>
  )
}
