export interface IPartnerModel {
    id: string;
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

export interface IParcialPartnerModel {
    id: string;
    name: string;
    rg: string;
    cpf: string;
    company: string;
    status: boolean
}

export interface IMeta {
    itemsPerPage: number;
    totalItems: number;
    currentPage: number;
    totalPages: number;
    sortBy: Array<any>
}

export interface IPartnersResponse {
    data: IParcialPartnerModel[]
    link: {
        current: string
    }
    meta: IMeta
}