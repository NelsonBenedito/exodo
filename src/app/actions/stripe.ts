'use server'

import { headers } from 'next/headers'
import { stripe } from '../../lib/stripe'

export async function fetchClientSecret(): Promise<string> {
  const origin = (await headers()).get('origin')

  const session = await stripe.checkout.sessions.create({
    ui_mode: 'embedded',
    line_items: [
      {
        price: 'price_1S0q7KPP59n6IGXKm1E72Mk1', // seu price ID
        quantity: 1
      }
    ],
    mode: 'payment',
    return_url: `${origin}/return?session_id={CHECKOUT_SESSION_ID}`,
  })

  if (!session.client_secret) {
    throw new Error("Stripe did not return a client secret")
  }

  return session.client_secret
}
