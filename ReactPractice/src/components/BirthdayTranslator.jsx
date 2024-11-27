const phrases = new Map([
    ["english", "Happy Birthday"],
    ["german", "Alles Gute zum Geburtstag"],
    ["spanish", "Feliz Cumpleaños"],
    ["latin", "Beatus Natalis"],
]);
import { useState } from "react";
export default function BirthdayTranslator() {
    const [currentPhrase, setCurrentPhrase] = useState({
        lang: "english",
        phrase: phrases.get("english"),
    });

    const handleChangeLanguage = (event) => {
        const newLang = event.target.value;
        setCurrentPhrase({ lang: newLang, phrase: phrases.get(newLang) });
    };

    return (
        <div className="BirthdayTranslator componentBox">
            <h3>{currentPhrase.phrase}!</h3>
            <label htmlFor="languageSelector">Choose a Language</label>
            <select
                name="languageSelector"
                id="languageSelector"
                onChange={handleChangeLanguage}
                value={currentPhrase.lang}
            >
                {[...phrases.keys()].map((lang) => (
                    <option key={lang} value={lang}>
                        {lang}
                    </option>
                ))}
            </select>
        </div>
    );
}
