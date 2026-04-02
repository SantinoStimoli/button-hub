export type AppItem = {
  id: string
  title: string
  icon: string
  url: string
}

export const apps: AppItem[] = [
  {
    id: 'finance',
    title: 'Finance',
    icon: '/icons/finance.svg',
    url: '#'
  },
  {
    id: 'gym',
    title: 'Gym',
    icon: '/icons/gym.svg',
    url: '#'
  },
  {
    id: 'split',
    title: 'Split',
    icon: '/icons/split.svg',
    url: 'https://santinostimoli.github.io/plata-grupal/'
  }
]