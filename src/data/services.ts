export interface Service {
  slug: string
  icon: string
  title: string
  shortDescription: string
  duration: string
  pricePKR: number
  priceUSD: number
  color: string
  image?: string
  // Detail page ke liye
  fullDescription: string
  symptoms: string[]
  approach: string[]
  faqs: { question: string; answer: string }[]
}

export const services: Service[] = [
  {
    slug: "anxiety-stress-depression",
    icon: "Brain",
    title: "Anxiety, Stress & Depression",
    shortDescription: "Helping you overcome anxiety, stress, and depression, so you can feel like yourself again.",
    duration: "50 min",
    pricePKR: 5000,
    priceUSD: 25,
    color: "#4A7B9D",
    image: "/images/services/anxiety.jpg",
    fullDescription: "Anxiety, stress, and depression are among the most common mental health challenges...",
    symptoms: ["Persistent sadness", "Excessive worry", "Fatigue", "Loss of interest"],
    approach: ["Cognitive Behavioural Therapy (CBT)", "Mindfulness techniques", "Personalised treatment plan"],
    faqs: [
      { question: "How many sessions will I need?", answer: "It depends on the individual, typically 6-12 sessions." }
    ]
  },
  {
    slug: "psychosis",
    icon: "Zap",
    title: "Psychosis",
    shortDescription: "Helping individuals experiencing psychosis reconnect with reality through compassionate, evidence-based psychological care.",
    duration: "50 min",
    pricePKR: 5000,
    priceUSD: 25,
    color: "#7EB5A6",
    image: "/images/services/psychosis.jpg",
    fullDescription: "Psychosis is a condition that affects the way your brain processes information...",
    symptoms: ["Hallucinations", "Delusions", "Disorganised thinking", "Lack of insight"],
    approach: ["Cognitive Behavioural Therapy for Psychosis (CBTp)", "Family support", "Medication management support"],
    faqs: [
      { question: "Is psychosis treatable?", answer: "Yes, with the right support and treatment, many people recover fully." }
    ]
  },
  {
    slug: "addiction",
    icon: "Flame",
    title: "Addiction",
    shortDescription: "Supporting individuals on the path to recovery from addiction through personalised, evidence-based psychological treatment.",
    duration: "50 min",
    pricePKR: 5000,
    priceUSD: 25,
    color: "#E8A598",
    image: "/images/services/addiction.jpg",
    fullDescription: "Addiction is a complex condition that affects both the brain and behaviour...",
    symptoms: ["Loss of control", "Cravings", "Withdrawal symptoms", "Neglecting responsibilities"],
    approach: ["Motivational Interviewing", "CBT for addiction", "Relapse prevention strategies"],
    faqs: [
      { question: "Can online therapy help with addiction?", answer: "Yes, online therapy is highly effective for addiction treatment." }
    ]
  },
  {
    slug: "self-growth",
    icon: "Sparkles",
    title: "Self Growth",
    shortDescription: "Empowering individuals to unlock their potential and build a more fulfilling, purposeful life.",
    duration: "50 min",
    pricePKR: 4500,
    priceUSD: 22,
    color: "#B5A6D4",
    image: "/images/services/self-growth.jpg",
    fullDescription: "Self growth therapy focuses on helping you become the best version of yourself...",
    symptoms: ["Lack of direction", "Low confidence", "Fear of failure", "Feeling stuck"],
    approach: ["Strengths-based therapy", "Goal setting", "Mindfulness and self-compassion"],
    faqs: [
      { question: "Is self growth therapy only for people with problems?", answer: "No, anyone who wants to grow personally can benefit." }
    ]
  },
  {
    slug: "trauma-ptsd-ocd",
    icon: "ShieldAlert",
    title: "Trauma, PTSD & OCD",
    shortDescription: "Healing the wounds of the past so they no longer define your present.",
    duration: "50 min",
    pricePKR: 5000,
    priceUSD: 25,
    color: "#4A7B9D",
    image: "/images/services/trauma.jpg",
    fullDescription: "Trauma, PTSD and OCD can have a profound impact on daily life...",
    symptoms: ["Flashbacks", "Nightmares", "Intrusive thoughts", "Compulsive behaviours"],
    approach: ["EMDR therapy", "Exposure and Response Prevention (ERP)", "Trauma-focused CBT"],
    faqs: [
      { question: "What is EMDR?", answer: "EMDR is a powerful therapy that helps process traumatic memories." }
    ]
  },
  {
    slug: "couples-therapy",
    icon: "Heart",
    title: "Couples Therapy",
    shortDescription: "Strengthen communication, resolve conflicts and rebuild connection in your relationship.",
    duration: "60 min",
    pricePKR: 7000,
    priceUSD: 35,
    color: "#7EB5A6",
    image: "/images/services/couples.jpg",
    fullDescription: "Couples therapy helps partners understand each other better...",
    symptoms: ["Communication breakdown", "Trust issues", "Frequent conflicts", "Emotional distance"],
    approach: ["Gottman Method", "Emotionally Focused Therapy (EFT)", "Communication skills training"],
    faqs: [
      { question: "Do both partners need to attend?", answer: "Ideally yes, but individual sessions can also help." }
    ]
  },
]
