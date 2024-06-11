/** @type {import('next').NextConfig} */

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename);

const nextConfig = {
    output: "export",
    env: {
      NEXT_PUBLIC_FABFORM_ID: process.env.NEXT_PUBLIC_FABFORM_ID,
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
      },
};

export default nextConfig;
