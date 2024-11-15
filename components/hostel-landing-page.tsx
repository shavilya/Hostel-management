'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Home, Menu } from 'lucide-react'
import Link from "next/link"

export function HostelLandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Home className="h-6 w-6" />
          <span className="sr-only">Hostel Management</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#hostel">
            Hostel
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#library">
            Library
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to Our Hostel Management System
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Providing comfortable accommodation and excellent library facilities for our students.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Learn More</Button>
                <Button variant="outline">Contact Us</Button>
              </div>
            </div>
          </div>
        </section>
        <section id="hostel" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Hostel</h2>
            <p className="mt-4 mb-8 text-gray-500 dark:text-gray-400">
              Comfortable and secure accommodation for all our students.
            </p>
            <div className="grid gap-6 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Modern Rooms</CardTitle>
                </CardHeader>
                <CardContent>Well-furnished rooms with all necessary amenities for a comfortable stay.</CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>24/7 Security</CardTitle>
                </CardHeader>
                <CardContent>Round-the-clock security to ensure the safety of our residents.</CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Common Areas</CardTitle>
                </CardHeader>
                <CardContent>Spacious common areas for socializing and group activities.</CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="library" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Library</h2>
            <p className="mt-4 mb-8 text-gray-500 dark:text-gray-400">
              A vast collection of resources to support your academic journey.
            </p>
            <div className="grid gap-6 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Extensive Collection</CardTitle>
                </CardHeader>
                <CardContent>A wide range of books, journals, and digital resources across various disciplines.</CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Study Spaces</CardTitle>
                </CardHeader>
                <CardContent>Quiet study areas and group discussion rooms to facilitate learning.</CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Digital Access</CardTitle>
                </CardHeader>
                <CardContent>Access to online databases and e-books for convenient research.</CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer id="contact" className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Hostel Management. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}