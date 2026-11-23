import { createHash, timingSafeEqual } from 'crypto';

export function secureEqual(a: string, b: string): boolean {
  const hashA = createHash('sha256').update(a, 'utf8').digest();
  const hashB = createHash('sha256').update(b, 'utf8').digest();
  return timingSafeEqual(hashA, hashB);
}

export function bearerToken(header: string | undefined): string | undefined {
  return header?.match(/^Bearer\s+(.+)$/i)?.[1];
}
