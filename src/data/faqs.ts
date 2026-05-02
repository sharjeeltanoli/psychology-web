export interface FAQ {
  id: string
  question: string
  answer: string
  category: string
}

export const faqs: FAQ[] = [
  {
    id: "1",
    category: "General",
    question: "What is therapy and how can it help me?",
    answer: "Therapy is a collaborative process between you and a trained psychologist. It provides a safe, confidential space to explore your thoughts, feelings, and behaviors. It can help you develop coping strategies, improve relationships, and work through emotional challenges.",
  },
  {
    id: "2",
    category: "General",
    question: "How do I know if I need therapy?",
    answer: "If you are experiencing persistent sadness, anxiety, stress, relationship difficulties, or feel overwhelmed by life's challenges, therapy can help. You do not need to be in a crisis to benefit — many people seek therapy for personal growth and self-improvement.",
  },
  {
    id: "3",
    category: "Sessions",
    question: "How long is each session?",
    answer: "Individual sessions are 50 minutes long. Couples therapy sessions are 60 minutes. The duration may vary depending on your specific needs and the type of therapy.",
  },
  {
    id: "4",
    category: "Sessions",
    question: "How many sessions will I need?",
    answer: "The number of sessions varies for each individual. Some clients see improvement in 6-8 sessions, while others benefit from longer-term therapy. Ms. Ayman will discuss a recommended plan with you after the initial assessment.",
  },
  {
    id: "5",
    category: "Online Sessions",
    question: "How do online sessions work?",
    answer: "Online sessions are conducted via secure video call. You will receive a link after booking. All you need is a stable internet connection, a quiet private space, and a device with a camera and microphone.",
  },
  {
    id: "6",
    category: "Online Sessions",
    question: "Are online sessions as effective as in-person therapy?",
    answer: "Research shows that online therapy is equally effective as in-person therapy for most conditions including anxiety, depression, and stress. Many clients actually prefer the comfort and convenience of online sessions.",
  },
  {
    id: "7",
    category: "Confidentiality",
    question: "Is everything I share kept confidential?",
    answer: "Yes, absolutely. Everything discussed in sessions is completely confidential. Ms. Ayman follows strict ethical guidelines and professional standards. Confidentiality is only broken in rare circumstances where there is a risk to your safety or others.",
  },
  {
    id: "8",
    category: "Payment",
    question: "What are the session fees?",
    answer: "Individual sessions are PKR 5,000 / $25 USD. Couples therapy is PKR 7,000 / $35 USD. International clients can pay via PayPal or card. Local clients can pay via JazzCash or bank transfer.",
  },
  {
    id: "9",
    category: "Payment",
    question: "Do you offer any discounts or sliding scale fees?",
    answer: "Ms. Ayman understands that therapy is an investment. Please reach out via the contact form to discuss payment options if cost is a concern. Limited sliding scale spots may be available.",
  },
  {
    id: "10",
    category: "Booking",
    question: "How do I book a session?",
    answer: "You can book a session directly through the booking page on this website. Select your preferred service, date, and time. You will receive a confirmation email with session details.",
  },
]