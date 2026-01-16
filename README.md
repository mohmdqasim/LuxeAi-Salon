<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1DWIhisHvn-ArZLzA-F3pfWGTvhOWOuvv

## Run Locally

### Option 1: Using Node.js (Development)

**Prerequisites:**  Node.js

1. Install dependencies:
   ```bash
   npm install
   ```
2. Set the `GEMINI_API_KEY` in `.env.local` to your Gemini API key:
   ```bash
   echo "GEMINI_API_KEY=your_api_key_here" > .env.local
   ```
3. Run the app:
   ```bash
   npm run dev
   ```

### Option 2: Using Docker (Production)

**Prerequisites:** Docker and Docker Compose

1. Build and run with Docker Compose:
   ```bash
   docker-compose up -d
   ```
   The app will be available at `http://localhost:3000`

2. Or build and run with Docker:
   ```bash
   docker build -t glam-mate-ai:latest .
   docker run -d -p 3000:80 glam-mate-ai:latest
   ```

For detailed Docker instructions, see [DOCKER.md](./DOCKER.md)

## Documentation

- **[CLAUDE.md](./CLAUDE.md)** - Comprehensive project documentation, best practices, and coding guidelines
- **[DOCKER.md](./DOCKER.md)** - Complete Docker setup and deployment guide
