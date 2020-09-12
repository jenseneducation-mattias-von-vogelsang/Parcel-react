import React from 'react';
import RickRolled from '../RickRolled/RickRolled';

// Import jest
// npm i and import "testing library", you know the: <コ:彡

test('Always positive test to check testing environment.', async () => {
  expect(true).toBe(true);
});

// CI environment =
// Continuous Integration (our pipeline)

// --ci
// When this option is provided, Jest will assume it is running in
// a CI environment. This changes the behavior when a new snapshot
// is encountered. Instead of the regular behavior of storing a new
// snapshot automatically, it will fail the test and require Jest to
// be run with --updateSnapshot.

// --updateSnapshot
// Alias: -u. Use this flag to re-record every snapshot that fails
// during this test run. Can be used together with a test suite
// pattern or with --testNamePattern to re-record snapshots.
