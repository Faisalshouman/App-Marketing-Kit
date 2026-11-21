/**
 * Links must exactly match a host-authored allowlist and use HTTP(S), a local
 * absolute path, or a fragment. Reject ambiguous input before URL parsing.
 */
export function safeDestination(value, allowedDestinations = []) {
  if (typeof value !== 'string' || !Array.isArray(allowedDestinations)) return null;
  if (!allowedDestinations.includes(value) || !value || value !== value.trim()) return null;
  if (/[\\\s\u0000-\u001f\u007f]/u.test(value) || /%0[0-9a-f]|%1[0-9a-f]|%7f|%5c/i.test(value)) return null;
  if (value.startsWith('#')) return /^#[A-Za-z][\w-]*$/.test(value) ? value : null;
  if (value.startsWith('/')) return value.startsWith('//') ? null : value;
  try {
    const url = new URL(value);
    return ['https:', 'http:'].includes(url.protocol) && !url.username && !url.password ? value : null;
  } catch {
    return null;
  }
}

