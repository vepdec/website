let userConfig = undefined
try {
// try to import ESM first
userConfig = await import('./vepdec-next.config.mjs')
} catch (e) {
try {
 // fallback to CJS import
 userConfig = await import("./vepdec-next.config");
} catch (innerError) {
 // ignore error
}
}

/** @type {import('next').NextConfig} */
const nextConfig = {
eslint: {
  ignoreDuringBuilds: true,
},
typescript: {
  ignoreBuildErrors: true,
},
images: {
  unoptimized: true,
},
experimental: {
  webpackBuildWorker: true,
  parallelServerBuildTraces: true,
  parallelServerCompiles: true,
},
async headers() {
  return [
    {
      source: '/:path*',
      headers: [
        {
          key: 'Content-Security-Policy',
          value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://lottie.host; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https://lottie.host;"
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff'
        },
        {
          key: 'X-Frame-Options',
          value: 'DENY'
        },
        {
          key: 'X-XSS-Protection',
          value: '1; mode=block'
        },
        {
          key: 'Referrer-Policy',
          value: 'strict-origin-when-cross-origin'
        },
        {
          key: 'Strict-Transport-Security',
          value: 'max-age=31536000; includeSubDomains; preload'
        }
      ]
    }
  ];
},
}

if (userConfig) {
// ESM imports will have a "default" property
const config = userConfig.default || userConfig

for (const key in config) {
  if (
    typeof nextConfig[key] === 'object' &&
    !Array.isArray(nextConfig[key])
  ) {
    nextConfig[key] = {
      ...nextConfig[key],
      ...config[key],
    }
  } else {
    nextConfig[key] = config[key]
  }
}
}

export default nextConfig
