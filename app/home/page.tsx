import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'
import { AddCardForm } from '../components/home-form'

export default async function HomePage() {
    const supabase = await createClient()

    const { data: userData, error: userError } = await supabase.auth.getUser()
    if (userError || !userData?.user) {
        redirect('/error')
        return
    }

    const { data: cards, error: cardsError } = await supabase
        .from('cards')
        .select('*')
        .eq('user_id', userData.user.id)

    if (cardsError) {
        console.error('Error fetching cards:', cardsError)
        redirect('/error')
        return
    }

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">My Card Collection</h1>
            <p className="mb-4">Hello {userData.user.email}</p>
            <AddCardForm userId={userData.user.id} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cards.length > 0 ? (
                    cards.map((card) => (
                        <div key={card.id} className="border p-4 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold">{card.name}</h2>
                            <p className="text-gray-700">Type: {card.type}</p>
                            <p className="text-gray-700">Ability: {card.ability}</p>
                        </div>
                    ))
                ) : (
                    <p>No cards found.</p>
                )}
            </div>
        </div>
    )
}