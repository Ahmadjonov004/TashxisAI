export default function HowItWorks() {
    const steps = [
      {
        number: "1",
        title: "Ro'yxatdan o'tish",
        description: "30 soniyada ro'yxatdan o'ting yoki mehmon sifatida davom eting",
        icon: "📝"
      },
      {
        number: "2",
        title: "Savollarga javob bering",
        description: "AI yordamchi sizga sog'ligingiz haqida savollar beradi",
        icon: "💬"
      },
      {
        number: "3",
        title: "Tahlil qilish",
        description: "Tizim javoblaringizni 1000+ tibbiy ma'lumotlar bazasi bilan solishtiradi",
        icon: "🔍"
      },
      {
        number: "4",
        title: "Natijani oling",
        description: "Batafsil hisobot va tavsiyalar bilan tanishishingiz mumkin",
        icon: "📊"
      }
    ];
  
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Tizim qanday ishlaydi?</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Faqat 4 oddiy qadamda sog'ligingiz holati haqida batafsil ma'lumot oling
            </p>
          </div>
  
          <div className="relative">
            {/* Progress line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gray-200 transform -translate-y-1/2"></div>
            
            <div className="grid md:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className="relative bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 text-center"
                >
                  <div className="absolute md:top-1/2 md:left-0 w-full h-1 md:h-0 md:w-0 md:border-t-2 md:border-gray-200"></div>
                  <div className="flex md:flex-col items-center md:justify-center">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl mr-4 md:mr-0 md:mb-4">
                      {step.number}
                    </div>
                    <div className="text-left md:text-center">
                      <h3 className="text-lg font-semibold">{step.title}</h3>
                      <p className="text-gray-600 mt-1">{step.description}</p>
                    </div>
                  </div>
                  <div className="mt-4 text-3xl">{step.icon}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }