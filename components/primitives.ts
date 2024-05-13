import { tv } from 'tailwind-variants'

export const title = tv({
  base: 'tracking-tight inline font-semibold text-default-800',
  variants: {
    color: {
      violet: 'from-[#FF1CF7] to-[#b249f8]',
      yellow: 'from-[#FF705B] to-[#FFB457]',
      blue: 'from-[#5EA2EF] to-[#0072F5]',
      cyan: 'from-[#00b7fa] to-[#01cfea]',
      green: 'from-[#6FEE8D] to-[#17c964]',
      pink: 'from-[#FF72E1] to-[#F54C7A]',
      red: 'from-[#F87171] to-[#B91C1C]',
      foreground: 'dark:from-[#FFFFFF] dark:to-[#4B4B4B]',
    },
    size: {
      sm: 'text-3xl lg:text-4xl',
      md: 'text-[2.3rem] lg:text-5xl leading-9',
      lg: 'text-5xl lg:text-6xl',
    },
    fullWidth: {
      true: 'w-full block',
    },
  },
  defaultVariants: {
    size: 'lg',
  },
  compoundVariants: [
    {
      color: [
        'violet',
        'yellow',
        'blue',
        'cyan',
        'green',
        'pink',
        'red',
        'foreground',
      ],
      class: 'bg-clip-text text-transparent bg-gradient-to-b',
    },
  ],
})

export const subtitle = tv({
  base: 'w-full md:w-1/2 my-2 mt-3 text-lg lg:text-xl text-default-500 block max-w-full',
  variants: {
    fullWidth: {
      true: '!w-full',
    },
  },
  defaultVariants: {
    fullWidth: true,
  },
})

export const h2 = tv({
  base: 'w-full max-lg:my-2 my-4 text-3xl lg:text-4xl font-bold text-default-800',
})

export const h3 = tv({
  base: 'w-full max-lg:my-1 my-2 text-xl lg:text-2xl font-semibold text-default-800'
})

export const paragraph = tv({
  base: 'mt-2 mb-6 text-lg text-defaut-800',
})
