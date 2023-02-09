import React from 'react';
import ReactQueryWrapper from '@/app/ReactQueryWrapper';
import Recoil from '@/app/Recoil';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Recoil>
          <ReactQueryWrapper>{children}</ReactQueryWrapper>
        </Recoil>
      </body>
    </html>
  );
}
