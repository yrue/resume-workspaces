import * as json5 from 'json5';
import { readFileSync, writeFileSync } from 'fs';
import * as path from 'path'

interface ProcessOptions {
    excludeProperties: string[];
    excludePatterns: RegExp[];
}

function processJson5(input: string, options: ProcessOptions): string {
    const data = json5.parse(input);

    function transformObject(obj: any) {
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                const value = obj[key];
                if (typeof value === 'string') {
                    if (!options.excludeProperties.includes(key) &&
                        !options.excludePatterns.some(pattern => pattern.test(value))) {
                        obj[key] = value.replace(/./g, 'x');
                    }
                } else if (typeof value === 'object' && value !== null) {
                    transformObject(value);
                }
            }
        }
    }

    transformObject(data);
    return json5.stringify(data, { space: 2 });
}

const filePath = path.resolve(__dirname, '../public/MyResume.json5');
const fileContents = readFileSync(filePath, 'utf-8');

const options: ProcessOptions = {
    excludeProperties: [],
    excludePatterns: [/^123/]
};

const processed = processJson5(fileContents, options);
console.log(processed);

const targetFilePath = path.resolve(__dirname, '../public/resume.json5')
writeFileSync(targetFilePath, processed, 'utf-8');
console.log(`Saved to ${targetFilePath}`)

// Example usage:
// 1. compile: (ignore the React error for now)
// npx tsc apps/resume-workspace/scripts/cleanup.ts
// 2. run
// node apps/resume-workspace/scripts/cleanup.js