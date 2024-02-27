'use client'

import { useField } from 'formik'

export const InputText = (props: any) => {
  const [field, meta, { setValue }] = useField(props.name)

  return (
    <>
      <input
        {...field}
        {...props}
        type={props.type}
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
