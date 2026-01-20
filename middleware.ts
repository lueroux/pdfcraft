import createMiddleware from 'next-intl/middleware';
import { routing } from '@/i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Match all pathnames except for
  // - API routes
  // - Static files (images, fonts, etc.)
  // - Next.js internals
  // - Manifest file
  // - Cookies and terms routes
  matcher: [
    // Match all pathnames except for
    // - ... if they start with `/api`, `/_next` or `/_vercel`
    // - ... if they contain a dot (e.g. `favicon.ico`)
    // - ... if they are manifest, cookies, or terms
    '/((?!api|_next|_vercel|manifest|cookies|terms|.*\\..*).*)',
  ],
};
