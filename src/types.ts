export interface Rankings {
    year: number;
    rankings: {
        rank: string;
        score: string;
        "zh-cn": string;
    }[];
}

export interface Translation {
    "zh-CN": string;
    "en-GB": string;
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
