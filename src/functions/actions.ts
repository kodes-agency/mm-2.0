'use server'

import z from 'zod'

export async function subscribe({
  email,
  phone,
  name,
  company,
  budget,
  message,
}: {
  email: string
  phone: string
  name: string
  company: string
  budget?: string
  message?: string
}) {
  const schema = z.object({
    email: z
      .string({
        invalid_type_error: 'Invalid email address',
        required_error: 'Email is required',
      })
      .email(),

    phone: z
      .string({
        invalid_type_error: 'Invalid phone number',
        required_error: 'Phone number is required',
      })
      .min(8, {
        message: 'Phone number must be at least 8 digits long',
      }),
    name: z
      .string({
        invalid_type_error: 'Invalid name',
        required_error: 'Name is required',
      })
      .min(2, {
        message: 'Name must be at least 2 characters long',
      }),
    company: z
      .string({
        invalid_type_error: 'Invalid company name',
        required_error: 'Company name is required',
      })
      .min(2, {
        message: 'Company name must be at least 2 characters long',
      }),
    budget: z.string().optional(),
    message: z.string().optional(),
  })

  const parse = schema.safeParse({
    email: email,
    phone: phone,
    name: name,
    company: company,
    budget: budget,
    message: message,
  })

  if (!parse.success) return { success: false, message: parse.error.errors }

  try {
    const params = new URLSearchParams()
    params.append('k', process.env.THEMARKETER_KEY?.toString() || '')
    params.append('u', process.env.THEMARKETER_ID?.toString() || '')
    params.append('email', email)
    params.append('phone', phone)
    params.append('name', name)
    params.append('attributes[Company]', company)
    if (budget) params.append('attributes[Budget]', budget)
    if (message) params.append('attributes[Message]', message)

    const url = `${process.env.THEMARKETER_URL}?${params.toString()}`
    const req = await fetch(url, {
      method: 'POST',
    })
    if (!req.ok) return { success: false, message: 'An error occurred' }
    const res = await req.json()
    if (!res.result) return { success: false, message: 'An error occurred' }
    return { success: true, message: 'Your request has been sent' }
  } catch (error) {
    console.error(error)
    return {
      success: false,
      message: 'An unexpected error occurred',
    }
  }
}
