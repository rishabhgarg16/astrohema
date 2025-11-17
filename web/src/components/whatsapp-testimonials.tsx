"use client";

export interface WhatsAppTestimonial {
  name: string;
  message: string;
  time: string;
  image?: string;
}

interface WhatsAppTestimonialsProps {
  testimonials: WhatsAppTestimonial[];
  title?: string;
  description?: string;
}

export function WhatsAppTestimonials({ testimonials, title, description }: WhatsAppTestimonialsProps) {
  return (
    <div className="py-16 sm:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {title || "What Our Students Say"}
          </h2>
          {description && (
            <p className="text-muted max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
            >
              {/* WhatsApp-style header */}
              <div className="bg-[#075E54] text-white p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-semibold text-sm">
                  {testimonial.image ? (
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  ) : (
                    testimonial.name.charAt(0).toUpperCase()
                  )}
                </div>
                <div className="flex-1">
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-xs text-white/80">
                    online
                  </div>
                </div>
              </div>

              {/* Message bubble */}
              <div className="p-4 bg-[#ECE5DD] min-h-[150px] flex items-start">
                <div className="relative bg-white rounded-lg rounded-tl-none shadow-sm p-4 max-w-full">
                  <p className="text-sm text-gray-800 leading-relaxed">
                    {testimonial.message}
                  </p>
                  <div className="flex items-center justify-end gap-1 mt-2">
                    <span className="text-[10px] text-gray-500">
                      {testimonial.time}
                    </span>
                    {/* WhatsApp checkmarks */}
                    <svg
                      className="w-4 h-4 text-[#53BDEB]"
                      viewBox="0 0 16 15"
                      fill="none"
                    >
                      <path
                        d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
