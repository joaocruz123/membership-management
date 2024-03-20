'use client'
import { Loading } from '@/components'
import LoadingComponent from '@/components/ui/loading'
import Pagination from '@/components/ui/pagination'
import { usePartner } from '@/hooks/usePartner'
import { redirect, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { FaPlus, FaEye, FaPencilAlt, FaTrash } from 'react-icons/fa'

export default function PartnerPage() {
  const route = useRouter()
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [currentTotalPages, setCurrentTotalPages] = useState<number>(1)
  const [currentTotalResults, setCurrentTotalResults] = useState<number>(1)
  const { data, isLoading } = usePartner({
    currentPage: currentPage,
    perPage: 10
  })

  useEffect(() => {
    if (data) {
      setCurrentPage(data.meta.currentPage)
      setCurrentTotalPages(data.meta.totalPages)
      setCurrentTotalResults(data.meta.totalItems)
    }
  }, [data])

  const handlePageChange = (page: number): void => {
    setCurrentPage(page)
  }
  return (
    <div className='overflow-x-auto'>
      <div className='flex flex-row justify-end mb-4'>
        <button
          className='btn btn-secondary btn-outline'
          onClick={() => route.push('socio/novo')}
        >
          <FaPlus />
          Cadastrar novo
        </button>
      </div>
      {isLoading ? (
        <LoadingComponent loading={true} color='#BD93F9' heigth='h-[402px]' />
      ) : (
        <>
          <div className='md:container md:mx-auto'>
            <table className='table'>
              {/* head */}
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Empresa</th>
                  <th>CPF</th>
                  <th>RG</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {data?.data?.map(item => {
                  return (
                    <tr key={item.id}>
                      <td>{item.name}</td>
                      <td>{item.company}</td>
                      <td>{item.cpf}</td>
                      <td>{item.rg}</td>
                      <th>
                        <div
                          className='tooltip tooltip-top'
                          data-tip='Detalhes'
                        >
                          <button
                            className='btn bg-ghost btn-sm border-0 text-md mr-2'
                            onClick={() => {}}
                          >
                            <FaEye />
                          </button>
                        </div>
                        <div className='tooltip tooltip-top' data-tip='Editar'>
                          <button
                            className='btn bg-blue-500 btn-sm border-0 text-md mr-2'
                            onClick={() => {}}
                          >
                            <FaPencilAlt />
                          </button>
                        </div>
                        <div className='tooltip tooltip-top' data-tip='Deletar'>
                          <button
                            className='btn bg-red-500 btn-sm border-0 text-md mr-2'
                            onClick={() => {}}
                          >
                            <FaTrash />
                          </button>
                        </div>
                      </th>
                    </tr>
                  )
                })}
              </tbody>
            </table>
            <Pagination
              onPageChange={handlePageChange}
              totalCount={10}
              siblingCount={1}
              currentPage={currentPage}
              pageSize={currentTotalPages}
              className='mt-10'
            />
          </div>
        </>
      )}
    </div>
  )
}
