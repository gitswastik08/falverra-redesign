

import { Facebook, Twitter, Linkedin, Youtube, Instagram, MapPin, Phone, Mail, ArrowRight } from "lucide-react"

import Button from "./Button"
import { Link } from "react-router-dom"

export default function Footer() {
  return (
    
    <footer className="bg-[#171100] text-white sm:py-12 py-6 px-4 sm:px-8">
      <div className="container mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10 items-end">
          {/* Logo and Description */}
          <div className="w-fit">
            <h2 className="  text-3xl sm:text-5xl font-bold mb-4">LOGO</h2>
            <p className="text-gray-300 w-[90%] text-xs sm:text-base sm:w-[22vw] font-light font-sans leading-snug">
              This is a branch of GD Goenka Healthcare Academy, operating under GD Goenka's national framework and
              academic standards.
            </p>
          </div>

          {/* Contact Information */}
          <div className=" space-y-2 sm:space-y-4 text-[#ffffffad]">
            <div className="flex items-start space-x-1 sm:space-x-3">
              <MapPin className="h-5 w-5 text-white mt-0.5" />
              <span>Opp. XYZ Landmark, Siliguri, WB</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-white" />
              <span>(123) 456-7890</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-white" />
              <span>example@gmail.com</span>
            </div>

            {/* Social Media */}
            <div className="pt-2 flex gap-3">
              <p className="mb-2">Social Media:</p>
              <div className="flex space-x-4">
                <Link href="#" className="hover:text-yellow-400 transition-colors">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="#" className="hover:text-yellow-400 transition-colors">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="#" className="hover:text-yellow-400 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link href="#" className="hover:text-yellow-400 transition-colors">
                  <Youtube className="h-5 w-5" />
                </Link>
                <Link href="#" className="hover:text-yellow-400 transition-colors">
                  <Instagram className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Subscribe Form */}
          <div className="bg-[#2e2919] w-fit px-6 py-3 sm:py-6 rounded-lg">
            <h3 className="text-xl font-medium mb-4">Subscribe</h3>
            <div className="flex mb-4">
              <input
                type="email"
                placeholder="Email address"
                className="bg-white text-black rounded-r-none px-6 py-3 rounded-[10px] focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 border-0"
              />
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black rounded-l-none rounded-[10px] px-3">
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
            <p className="text-xs font-[100] font-sans text-gray-300 sm:w-[20vw]">
              Hello, we are Lift Media. Our goal is to translate the positive effects from revolutionizing how companies
              engage with their clients & their team.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center">
          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center sm:justify-start gap-6 mb-4 text-[#ffffffbe] sm:mb-0">
            <Link href="#" >
              Home
            </Link>
            <Link href="#" >
              Service
            </Link>
            <Link href="#" >
              Pricing
            </Link>
            <Link href="#" >
              How It Works
            </Link>
            <Link href="#" >
              Blog
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-400">Copyright © 2025 • Lift Media Inc.</div>
        </div>
      </div>
    </footer>
  )
}
