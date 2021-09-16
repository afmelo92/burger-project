import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: 'Nunito',
    body: 'Nunito'
  },
  colors: {
    yellow: {
      '50': '#FEF9E7',
      '100': '#FBEEBC',
      '200': '#F9E490',
      '300': '#F6D965',
      '400': '#F3CE39',
      '500': '#F1C40E',
      '600': '#C19D0B',
      '700': '#917508',
      '800': '#604E06',
      '900': '#302703'
    },
    orange: {
      '50': '#FFF3E5',
      '100': '#FFDEB8',
      '200': '#FFC98A',
      '300': '#FFB35C',
      '400': '#FF9E2E',
      '500': '#FF8900',
      '600': '#CC6E00',
      '700': '#995200',
      '800': '#663700',
      '900': '#331B00'
    }
  }
})

export default theme
