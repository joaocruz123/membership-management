'use client'
import Pagination from '@/components/ui/pagination'
import { redirect, useRouter } from 'next/navigation'
import { useState } from 'react'
import { FaPlus } from 'react-icons/fa'

export default function PartnerPage() {
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
      <table className='table'>
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>
                <input type='checkbox' className='checkbox' />
              </label>
            </th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <th>
              <label>
                <input type='checkbox' className='checkbox' />
              </label>
            </th>
            <td>
              <div className='flex items-center gap-3'>
                <div className='avatar'>
                  <div className='mask mask-squircle w-12 h-12'>
                    <img
                      src='/tailwind-css-component-profile-2@56w.png'
                      alt='Avatar Tailwind CSS Component'
                    />
                  </div>
                </div>
                <div>
                  <div className='font-bold'>Hart Hagerty</div>
                  <div className='text-sm opacity-50'>United States</div>
                </div>
              </div>
            </td>
            <td>
              Zemlak, Daniel and Leannon
              <br />
              <span className='badge badge-ghost badge-sm'>
                Desktop Support Technician
              </span>
            </td>
            <td>Purple</td>
            <th>
              <button className='btn btn-ghost btn-xs'>details</button>
            </th>
          </tr>
          {/* row 2 */}
          <tr>
            <th>
              <label>
                <input type='checkbox' className='checkbox' />
              </label>
            </th>
            <td>
              <div className='flex items-center gap-3'>
                <div className='avatar'>
                  <div className='mask mask-squircle w-12 h-12'>
                    <img
                      src='/tailwind-css-component-profile-3@56w.png'
                      alt='Avatar Tailwind CSS Component'
                    />
                  </div>
                </div>
                <div>
                  <div className='font-bold'>Brice Swyre</div>
                  <div className='text-sm opacity-50'>China</div>
                </div>
              </div>
            </td>
            <td>
              Carroll Group
              <br />
              <span className='badge badge-ghost badge-sm'>Tax Accountant</span>
            </td>
            <td>Red</td>
            <th>
              <button className='btn btn-ghost btn-xs'>details</button>
            </th>
          </tr>
          {/* row 3 */}
          <tr>
            <th>
              <label>
                <input type='checkbox' className='checkbox' />
              </label>
            </th>
            <td>
              <div className='flex items-center gap-3'>
                <div className='avatar'>
                  <div className='mask mask-squircle w-12 h-12'>
                    <img
                      src='/tailwind-css-component-profile-4@56w.png'
                      alt='Avatar Tailwind CSS Component'
                    />
                  </div>
                </div>
                <div>
                  <div className='font-bold'>Marjy Ferencz</div>
                  <div className='text-sm opacity-50'>Russia</div>
                </div>
              </div>
            </td>
            <td>
              Rowe-Schoen
              <br />
              <span className='badge badge-ghost badge-sm'>
                Office Assistant I
              </span>
            </td>
            <td>Crimson</td>
            <th>
              <button className='btn btn-ghost btn-xs'>details</button>
            </th>
          </tr>
          {/* row 4 */}
          <tr>
            <th>
              <label>
                <input type='checkbox' className='checkbox' />
              </label>
            </th>
            <td>
              <div className='flex items-center gap-3'>
                <div className='avatar'>
                  <div className='mask mask-squircle w-12 h-12'>
                    <img
                      src='/tailwind-css-component-profile-5@56w.png'
                      alt='Avatar Tailwind CSS Component'
                    />
                  </div>
                </div>
                <div>
                  <div className='font-bold'>Yancy Tear</div>
                  <div className='text-sm opacity-50'>Brazil</div>
                </div>
              </div>
            </td>
            <td>
              Wyman-Ledner
              <br />
              <span className='badge badge-ghost badge-sm'>
                Community Outreach Specialist
              </span>
            </td>
            <td>Indigo</td>
            <th>
              <button className='btn btn-ghost btn-xs'>details</button>
            </th>
          </tr>
        </tbody>
        {/* foot */}
        <tfoot>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th></th>
          </tr>
        </tfoot>
      </table>

      <Pagination
        onPageChange={handlePageChange}
        totalCount={currentTotalResults}
        siblingCount={1}
        currentPage={currentPage}
        pageSize={currentTotalPages}
        className='mb-10'
      />
      {/* <div className='flex flex-row justify-end mb-4'>
        <div className='join'>
          <input
            className='join-item btn btn-sm btn-square'
            type='radio'
            name='options'
            aria-label='1'
            checked
          />
          <input
            className='join-item btn btn-sm btn-square'
            type='radio'
            name='options'
            aria-label='2'
          />
          <input
            className='join-item btn btn-sm btn-square'
            type='radio'
            name='options'
            aria-label='3'
          />
          <input
            className='join-item btn btn-sm btn-square'
            type='radio'
            name='options'
            aria-label='4'
          />
        </div>
      </div> */}
    </div>
  )
}
