import { readFileSync, writeFileSync } from 'fs-extra';
import { Entity } from './enums';

function getFileName(entity: Entity): string {
  return `${__dirname}/\\${entity}/\\data.json`; 
}

export function getData(entity: Entity) {
  try {
    const data = readFileSync(getFileName(entity), 'utf8');
    return JSON.parse(data);
  } catch {
    return {};
  }
}

export function setData(entity: Entity, data: string | NodeJS.ArrayBufferView) {
  try {
    writeFileSync(getFileName(entity), data, 'utf8');
    return true;
  } catch {
    return false;
  }
}

