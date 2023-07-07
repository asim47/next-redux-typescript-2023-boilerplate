import React from 'react';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <h1> {t('app_title')}</h1>

      <button onClick={() => (i18n.language === 'en' ? i18n.changeLanguage('sp') : i18n.changeLanguage('en'))}>
        Change lanage
      </button>
    </div>
  );
};

export default HomePage;
