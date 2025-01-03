import { useState } from 'react';

interface ConnectFormData {
  fullName: string;
  email: string;
  mobile: string;
  reason: string;
  message: string;
}

const reasons = [
  'Spiritual Guidance',
  'Join Events & Camps',
  'General Inquiry',
  'Other'
];

const Connect = () => {
  const [formData, setFormData] = useState<ConnectFormData>({
    fullName: '',
    email: '',
    mobile: '',
    reason: '',
    message: ''
  });

  return (
    <section className="bg-gradient-to-b from-pink-50 to-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-white p-8 shadow-xl lg:p-12">
          <div className="absolute inset-0 bg-grid-gray-100/5 [mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"></div>
          <div className="relative grid gap-12 lg:grid-cols-2">
            {/* Left Column */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Connect with Satlok Ashram</h2>
              <p className="mt-4 text-gray-600">LET'S TALK AND BEGIN YOUR SPIRITUAL JOURNEY</p>
              
              <div className="mt-12 space-y-8">
                <div className="flex items-center gap-4">
                  <div className="rounded-xl bg-red-50 p-3">
                    <svg className="h-6 w-6 text-[#FF1E1E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">EMAIL SUPPORT</h3>
                    <a href="mailto:info@satlokashram.org" className="text-[#FF1E1E] hover:text-red-600">
                      info@satlokashram.org
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="rounded-xl bg-red-50 p-3">
                    <svg className="h-6 w-6 text-[#FF1E1E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">PHONE SUPPORT</h3>
                    <a href="tel:+911234567890" className="text-[#FF1E1E] hover:text-red-600">
                      +91 123 456 7890
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-xl font-semibold text-gray-900">Why Connect with Us?</h3>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-center gap-3">
                    <div className="rounded-full bg-red-50 p-1">
                      <svg className="h-4 w-4 text-[#FF1E1E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-600">Personalized Spiritual Guidance</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="rounded-full bg-red-50 p-1">
                      <svg className="h-4 w-4 text-[#FF1E1E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-600">Access to Spiritual Knowledge</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="rounded-full bg-red-50 p-1">
                      <svg className="h-4 w-4 text-[#FF1E1E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-600">Participate in Free Events</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column - Form */}
            <form className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Full Name*"
                    className="peer w-full rounded-lg border border-gray-200 bg-white p-4 text-sm text-gray-900 placeholder-transparent shadow-sm transition-all focus:border-[#FF1E1E] focus:ring-2 focus:ring-[#FF1E1E]/20"
                    required
                  />
                  <label className="pointer-events-none absolute -top-2 left-2 z-[1] bg-white px-2 text-xs text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:left-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:left-2 peer-focus:text-xs peer-focus:text-[#FF1E1E]">
                    Full Name*
                  </label>
                </div>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Email Address*"
                    className="peer w-full rounded-lg border border-gray-200 bg-white p-4 text-sm text-gray-900 placeholder-transparent shadow-sm transition-all focus:border-[#FF1E1E] focus:ring-2 focus:ring-[#FF1E1E]/20"
                    required
                  />
                  <label className="pointer-events-none absolute -top-2 left-2 z-[1] bg-white px-2 text-xs text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:left-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:left-2 peer-focus:text-xs peer-focus:text-[#FF1E1E]">
                    Email Address*
                  </label>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="relative">
                  <input
                    type="tel"
                    placeholder="Mobile Number*"
                    className="peer w-full rounded-lg border border-gray-200 bg-white p-4 text-sm text-gray-900 placeholder-transparent shadow-sm transition-all focus:border-[#FF1E1E] focus:ring-2 focus:ring-[#FF1E1E]/20"
                    required
                  />
                  <label className="pointer-events-none absolute -top-2 left-2 z-[1] bg-white px-2 text-xs text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:left-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:left-2 peer-focus:text-xs peer-focus:text-[#FF1E1E]">
                    Mobile Number*
                  </label>
                </div>
                <div className="relative">
                  <select
                    className="peer w-full rounded-lg border border-gray-200 bg-white p-4 text-sm text-gray-900 shadow-sm transition-all focus:border-[#FF1E1E] focus:ring-2 focus:ring-[#FF1E1E]/20"
                    required
                  >
                    <option value="">Select Reason*</option>
                    {reasons.map((reason) => (
                      <option key={reason} value={reason}>{reason}</option>
                    ))}
                  </select>
                  <label className="pointer-events-none absolute -top-2 left-2 z-[1] bg-white px-2 text-xs text-gray-500">
                    Reason for Contact*
                  </label>
                </div>
              </div>

              <div className="relative">
                <textarea
                  placeholder="Your Message*"
                  rows={4}
                  className="peer w-full rounded-lg border border-gray-200 bg-white p-4 text-sm text-gray-900 placeholder-transparent shadow-sm transition-all focus:border-[#FF1E1E] focus:ring-2 focus:ring-[#FF1E1E]/20"
                  required
                />
                <label className="pointer-events-none absolute -top-2 left-2 z-[1] bg-white px-2 text-xs text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:left-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:left-2 peer-focus:text-xs peer-focus:text-[#FF1E1E]">
                  Your Message*
                </label>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="h-5 w-5 rounded border-gray-300 text-[#FF1E1E] shadow-sm transition-all focus:ring-2 focus:ring-[#FF1E1E]/20"
                  required
                />
                <label className="text-sm text-gray-600">
                  I agree to the{' '}
                  <a href="#" className="text-[#FF1E1E] transition-colors hover:text-red-600">Terms & Conditions</a>
                </label>
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-gradient-to-r from-[#FF1E1E] to-red-600 px-8 py-4 text-sm font-medium text-white shadow-lg transition-all hover:from-red-600 hover:to-[#FF1E1E] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connect;
