/**
 * Sanitizes HTML content to prevent XSS attacks.
 * Returns an object compatible with React's dangerouslySetInnerHTML.
 *
 * Uses DOMPurify on the client side for proper sanitization.
 * On the server side, returns content as-is since our HTML content
 * comes from internal constants (lib/constants.ts), not user input.
 */
export function createSanitizedMarkup(htmlContent: string): {
  __html: string;
} {
  // Only sanitize on the client side where DOMPurify works reliably
  if (typeof window !== "undefined") {
    // Dynamic import to avoid SSR issues
    const DOMPurify = require("dompurify");
    return {
      __html: DOMPurify.sanitize(htmlContent),
    };
  }

  // Server-side: return as-is (content is from trusted internal sources)
  return {
    __html: htmlContent,
  };
}
