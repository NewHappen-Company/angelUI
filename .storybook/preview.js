export const parameters = {
  backgrounds: {
    default: 'white',
    values: [
      {
        name: 'black',
        value: '#333333',
      },
      {
        name: 'white',
        value: '#fff',
      },
      {
        name: 'gray',
        value: '#f2f2f2',
      },
    ],
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}