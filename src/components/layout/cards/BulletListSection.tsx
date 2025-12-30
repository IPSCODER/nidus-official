'use client'

import React from 'react'
import AnimatedText from '@/components/layout/animation/AnimatedText'
import SubHeading from '@/components/ui/SubHeading'
import { CheckCircle } from 'lucide-react'

interface BulletListSectionProps {
  title: string
  span: string
  bullets: string[]
  className?: string
}

const BulletItem = ({ children }: { children: React.ReactNode }) => (
  <AnimatedText>
    <li className="flex items-start gap-3 md:text-xl border-b-2 pb-4">
      <CheckCircle className="text-primary mt-1 h-5 w-5 shrink-0" />
      <span>{children}</span>
    </li>
  </AnimatedText>
)

const BulletListSection: React.FC<BulletListSectionProps> = ({
  title,
  span,
  bullets,
  className = '',
}) => {
  return (
    <div className={`flex flex-col  md:mb-10 max-w-7xl mx-auto ${className}`}>
      <SubHeading span={span} className="mb-5" textClass="text-xl lg:text-[2vw]">
        {title}
      </SubHeading>
      <ul className="list-disc list-inside space-y-1 mt-2 ">
        {bullets.map((text, idx) => (
          <BulletItem key={idx}>
            <span dangerouslySetInnerHTML={{ __html: text }} />
          </BulletItem>
        ))}
      </ul>
    </div>
  )
}

export default BulletListSection
