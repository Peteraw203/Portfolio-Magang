import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    // Ganti dengan domain vercel kamu
    const baseUrl = 'https://peterabednegowijaya.vercel.app'

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: `${baseUrl}/about`, // Pastikan route ini ada di foldermu
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/portfolio`, // Sesuaikan dengan struktur foldermu
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },

        // Tambahkan halaman documentation atau blog jika ada
    ]
}