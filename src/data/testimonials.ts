export interface Testimonial {
  id: string
  name: string
  location: string
  review: string
  rating: number
  service: string
  avatarColor: string
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah K.",
    location: "London, UK",
    review: "Ms. Ayman helped me understand my anxiety in ways I never thought possible. Her compassionate approach made me feel safe and heard from the very first session.",
    rating: 5,
    service: "Anxiety & Stress",
    avatarColor: "#4A7B9D",
  },
  {
    id: "2",
    name: "Ahmed R.",
    location: "Dubai, UAE",
    review: "I was struggling with depression for years. After just a few sessions, I started seeing life differently. Ms. Ayman is truly exceptional at what she does.",
    rating: 4,
    service: "Depression Counseling",
    avatarColor: "#7EB5A6",
  },
  {
    id: "3",
    name: "Fatima N.",
    location: "Karachi, Pakistan",
    review: "The online sessions were so convenient and just as effective as in-person therapy. I highly recommend Ms. Ayman to anyone going through a difficult time.",
    rating: 4.5,
    service: "Online Sessions",
    avatarColor: "#E8A598",
  },
  {
    id: "4",
    name: "James L.",
    location: "Toronto, Canada",
    review: "Ms. Ayman helped my wife and I rebuild our relationship. Her Couples Therapy approach is gentle yet incredibly effective. We are in a much better place now.",
    rating: 5,
    service: "Couples Therapy",
    avatarColor: "#B5A6D4",
  },
  {
    id: "5",
    name: "Zara M.",
    location: "Lahore, Pakistan",
    review: "I came to Ms. Ayman feeling completely lost. She helped me find my purpose and confidence again. The self growth sessions changed my life.",
    rating: 4.5,
    service: "Self Growth",
    avatarColor: "#4A7B9D",
  },
  {
    id: "6",
    name: "Omar T.",
    location: "Riyadh, Saudi Arabia",
    review: "Dealing with trauma was the hardest thing I have ever done. Ms. Ayman made the process feel manageable and safe. I am forever grateful.",
    rating: 4,
    service: "Trauma & PTSD",
    avatarColor: "#7EB5A6",
  },
]
