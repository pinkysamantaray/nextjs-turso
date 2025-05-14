'use client'
interface EventsErrorProps {
  error: { message?: string }
  reset: () => void
}

const EventsError = ({ error, reset }: EventsErrorProps) => {
  return (
    <div className="text-danger-500">
      Something went wrong, Please try again later :(
      <pre>{error.message}</pre>
      <button onClick={reset}>Try again</button>
    </div>
  )
}

export default EventsError
