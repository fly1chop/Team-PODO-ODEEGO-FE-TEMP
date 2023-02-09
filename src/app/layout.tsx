import React from "react";
import ReactQueryWrapper from "@/app/ReactQueryWrapper";
import Recoil from "@/app/Recoil";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
      <Recoil>
          <ReactQueryWrapper>
              {children}
          </ReactQueryWrapper>
      </Recoil>
      </body>
    </html>
  );
}
