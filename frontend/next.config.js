/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env:{
    API_URL: 'http://127.0.0.1:8000',
    MAPBOX_ACCESS_TOKEN:'pk.eyJ1IjoiYWxpd2VmZmV3IiwiYSI6ImNsYm03b2trYjBmNGQzb3BxeXVvZDBoMnYifQ.XyWTPG_BbjLijvGx8Ipq6g'

  }
}

module.exports = nextConfig
