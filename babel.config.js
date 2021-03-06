const presets = [
  [
    "@babel/env",
    {
      targets: {
        edge: "17",
        firefox: "60",
        chrome: "67",
        safari: "11.1",
      },
      useBuiltIns: "usage",
    },
  ],
  // [
  //   "@babel/preset-env",
  //   {
  //     targets: {
  //       node: "current"
  //     },
  //   },
  // ],
];

const plugins = [
  'babel-plugin-styled-components'
]

module.exports = { presets, plugins };