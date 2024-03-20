export interface FormPartnerInterface {
    name: string;
    residence?: string | null;
    maritalStatus?: string | null;
    dateBirth?: string | null;
    nationality?: string | null;
    naturalness?: string | null;
    rg: string;
    workRegister: string;
    series: string;
    cpf: string;
    voterRegistration?: string | null;
    session?: string | null;
    zone?: string | null;
    mother?: string | null;
    father?: string | null;
    company: string;
    function?: string | null;
    companyAddress?: string | null;
    status: boolean
}

export type IPartnersParams = {
    currentPage: number,
    perPage: number
}