import React from 'react'
import statpng from '/statpng.png'

function Stats() {
    return (
        <div name="Blog" className='w-full'>
            <hr />
            <div className='flex items-center justify-center py-1'>
                <div className='text-2xl'>Success Stories</div>
                <div className='h-12 w-12'><img src={statpng} alt="" /></div>
            </div>
            <div className='space-y-8'>
                <div className='flex md:flex-row flex-col md:space-x-2 space-y-3 md:space-y-0 mx-4'>
                    <div className='bg-[#3ABEF9] p-2 rounded-sm'>
                        <div className='font-semibold text-black'>Project A</div>
                        <p className='text-black text-xl mt-1'>Transforming SSR Group Noida Real Estate</p>
                    </div>
                    <div className='space-y-3'>
                        <div className='flex space-x-2'>
                            <div className='bg-zinc-700 rounded-sm p-2'>
                                <div className='text-lg'>Challenge</div>
                                <p className='text-sm text-zinc-400 mt-2'>SSR Group Noida faced significant challenges with low Quality lead generation and minimal online presence,
                                    which hindered their ability to attract potential buyers and investors.</p>
                            </div>
                            <div className='bg-zinc-700 rounded-sm p-2'>
                                <div className='text-lg'>Solution</div>
                                <p className='text-sm text-zinc-400 mt-2'>KushwahG Media implemented a comprehensive digital marketing strategy that included search engine
                                    optimization (SEO), pay-per-click (PPC) advertising, and a robust social media campaign. Additionally,Also suggested
                                    and helped SSR Group to improve their website.</p>
                            </div>
                        </div>
                        <div>
                            <div className='bg-zinc-700 rounded-sm p-2'>
                                <div className='text-lg'>Outcome</div>
                                <p className='text-sm text-zinc-400 mt-2'> The results were outstanding, with a 200% increase in lead generation and a 150% boost in social media
                                    engagement. The revamped website saw a 300% increase in online inquiries, substantially improving SSR Group market
                                    position.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex md:flex-row flex-col md:space-x-2 space-y-3 md:space-y-0 mx-4'>
                    <div className='bg-[#3ABEF9] p-2 rounded-sm'>
                        <div className='font-semibold text-black'>Project B</div>
                        <p className='text-black text-xl mt-1'>Enhancing Prime Reality Mumbai Management</p>
                    </div>
                    <div className='space-y-3'>
                        <div className='flex space-x-2'>
                            <div className='bg-zinc-700 rounded-sm p-2'>
                                <div className='text-lg'>Challenge</div>
                                <p className='text-sm text-zinc-400 mt-2'>Initially, Prime Realty Mumbai had a negative experience with digital marketing,
                                    having spent nearly 50,000 rupees without success, leading to skepticism.</p>
                            </div>
                            <div className='bg-zinc-700 rounded-sm p-2'>
                                <div className='text-lg'>Solution</div>
                                <p className='text-sm text-zinc-400 mt-2'>We revamped their social media profiles, created compelling graphics for their projects,
                                    and initiated targeted lead generation campaigns following thorough analysis and research.</p>
                            </div>
                        </div>
                        <div>
                            <div className='bg-zinc-700 rounded-sm p-2'>
                                <div className='text-lg'>Outcome</div>
                                <p className='text-sm text-zinc-400 mt-2'>This approach resulted in a 130% surge in Lead Generation and substantial growth in
                                    their high-converting funnel. The improved online visibility enabled Prime Reality Mumbai
                                    Management to expand their client base and bolster their brand image.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex md:flex-row flex-col md:space-x-2 space-y-3 md:space-y-0 mx-4'>
                    <div className='bg-[#3ABEF9] p-2 rounded-sm'>
                        <div className='font-semibold text-black'>Project C</div>
                        <p className='text-black text-xl mt-1'>Revamping Titania Residency R.E</p>
                    </div>
                    <div className='space-y-3'>
                        <div className='flex space-x-2'>
                            <div className='bg-zinc-700 rounded-sm p-2'>
                                <div className='text-lg'>Challenge</div>
                                <p className='text-sm text-zinc-400 mt-2'>A Titania apartment complex needed to enhance its online visibility and
                                    attract high-end buyers in a competitive market</p>
                            </div>
                            <div className='bg-zinc-700 rounded-sm p-2'>
                                <div className='text-lg'>Solution</div>
                                <p className='text-sm text-zinc-400 mt-2'>KushwahG Media developed a state-of-the-art website featuring virtual tours,
                                    high-quality visuals, and interactive elements. The agency also ran targeted digital
                                    advertising campaigns to reach affluent buyers.</p>
                            </div>
                        </div>
                        <div>
                            <div className='bg-zinc-700 rounded-sm p-2'>
                                <div className='text-lg'>Outcome</div>
                                <p className='text-sm text-zinc-400 mt-2'> The new website resulted in a 350% increase in online traffic and a 220% rise
                                    in lead inquiries. The targeted campaigns successfully attracted a high-end clientele,
                                    boosting sales and occupancy rates for the Titania apartments.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stats


