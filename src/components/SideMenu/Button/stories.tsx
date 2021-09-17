import { Meta, Story } from '@storybook/react'
import React from 'react'

import Button, { MenuButtonProps } from '.'
import BurgerIcon from '../Icons/Burgers'

export default {
  component: Button,
  title: 'Components/SideMenu/Button',
  args: {
    title: 'Menu Button',
    icon: <BurgerIcon />
  }
} as Meta

// eslint-disable-next-line @typescript-eslint/ban-types
export const Primary: Story<MenuButtonProps> = args => <Button {...args} />
