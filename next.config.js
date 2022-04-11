/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    urlImports: ['https://arquivos.devnx.com.br/pesa/forest/'],
  },
  reactStrictMode: true,
}
module.exports = {
  images: {
    domains: ['arquivos.devnx.com.br/'],
    loader: 'imgix',
    path: '',
  },
};
// module.exports = nextConfig

