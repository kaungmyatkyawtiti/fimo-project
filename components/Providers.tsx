"use client";

import { ThemeProvider } from "@/components/ThemeProvider";
import {
  QueryClientProvider,
} from '@tanstack/react-query'
import type { ReactNode } from "react";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient } from "@tanstack/react-query";

interface Props {
  readonly children: ReactNode;
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: Infinity,
      // refetchOnWindowFocus: true,
    },
  },
});

export default function Providers({ children }: Props) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ThemeProvider>
  )
}
