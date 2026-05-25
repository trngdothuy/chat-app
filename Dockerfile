FROM node:22-alpine AS deps
WORKDIR /app/chat-app/backend
COPY chat-app/backend/package.json chat-app/backend/package-lock.json* ./
RUN npm ci --omit=dev

FROM node:22-alpine AS runner
ENV NODE_ENV=production
ENV PORT=3000
WORKDIR /app

COPY --from=deps /app/chat-app/backend/node_modules ./chat-app/backend/node_modules
COPY chat-app/backend ./chat-app/backend
COPY chat-app/frontend ./chat-app/frontend

RUN addgroup -S app && adduser -S app -G app && chown -R app:app /app
USER app

WORKDIR /app/chat-app/backend
EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget -qO- http://127.0.0.1:3000/health || exit 1

CMD ["node", "server.js"]