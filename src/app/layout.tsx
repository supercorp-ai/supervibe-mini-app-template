import { DM_Mono, Rubik, Sora } from 'next/font/google'
import '@worldcoin/mini-apps-ui-kit-react/styles.css';
import "./globals.css";
import { MiniKitProvider } from '@/components/MiniKitProvider';
import { WorldAppIframeProvider } from '@/components/WorldAppIframeProvider';

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-dm-mono',
})

const rubik = Rubik({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-rubik',
})

const sora = Sora({
  subsets: ['latin'],
  weight: ['600'],
  variable: '--font-sora',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${dmMono.variable} ${rubik.variable} ${sora.variable}`}
    >
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
