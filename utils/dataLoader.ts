import fs from 'fs';

export function loadTestData(path: string) {
  return JSON.parse(fs.readFileSync(path, 'utf-8'));
}