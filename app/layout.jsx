import './globals.css';

export const metadata = {
  title: 'Genetically Modified Pine Plantation Business Plan',
  description: 'Comprehensive business plan for a genetically modified pine tree plantation venture.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
