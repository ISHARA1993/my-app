# 1. Dependency Installation Stage
# Using node:24-alpine for a lightweight, modern base image
FROM node:24-alpine AS deps
WORKDIR /app
# Install libc6-compat for compatibility with glibc-based libraries (like Next.js/sharp)
RUN apk add --no-cache libc6-compat
COPY package.json package-lock.json* ./
# Use 'npm ci' for clean, reproducible installs
RUN npm ci

# 2. Build Stage
FROM node:24-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Run the build command
RUN npm run build

# 3. Production Runtime Stage (The final, minimal image)
FROM node:24-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

# Create a non-root user for security
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Set environment variables for the application
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Automatically copy the standalone build output from the builder stage
# This requires `output: "standalone"` in your next.config.js (see below)
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

USER nextjs

EXPOSE 3000

# Next.js standalone mode uses server.js
CMD ["node", "server.js"]