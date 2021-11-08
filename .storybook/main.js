module.exports = {
  async viteFinal(config, { configType }) {
    if (configType === 'DEVELOPMENT') {
      config.server.port = 6001
      config.server.https = false
      config.server.host = true
      config.server.hmr = {
        port: 443,
        protocol: 'ws'
      }
    }

    return config
  },
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: '@storybook/react',
  core: {
    builder: 'storybook-builder-vite'
  }
}
