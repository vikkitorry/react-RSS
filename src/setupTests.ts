import '@testing-library/jest-dom';
import { vi, afterAll } from 'vitest';

afterAll(() => {
  vi.clearAllMocks();
});
