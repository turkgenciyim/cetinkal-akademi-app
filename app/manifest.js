export default function manifest() {
    return {
      name: 'Çetinkal Akademi',
      short_name: 'Çetinkal Akademi',
      description: 'Çetinkal Akademi sayesinde sigorta ile ilgili merak edilen yazıları ve blogları buradan bulabilir ve okuyabilirsiniz.',
      start_url: '/',
      display: 'standalone',
      icons: [
        {
          src: '/favicon.ico',
          "sizes": "64x64 32x32 24x24 16x16",
          type: 'image/x-icon',
        },
      ],
    }
  }