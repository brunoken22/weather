/** @type {import('next').NextConfig} */
const withSvgr = require("next-svgr");

const nextConfig = withSvgr({
   
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

});

module.exports = nextConfig;
