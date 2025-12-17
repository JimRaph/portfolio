'use client'
import React, { useEffect, useState } from 'react'
import * as zod from 'zod'

const formProp = zod.object({
  name: zod.string().min(2, 'Name required'),
  email: zod.string().email('Invalid email'),
  message: zod.string().min(10, 'Message required')
});

type FormDataType = zod.infer<typeof formProp>;

const Contact = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [response, setResponse] = useState<string | null>('');
  const [formData, setFormData] = useState<FormDataType>({ name: '', email: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResponse('')

    try {
      formProp.parse(formData);
      const res = await fetch('/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (res.ok) {
        setResponse('Message sent successfully!')
        setFormData({ name: '', email: '', message: '' })
      }
      else {
        setResponse('Error: Failed to send message.')
      }
    } catch (error) {
      if (error instanceof zod.ZodError) {
        setResponse('Please Enter correct Information');
      } else {
        setResponse('Error sending email, try again please');
      }
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (response) {
        setResponse('')
      }
    }, 5000);

    return () => clearTimeout(timeout)
  }, [response])

  return (
    <section className="py-20 px-6 bg-backg" id="contact">
      <div className="max-w-xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-center text-primary-text font-serif">
          Let&apos;s Collaborate
        </h2>
        <p className="text-center text-primary-text opacity-70 mb-12 max-w-xl mx-auto">
          Interested in discussing an AI/ML project or seeking expertise for a full-stack 
          solution? Send a message directly.
        </p>

        <form 
          onSubmit={submitEmail}
          className="grid gap-6 p-8 rounded-2xl shadow-2xl border border-border-subtle bg-backg"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              name='name'
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded border border-border-subtle bg-transparent text-primary-text focus:outline-none focus:ring-2 focus:ring-accent transition-colors"
            />
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded border border-border-subtle bg-transparent text-primary-text focus:outline-none focus:ring-2 focus:ring-accent transition-colors"
            />
          </div>
          <textarea
            rows={6}
            name='message'
            placeholder="Your Project/Message Details"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-3 rounded border border-border-subtle bg-transparent text-primary-text focus:outline-none focus:ring-2 focus:ring-accent transition-colors"
          ></textarea>
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-md transition duration-300 font-bold text-lg bg-accent text-backg hover:opacity-90 disabled:opacity-50"
          >
            {loading ? 'Sending....' : 'Send Message'}
          </button>
          
          {response && (
            <p className={`text-center font-semibold ${response.includes('Error') ? 'text-red-500' : 'text-green-500'}`}>
              {response}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

export default Contact