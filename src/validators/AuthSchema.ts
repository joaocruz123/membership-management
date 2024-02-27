import { object, string } from 'yup'
import { TEXTS } from './constants/auth'

export const AuthSchema = () => {
    return object().shape({
        username: string()
        .required(TEXTS.USERNAME.ERROR_MSG)
        .max(TEXTS.USERNAME.MAX, TEXTS.USERNAME.ERROR_MAX),
        password: string()
        .required(TEXTS.PASSWORD.ERROR_REQUIRED)
        .min(TEXTS.PASSWORD.MIN, TEXTS.PASSWORD.MIN_MSG)
    })
}