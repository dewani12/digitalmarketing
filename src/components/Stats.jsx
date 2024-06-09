import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import statpng from '/statpng.png';
import growth from '/growth.gif';

function Stats() {
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div name="Blogs" className='w-full'>
      <hr />
      <div className='flex items-center justify-center py-2'>
        <div className='text-2xl'>Success Stories</div>
        <div className='h-12 w-12'>
          <img src={statpng} alt="Statistics Icon" />
        </div>
      </div>
      <motion.div
        ref={ref1}
        className='box-1 flex justify-center pb-16'
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: inView1 ? 1 : 0, y: inView1 ? 0 : 30 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className='md:w-1/2 mx-10 bg-zinc-700 items-center rounded-sm p-2 flex flex-col md:flex-row justify-center custom-shadow'>
          <div className='md:w-[1000px]'>
            <img src={growth} alt="Growth" />
          </div>
          <div className='text'>We invite you to partner with us to grow your business. Together, we can achieve remarkable success, and as a testament to our collaboration, your success story will be proudly featured on our website. Join us and let’s create a journey of growth and achievement that will inspire others.</div>
        </div>
      </motion.div>
      <div className='space-y-8'>
        <motion.div
          ref={ref2}
          className='box-2 flex md:flex-row flex-col md:space-x-4 space-y-5 md:space-y-0 mx-4'
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: inView2 ? 1 : 0, y: inView2 ? 0 : 30 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <div className='md:w-1/4 bg-zinc-300 p-2 rounded-sm custom-shadow'>
            <div className='font-semibold text-black'>Project A</div>
            <p className='text-black text-xl mt-1'>Transforming SSR Group Noida Real Estate</p>
          </div>
          <div className='space-y-3'>
            <div className='flex space-x-2'>
              <div className='bg-zinc-700 rounded-sm p-2'>
                <div className='text-lg'>Challenge</div>
                <p className='text-sm mt-2'>SSR Group Noida faced significant challenges with low Quality lead generation and minimal online presence, which hindered their ability to attract potential buyers and investors.</p>
              </div>
              <div className='bg-zinc-700 rounded-sm p-2'>
                <div className='text-lg'>Solution</div>
                <p className='text-sm mt-2'>KushwahG Media implemented a comprehensive digital marketing strategy that included search engine optimization (SEO), pay-per-click (PPC) advertising, and a robust social media campaign. Additionally, also suggested and helped SSR Group to improve their website.</p>
              </div>
            </div>
            <div>
              <div className='bg-zinc-700 rounded-sm p-2'>
                <div className='text-lg'>Outcome</div>
                <p className='text-sm mt-2'> The results were outstanding, with a 200% increase in lead generation and a 150% boost in social media engagement. The revamped website saw a 300% increase in online inquiries, substantially improving SSR Group market position.</p>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          ref={ref3}
          className='box-3 flex md:flex-row flex-col md:space-x-4 space-y-5 md:space-y-0 mx-4'
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: inView3 ? 1 : 0, y: inView3 ? 0 : 30 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <div className='md:w-1/4 bg-zinc-300 p-2 rounded-sm custom-shadow'>
            <div className='font-semibold text-black'>Project B</div>
            <p className='text-black text-xl mt-1'>Enhancing Prime Reality Mumbai Management</p>
          </div>
          <div className='space-y-3'>
            <div className='flex space-x-2'>
              <div className='bg-zinc-700 rounded-sm p-2'>
                <div className='text-lg'>Challenge</div>
                <p className='text-sm mt-2'>Initially, Prime Realty Mumbai had a negative experience with digital marketing, having spent nearly 50,000 rupees without success, leading to skepticism.</p>
              </div>
              <div className='bg-zinc-700 rounded-sm p-2'>
                <div className='text-lg'>Solution</div>
                <p className='text-sm mt-2'>We revamped their social media profiles, created compelling graphics for their projects, and initiated targeted lead generation campaigns following thorough analysis and research.</p>
              </div>
            </div>
            <div>
              <div className='bg-zinc-700 rounded-sm p-2'>
                <div className='text-lg'>Outcome</div>
                <p className='text-sm mt-2'>This approach resulted in a 130% surge in Lead Generation and substantial growth in their high-converting funnel. The improved online visibility enabled Prime Reality Mumbai Management to expand their client base and bolster their brand image.</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          ref={ref4}
          className='box-4 flex md:flex-row flex-col md:space-x-4 space-y-5 md:space-y-0 mx-4'
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: inView4 ? 1 : 0, y: inView4 ? 0 : 30 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <div className='md:w-1/4 bg-zinc-300 p-2 rounded-sm custom-shadow'>
            <div className='font-semibold text-black'>Project C</div>
            <p className='text-black text-xl mt-1'>Revamping Titania Residency R.E</p>
          </div>
          <div className='space-y-3'>
            <div className='flex space-x-2'>
              <div className='bg-zinc-700 rounded-sm p-2'>
                <div className='text-lg'>Challenge</div>
                <p className='text-sm mt-2'>A Titania apartment complex needed to enhance its online visibility and attract high-end buyers in a competitive market</p>
              </div>
              <div className='bg-zinc-700 rounded-sm p-2'>
                <div className='text-lg'>Solution</div>
                <p className='text-sm mt-2'>KushwahG Media developed a state-of-the-art website featuring virtual tours, high-quality visuals, and interactive elements. The agency also ran targeted digital advertising campaigns to reach affluent buyers.</p>
              </div>
            </div>
            <div>
              <div className='bg-zinc-700 rounded-sm p-2'>
                <div className='text-lg'>Outcome</div>
                <p className='text-sm mt-2'> The new website resulted in a 350% increase in online traffic and a 220% rise in lead inquiries. The targeted campaigns successfully attracted a high-end clientele, boosting sales and occupancy rates for the Titania apartments.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Stats;
