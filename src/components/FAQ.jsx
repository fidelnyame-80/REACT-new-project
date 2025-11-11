import React from 'react'

const FAQ = () => {
    const QandA = [
        {question: 'How often should I visit the dentist?', answer: 'We recommend a visit every six months for checkups and cleanings to maintain optimal oral health.'},
        {question: 'Does teeth whitening hurt?', answer: 'Our whitening procedures are safe and painless, with minimal sensitivity that subsides quickly.'},
        {question: 'What should I do in a dental emergency?', answer: 'Contact us at + (123) 456 7890 for immediate emergency dental services.'}
    ]

  return (
    <div className='py-20 bg-gradient-to-b from-gray-50 to-white'>
        <div className='w-[1000px] mx-auto px-6'>
            <h2 className='text-4xl font-extrabold text-center text-gray-800 mb-4 tracking-tight'>Frequently Asked Questions</h2>
            <p className='text-gray-600 text-center mb-12 w-[700px] mx-auto'>Find answers to common questions about our dental services.</p>
            <div className='space-y-4'>
            {QandA.map((faq, index) =>(
                <details key={index} className='bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-indigo-600'>
                <summary className='text-lg font-semibold text-gray-800 cursor-pointer'>{faq.question}</summary>
                <p className='text-gray-600 mt-2'>{faq.answer}</p>
                </details>
            ))}
            </div>
        </div>

    </div>
  )
}

export default FAQ