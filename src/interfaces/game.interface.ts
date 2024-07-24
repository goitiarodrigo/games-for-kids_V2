export interface IGameInfo {
    id: string;
    name: string;
    slug: string;
    https: boolean;
    rating: number;
    upvotes: number;
    downvotes: number;
    mobileUrl: string;
    desktopUrl: string;
    category: Category;
    tags: Category[];
    descriptionFirst: string;
    descriptionRest: string;
    seoDescription: string;
    metaDescription: string;
    developer: string;
    developerId: string;
    controls: null;
    customStructuredData: null;
    playStoreUrl: string;
    appStoreUrl: null;
    steamStoreUrl: null;
    technology: string;
    jsonLd: string;
    gamesInSeries: any[];
    videos: Videos;
    cover: string;
    hierarchy: Category[];
    allowEmbed: boolean;
    collection: string;
    status: string;
    sandbox: boolean;
    orientation: string;
    disablePWA: boolean;
    smartRefresh: boolean;
    lastFileUpdatedOn: Date;
    isKids: boolean;
    gameThumbLabels: string[];
    addedOn: Date;
    lastSignificantUpdatedOn: Date;
    aps: string;
    isSelfHosted: boolean;
    externalLinks: any;
    customFields: CustomFields;
    iosFriendly: boolean;
    androidFriendly: boolean;
    gameSupportUrl: null;
    isInstant: boolean;
    hasIap: boolean;
}

export interface Category {
    name: string;
    slug: string;
    enSlug?: string;
    thumbnail: string;
    isCategory?: boolean;
}

export interface CustomFields {}

export interface Videos {
    sizes: Size[];
    original: string;
    portraitSizes: any[];
    portraitOriginal: null;
}

export interface Size {
    width: number;
    height: number;
    location: string;
}
