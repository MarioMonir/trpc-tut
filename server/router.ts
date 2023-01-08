import { inferAsyncReturnType, initTRPC } from "@trpc/server";
import * as trpcExpress from "@trpc/server/adapters/express";

// =====================================================

// Trpc Setup
const createContext = ({}: trpcExpress.CreateExpressContextOptions) => ({});
type Context = inferAsyncReturnType<typeof createContext>;

const t = initTRPC.context<Context>().create();

// =====================================================

const hello = t.procedure.query(() => ({ message: `Hello world` }));

// =====================================================

export const router = t.router({ hello });
export type AppRouter = typeof router;
export const trpcMiddleware = trpcExpress.createExpressMiddleware({
  router,
  createContext,
});
