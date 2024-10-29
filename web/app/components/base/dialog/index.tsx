import { useCallback } from 'react'
import type { ElementType, ReactNode } from 'react'
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react'
import classNames from '@/utils/classnames'

// https://headlessui.com/react/dialog

type DialogProps = {
  className?: string
  titleClassName?: string
  bodyClassName?: string
  footerClassName?: string
  titleAs?: ElementType
  title?: ReactNode
  children: ReactNode
  footer?: ReactNode
  show: boolean
  onClose?: () => void
}

const CustomDialog = ({
  className,
  titleClassName,
  bodyClassName,
  footerClassName,
  titleAs,
  title,
  children,
  footer,
  show,
  onClose,
}: DialogProps) => {
  const close = useCallback(() => onClose?.(), [onClose])
  return (
    <Transition appear show={show}>
      <Dialog as="div" className="relative z-40" onClose={close}>
        <TransitionChild
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-full p-4 text-center">
            <TransitionChild
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className={classNames('w-full max-w-[800px] p-0 overflow-hidden text-left text-gray-900 align-middle transition-all transform bg-white shadow-xl rounded-2xl', className)}>
                {Boolean(title) && (
                  <DialogTitle
                    as={titleAs || 'h3'}
                    className={classNames('px-8 py-6 text-lg font-medium leading-6 text-gray-900', titleClassName)}
                  >
                    {title}
                  </DialogTitle>
                )}
                <div className={classNames('px-8 text-lg font-medium leading-6', bodyClassName)}>
                  {children}
                </div>
                {Boolean(footer) && (
                  <div className={classNames('flex items-center justify-end gap-2 px-8 py-6', footerClassName)}>
                    {footer}
                  </div>
                )}
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition >
  )
}

export default CustomDialog
