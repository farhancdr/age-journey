/* eslint-disable @typescript-eslint/no-require-imports */
// next.config.js

/** @type {import('next').NextConfig} */

const runtimeCaching = require("next-pwa/cache");
const withPWA = require('next-pwa')({
 dest: 'public', 
 register: true,
 skipWaiting: true,
 runtimeCaching
})

module.exports = withPWA({
 // other congigs
 reactStrictMode: false
})