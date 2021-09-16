import { Meta, Story } from '@storybook/react'
import React from 'react'

import Logo from '.'

export default {
  component: Logo,
  title: 'Components/Logo'
} as Meta

// eslint-disable-next-line @typescript-eslint/ban-types
export const Primary: Story<{}> = args => <Logo {...args} />
