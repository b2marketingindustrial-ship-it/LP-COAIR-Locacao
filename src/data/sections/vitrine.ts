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
  text: 'Oferecemos serviços de aluguel de compressores de ar que são rápidos, confiáveis e personalizados, seja em emergências ou planejamentos estratégicos.',
  photo: {
    src: frota,
    alt: `Linha de compressores de parafuso ${site.brandShort} disponíveis para locação`,
  },
  items: [
    {
      id: 'economia',
      title: 'Economia garantida',
      description:
        'Sem custos iniciais de compra ou manutenção: você paga apenas pelo uso, otimizando recursos.',
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
      title: 'Alta tecnologia',
      description: `Compressores ${site.brandShort} atualizados para máxima eficiência e produtividade.`,
      icon: 'cpu',
    },
    {
      id: 'manutencao',
      title: 'Manutenção inclusa',
      description:
        'Equipamentos revisados e em perfeito estado, sem custos adicionais além da locação.',
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
