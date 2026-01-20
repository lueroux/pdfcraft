import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('cookies');
  
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function CookiesPage() {
  const t = await getTranslations('cookies');
  
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">{t('title')}</h1>
      <div className="prose prose-lg dark:prose-invert">
        <p>{t('description')}</p>
        <p>{t('usage')}</p>
        <h2>{t('types')}</h2>
        <ul>
          <li>{t('essential')}</li>
          <li>{t('analytics')}</li>
          <li>{t('functional')}</li>
        </ul>
        <p>{t('contact')}</p>
      </div>
    </div>
  );
}
