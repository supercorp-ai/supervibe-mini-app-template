import "./globals.css";
import { MiniKitProvider } from '@/components/MiniKitProvider';
import { WorldAppIframeProvider } from '@/components/WorldAppIframeProvider';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <WorldAppIframeProvider>
          <MiniKitProvider>
            {children}
          </MiniKitProvider>
        </WorldAppIframeProvider>
      </body>
    </html>
  );
}
