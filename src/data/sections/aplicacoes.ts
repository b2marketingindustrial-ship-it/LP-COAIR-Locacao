/**
 * Dados da seção "Aplicações" (biblioteca B2, fase: prova).
 *
 * COAIR Locação: os 4 modelos disponíveis para locação, com as fotos enviadas pelo
 * cliente centralizadas em fundo branco 4:3. O card inteiro é o CTA.
 */
import type { Photo } from '@data/types'
import type { IconName } from '@data/icons'
import { site } from '@data/site'

import ca75 from '@assets/aplicacoes/coair-ca75.jpg'
import comSecador from '@assets/aplicacoes/coair-com-secador.jpg'
import ca11 from '@assets/aplicacoes/coair-ca11.jpg'
import hd75 from '@assets/aplicacoes/coair-hd75-vsd.jpg'

export interface Application {
  id: string
  label: string
  description: string
  icon: IconName
  photo: Photo
}

export const applications = {
  eyebrow: 'Modelos disponíveis',
  title: 'Alugue compressores de ar e mantenha sua produção em movimento',
  text: 'Compressores de ar, secadores e boosters de alta pressão para atender às necessidades da sua indústria. Equipamentos de alto desempenho, prontos para uso, com flexibilidade na locação e confiabilidade para sua operação.',
  items: [
    {
      id: 'ca75',
      label: 'XFLOW CA7.5',
      description: 'Compressor de parafuso compacto da linha XFLOW.',
      icon: 'cog',
      photo: { src: ca75, alt: `Compressor de parafuso ${site.brandShort} XFLOW CA7.5` },
    },
    {
      id: 'com-secador',
      label: 'Compressor com secador',
      description: 'Compressor de parafuso com secador e reservatório integrados.',
      icon: 'droplet',
      photo: {
        src: comSecador,
        alt: `Compressor de parafuso ${site.brandShort} com secador sobre reservatório de ar`,
      },
    },
    {
      id: 'ca11',
      label: 'XFLOW CA11',
      description: 'Compressor de parafuso da linha XFLOW.',
      icon: 'cog',
      photo: { src: ca11, alt: `Compressor de parafuso ${site.brandShort} XFLOW CA11` },
    },
    {
      id: 'hd75-vsd',
      label: 'HD75 VSD Heavy Duty',
      description: 'Compressor de parafuso com velocidade variável (VSD).',
      icon: 'gauge',
      photo: { src: hd75, alt: `Compressor de parafuso ${site.brandShort} HD75 VSD Heavy Duty` },
    },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  text: string
  items: readonly [Application, Application, Application, Application]
}
