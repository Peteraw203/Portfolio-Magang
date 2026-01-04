import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Simple in-memory store for rate limiting (Note: limiting per lambda instance)
const rateLimit = new Map();

export function middleware(request: NextRequest) {
    const response = NextResponse.next();

    // Security Headers
    response.headers.set('X-Content-Type-Options', 'nosniff');
    response.headers.set('X-Frame-Options', 'DENY');
    response.headers.set('X-XSS-Protection', '1; mode=block');
    response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
    response.headers.set(
        'Content-Security-Policy',
        "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.google-analytics.com; style-src 'self' 'unsafe-inline'; img-src 'self' blob: data: https:; font-src 'self' data:; connect-src 'self' https://generativelanguage.googleapis.com https://api.iconify.design https://api.simplesvg.com https://api.unisvg.com;"
    );

    // Basic Rate Limiting for Chat API
    if (request.nextUrl.pathname.startsWith('/api/chat')) {
        const ip = request.headers.get('x-forwarded-for') || '127.0.0.1';
        const limit = 5; // requests
        const windowMs = 60 * 1000; // 1 minute

        const record = rateLimit.get(ip) ?? { count: 0, startTime: Date.now() };

        if (Date.now() - record.startTime > windowMs) {
            record.count = 0;
            record.startTime = Date.now();
        }

        record.count++;
        rateLimit.set(ip, record);

        if (record.count > limit) {
            return new NextResponse('Too Many Requests', { status: 429 });
        }
    }

    return response;
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!_next/static|_next/image|favicon.ico).*)',
    ],
};
