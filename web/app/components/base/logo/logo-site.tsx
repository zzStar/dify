'use client'
import type { FC } from 'react'
import classNames from '@/utils/classnames'
import { useSelector } from '@/context/app-context'

type LogoSiteProps = {
  className?: string
}

const LogoSite: FC<LogoSiteProps> = ({
  className,
}) => {
  const { theme } = useSelector((s) => {
    return {
      theme: s.theme,
    }
  })

  const src = theme === 'light' ? '/logo/logo-site.png' : `/logo/logo-site-${theme}.png`
  return (
    <img
      src={src}
      className={classNames('block w-1 h-1', className)}
      alt='logo'
    />
  )
}

export default LogoSite
