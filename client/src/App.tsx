import { useState } from "react";
import { createTRPCReact } from "@trpc/react-query";
import { AppRouter } from "../../server/router";
import { QueryClientProvider } from "@tanstack/react-query";
import { trpcClientState, queryClientState } from "./config/trpc.config";
import "./App.css";

// ===========================================================

const trpc = createTRPCReact<AppRouter>();

// ===========================================================

function Comp1() {
  const hello = trpc.hello.useQuery();
  console.log({ hello });

  return (
    <div className="App">
      <p>{hello?.data?.message || "Loading ... "}</p>
    </div>
  );
}

// ==========================================================

export default function App() {
  const [trpcClient] = useState(trpcClientState);
  const [queryClient] = useState(queryClientState);

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <Comp1 />
      </QueryClientProvider>
    </trpc.Provider>
  );
}
