import './globals.css';
import Navbar from '@/Components/Shared/Navbar';
import Footer from '@/Components/Shared/Footer';
import Providers from '@/Components/Providers';
export const metadata = {
  title: 'BEGGAR MIDDLE BIGGER',
  description: 'Generated To Book Appointments or Schedule them',
};

interface IProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: IProps) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />
          {children}
        </Providers>

        {/* <Footer /> */}
      </body>
    </html>
  );
}
