module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Pastikan ini menunjuk ke semua file di proyek Anda
  ],
  theme: {
    extend: {
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        '100': '28rem',
        '120': '30rem'
      },
    },
  },
  plugins: [],
}
