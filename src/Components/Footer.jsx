import React from 'react'

const Footer = () => {
    const sitemap = [
        {
          label: 'Home',
          href: '#home'
        },
        {
          label: 'Service',
          href: '#service'
        },
        {
          label: 'About',
          href: '#about'
        },
        {
          label: 'Portfolio',
          href: '#portfolio'
        },
        {
          label: 'Reviews',
          href: '#testemonial'
        },
        {
          label: 'Contact me',
          href: '#contact'
        }
      ];
      
      const socials = [

        {
          label: 'Twitter X',
          href: 'https://x.com/sporthub01?s=21'
        },
        {
          label: 'Instagram',
          href: 'https://www.instagram.com/the_webnest1?igsh=MTZkc2N6NWkxcXd6cg%3D%3D&utm_source=qr'
        }
      ];
  return (
    <footer className="px-4 md:px-32 lg:px-60 py-10 md:py-9">
        <div className="">
            <div className="lg:grid lg:grid-cols-2">
                <div className="mb-10">
                    <h2 className="headline-1 mb-8 lg:max-w-[12ch] reveal-up">
                        Let&apos;s work together today!
                    </h2>

                    
                </div>

                <div className="grid grid-cols-2 gap-4 g:pl-20">
                    <div>
                        <p className="mb-2 reveal-up">Sitemap</p>

                        <ul>
                            {sitemap.map(({label, href}, key)=>(
                                <li key={key} className=''>
                                    <a href={href} className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up" >{label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <p className="mb-2 reveal-up">Socials</p>

                        <ul>
                            {socials.map(({label, href}, key)=>(
                                <li key={key} className=''>
                                    <a href={href} className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up">{label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between pt-10 mb-8">
                <a href="" className="">
                    <img src="./images/favicon.svg" alt="logo" width={40} height={40} />
                </a>
                <p className="text-zinc-500 text-sm">
                    &copy; 2025 <span className="text-zinc-200">Webnest</span>
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer