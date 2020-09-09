export interface CamResponseInterface {
    [key: string]: CamDetailInterface;
}

type CamCollectionType = { [key: string]: CamInterface };

export interface CamDetailInterface {
    name: string;
    prov: string;
    cams: CamCollectionType
}

export interface CamInterface {
    name: string;
    url: string;
}
