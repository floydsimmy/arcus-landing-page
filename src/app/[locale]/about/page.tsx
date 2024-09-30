/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { Link } from '@/i18n/routing'
import { Phone } from '@phosphor-icons/react'
import { useTranslations } from 'next-intl'
import { Button } from '../../_components/button'
import { OrgStatementCard } from '../../_components/cards/org-statment-card'
import { TeamCard } from '../../_components/cards/team-card'
import { Footer } from '../../_components/footer'
import { Navbar } from '../../_components/navbar'
import { SectionHeader } from '../../_components/section-header'

const HeroSection = ({ value, t, buttons }: any) => (
  <div
    className="bg-white rounded-3xl lg:rounded-[64px] min-h-[29.375rem] lg:h-[53.75rem] lg:p-16 py-16 px-4 flex items-center lg:w-full"
    style={{
      backgroundImage: "url('/back.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    <div className="max-w-[25.875rem] lg:max-w-[40rem] flex flex-col gap-3 text-white">
      <div className="flex items-center gap-3">
        <hr className="min-w-8 lg:w-28 border-t-[3px] border-slate-arc-400" />
        <span className="text-base leading-6">{t(`${value}.span`)}</span>
      </div>
      <h1 className="text-xl leading-7 lg:leading-[6rem] lg:text-6xl font-bold">
        {t(`${value}.h1`)}
      </h1>
      <p className="text-base leading-6 lg:leading-8 lg:text-xl">
        {t(`${value}.p`)}
      </p>
      <div className="flex flex-col lg:flex-row gap-3">
        <Button className="max-md:hidden" variant content={buttons[1]} />
        <Button className="md:hidden" variant content={buttons[0]} />
        <Button icon={<Phone weight="fill" />} content={buttons[2]} />
      </div>
    </div>
  </div>
)

const TeamSection = ({ value, t, cards }: any) => (
  <div>
    <SectionHeader title={t(`${value}.title`)} description="" />
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 ">
      {cards.map((card: any) => (
        <TeamCard title={card.title} text={card.text} />
      ))}
    </div>
  </div>
)

const OrganazationSection = ({ cards }: any) => (
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
    <OrgStatementCard title={cards[0].title} text={cards[0].text} />
    <OrgStatementCard title={cards[1].title} text={cards[1].text} />
    <OrgStatementCard title={cards[1].title}>
      <ul className="mt-2 text-slate-arc-600 text-base lg:text-lg leading-7 list-disc list-inside">
        {cards[2].list.map((value: any) => (
          <li>{value}</li>
        ))}
      </ul>
    </OrgStatementCard>
  </div>
)

const AdditionalInfoSection = ({ value, t }: any) => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
    <div className="bg-white p-6 border rounded-2xl text-slate-arc-800">
      <h1 className="text-slate-arc-800 font-semibold text-4xl">
        {t(`${value}.h1`)}
      </h1>
      <p className="mt-4 text-lg">{t(`${value}.p`)}.</p>
      <div className="mt-4 text-base font-medium leading-6">
        <p className="text-slate-arc-500">
          {t(`${value}.contact.phone`)}:{' '}
          <span className="text-slate-arc-900 font-bold">
            {' '}
            +258 87 313 3920
          </span>
        </p>
        <p className="text-slate-arc-500">
          {t(`${value}.contact.location`)}:{' '}
          <Link
            href={'https://g.co/kgs/54yy8Fp'}
            className="text-slate-arc-900"
          >
            Museu
          </Link>
        </p>
        <p className="text-slate-arc-500">
          Email: <span className="text-slate-arc-900">arcus@gmail.com</span>
        </p>
        <p className="text-slate-arc-500">
          {t(`${value}.contact.span`)}:{' '}
          <span className="text-slate-arc-900">
            {t(`${value}.contact.hours`)}
          </span>
        </p>
      </div>
    </div>
    <div
      className="h-[13rem] bg-cover bg-center rounded-md"
      style={{ backgroundImage: "url('/images/Prancheta2.png')" }}
    ></div>
  </div>
)

const AboutUs = () => {
  const t = useTranslations('AboutUs')
  const sections = [
    'HeroSection',
    'OrganizationSection',
    'TeamSection',
    'AdditionalInfoSection',
  ] as const

  const heroButtons = t.raw(`${sections[0]}.buttons`)
  const organizationCards = t.raw(`${sections[1]}.cards`)
  const teamCards = t.raw(`${sections[2]}.cards`)

  return (
    <>
      <div className="flex flex-col items-center h-full my-0 bg-white">
        <Navbar />
        <main className="mt-28 lg:mt-36 md:max-w-3xl max-w-[22rem] lg:max-w-7xl xl:max-w-[87rem] 2xl:max-w-[110rem] flex flex-col gap-16 lg:gap-32 ">
          <HeroSection t={t} value={sections[0]} buttons={heroButtons} />
          <OrganazationSection cards={organizationCards} />
          <TeamSection t={t} value={sections[2]} cards={teamCards} />
          <AdditionalInfoSection t={t} value={sections[3]} />
        </main>
      </div>
      <div>
        <Footer />
      </div>
    </>
  )
}

export default AboutUs
