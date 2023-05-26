import React from 'react';
import { useTranslation, Trans } from 'react-i18next';

const lngs = {
  en: { nativeName: 'English' },
  zh: { nativeName: '中文' }
};

function App() {
  const { t, i18n } = useTranslation();
  return (
    <div >
      <header>
        <select onChange={(evt) => {
          i18n.changeLanguage(evt.target.value)
        }}>
          {Object.keys(lngs).map((lng) => (
            <option key={lng} value={lng} label={lngs[lng].nativeName}
              style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} />
          ))}
        </select>
      </header>
      <main>
        <p>
          {t('welcome')}
        </p>

        <Trans i18nKey="author">
          作者是: <code>{Date.now()}</code>
        </Trans>
      </main>
    </div >
  );
}

export default App;
