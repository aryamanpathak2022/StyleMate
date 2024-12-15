import { NavBar } from "@/components/nav-bar"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Contact Us - StyleMate",
  description: "Get in touch with StyleMate for any queries or support",
}

export default function ContactPage() {
  return (
    (<div className="min-h-screen bg-[#F5F5DC] flex flex-col">
      <NavBar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-[#2F4F4F]">Contact Us</h1>
        <ContactForm />
      </main>
      <Footer />
    </div>)
  );
}

