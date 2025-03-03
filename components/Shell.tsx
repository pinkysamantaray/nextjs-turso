import Side from './Side'
import Nav from './Nav'

const Shell = ({ children }) => {
  return (
    <div className="flex w-screen h-screen">
      <aside className="w-full min-w-[200px] max-w-[200px] h-full border-r border-default-50">
        <Side />
      </aside>
      <div className="bg-content2 w-[calc(100vw-200px)] h-[calc(100vh-63px)]">
        <Nav />
        <main className="h-full bg-white">{children}</main>
        <footer className="text-center font-thin text-xs">
          &copy; {new Date().getFullYear()} All rights reserved!
        </footer>
      </div>
    </div>
  )
}

export default Shell
