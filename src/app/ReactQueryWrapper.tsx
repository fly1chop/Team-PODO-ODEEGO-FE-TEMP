'use client';
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

interface Props {
  children: React.ReactNode;
}

const ReactQueryWrapper = ({ children }: Props) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

export default ReactQueryWrapper;
