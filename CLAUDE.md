# GlamMate AI - Project Documentation

## 📋 Table of Contents
1. [Project Overview](#project-overview)
2. [Architecture & Tech Stack](#architecture--tech-stack)
3. [Project Structure](#project-structure)
4. [Best Coding Practices](#best-coding-practices)
5. [React & TypeScript Best Practices](#react--typescript-best-practices)
6. [Design Patterns & UI/UX](#design-patterns--uiux)
7. [Performance Optimization](#performance-optimization)
8. [Security Considerations](#security-considerations)
9. [Environment Configuration](#environment-configuration)
10. [Development Workflow](#development-workflow)
11. [Component Documentation](#component-documentation)

---

## 🎯 Project Overview

**GlamMate AI** is a modern, high-conversion landing page for an AI-powered salon management platform. The application showcases an AI assistant (GlamBot) that helps beauty salons manage bookings, handle multi-channel customer inquiries, and optimize operations.

### Key Features
- **Multi-channel Integration**: Instagram DM, WhatsApp, SMS support
- **AI-Powered Chat**: Real-time chat demo using Google Gemini AI
- **Dark/Light Mode**: Seamless theme switching
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Smooth Animations**: Scroll-reveal animations and micro-interactions
- **Modern UI/UX**: Premium beauty salon aesthetic

---

## 🏗️ Architecture & Tech Stack

### Core Technologies
- **React 19.0.0**: Latest React with concurrent features
- **TypeScript 5.8.2**: Type-safe development
- **Vite 6.2.0**: Fast build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework (via CDN)
- **Google Gemini AI**: AI chat integration via `@google/genai`

### Development Tools
- **@vitejs/plugin-react**: React plugin for Vite
- **@types/node**: Node.js type definitions
- **lucide-react**: Modern icon library

### Build Configuration
- **Module System**: ESM (ES Modules)
- **Target**: ES2022
- **JSX**: React JSX transform
- **Path Aliases**: `@/*` maps to project root

---

## 📁 Project Structure

```
LuxeAi-Salon/
├── App.tsx                 # Main application component
├── index.tsx               # Application entry point
├── index.html              # HTML template with Tailwind config
├── vite.config.ts          # Vite configuration
├── tsconfig.json           # TypeScript configuration
├── package.json            # Dependencies and scripts
├── metadata.json           # Project metadata
├── components/             # React components
│   ├── Navbar.tsx          # Navigation bar with theme toggle
│   ├── Hero.tsx            # Hero section with CTA
│   ├── ProblemSection.tsx  # Problem statement
│   ├── SolutionTimeline.tsx # Solution presentation
│   ├── IntelligenceSection.tsx # AI intelligence features
│   ├── FeaturesGrid.tsx    # Feature showcase
│   ├── VsSection.tsx       # Comparison section
│   ├── HowItWorks.tsx      # Process explanation
│   ├── ChatDemo.tsx        # Interactive AI chat demo
│   ├── DashboardPreview.tsx # Dashboard preview
│   ├── UseCases.tsx        # Use case scenarios
│   ├── Pricing.tsx         # Pricing plans
│   ├── Footer.tsx          # Footer component
│   └── ScrollReveal.tsx    # Scroll animation wrapper
└── CLAUDE.md              # This documentation
```

---

## ✅ Best Coding Practices

### 1. **TypeScript Type Safety**

#### ✅ DO:
```typescript
// Explicit interface definitions
interface NavbarProps {
  darkMode: boolean;
  toggleTheme: () => void;
}

// Type-safe component props
export const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleTheme }) => {
  // Component implementation
};

// Union types for constrained values
type Channel = 'instagram' | 'whatsapp' | 'sms';

// Typed state
const [activeChannel, setActiveChannel] = useState<Channel>('instagram');
```

#### ❌ DON'T:
```typescript
// Avoid any types
const handleClick = (e: any) => { ... }

// Avoid implicit any
const data = []; // Should be: const data: Message[] = [];
```

### 2. **Component Organization**

#### ✅ DO:
- **Single Responsibility**: Each component has one clear purpose
- **Composition over Inheritance**: Build complex UIs from simple components
- **Props Interface**: Always define explicit prop types
- **Export Consistency**: Use named exports for reusable components

```typescript
// Good: Clear separation of concerns
export const Logo: React.FC<{ className?: string }> = ({ className }) => {
  // Logo implementation
};

export const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleTheme }) => {
  // Navbar implementation using Logo
};
```

### 3. **State Management**

#### ✅ DO:
- Use `useState` for local component state
- Use `useEffect` for side effects with proper cleanup
- Use `useRef` for DOM references and values that don't trigger re-renders

```typescript
// Good: Proper state management
const [messages, setMessages] = useState<Message[]>([]);
const scrollRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  if (scrollRef.current) {
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }
}, [messages]);
```

#### ❌ DON'T:
```typescript
// Avoid: Direct DOM manipulation without refs
document.getElementById('scroll').scrollTop = 100;

// Avoid: Missing dependency arrays
useEffect(() => {
  fetchData();
}); // Missing dependency array
```

### 4. **Error Handling**

#### ✅ DO:
```typescript
try {
  const response = await ai.models.generateContent({...});
  const botMsg: Message = {
    id: (Date.now() + 1).toString(),
    sender: 'bot',
    text: response.text || "Fallback message",
    timestamp: new Date()
  };
  setMessages(prev => [...prev, botMsg]);
} catch (error) {
  console.error("AI Error:", error);
  // Provide user feedback
} finally {
  setIsTyping(false);
}
```

### 5. **Code Readability**

#### ✅ DO:
- Use descriptive variable names
- Add comments for complex logic
- Break down large functions
- Use early returns for guard clauses

```typescript
// Good: Clear, descriptive code
const handleSend = async () => {
  if (!inputValue.trim()) return; // Early return
  
  const userMsg: Message = {
    id: Date.now().toString(),
    sender: 'user',
    text: inputValue,
    timestamp: new Date()
  };
  
  setMessages(prev => [...prev, userMsg]);
  // ... rest of logic
};
```

---

## ⚛️ React & TypeScript Best Practices

### 1. **Component Patterns**

#### Functional Components with Hooks
```typescript
// ✅ Modern React pattern
const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen">
      {/* Component tree */}
    </div>
  );
};
```

### 2. **TypeScript Integration**

#### Strict Type Checking
```typescript
// ✅ Type-safe props
interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: 'fade-in-up' | 'fade-in-down' | 'slide-in-left' | 'slide-in-right' | 'zoom-in' | 'fade-in';
  delay?: number;
  className?: string;
  threshold?: number;
  once?: boolean;
}

// ✅ Generic types for reusability
const [messages, setMessages] = useState<Message[]>([]);
```

### 3. **Hooks Best Practices**

#### useEffect Cleanup
```typescript
useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      // Observer logic
    },
    { threshold, rootMargin: '0px 0px -50px 0px' }
  );

  const currentRef = domRef.current;
  if (currentRef) {
    observer.observe(currentRef);
  }

  // ✅ Always cleanup
  return () => {
    if (currentRef) {
      observer.unobserve(currentRef);
    }
  };
}, [threshold, once]);
```

#### useRef for DOM Access
```typescript
// ✅ Use refs for DOM manipulation
const scrollRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  if (scrollRef.current) {
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }
}, [messages]);
```

### 4. **Event Handling**

#### ✅ DO:
```typescript
// Type-safe event handlers
const handleSend = async () => {
  // Handler logic
};

// Keyboard event handling
onKeyPress={(e) => e.key === 'Enter' && handleSend()}

// Click handlers with proper typing
onClick={toggleTheme}
```

### 5. **Conditional Rendering**

#### ✅ DO:
```typescript
// Clean conditional rendering
{isTyping && (
  <div className="flex items-center gap-2">
    {/* Typing indicator */}
  </div>
)}

// Conditional classes
className={`p-6 rounded-[2rem] ${
  activeChannel === channel.id 
    ? 'bg-white border-accent' 
    : 'bg-transparent border-slate-200'
}`}
```

---

## 🎨 Design Patterns & UI/UX

### 1. **Design System**

#### Color Palette
```typescript
// Defined in index.html Tailwind config
colors: {
  primary: "#2C3E50",        // Soft Navy
  secondary: "#BC9C6B",      // Champagne Gold
  accent: "#BC9C6B",         // Accent color
  "background-light": "#F9F6F2", // Warm Nude
  "background-dark": "#1A252F",  // Darker Navy
  "card-light": "#FFFFFF",
  "card-dark": "#24313E",
  charcoal: "#3C3C3C"
}
```

#### Typography
- **Font Family**: Inter (Google Fonts)
- **Font Weights**: 400, 500, 600, 700, 800, 900
- **Font Smoothing**: Antialiased for better rendering

### 2. **Animation Patterns**

#### Scroll Reveal
```typescript
// Custom ScrollReveal component using Intersection Observer
<ScrollReveal animation="fade-in-up" delay={200}>
  <h1>Content</h1>
</ScrollReveal>
```

#### Animation Types
- `fade-in-up`: Content fades in from bottom
- `fade-in-down`: Content fades in from top
- `slide-in-left/right`: Horizontal slide animations
- `zoom-in`: Scale animation
- `fade-in`: Simple opacity transition

### 3. **Responsive Design**

#### Mobile-First Approach
```typescript
// Tailwind responsive classes
className="text-5xl md:text-7xl lg:text-8xl"
className="hidden md:flex"
className="w-full sm:w-auto"
```

#### Breakpoints
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

### 4. **Dark Mode Implementation**

#### Theme Toggle Pattern
```typescript
const [darkMode, setDarkMode] = useState(false);

useEffect(() => {
  if (darkMode) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}, [darkMode]);
```

#### Dark Mode Classes
```typescript
// Conditional dark mode styling
className="bg-white dark:bg-slate-900 text-primary dark:text-white"
```

### 5. **Accessibility**

#### ✅ DO:
- Use semantic HTML elements
- Add `aria-label` for icon buttons
- Ensure keyboard navigation
- Maintain color contrast ratios
- Use descriptive alt text for images

```typescript
<button
  onClick={toggleTheme}
  className="p-2 rounded-full"
  aria-label="Toggle theme"
>
  {darkMode ? <Sun /> : <Moon />}
</button>
```

---

## 🚀 Performance Optimization

### 1. **Code Splitting**

#### ✅ Current Implementation
- Vite automatically handles code splitting
- React.lazy() can be used for route-based splitting (if needed)

### 2. **Image Optimization**

#### ✅ DO:
- Use appropriate image formats (WebP, AVIF)
- Implement lazy loading
- Use responsive images with srcset

```typescript
<img
  src="https://images.unsplash.com/..."
  alt="Salon Management Interface"
  className="w-full h-full object-cover"
  loading="lazy"
/>
```

### 3. **Animation Performance**

#### Hardware Acceleration
```css
.will-animate {
  will-change: transform, opacity;
  backface-visibility: hidden;
  perspective: 1000px;
  transform: translateZ(0);
}
```

#### ✅ DO:
- Use `transform` and `opacity` for animations (GPU accelerated)
- Avoid animating `width`, `height`, `top`, `left`
- Use `will-change` sparingly

### 4. **Bundle Size**

#### ✅ Current Optimizations
- Tree-shaking enabled by Vite
- ESM imports for better tree-shaking
- Tailwind CSS via CDN (consider purging for production)

### 5. **React Performance**

#### ✅ DO:
- Use `React.memo()` for expensive components (if needed)
- Avoid inline object/function creation in render
- Use `useCallback` and `useMemo` when appropriate

```typescript
// Example: Memoized callback
const handleSend = useCallback(async () => {
  // Handler logic
}, [inputValue]);
```

---

## 🔒 Security Considerations

### 1. **Environment Variables**

#### ✅ DO:
```typescript
// vite.config.ts - Secure environment variable handling
define: {
  'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
  'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
}
```

#### ❌ DON'T:
- Never commit `.env` files to version control
- Never expose API keys in client-side code
- Never hardcode sensitive credentials

### 2. **API Key Management**

#### Best Practices
1. **Use Environment Variables**: Store keys in `.env.local`
2. **Server-Side Proxy**: Consider proxying AI requests through backend
3. **Rate Limiting**: Implement rate limiting for API calls
4. **Error Handling**: Don't expose sensitive error details

```typescript
// ✅ Secure API usage
const ai = new GoogleGenAI({ 
  apiKey: process.env.API_KEY 
});
```

### 3. **Input Validation**

#### ✅ DO:
```typescript
const handleSend = async () => {
  if (!inputValue.trim()) return; // Validate input
  
  // Sanitize user input if needed
  const sanitizedInput = inputValue.trim();
  // ... rest of logic
};
```

### 4. **XSS Prevention**

#### ✅ DO:
- React automatically escapes content
- Use `dangerouslySetInnerHTML` only when necessary and sanitize
- Validate and sanitize user inputs

---

## ⚙️ Environment Configuration

### 1. **Environment Variables**

Create `.env.local` file:
```env
GEMINI_API_KEY=your_api_key_here
```

### 2. **Vite Configuration**

```typescript
// vite.config.ts
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
    }
  };
});
```

### 3. **Development vs Production**

#### Development
- Hot Module Replacement (HMR)
- Source maps enabled
- Detailed error messages

#### Production
- Minified code
- Tree-shaking
- Optimized assets
- Source maps disabled (optional)

---

## 🔄 Development Workflow

### 1. **Scripts**

```json
{
  "scripts": {
    "dev": "vite",           // Development server
    "build": "vite build",   // Production build
    "preview": "vite preview" // Preview production build
  }
}
```

### 2. **Development Process**

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Set Environment Variables**
   ```bash
   # Create .env.local
   echo "GEMINI_API_KEY=your_key" > .env.local
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```

4. **Build for Production**
   ```bash
   npm run build
   ```

### 3. **Code Quality**

#### TypeScript
- Strict type checking enabled
- No implicit any
- Proper type definitions

#### Linting (Recommended)
- Add ESLint for code quality
- Add Prettier for code formatting
- Use Husky for pre-commit hooks

---

## 📚 Component Documentation

### Core Components

#### 1. **App.tsx**
- Main application component
- Manages dark mode state
- Composes all page sections

#### 2. **Navbar.tsx**
- Sticky navigation bar
- Theme toggle functionality
- Responsive menu (mobile/desktop)

#### 3. **Hero.tsx**
- Hero section with CTA
- Animated background blobs
- Video preview placeholder

#### 4. **ChatDemo.tsx**
- Interactive AI chat interface
- Multi-channel support (Instagram, WhatsApp, SMS)
- Real-time AI responses via Gemini API

#### 5. **ScrollReveal.tsx**
- Reusable scroll animation wrapper
- Uses Intersection Observer API
- Configurable animation types and delays

### Component Patterns

#### Reusable Components
```typescript
// Logo component - reusable across app
export const Logo: React.FC<{ className?: string }> = ({ className }) => {
  // Implementation
};
```

#### Section Components
- Each section is a self-contained component
- Consistent prop patterns
- Reusable animation wrappers

---

## 🎯 Key Takeaways

### Best Practices Summary

1. **Type Safety**: Always use TypeScript types and interfaces
2. **Component Composition**: Build complex UIs from simple components
3. **Performance**: Optimize animations, images, and bundle size
4. **Security**: Protect API keys and validate inputs
5. **Accessibility**: Ensure keyboard navigation and screen reader support
6. **Responsive Design**: Mobile-first approach with Tailwind
7. **Code Organization**: Clear file structure and naming conventions
8. **Error Handling**: Graceful error handling with user feedback
9. **Modern React**: Use hooks, functional components, and latest patterns
10. **Documentation**: Clear code comments and component documentation

### Areas for Improvement

1. **Testing**: Add unit tests (Jest, React Testing Library)
2. **State Management**: Consider Context API or Zustand for global state
3. **Routing**: Add React Router if multi-page navigation needed
4. **Error Boundaries**: Implement React error boundaries
5. **Loading States**: Add skeleton loaders for better UX
6. **Analytics**: Add analytics tracking (if needed)
7. **SEO**: Implement meta tags and structured data
8. **PWA**: Consider Progressive Web App features

---

## 📝 Additional Notes

### Tailwind CSS Configuration
- Configured via CDN in `index.html`
- Custom color palette for brand consistency
- Custom animations and keyframes
- Dark mode support via class strategy

### AI Integration
- Uses Google Gemini AI (`gemini-3-flash-preview` model)
- System instructions for consistent bot behavior
- Error handling for API failures
- Typing indicators for better UX

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES2022 features
- CSS Grid and Flexbox
- Intersection Observer API

---

**Last Updated**: 2024
**Maintained By**: Development Team
**Version**: 1.0.0

