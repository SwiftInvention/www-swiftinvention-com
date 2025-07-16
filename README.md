# SwiftInvention Website

This repository contains the source code for the SwiftInvention company website, built with modern web technologies to showcase our services, team, and expertise.

## 🚀 Tech Stack

- [Astro](https://astro.build/) - The web framework for content-driven websites
- [React](https://reactjs.org/) - For interactive UI components
- [Tailwind CSS](https://tailwindcss.com/) - For styling
- [TypeScript](https://www.typescriptlang.org/) - For type-safe code
- [GSAP](https://greensock.com/gsap/) - For smooth animations

## 📦 Project Structure

```
src/
├── assets/      # Static assets (images, icons)
├── components/  # Reusable Astro and React components
├── constants/   # Application constants and configurations
├── content/     # Content files (markdown, etc.)
├── layouts/     # Page layouts
├── pages/       # Route pages
└── react/       # React-specific components
```

## 🛠️ Development

### Prerequisites

- Node.js >= 18
- pnpm >= 9.0.0

### Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/SwiftInvention/www-swiftinvention-com.git
   cd www-swiftinvention-com
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Start the development server:

   ```bash
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view the site

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm format` - Format code with Prettier
- `pnpm lint` - Run ESLint
- `pnpm lint:fix` - Fix ESLint issues
- `pnpm tsc` - Run TypeScript compiler

## 🚀 Deployment

The website is automatically deployed to production when changes are pushed to the `master` branch.

## 📝 Content Management

Content for various sections (vacancies, case studies, etc.) can be found in the `src/content` directory. Update the markdown files to modify the website content.

## 🎨 Styling

The project uses Tailwind CSS for styling. Configuration can be found in:

- `tailwind.config.ts`
- `postcss.config.js`

## 📱 Responsive Design

The website is fully responsive and optimized for:

- Desktop
- Tablet
- Mobile devices

## 🤝 Contributing

1. Create a new branch
2. Make your changes
3. Submit a pull request

## 📄 License

Copyright © SwiftInvention. All rights reserved.
