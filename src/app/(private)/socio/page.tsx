'use client'
import { Loading } from '@/components'
import Pagination from '@/components/ui/pagination'
import { usePartner } from '@/hooks/usePartner'
import { redirect, useRouter } from 'next/navigation'
import { useState } from 'react'
import { FaPlus, FaEye, FaPencilAlt, FaTrash } from 'react-icons/fa'

export default function PartnerPage() {
  const { data, isLoading } = usePartner()
  const route = useRouter()
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [currentTotalPages, setCurrentTotalPages] = useState<number>(1)
  const [currentTotalResults, setCurrentTotalResults] = useState<number>(1)

  const handlePageChange = (page: number): void => {
    //setLoading(true)
    setCurrentPage(page)

    // if (favorites && favorites.length > 0) {
    //   getMovieByGenre(favorites, page)
    // } else {
    //   getAllMovies(page).then(() => setLoading(false))
    // }
  }
  return (
    <div className='overflow-x-auto'>
      <div className='flex flex-row justify-end mb-4'>
        <button
          className='btn btn-secondary btn-outline btn-sm'
          onClick={() => route.push('socio/novo')}
        >
          <FaPlus />
          Cadastrar novo
        </button>
      </div>
      {isLoading ? (
        <Loading />
      ) : (
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
                    <div className='tooltip tooltip-top' data-tip='Detalhes'>
                      <button
                        className='btn bg-ghost btn-xs border-0 text-md mr-2'
                        onClick={() => {}}
                      >
                        <FaEye />
                      </button>
                    </div>
                    <div className='tooltip tooltip-top' data-tip='Editar'>
                      <button
                        className='btn bg-blue-500 btn-xs border-0 text-md mr-2'
                        onClick={() => {}}
                      >
                        <FaPencilAlt />
                      </button>
                    </div>
                    <div className='tooltip tooltip-top' data-tip='Deletar'>
                      <button
                        className='btn bg-red-500 btn-xs border-0 text-md mr-2'
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
      )}

      <Pagination
        onPageChange={handlePageChange}
        totalCount={10}
        siblingCount={1}
        currentPage={currentPage}
        pageSize={3}
        className='mt-10'
      />
    </div>
  )
}
