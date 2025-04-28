# Zoom Clone with Next.js, TailwindCSS, and Stream Video SDK

This project is a Zoom-like video conferencing application built using [Next.js](https://nextjs.org/), [TailwindCSS](https://tailwindcss.com/), and the [Stream Video SDK](https://getstream.io/video/). It provides features such as a personal meeting room, video call integration, and a responsive UI.

## 🚀 Features

- **Personal Meeting Room**: Users can create and join personal meeting rooms.
- **Video Call Integration**: Powered by the Stream Video SDK for seamless video conferencing.
- **Responsive Design**: Built with TailwindCSS for a modern and responsive UI.
- **Dynamic Sidebar**: Navigation links to different sections of the app.
- **Dark Mode**: Customizable dark mode theme.

## 🛠️ Technologies Used

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [TailwindCSS](https://tailwindcss.com/)
- **Video SDK**: [Stream Video SDK](https://getstream.io/video/)
- **Authentication**: [Clerk](https://clerk.dev/)
- **Icons and Images**: Custom assets for navigation and user avatars.

## 📂 Project Structure

- **`/app`**: Contains the main application pages and layouts.
- **`/components`**: Reusable UI components like the Sidebar.
- **`/constants`**: Static data such as sidebar links and avatar images.
- **`/hooks`**: Custom React hooks for API calls and state management.
- **`/lib`**: Utility functions for the project.
- **`/styles`**: Global CSS and Tailwind configuration.

## 🖥️ How It Works

1. **Sidebar Navigation**: The sidebar dynamically highlights the active route using the `usePathname` hook from Next.js.
2. **Personal Room**: Users can join their personal meeting room, with video calls powered by the Stream Video SDK.
3. **Dark Mode**: The app uses Tailwind's `darkMode` configuration for a consistent dark theme.
4. **Responsive Design**: Tailwind's utility classes ensure the app works seamlessly across devices.

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm, yarn, pnpm, or bun (any package manager)
- Env variables for Stream Video SDK and Clerk 

```shell
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<your-clerk-publishable-key>
CLERK_SECRET_KEY=<your-clerk-secret-key>
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_BASE_URL=<your-base-url>
NEXT_PUBLIC_STREAM_API_KEY=<your-stream-api-key>
STREAM_SECRET_KEY=<your-stream-secret-key>
```

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/DacioSB/zoom.git
   cd zoom-clone
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🧩 Key Components

### Sidebar

The sidebar is located in [`components/Sidebar.tsx`](components/Sidebar.tsx). It dynamically renders navigation links based on the `sidebarLinks` array in [`constants/index.ts`](constants/index.ts).

### Personal Room

The personal meeting room is implemented in [`app/(root)/(home)/personal-room/page.tsx`](app/(root)/(home)/personal-room/page.tsx). It uses the Stream Video SDK to manage video calls.

### Tailwind Configuration

The TailwindCSS configuration is defined in [`tailwind.config.ts`](tailwind.config.ts). It includes custom colors, container settings, and dark mode support.

## 🌐 Deployment

This project can be deployed with AWS Amplify.

- Follow the [AWS Amplify documentation](https://docs.aws.amazon.com/amplify/latest/userguide/getting-started-next.html) for deployment instructions.
- Ensure you set up the environment variables in your Amplify console.
- You can also deploy using Vercel or Netlify by connecting your GitHub repository.

## 📜 Tags

- `#Next.js`
- `#TailwindCSS`
- `#StreamVideoSDK`
- `#Clerk`
- `#React`
- `#VideoConferencing`
- `#DarkMode`
- `#ResponsiveDesign`

## 📖 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [Stream Video SDK Documentation](https://getstream.io/video/docs/)
- [Clerk Documentation](https://clerk.dev/docs)

## 🛡️ License

This project is licensed under the MIT License. See the LICENSE file for details.