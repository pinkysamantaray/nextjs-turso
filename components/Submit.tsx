'use client'

import { Button, ButtonProps } from '@heroui/button'

interface SubmitProps extends ButtonProps {
  label: string
}

const Submit = ({ label, ...btnProps }: SubmitProps) => {
  return (
    <Button
      {...btnProps}
      type="submit"
      className="bg-sky-500 hover:bg-sky-700 text-white font-bold text-lg hover:text-white border-purple-200 hover:border-transparent active:bg-sky-500"
    >
      {label}
    </Button>
  )
}

export default Submit
