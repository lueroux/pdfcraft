import { Metadata } from 'next';

export const dynamic = 'force-static';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Terms of Service',
    description: 'Terms of Service for PDFCraft',
  };
}

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      <div className="prose prose-lg dark:prose-invert">
        <p>Welcome to PDFCraft. By using our service, you agree to these terms.</p>
        <p>Please read these terms carefully before using our service.</p>
        <h2>Terms and Conditions</h2>
        <ul>
          <li>You must be at least 13 years old to use this service</li>
          <li>You are responsible for the content you upload and process</li>
          <li>We respect your privacy and do not claim ownership of your files</li>
        </ul>
        <p>For questions about these terms, please contact us at support@pdfcraft.com</p>
      </div>
    </div>
  );
}
