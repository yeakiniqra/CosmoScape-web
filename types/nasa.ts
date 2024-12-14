export interface APODData {
  date: string;
  explanation: string;
  hdurl: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;
  copyright?: string;
}

export interface MarsPhoto {
  id: number;
  sol: number;
  camera: {
    id: number;
    name: string;
    rover_id: number;
    full_name: string;
  };
  img_src: string;
  earth_date: string;
  rover: {
    id: number;
    name: string;
    landing_date: string;
    launch_date: string;
    status: string;
  };
}

export interface EarthImagery {
  [key: string]: {
    AT: {
      av: number;
      ct: number;
      mn: number;
      mx: number;
    };
    First_UTC: string;
    HWS: {
      av: number;
      ct: number;
      mn: number;
      mx: number;
    };
    Last_UTC: string;
    Month_ordinal: number;
    Northern_season: string;
    PRE: {
      av: number;
      ct: number;
      mn: number;
      mx: number;
    };
    Season: string;
    Southern_season: string;
    WD: {
      [key: string]: {
        compass_degrees: number;
        compass_point: string;
        compass_right: number;
        compass_up: number;
        ct: number;
      };
      most_common: {
        compass_degrees: number;
        compass_point: string;
        compass_right: number;
        compass_up: number;
        ct: number;
      };
    };
  };
}

export interface EPICImage {
  identifier: string;
  caption: string;
  image: string;
  version: string;
  date: string;
}