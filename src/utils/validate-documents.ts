export const ValidateRG = (value: any) => {
    value = value.replace(/\D/g, '')
    value = value.replace(/(\d{1,2})(\d{3})(\d{3})(\d{1})$/, '$1.$2.$3-$4')
    return value
}