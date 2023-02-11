import * as React from 'react';
import { useTranslation } from 'react-i18next';
import i18next from "i18next";

export default function Translate() {

    const { t } = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = React.useState('en');

    const handleLanguageChange = (language) => {
        setSelectedLanguage(language);
        i18next.changeLanguage(language);
    };

    return (
        <div>
            <div>
                <input
                    type="radio"
                    id="english"
                    name="language"
                    value="en"
                    checked={selectedLanguage === 'en'}
                    onChange={() => handleLanguageChange('en')}
                />
                <label htmlFor="english">English</label>
            </div>
            <div>
                <input
                    type="radio"
                    id="hindi"
                    name="language"
                    value="hi"
                    checked={selectedLanguage === 'hi'}
                    onChange={() => handleLanguageChange('hi')}
                />
                <label htmlFor="hindi">Hindi</label>
            </div>
            <p><b>Static Sentence : </b>{t('This is static content')}</p>
            <p><b>Dynamic Parameters : </b>{t('Selected : {{ selectedLanguage }}', { selectedLanguage: selectedLanguage })}</p>
        </div>
    );
}
