module.exports = api => {
  const presets = [
    '@babel/preset-react',
    ['@babel/preset-env', { targets: { node: 'current' } }],
  ]

  if (api.env() !== 'test') {
    presets.push('next/babel')
  }

  return {
    presets,

    // fullcalendar attempts to import its own CSS files, but next.js does not allow this.
    // throw away these statements before they arrive at next.js,
    // but you'll need to import them manually in pages/_app.jsx.
    // will also work for any other 3rd-party packages that attempt to do this.
    // overrides: [
    //   {
    //     include: ['./node_modules'],
    //     plugins: [
    //       [
    //         'babel-plugin-transform-require-ignore',
    //         {
    //           extensions: ['.css'],
    //         },
    //       ],
    //     ],
    //   },
    // ],
    // env: {
    //   test: {
    //     plugins: ['@babel/plugin-transform-runtime'],
    //   },
    // },
  }
}
