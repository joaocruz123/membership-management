import type { FC } from 'react'
import classnames from 'classnames'
import usePagination from '@/hooks/usePagination'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

interface Props {
  onPageChange: (page: number) => void;
  totalCount: number;
  siblingCount?: number;
  currentPage: number;
  pageSize: number;
  className?: string;
}

const Pagination: FC<Props> = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
  className = ''
}) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  })

  if (currentPage === 0 || paginationRange.length < 2) {
    return null
  }

  const onNext = () => {
    onPageChange(currentPage + 1)
  }

  const onPrevious = () => {
    onPageChange(currentPage - 1)
  }

  const lastPage = paginationRange[paginationRange.length - 1]

  const baseStyles = 'join-item btn btn-sm'

  return (
    <main id='pagination'>
      <div
        className={classnames('flex justify-center flex-wrap join', className)}
      >
        <button
          id='previous-pagination'
          className={classnames(baseStyles, {
            'btn-disabled': currentPage === 1
          })}
          onClick={onPrevious}
        >
          <FaArrowLeft />
        </button>
        {paginationRange.map((pageNumber, index) => {
          if (pageNumber === 'DOTS') {
            return (
              <button key={index} className='select-none'>
                ...
              </button>
            )
          }
          return (
            <button
              key={index}
              className={classnames(baseStyles, {
                'font-bold bg-secondary': pageNumber === currentPage
              })}
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </button>
          )
        })}
        <button
          id='next-pagination'
          className={classnames(baseStyles, {
            'btn-disabled': currentPage === lastPage
          })}
          onClick={onNext}
        >
          <FaArrowRight />
        </button>
      </div>
    </main>
  )
}

export default Pagination
