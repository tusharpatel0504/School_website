import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#FCF6EA]">
      <div className="mx-auto max-w-6xl px-4 pt-16">
        {/* Top Row */}
        <div className="grid gap-10 pb-12 md:grid-cols-6">
          {/* Brand (takes 2 columns) */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <img
                src="/logo.png"
                alt="Book Store"
                className="h-10 w-10 object-contain"
              />
              <h3 className="text-lg font-extrabold text-[#0b1230]">
                Book Store
              </h3>
            </div>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-500">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy a type
              specimen book.
            </p>
          </div>

          {/* Company */}
          <div className="md:col-span-1">
            <h4 className="text-sm font-bold text-[#0b1230]">Company</h4>
            <ul className="mt-5 space-y-4 text-sm text-gray-500">
              <li className="cursor-pointer hover:text-orange-500">About Us</li>
              <li className="cursor-pointer hover:text-orange-500">
                How it work?
              </li>
              <li className="cursor-pointer hover:text-orange-500">
                Popular Course
              </li>
              <li className="cursor-pointer hover:text-orange-500">Service</li>
            </ul>
          </div>

          {/* Courses */}
          <div className="md:col-span-1">
            <h4 className="text-sm font-bold text-[#0b1230]">Courses</h4>
            <ul className="mt-5 space-y-4 text-sm text-gray-500">
              <li className="cursor-pointer hover:text-orange-500">
                Categories
              </li>
              <li className="cursor-pointer hover:text-orange-500">
                Offline Course
              </li>
              <li className="cursor-pointer hover:text-orange-500">
                Video Course
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="md:col-span-1">
            <h4 className="text-sm font-bold text-[#0b1230]">Support</h4>
            <ul className="mt-5 space-y-4 text-sm text-gray-500">
              <li className="cursor-pointer hover:text-orange-500">FAQ</li>
              <li className="cursor-pointer hover:text-orange-500">
                Help Center
              </li>
              <li className="cursor-pointer hover:text-orange-500">Career</li>
              <li className="cursor-pointer hover:text-orange-500">Privacy</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1">
            <h4 className="text-sm font-bold text-[#0b1230]">Contact Info</h4>
            <ul className="mt-5 space-y-4 text-sm text-gray-500">
              <li>+0913-705-3875</li>
              <li>Elizabeth@jourrapide.com</li>
              <li className="leading-relaxed">
                4808 Skinner Hollow Road <br />
                Days Creek, OR 97429
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200" />

        {/* Bottom Text */}
        <div className="py-8 text-center">
          <p className="text-sm text-gray-500">
            BookStore All Right Reserved, 2022
          </p>
        </div>
      </div>
    </footer>
  );
}
