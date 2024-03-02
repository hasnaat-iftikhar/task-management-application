'use client'
 
import { useEffect } from 'react';

// Components
import { Button } from '@/components/ui/Button';
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])
 
  return (
    <main className='w-full h-screen flex justify-center items-center'>
      <div className='max-w-[540px] mx-auto border border-destructive border-solid bg-[#ffefef] p-[24px] rounded-[12px]'>
        <p className='text-[18px] leading-[140%] font-medium text-destructive'>Error!</p>
        <p className='mt-[8px] text-[16px] leading-[140%]'>{error.message}</p>
        <Button
          variant="destructive"
          className='mt-[24px]'
          onClick={
            () => reset()
          }
        >
          Try again
        </Button>
      </div>
    </main>
  )
}