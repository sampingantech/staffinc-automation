import { writeFileSync } from 'fs';
import { resolve } from 'app-root-path';
// import devConfig from "../generate-env/env/dev";
// import stgConfig from "../generate-env/env/stg";

async function getEnvFile(env: String) {
    // Select the appropriate configuration based on the environment
    // const config = env === 'dev' ? devConfig : stgConfig;

    // Construct the environment data from the selected configuration
    // const envData = Object.entries(config)
    //     .map(([key, value]) => `${key.toUpperCase()}=${value}`)
    //     .join('\n');

    // Write to .env file
    // writeFileSync(resolve('.env'), envData);
    console.log('.env file generated successfully!');
}

export default getEnvFile;
