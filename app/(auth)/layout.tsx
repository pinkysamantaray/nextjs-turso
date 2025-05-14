import { ReactNode } from 'react'

interface AuthLayoutProps {
  children: ReactNode
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-stone-100">
      <div className="w-full max-w-[400px] mx-auto">{children}</div>
    </div>
  )
}

export default AuthLayout
