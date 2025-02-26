const AuthLayout = ({ children }) => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-stone-100">
      <div className="w-full max-w-[400px] mx-auto">{children}</div>
    </div>
  )
}

export default AuthLayout
