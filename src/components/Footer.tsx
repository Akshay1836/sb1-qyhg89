import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Savoria Restaurant</h3>
            <p className="text-gray-400 mb-4">
              Bringing you the finest dining experience with our carefully curated menu
              and exceptional service since 2024.
            </p>
            <div className="flex space-x-4">
              <SocialLink icon={<Facebook />} href="#" />
              <SocialLink icon={<Instagram />} href="#" />
              <SocialLink icon={<Twitter />} href="#" />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <ContactInfo icon={<MapPin />} text="123 Dining Street, Foodville, FC 12345" />
              <ContactInfo icon={<Phone />} text="+1 (555) 123-4567" />
              <ContactInfo icon={<Mail />} text="info@savoria.com" />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Opening Hours</h3>
            <div className="space-y-2 text-gray-400">
              <p>Monday - Friday: 11:00 AM - 10:00 PM</p>
              <p>Saturday - Sunday: 10:00 AM - 11:00 PM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Savoria Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

const SocialLink = ({ icon, href }: { icon: React.ReactNode; href: string }) => (
  <a
    href={href}
    className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-500 transition"
  >
    {icon}
  </a>
);

const ContactInfo = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <div className="flex items-start space-x-3 text-gray-400">
    <div className="mt-1">{icon}</div>
    <span>{text}</span>
  </div>
);