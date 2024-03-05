import { useField } from 'formik'

type DataProps = {
  value: string;
  label: string;
  disabled: boolean;
};

export const InputSelect = (props: any) => {
  const [field, meta, { setValue }] = useField(props.name)

  const handleChange = (event: any) => {
    setValue(event.target.value)
  }

  return (
    <select
      {...props}
      value={field.value}
      onChange={handleChange}
    >
      {props?.data?.map(({ value, label, disabled }: DataProps) => (
        <option
          disabled={disabled}
          key={value}
          value={value}
          defaultValue={value}
        >
          {label}
        </option>
      ))}
    </select>
  )
}
