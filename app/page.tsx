import { Link } from '@nextui-org/link'
import { Snippet } from '@nextui-org/snippet'
import { Code } from '@nextui-org/code'
import { Divider } from '@nextui-org/divider'
import { button as buttonStyles } from '@nextui-org/theme'
import { siteConfig } from '@/config/site'
import { title, subtitle } from '@/components/primitives'
import {
  DiscordIcon,
  GithubIcon,
  HomeIcon,
  LinkedInIcon,
} from '@/components/icons'
import { About } from '@/components/about'
import { Experience } from '@/components/experience'

export default function Home () {
  return (
    <section
      className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-7xl text-center justify-center">
        <h1 className={title()}>Welcome to&nbsp;</h1>
        <h1 className={title({ color: 'red' })}>Ada&nbsp;</h1>
        <h1 className={title()}>&rsquo;s profile</h1>
        <br/>
        <h2 className={subtitle()}>
          Master of IT @ UNSW, Platform Subcom @ DevSoc
        </h2>
        <p className="text-default-950 mt-4">
          Site Reliability Engineer | Back-end Developer | FPGA Engineer |
          Embedded Software Engineer
        </p>
      </div>

      <div className="flex max-sm:flex-col gap-3 mt-3 mb-6">
        <Link
          isExternal
          href={siteConfig.links.personalSite}
          className={buttonStyles(
            { color: 'danger', radius: 'full', variant: 'shadow' })}
        >
          <HomeIcon size={20}/>
          Personal Website
        </Link>
        <Link
          isExternal
          href={siteConfig.links.linkedin}
          className={buttonStyles(
            { color: 'primary', radius: 'full', variant: 'shadow' })}
        >
          <LinkedInIcon size={20}/>
          LinkedIn
        </Link>
        <Link
          isExternal
          className={buttonStyles({ radius: 'full', variant: 'shadow' })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20}/>
          GitHub
        </Link>
        <Link
          isExternal
          href={siteConfig.links.discord}
          className={buttonStyles(
            { color: 'secondary', radius: 'full', variant: 'shadow' })}
        >
          <DiscordIcon size={20}/>
          Discord
        </Link>
      </div>

      <Divider/>
      <About/>
      <Divider/>
      <Experience/>

    </section>
  )
}
