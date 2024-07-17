import Link from 'next/link'

const links = [
  {
    sectionName: 'Pages',
    links: [
      {
        name: 'Home',
        href: '/',
      },
      {
        name: 'About',
        href: '/about',
      },
      {
        name: 'Blog',
        href: '/blog',
      },
      {
        name: 'FAQ',
        href: '/faq',
      },
      {
        name: 'Privacy policy',
        href: '/policy/privacy-policy'
      },
      {
        name: 'Cookie policy',
        href: '/policy/cookie-policy'
      }
    ]
  },
  {
    sectionName: 'Services',
    links: [
      {
        name: 'Local & Organic SEO',
        href: '/services/search-engine-optimization',
      },
      {
        name: 'Web Development',
        href: '/services/web-design-development',
      },
      {
        name: 'Brand design',
        href: '/services/brand-design',
      },
    ]
  },
  {
    sectionName: 'Social',
    links: [
      {
        name: 'Facebook',
        href: 'https://www.facebook.com/missionmorph',
      },
      {
        name: 'Instagram',
        href: 'https://www.instagram.com/missionmorphofficial/',
      },
      {
        name: 'Twitter',
        href: 'https://twitter.com/MissionMorph',
      },
      {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/company/mission-morph/',
      }
    ]
  },
  {
    sectionName: 'Contact',
    links: [
      {
        name: 'office@missionmorph.com',
        href: 'mailto:office@missionmorph.com',
      },
      {
        name: '+1 (305) 307-4684',
        href: 'tel:+13053074684',
      },
      {
        name: '162 NE 25TH ST, MIAMI, FL 33137',
        href: 'https://www.google.com/maps?cid=644257195768476569',
      }
    ]
  }
]

const Footer = () => {

  return (
    <footer className="py-20 pt-40 w-full bg-black flex items-center justify-center p-5 md:p-10 -mt-px">
      <div className="max-w-5xl w-full flex flex-col md:flex-row justify-between space-y-4 md:space-y-0">
          {
            links.map((section, index) => (
              <div key={index} className="flex flex-col">
                <h2 className="text-light-purple text-xl uppercase font-bold">{section.sectionName}://</h2>
                {
                  section.links.map((link, index) => (
                    <Link key={index} href={link.href} className='text-lg uppercase text-light-purple hover:text-white transition-all duration-300'>
                      {link.name}
                    </Link>
                  ))
                }
              </div>
            ))
          }
      </div>
    </footer>
  )
}

export default Footer
