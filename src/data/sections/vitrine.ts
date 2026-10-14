/**
 * Dados da seção da vitrine (biblioteca B2, fase: oferta).
 *
 * COAIR Locação: no lugar da grade de planos, o módulo "Por que escolher nosso
 * serviço de locação?" — foto da frota COAIR e 4 vantagens da locação, no modelo
 * enviado pelo cliente.
 */
import type { Photo } from '@data/types'
import type { IconName } from '@data/icons'
import { site } from '@data/site'

import frota from '@assets/vitrine/frota-coair.webp'

export interface Benefit {
  id: string
  title: string
  description: string
  icon: IconName
}

export const showcase = {
  eyebrow: 'Locação AIR PLAN',
  title: 'Por que escolher nosso serviço de locação?',
  /** Locação como solução para cenários específicos, não como substituta da compra (revisão de 14/10/2026). */
  text: 'A locação é a solução para demandas temporárias ou imprevistas: emergência, parada programada, backup ou pico. Para uso contínuo, avaliamos também a compra.',
  photo: {
    src: frota,
    alt: `Linha de compressores de parafuso ${site.brandShort} disponíveis para locação`,
  },
  items: [
    {
      id: 'economia',
      title: 'Sem imobilizar capital',
      description:
        'Atenda a demanda temporária sem investir na compra de um equipamento que ficaria parado.',
      icon: 'tag',
    },
    {
      id: 'adaptabilidade',
      title: 'Adaptabilidade',
      description:
        'Ajuste a capacidade conforme a demanda do seu projeto, mantendo o fluxo de caixa saudável.',
      icon: 'refresh',
    },
    {
      id: 'tecnologia',
      title: 'Eficiência conforme a demanda',
      description: `Compressores ${site.brandShort} dimensionados para o consumo, com opção VSD que ajusta o ar ao uso.`,
      icon: 'gauge',
    },
    {
      id: 'manutencao',
      title: 'Manutenção inclusa',
      description:
        'Equipamentos revisados, com manutenção, frete e instalação definidos em contrato.',
      icon: 'wrench',
    },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  text: string
  photo: Photo
  items: readonly [Benefit, Benefit, Benefit, Benefit]
}
