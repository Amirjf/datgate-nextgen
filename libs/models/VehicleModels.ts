export type SelectedFiltersModel = {
  label: string;
  value: any;
  name: string;
  type: 'select' | 'number' | 'search';
};

export type FilterHandlerModel = {
  filterName: string;
  label?: string;
  type?: 'select' | 'number';
  items: { label: string; value: string; count: number }[];
};

export interface VehicleModel {
  vehicle_id: number;
  body: string;
  condition: string;
  cta: CtaModel[];
  days_in_stock: number;
  dealer_address: string;
  dealer_id: number;
  dealer_name: string;
  discount: number;
  doors: number;
  drive_train: string;
  engine: string;
  ext_color: string;
  ext_color_raw: string;
  formatted_discount: string;
  formatted_original_price: string;
  formatted_price: string;
  fuel_type: string;
  int_color: string;
  int_color_raw: string;
  is_special: boolean;
  key_features: string[];
  make: string;
  mileage: number;
  model: string;
  order: number;
  original_price: number;
  photo: string;
  price: number;
  stock_number: string;
  subtitle: string;
  title: string;
  transmission: string;
  trim: string;
  vdp_url: string;
  videos?: string[];
  video_subtitle: string;
  vin_number: string;
  year: string;
  pricing_theme: boolean;
  srp_cards_dealer: boolean;
  srp_cards_features: boolean;
  srp_cards_phone: boolean;
  srp_cards_vin: boolean;

  tag: {
    tag_background: string;
    tag_color: string;
    tag_content: string;
    tag_disclaimer: string;
    tag_type: 'top_label' | 'badge';
  }[];
}

export interface CtaModel {
  cta_label: string;
  cta_type: string;
  device: string;
  btn_attributes: BtnAttributes;
  btn_classes: string[];
  btn_content: string;
  open_newtab: string;
  btn_styles: {
    bg: string;
    text_color: string;
    text_hover_color: string;
    bg_hover: string;
  };
}

export interface BtnAttributes {
  [key: string]: string;
}
