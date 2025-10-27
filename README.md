# anteleventic.com

A modern portfolio website built with React, TypeScript, and Vite. Features a multilingual interface (English/German), dark mode support, and a clean, responsive design.

## Features

- Multi-language support (English & German)
- Dark/Light theme toggle with system preference detection
- Responsive design with Tailwind CSS
- Photography gallery
- Projects showcase
- Skills and about sections
- Privacy policy and terms of service pages
- Supabase integration for backend functionality

## Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Tailwind CSS** - Styling
- **Lucide React** - Icon library
- **Supabase** - Backend and database

## Prerequisites

Before you begin, ensure you have installed:

- **Node.js** (version 18 or higher)
- **npm** (comes with Node.js)

## Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd project
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Setup

The project includes a `.env` file with Supabase configuration:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

Make sure these values are properly configured for your Supabase project.

### 4. Start Development Server

```bash
npm run dev
```

The application will start at `http://localhost:5173` (or another port if 5173 is busy).

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking

## Project Structure

```
project/
├── src/
│   ├── components/     # Reusable React components
│   │   └── Layout.tsx  # Main layout with navigation
│   ├── hooks/          # Custom React hooks
│   │   └── useTranslation.tsx  # Translation hook
│   ├── locales/        # Language files
│   │   ├── en.json     # English translations
│   │   └── de.json     # German translations
│   ├── pages/          # Page components
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── ProjectDetail.tsx
│   │   ├── Photography.tsx
│   │   ├── Skills.tsx
│   │   ├── Privacy.tsx
│   │   └── Terms.tsx
│   ├── App.tsx         # Main app component
│   ├── main.tsx        # Entry point
│   └── index.css       # Global styles
├── .env                # Environment variables
├── package.json        # Dependencies and scripts
├── tsconfig.json       # TypeScript configuration
├── vite.config.ts      # Vite configuration
└── tailwind.config.js  # Tailwind CSS configuration
```

## Building for Production

1. Build the project:

```bash
npm run build
```

2. The production-ready files will be in the `dist/` directory.

3. Preview the production build locally:

```bash
npm run preview
```

## Deployment

The built files in `dist/` can be deployed to any static hosting service:

- Vercel
- Netlify
- GitHub Pages
- AWS S3
- CloudFlare Pages

Simply upload the contents of the `dist/` directory to your hosting provider.

## Browser Support

The application supports all modern browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is private and proprietary.

## Support

For support or questions, please contact the project maintainer.
