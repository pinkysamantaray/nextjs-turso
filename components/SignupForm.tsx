'use client'
import { useActionState } from 'react'
import { Input } from '@heroui/input'
import { registerUser } from '@/actions/auth'
import Link from 'next/link'
import Submit from './Submit'

const initState = { message: null }

const SignupForm = () => {
  const [formState, action] = useActionState<{ message: string | null }>(
    registerUser,
    initState
  )

  return (
    <form
      action={action}
      className="bg-content1 border border-default-100 shadow-lg rounded-md p-3 flex flex-col gap-2 "
    >
      <h3 className="my-4">Sign up</h3>
      <Input fullWidth size="lg" placeholder="Email" name="email" required />
      <Input
        name="password"
        fullWidth
        size="lg"
        type="password"
        placeholder="Password"
        required
      />
      <Submit label={'Register'} />
      <div className="my-2">
        <Link href="/signin">{`Already have an account?`}</Link>
      </div>
      {formState?.message && <p>{formState.message}</p>}
    </form>
  )
}

export default SignupForm
