import {
  formatDate,
  formatRelativeTime,
  slugify,
  truncateText,
} from '@/lib/utils';

describe('Utility Functions', () => {
  describe('formatDate', () => {
    it('should format date correctly', () => {
      const date = new Date('2023-12-25');
      const result = formatDate(date);
      expect(result).toBe('December 25, 2023');
    });
  });

  describe('formatRelativeTime', () => {
    it('should return "just now" for recent dates', () => {
      const now = new Date();
      const result = formatRelativeTime(now);
      expect(result).toBe('just now');
    });

    it('should format minutes ago correctly', () => {
      const date = new Date(Date.now() - 5 * 60 * 1000); // 5 minutes ago
      const result = formatRelativeTime(date);
      expect(result).toBe('5m ago');
    });

    it('should format hours ago correctly', () => {
      const date = new Date(Date.now() - 2 * 60 * 60 * 1000); // 2 hours ago
      const result = formatRelativeTime(date);
      expect(result).toBe('2h ago');
    });
  });

  describe('slugify', () => {
    it('should convert text to slug', () => {
      const result = slugify('Hello World!');
      expect(result).toBe('hello-world');
    });

    it('should handle special characters', () => {
      const result = slugify('React & Next.js');
      expect(result).toBe('react-nextjs');
    });

    it('should handle multiple spaces', () => {
      const result = slugify('Multiple   Spaces');
      expect(result).toBe('multiple-spaces');
    });
  });

  describe('truncateText', () => {
    it('should truncate long text', () => {
      const text = 'This is a very long text that should be truncated';
      const result = truncateText(text, 20);
      expect(result).toBe('This is a very long...');
    });

    it('should not truncate short text', () => {
      const text = 'Short text';
      const result = truncateText(text, 20);
      expect(result).toBe('Short text');
    });
  });
});
