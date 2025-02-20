import Side from './Side'
import Nav from './Nav'

const Shell = ({ children }) => {
  return (
    <div className="flex w-screen h-screen">
      <aside className="w-full min-w-[200px] max-w-[200px] h-full border-r border-default-50">
        <Side />
      </aside>
      <div className="bg-content2 w-[calc(100vw-200px)] ">
        <Nav />
        <main className="h-full">{children}</main>
      </div>
    </div>
  )
}

export default Shell
