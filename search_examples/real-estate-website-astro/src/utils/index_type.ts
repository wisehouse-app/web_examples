type SearchResult = {
    id: string;

    title?: string;
    canonical?: string;
    avatar?: string;

    price?: number;
    n_bedrooms?: number;
    n_bathrooms?: number;
    area_sqm?: number;
    land_area_sqm?: number;

    locations?: string[];
    buy_rent?: "buy" | "rent";
    property_type?: string;

};

export type { SearchResult as default };

