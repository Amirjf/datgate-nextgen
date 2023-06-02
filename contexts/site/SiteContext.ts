import { useContext, createContext } from 'react';
interface PhoneNumber {
  label: string;
  value: string;
}

interface EmailAddress {
  label: string;
  value: string;
  is_lead: boolean;
  format: string | null;
}

interface SocialNetwork {
  label: string;
  value: string;
}

interface WorkHour {
  label: string;
  is_open: boolean;
  from: string;
  to: string;
}

interface WorkSchedule {
  label: string;
  value: WorkHour[];
}

interface Script {
  name: string;
  place: string;
  content: string;
}

interface HeroCTA {
  label: string;
  link: string;
}

interface SiteContextModel {
  name: string;
  zip_code: string;
  address: string;
  city: string;
  state: string;
  country: string;
  latitude: string;
  longitude: string;
  logo_url: string | null;
  icon_url: string | null;
  main_photo_url: string | null;
  phone_numbers: PhoneNumber[];
  email_addresses: EmailAddress[];
  social_networks: SocialNetwork[];
  work_hours: WorkSchedule[];
  scripts: Script[];
  hero_type: string;
  hero_title: string;
  hero_subtitle: string;
  hero_image_url: string | null;
  hero_ctas: HeroCTA[];
  hero_video_type: string;
  hero_video_url: string | null;
  hero_youtube_embed: string;
}

export const SiteContext = createContext(null);

export function useSiteContext(data: {
  siteData: SiteContextModel;
  inventoryData: any;
}) {
  return data;
}

export default function useSite() {
  const site: SiteContextModel = useContext(SiteContext)!;
  return site;
}
