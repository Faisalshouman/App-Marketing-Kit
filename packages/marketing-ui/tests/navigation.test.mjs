import test from 'node:test';
import assert from 'node:assert/strict';
import { safeDestination } from '../src/navigation.mjs';

test('destinations require an exact host allowlist', () => {
  assert.equal(safeDestination('/start'), null);
  assert.equal(safeDestination('/start', ['/start']), '/start');
  assert.equal(safeDestination('https://example.com/demo', ['https://example.com/demo']), 'https://example.com/demo');
  assert.equal(safeDestination('#tour', ['#tour']), '#tour');
});

test('dangerous and ambiguous destinations fail even when listed', () => {
  for (const value of ['javascript:alert(1)', 'data:text/html,test', '//example.com', '/\\example.com', '/%5cexample.com', 'https://user:pass@example.com', ' /start', '/start\n']) {
    assert.equal(safeDestination(value, [value]), null, value);
  }
});

