'use client'
const EventsError = ({ error, reset }) => {
  return (
    <div className="text-danger-500">
      Something went wrong, Please try again later :(
      <pre>{error.message}</pre>
      <button onClick={reset}>Try again</button>
    </div>
  )
}

export default EventsError
