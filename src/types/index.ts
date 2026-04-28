export interface Service {
  id: string
  title: string
  description: string
  duration: number
  pricePKR: number
  priceUSD: number
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  date: string
  category: string
}

export interface Booking {
  name: string
  email: string
  phone: string
  service: string
  date: string
  time: string
  timezone: string
  message: string
}