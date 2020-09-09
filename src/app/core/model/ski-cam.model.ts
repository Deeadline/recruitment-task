export interface SkiCamModel {
    name: string;
    prov: string;
    cams: CamModel[];
}

export interface CamModel {
    name: string;
    url: string;
}
