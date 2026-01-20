import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('terms');
  
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function TermsPage() {
  const t = await getTranslations('terms');
  
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">{t('title')}</h1>
      <div className="prose prose-lg dark:prose-invert">
        <p>{t('description')}</p>
        <p>{t('agreement')}</p>
        <h2>{t('conditions')}</h2>
        <ul>
          <li>{t('condition1')}</li>
          <li>{t('condition2')}</li>
          <li>{t('condition3')}</li>
        </ul>
        <p>{t('contact')}</p>
      </div>
    </div>
  );
}
