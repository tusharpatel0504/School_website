function Contact() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <div className="max-w-2xl">
        <p className="text-lg text-gray-700 mb-8">
          Get in touch with us for any inquiries or information about our school.
        </p>
        
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-xl mb-2">Address</h3>
            <p className="text-gray-700">123 School Street, Education City</p>
          </div>
          
          <div>
            <h3 className="font-semibold text-xl mb-2">Phone</h3>
            <p className="text-gray-700">+1 (555) 123-4567</p>
          </div>
          
          <div>
            <h3 className="font-semibold text-xl mb-2">Email</h3>
            <p className="text-gray-700">info@school.edu</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
