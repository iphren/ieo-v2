export type SupportedLanguages = 'zh-CN' | 'en-GB';

export type Translation = {
    [language in SupportedLanguages]: string;
}

export interface Rankings {
    year: number;
    rankings: {
        rank: string;
        score: string;
        "zh-cn": string;
        university: Translation;
    }[];
}

export interface Feed {
    title: Translation;
    description: Translation;
    site: Translation;
    author: Translation;
    img: string;
    date: string;
    url: string;
}

export interface AdmissionLetter {
    img: string;
    university: Translation;
}
