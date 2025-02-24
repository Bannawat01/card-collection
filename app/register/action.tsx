'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

export async function signup(formData: FormData) {
    const supabase = await createClient()
    const data = {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    }

    const { error } = await supabase.auth.signUp(data)

    if (error) {
        if (error.message.includes('already registered')) {
            console.error('User already registered:', error)
            redirect('/login')
        } else {
            console.error('Error during signup:', error)
            redirect('/error')
        }
    }

    revalidatePath('/', 'layout')
    redirect('/home')
}