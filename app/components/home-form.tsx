'use client'

import { useState } from 'react'
import { createClient } from '@/utils/supabase/client'

export function AddCardForm({ userId }: { userId: string }) {
    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [ability, setAbility] = useState('')

    const handleAddCard = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const supabase = createClient()

        const { error } = await supabase
            .from('cards')
            .insert([{ name, type, ability, user_id: userId }])

        if (error) {
            console.error('Error adding card:', error)
            alert('Error adding card!')
        } else {
            alert('Card added successfully!')
            window.location.reload()
        }
    }

    return (
        <form onSubmit={handleAddCard} className="mb-6">
            <div className="grid gap-4 mb-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                </div>
                <div>
                    <label htmlFor="type" className="block text-sm font-medium text-gray-700">Type</label>
                    <input
                        type="text"
                        name="type"
                        id="type"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                </div>
                <div>
                    <label htmlFor="ability" className="block text-sm font-medium text-gray-700">Ability</label>
                    <input
                        type="text"
                        name="ability"
                        id="ability"
                        value={ability}
                        onChange={(e) => setAbility(e.target.value)}
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                </div>
            </div>
            <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Add Card
            </button>
            <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ml-4">
                Add Image
            </button>
        </form>
    )
}