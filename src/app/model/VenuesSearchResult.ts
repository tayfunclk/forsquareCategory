export class CompactVenue {
    id: string;
    name: string;
    categories: Category[];
    verified: Boolean;
    url: string;
    rating: number;
    location: Location;
}

export class Category {
    id: string;
    name: string;
    pluralName: string;
    icon: Icon;
    parents: string[];
    primary: Boolean;
    categories: Category[];
}

export class Icon {
    prefix: string;
    suffix: string;
}