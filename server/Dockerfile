# ----------- BUILD STAGE -----------
FROM node:18-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci --only=production

# Copy all server files
COPY . .


# ----------- RUNNER STAGE -----------
FROM node:18-alpine AS runner

# Create non-root user
RUN addgroup --system appgroup && adduser --system --ingroup appgroup appuser

WORKDIR /home/appuser/app

# Copy necessary files from builder
COPY --from=builder --chown=appuser:appgroup /app ./

USER appuser

EXPOSE 3000

CMD ["node", "server.js"]