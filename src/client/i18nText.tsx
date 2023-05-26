import React from 'react';
import { useTranslation, Trans } from 'react-i18next';

function I18n() {
  const { t } = useTranslation();
  return (
    <div >
      <main>
        <p>
          {t('welcome')}
        </p>

        <Trans i18nKey="author">
          {/* 作者是: <code>{Date.now()}</code> */}
        </Trans>
      </main>
    </div>
  );
}

export default I18n;
