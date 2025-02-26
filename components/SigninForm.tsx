'use client'
import { useActionState } from 'react'
import { Input, Alert } from '@heroui/react'
import { signinUser } from '@/actions/auth'
import Link from 'next/link'
import Submit from './Submit'

const initState = { message: null }

const SigninForm = () => {
  const [formState, action] = useActionState<{ message: string | null }>(
    signinUser,
    initState
  )

  return (
    <form
      action={action}
      className="bg-content1 border border-default-100 shadow-lg rounded-md p-6 flex flex-col gap-3"
    >
      <h3 className="m-2 text-sm">Sign in</h3>
      <Input
        fullWidth
        required
        size="lg"
        placeholder="Email"
        name="email"
        type="email"
      />
      <Input
        name="password"
        fullWidth
        required
        size="lg"
        type="password"
        placeholder="Password"
      />
      <Submit
        className="bg-sky-500 hover:bg-sky-700 text-white font-bold text-lg hover:text-white border-purple-200 hover:border-transparent active:bg-sky-500"
        label={'Login'}
      />
      <div className="my-2 text-sm font-bold">
        <Link href="/signup">{`Don't have an account?`}</Link>
      </div>
      {formState?.message && (
        <Alert color="danger" title={formState.message} variant="faded" />
      )}
    </form>
  )
}

export default SigninForm
