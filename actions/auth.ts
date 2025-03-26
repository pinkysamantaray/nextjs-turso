'use server'

import { cookies } from 'next/headers'
import { signin, signup } from '@/utils/authTools'
import { z } from 'zod'
import { redirect } from 'next/navigation'
import { COOKIE_NAME } from '@/utils/constants'

const authSchema = z.object({
  email: z.string().email(),
  password: z.string(),
  name: z.string(),
})

export const registerUser = async (prevState: any, formData: FormData) => {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  const data = authSchema.parse({
    email: formData.get('email'),
    password: formData.get('password'),
    name: formData.get('name') as string,
  })

  try {
    const { token } = await signup(data)
    const cookieStore = await cookies()
    cookieStore.set(COOKIE_NAME, token)
  } catch (e) {
    console.error(e)
    return { message: 'Failed to sign you up' }
  }
  redirect('/dashboard')
}

export const signinUser = async (prevState: any, formData: FormData) => {
  // await new Promise((resolve) => setTimeout(resolve, 3000))

  const data = authSchema.parse({
    email: formData.get('email'),
    password: formData.get('password'),
    name: '',
  })

  try {
    const { token } = await signin(data)
    const cookieStore = await cookies()
    cookieStore.set(COOKIE_NAME, token)
  } catch (e) {
    console.error(e)
    return { message: 'Failed to sign you in' }
  }
  redirect('/dashboard')
}
