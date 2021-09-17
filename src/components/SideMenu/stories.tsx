import { Meta, Story } from '@storybook/react'

import SideMenu from '.'

export default {
  component: SideMenu,
  title: 'Components/SideMenu'
} as Meta

// eslint-disable-next-line @typescript-eslint/ban-types
export const Primary: Story<{}> = args => <SideMenu {...args} />
