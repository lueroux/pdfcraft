import { Metadata } from 'next';

export const dynamic = 'force-static';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Cookies Policy',
    description: 'Cookies Policy for PDFCraft',
  };
}

export default function CookiesPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Cookies Policy</h1>
      <div className="prose prose-lg dark:prose-invert">
        <p>This website uses cookies to enhance your browsing experience.</p>
        <p>We use essential cookies to ensure the basic functionality of the site.</p>
        <h2>Types of Cookies We Use</h2>
        <ul>
          <li>Essential cookies: Required for the site to function</li>
          <li>Analytics cookies: Help us understand how visitors interact with the site</li>
          <li>Functional cookies: Enable enhanced functionality and personalization</li>
        </ul>
        <p>For more information, please contact us at support@pdfcraft.com</p>
      </div>
    </div>
  );
}
