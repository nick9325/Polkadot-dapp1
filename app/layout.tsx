
"use client"

import './globals.css'
import { UseInkProvider } from 'useink';
import { RococoContractsTestnet } from 'useink/chains';
import { NotificationsProvider } from 'useink/notifications';
import metadata from '../assets/todo_list.json';



// export const metadata: Metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>

      <UseInkProvider
      config={{
        dappName: metadata.contract.name,
        chains: [RococoContractsTestnet],
      }}
    >
      <NotificationsProvider>
        {children}
      </NotificationsProvider>
    </UseInkProvider>
        </body>
    </html>
  )
}
