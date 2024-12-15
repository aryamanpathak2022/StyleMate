import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { NavBar } from "@/components/nav-bar"
import { AnimatedButton } from "@/components/animated-button"
import { Testimonials } from "@/components/testimonials"
import { BlogSection } from "@/components/blog-section"
import { WriteBlogSection } from "@/components/write-blog-section"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "StyleMate - Virtual Wardrobe Assistant",
  description: "Your personal style companion for wardrobe organization and outfit suggestions",
}

const features = [
  {
    title: "Virtual Closet",
    image: "/placeholder.svg?height=400&width=400",
    description: "Organize your wardrobe digitally"
  },
  {
    title: "Decluttering Tips",
    image: "/placeholder.svg?height=400&width=400",
    description: "Simplify your wardrobe"
  },
  {
    title: "Sustainable Tips",
    image: "/placeholder.svg?height=400&width=400",
    description: "Eco-friendly fashion choices"
  },
  {
    title: "Style Guide",
    image: "/placeholder.svg?height=400&width=400",
    description: "Personal styling advice"
  },
  {
    title: "Color Matching",
    image: "/placeholder.svg?height=400&width=400",
    description: "Perfect color combinations"
  },
  {
    title: "Outfit Planning",
    image: "/placeholder.svg?height=400&width=400",
    description: "Plan your looks ahead"
  }
]

export default function HomePage() {
  return (
    (<div className="min-h-screen bg-[#F5F5DC]">
      <NavBar />
      {/* Hero Section */}
      <section className="relative h-screen">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Organized wardrobe background"
          width={1920}
          height={1080}
          className="absolute inset-0 object-cover w-full h-full"
          priority />
        <div className="absolute inset-0 bg-black/20" />
        <div
          className="relative container pt-32 flex flex-col items-center justify-center h-full text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            VIRTUAL WARDROBE ASSISTANT
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl">
            Simplify Your Wardrobe, Redefine Your Style
          </p>
          <AnimatedButton size="lg" className="text-lg">
            Get Started
          </AnimatedButton>
        </div>
      </section>
      {/* Features Grid Section */}
      <section className="py-24 bg-[#9eb3a6]">
        <div className="container px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-16">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <Card
                key={feature.title}
                className="group hover:scale-105 transition-transform duration-300 bg-white/90 backdrop-blur-sm">
                <div className="relative aspect-square">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={400}
                    height={400}
                    className="object-cover rounded-t-lg" />
                  <div
                    className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors rounded-t-lg" />
                  <div
                    className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
                    <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-lg text-center mb-4">{feature.description}</p>
                    <AnimatedButton variant="secondary" size="sm">
                      Learn More
                    </AnimatedButton>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* About Section */}
      <section className="py-24 bg-gray-50">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative w-full h-[400px] rounded-lg overflow-hidden mb-8">
              <Image
                src="/placeholder.svg?height=800&width=1200"
                alt="Organized wardrobe"
                width={1200}
                height={800}
                className="object-cover" />
            </div>
            <Card className="p-8 shadow-xl bg-white/90 backdrop-blur-sm">
              <CardContent className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-center mb-8 text-[#2F4F4F]">About Us</h2>
                <p className="mb-6 text-gray-700">
                  StyleMate is your ultimate outfit suggestion app, designed to solve the everyday
                  dilemma of "What do I wear?" and the challenge of organizing your closet. We
                  understand how overwhelming it can be to manage a cluttered wardrobe and find
                  the perfect outfit for any occasion.
                </p>
                <p className="mb-6 text-gray-700">
                  Our app helps you save time, embrace sustainable fashion, and elevate your
                  style with personalized outfit recommendations tailored to your mood, events,
                  and preferences. From a virtual closet to color coordination tips and wardrobe
                  decluttering advice, StyleMate is here to simplify your fashion choices and
                  help you make the most of your wardrobe.
                </p>
                <p className="text-xl font-semibold text-center text-[#2F4F4F]">
                  Join us to redefine your style journey—one outfit at a time!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* Add Testimonials Section */}
      <Testimonials />
      {/* Add Blog Section */}
      <BlogSection />
      <WriteBlogSection />
      {/* Add Footer */}
      <Footer />
    </div>)
  );
}

