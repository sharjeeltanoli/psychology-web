import { services } from "@/data/services"
import { notFound } from "next/navigation"
import ServiceDetailContent from "@/components/sections/ServiceDetailContent"

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)
  if (!service) return {}
  return {
    title: `${service.title} | Ms. Ayman Yamin`,
    description: service.shortDescription,
  }
}

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }))
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)
  if (!service) notFound()
  return <ServiceDetailContent service={service} />
}