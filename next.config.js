/** @type {import('next').NextConfig} */
const withSvgr = require("next-svgr");

const nextConfig = withSvgr({
   images: {
      domains: ['openweathermap.org','*'], // Agrega aquí el dominio de las imágenes permitidas
    },
   compiler: {
      styledComponents: true
    },
   async headers() {
      return [
         {
            source: "/:path*",
            headers: [
               {
                  key: "x-custom-header",
                  value: "my custom header value",
               },
               {
                  key: "x-another-custom-header",
                  value: "my other custom header value",
               },
            ],
         },
      ];
   },
   // webpack: (config, { isServer }) => {
   //    // Desactivar advertencias solo en el servidor (isServer)
   //    if (isServer) {
   //      config.devServer = {
   //        quiet: true, // Desactivar mensajes de advertencia
   //      };
   //    }
  
   //    return config;
   //  },
});

module.exports = nextConfig;
