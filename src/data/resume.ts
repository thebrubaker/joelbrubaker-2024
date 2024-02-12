import { ImageProps } from 'next/image'
import logoMayfair from '@/images/logos/mayfairus_logo.jpeg'
import logoBlitz from '@/images/logos/blitz.svg'
import logoSpark from '@/images/logos/spark-atlas-2.svg'
import logoOmni from '@/images/logos/omni.jpeg'
import logoTipsy from '@/images/logos/te.jpeg'
import logoLittleBear from '@/images/logos/little-bear.jpeg'
import logoPremier from '@/images/logos/phmlink_logo.jpg'

export interface Role {
  company: string
  title: string
  logo: ImageProps['src']
  start: string | { label: string; dateTime: string }
  end: string | { label: string; dateTime: string }
}

export const roles: Array<Role> = [
  {
    company: 'Mayfair',
    title: 'Lead Software Engineer',
    logo: logoMayfair,
    start: '2023',
    end: {
      label: 'Present',
      dateTime: new Date().getFullYear().toString(),
    },
  },
  // {
  //   company: 'SparkAtlas',
  //   title: 'Part-time Founder',
  //   logo: logoSpark,
  //   start: '2019',
  //   end: {
  //     label: 'Present',
  //     dateTime: new Date().getFullYear().toString(),
  //   },
  // },
  {
    company: 'Blitz',
    title: 'Principal Engineer',
    logo: logoBlitz,
    start: '2022',
    end: '2023',
  },
  {
    company: 'Little Bear Labs',
    title: 'Lead Software Engineer',
    logo: logoLittleBear,
    start: '2020',
    end: '2022',
  },
  {
    company: 'Premier Healthcare Management',
    title: 'Head of Engineering',
    logo: logoPremier,
    start: '2018',
    end: '2020',
  },
  {
    company: 'Omni Holding Company',
    title: 'Senior Software Engineer',
    logo: logoOmni,
    start: '2017',
    end: '2018',
  },
  {
    company: 'Tipsy Elves',
    title: 'Senior Software Engineer',
    logo: logoTipsy,
    start: '2015',
    end: '2017',
  },
]
