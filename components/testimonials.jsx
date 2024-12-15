'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Fashion Enthusiast",
    content: "StyleMate has completely transformed how I organize my wardrobe. The personalized suggestions are spot-on!",
    image: "/placeholder.svg?height=100&width=100"
  },
  {
    name: "Michael Chen",
    role: "Busy Professional",
    content: "The virtual closet feature saves me so much time in the morning. It's like having a personal stylist!",
    image: "/placeholder.svg?height=100&width=100"
  },
  {
    name: "Emma Davis",
    role: "Sustainable Fashion Advocate",
    content: "I love how StyleMate helps me make more sustainable fashion choices while staying stylish.",
    image: "/placeholder.svg?height=100&width=100"
  },
  {
    name: "Alex Thompson",
    role: "Style Blogger",
    content: "The color coordination tips have elevated my outfit game. This app is a game-changer!",
    image: "/placeholder.svg?height=100&width=100"
  }
]

export function Testimonials() {
  return (
    (<section className="py-24 bg-[#F5F5DC]">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-16 text-[#2F4F4F]">What Our Users Say</h2>
        <div className="grid gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`flex ${
                index % 2 === 0 ? 'justify-start' : 'justify-end'
              }`}>
              <Card
                className="max-w-lg transform hover:scale-105 transition-transform duration-300">
                <CardContent className="flex gap-4 p-6">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="mt-2 text-[#2F4F4F]">{testimonial.content}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>)
  );
}

