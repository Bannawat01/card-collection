'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

export async function login(formData: FormData) {
    const supabase = await createClient()

    const email = formData.get('email') as string | null
    const password = formData.get('password') as string | null

    if (!email || !password) {
        console.error('Missing email or password')
        redirect('/error')
        return
    }

    const { error } = await supabase.auth.signInWithPassword({ email, password })

    if (error) {
        if (error.message.includes('Email not confirmed')) {
            console.error('Email not confirmed:', error)
            redirect('/error?message=Please confirm your email before logging in.')
        } else {
            console.error('Error during login:', error)
            redirect('/error')
        }
    } else {
        revalidatePath('/', 'layout')
        redirect('/home')
    }
}