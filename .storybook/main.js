module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/components/**/stories.tsx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@snek-at/storybook-addon-chakra-ui'
  ],
  webpackFinal: async config => {
    config.resolve.modules.push(`${process.cwd()}/src`)

    return config
  }
}
