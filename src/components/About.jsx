import React from 'react'

function About() {
  return (
    <div name="About Us" className='w-full my-3'>
      <hr />
      <div className='flex items-center justify-center space-x-2 py-2'>
        <div className='text-2xl'>About Us</div>
        <div className='h-12 w-12'><img src="https://cdn-icons-png.freepik.com/256/12099/12099654.png?semt=ais_hybrid" alt="" /></div>
      </div>
      <div className='flex md:flex-row flex-col space-y-3 md:space-y-0'>
        <div className='md:w-1/4 rounded bg-zinc-700 p-2 mx-5 py-3'>
          <div className='text-sm'>About the founder</div>
          <p className='text-lg text-[#3ABEF9] font-semibold'>Sachin kushwaha</p>
          <p className='mt-2 text-sm text-zinc-400'>
            Expert in sales and marketing and meta advertising.
            With 3.5 year experience.
            Work with many sales channel partners and companies.
          </p>
          <hr className='my-3' />
          <div className='text bg-[#3ABEF9] text-zinc-700 rounded p-2'>
          Starting fees of our services: <br /><span className='text-black font-bold'>Rs. 6,999/-</span>
          </div>
        </div>
        <div className='md:w-1/2 rounded bg-zinc-700 p-2 mx-5 py-3'>
          <div className='text-sm'>About the Agency</div>
          <p className='text-lg text-[#3ABEF9] font-semibold'>KushwahG Media</p>
          <p className='mt-2 text-sm text-zinc-400'>
            Sachin Kushwaha is an educated person and has gained a great experience by working with many good companies and channel partners in the field of sales marketing advertising. Using which he is running his own digital marketing agency today. Our agency is currently in the initial phase but despite this, many top leaders of many industries take services from us like real estate, stock market, banking loans, college admission consultancy, coaching, etc. And till now we have managed a budget of lakhs of rupees and our client satisfaction ratio is 97.8%. Our clients are like our children, just like a mother takes care of her children, we take care of our clients.
          </p>
        </div>
        <div className='md:w-1/4 rounded bg-zinc-700 p-2 mx-5 py-3'>
          <div className='text-sm'>Address</div>
          <p className='mt-2 text-sm text-zinc-400'>001, Sikar, Jaipur, Rajasthan, 332401</p>
          <hr className='my-3' />
          <div className='text-sm'>Contact</div>
          <p className='mt-2 text-sm text-zinc-400'>
            <div>Mobile no.</div>
            <a href="tel:+917489347620" className='hover:text-zinc-500'>7803991500</a>
            <br />
            <a href="tel:+919785172752" className='hover:text-zinc-500'>9785172752</a>
            <div className='mt-2'>Email id.</div>
            <a href="mailto:kushwahaji658@gmail.com" className='hover:text-zinc-500'> kushwahaji658@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
