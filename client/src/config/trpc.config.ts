import { useState } from "react";
import { createTRPCReact } from "@trpc/react-query";
import { httpBatchLink } from "@trpc/client";
import { AppRouter } from "../../../server/router";
import { QueryClient } from "@tanstack/react-query";

// ===========================================================

const trpc = createTRPCReact<AppRouter>();

// ==========================================================

export const queryClientState = () => new QueryClient();

// ==========================================================

export const trpcClientState = () =>
  trpc.createClient({
    links: [
      httpBatchLink({
        url: "http://localhost:5000/trpc",
        // optional
        // headers() {
        //   return {
        //     authorization: getAuthCookie(),
        //   };
        // },
      }),
    ],
  });
