export default function Testimonials() {
    const testimonials = [
      {
        name: "Dilfuza Rahimova",
        role: "O'qituvchi",
        content: "TashxisAI yordamida uyimdan chiqmasdan qandli diabet borligini aniqladim. Shifokor tasdig'iga ko'ra, tizim to'g'ri tashxis qo'ygan.",
        avatar: "/avatars/testimonial-1.jpg"
      },
      {
        name: "Javlon Karimov",
        role: "Biznesmen",
        content: "Ishim juda band, shifoxonalarga borishga vaqt topolmayman. TashxisAI mening qat'iy vaqt rejimimga ajoyib mos keldi!",
        avatar: "/avatars/testimonial-2.jpg"
      },
      {
        name: "Malika Yusupova",
        role: "Talaba",
        content: "Dormda yashayotganimda sog'ligim bilan bog'liq muammolarim bo'lsa, darhol TashxisAI ga murojaat qilaman. Juda qulay!",
        avatar: "/avatars/testimonial-3.jpg"
      }
    ];
  
    return (
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Foydalanuvchilar fikrlari</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              10,000 dan ortiq odam bizga ishonishadi. Nima deyishadi?
            </p>
          </div>
  
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-gray-50 p-8 rounded-xl hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center mb-6">
                  <img 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                    src={testimonial.avatar}
                    alt={testimonial.name}
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.content}"</p>
                <div className="mt-4 flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }