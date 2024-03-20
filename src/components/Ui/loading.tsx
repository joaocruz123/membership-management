import { BounceLoader } from 'react-spinners'

export const LoadingComponent = ({ loading, color, heigth }: PropsLoading) => {
  return (
    <div
      className={`flex items-center justify-center w-full ${heigth} border border-none`}
    >
      <div role='status'>
        <BounceLoader
          color={color}
          loading={loading}
          cssOverride={{}}
          aria-label='Loading Spinner'
          data-testid='loader'
        />
      </div>
    </div>
  )
}

interface PropsLoading {
  loading: boolean;
  color: string;
  heigth: string;
}

export default LoadingComponent
