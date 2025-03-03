'use client'
import { useActionState } from 'react'
import { Input, Alert } from '@heroui/react'
import { registerUser } from '@/actions/auth'
import Link from 'next/link'
import Submit from './Submit'

const initState = { message: null }

const SignupForm = () => {
  const [formState, formAction, isPending] = useActionState<{
    message: string | null
  }>(registerUser, initState)

  return (
    <form
      action={formAction}
      className="bg-content1 border border-default-100 shadow-lg rounded-md p-6 flex flex-col gap-3"
    >
      <h3 className="m-2 text-sm">Sign up</h3>
      <Input fullWidth size="lg" placeholder="Name" name="name" required />
      <Input fullWidth size="lg" placeholder="Email" name="email" required />
      <Input
        name="password"
        fullWidth
        size="lg"
        type="password"
        placeholder="Password"
        required
      />
      <Submit label={isPending ? 'Loading...' : 'Register'} />
      <div className="my-2 text-sm font-bold">
        <Link href="/signin">{`Already have an account?`}</Link>
      </div>
      {formState?.message && (
        <Alert color="danger" title={formState.message} variant="faded" />
      )}
    </form>
  )
}

export default SignupForm
