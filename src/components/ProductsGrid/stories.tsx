import { Meta, Story } from '@storybook/react'
import React from 'react'

import ProductsGrid from '.'

export default {
  component: ProductsGrid,
  title: 'Components/ProductsGrid'
} as Meta

// eslint-disable-next-line @typescript-eslint/ban-types
export const Primary: Story<{}> = args => <ProductsGrid {...args} />
