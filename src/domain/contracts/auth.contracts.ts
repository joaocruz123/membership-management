import { FormAuthenticationInterface } from '@/interfaces/auth'
import { IAuthModel } from '../models/auth.model'

export interface IAuthCrontact{
    singin(credentials: FormAuthenticationInterface): Promise<IAuthModel>
}