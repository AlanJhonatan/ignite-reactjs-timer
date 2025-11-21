# ⏱️ Ignite Pomodoro Timer

A modern Pomodoro timer application built with React and TypeScript. It facilitates tracking all your timers and projects you've worked on, with persistent history in localStorage.

<img width="1906" height="904" alt="image" src="https://github.com/user-attachments/assets/cbe01422-6c35-4652-b281-157ff99a0eba" />

---

## 📋 Project Description

**Ignite Pomodoro Timer** is a pomodoro timer developed with Vite & React.js. 
The application allows you to:

- ✅ Create new work cycles (Pomodoros) with custom task names and durations
- ✅ Track time in real-time with visual countdown
- ✅ View the complete history of all executed cycles
- ✅ Interrupt running cycles when needed
- ✅ Have data persisted locally (localStorage)

The goal is to enhance productivity through the Pomodoro technique, maintaining a detailed record of which projects you worked on and for how long.

---

## 🛠️ Tech Stack

- **Vite** - Ultra-fast build tool and dev server
- **React** - JavaScript library for UI
- **TypeScript** - JavaScript superset with static typing
- **Styled Components** - CSS-in-JS for styling
- **React Hook Form** - Performant form management
- **Zod** - Schema validation with TypeScript
- **Immer** - Simplified immutable state handling

---

## ⚡ How to Run / Local Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/AlanJhonatan/ignite-reactjs-timer.git
cd ignite-reactjs-timer

# Install dependencies
npm install
```

### Development

```bash
# Start the development server
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

```bash
# Compile TypeScript and generate optimized build
npm run build

# Preview the generated build locally
npm run preview
```

### Linting

```bash
# Check code quality
npm run lint
```

---

## 📁 Folder Structure

```
src/
├── @types/
│   └── styles.d.ts              # Global style typings
├── assets/                      # Static files (images, etc)
├── components/
│   └── Header/                  # Header component
│       ├── index.tsx
│       └── styles.ts
├── contexts/
│   └── CyclesContext.tsx        # Context API for global cycles state
├── layouts/
│   └── DefaultLayout/           # Default application layout
│       ├── index.tsx
│       └── styles.ts
├── pages/
│   ├── Home/                    # Main page with timer
│   │   ├── components/
│   │   │   ├── Countdown/       # Countdown component
│   │   │   └── NewCycleForm/    # Form to create new cycle
│   │   ├── index.tsx
│   │   └── styles.ts
│   └── History/                 # Page with cycles history
│       ├── index.tsx
│       └── styles.ts
├── reducers/
│   └── cycles/
│       ├── actions.ts           # Cycles reducer actions
│       └── reducer.ts           # Reducer logic with Immer
├── styles/
│   ├── default.ts               # Default theme
│   └── global.ts                # Global styles
├── App.tsx                      # Root component
├── Router.tsx                   # Routes configuration
└── main.tsx                     # Application entry point
```

---

## 🚀 Deploy

Can be easily deployed on platforms such as:

- **Vercel** - Recommended for Vite/React projects
- **Netlify** - Native Vite support
- **GitHub Pages** - For static environments
- **AWS Amplify**, **Firebase Hosting** - For scalability

Just connect your GitHub repository to your chosen platform and configure the build command as `npm run build`.

---

## 🎯 Future Improvements

- 📊 **Database Persistence** - Store cycles history in cloud database (Firebase, Supabase, etc)
- 🏆 **Leaderboard** - Ranking of most productive people in the week/month
- 🎨 **UI Redesign** - Redesign interface with shadcn/ui component library
- ✅ **Automated Tests** - Add unit and E2E tests for CI/CD pipeline
- 🔔 **Notifications** - Alerts when finishing/pausing a cycle
- 📱 **Mobile Mode** - Full optimization for mobile devices
- 🌙 **Themes** - Support for light/dark mode

---

**Developed with ❤️**
