import { object, string } from 'yup'
import { TEXTS } from './constants/partners'
import { validate as cpfValidate } from 'gerador-validador-cpf'
import { ValidateRG } from '@/utils/validate-documents'

export const PartnerSchema = () => {
    return object().shape({
        name: string()
            .required(TEXTS.NAME.ERROR_MSG)
            .max(TEXTS.NAME.MAX, TEXTS.NAME.ERROR_MAX),
        residence: string()
            .max(TEXTS.RESIDENCE.MAX, TEXTS.RESIDENCE.ERROR_MAX),
        cpf: string()
            .min(TEXTS.CPF.MIN, TEXTS.CPF.ERROR_MIN)
            .test({
                name: TEXTS.CPF.NAME,
                message: TEXTS.CPF.INVALID,
                test: value => cpfValidate(value as string)
            })
            .required(TEXTS.CPF.ERROR_MSG),
        rg: string()
            .min(TEXTS.RG.MIN, TEXTS.RG.ERROR_MIN)
            .test(TEXTS.RG.NAME, TEXTS.RG.ERROR_MSG, value =>
                ValidateRG(value)
            )
            .required(TEXTS.RG.ERROR_MSG)
    })
}