export type Subject = "human" | "pet";

export interface StyleGroup {
  id: string;
  name: string;
}

export interface PortraitStyle {
  id: string;
  group: string;
  name: string;
  description: string;
  thumb_url: string;
  human: boolean;
  pet: boolean;
  popular: boolean;
}

export interface StylesResponse {
  groups: StyleGroup[];
  styles: PortraitStyle[];
}

export interface UploadSignRequest {
  filename: string;
  content_type: string;
  size: number;
}

export interface UploadSignResponse {
  upload_url: string;
  method: "PUT";
  headers: Record<string, string>;
  file_key: string;
}

export interface CreatePortraitRequest {
  file_key: string;
  subject: Subject;
  style_id: string | null;
  custom_prompt: string | null;
}

export interface PortraitCreatedResponse {
  id: string;
  status: "queued";
}

export interface PortraitResponse {
  id: string;
  status: "queued" | "processing" | "done" | "failed";
  progress: number;
  preview_url: string | null;
  style_id: string;
  subject: Subject;
  hd_unlocked: boolean;
  error: string | null;
}

export interface VariationRequest {
  style_id?: string;
  custom_prompt?: string;
}

export interface ProductSize {
  id: string;
  label: string;
  price: number;
  currency: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  mockup_url: string;
  sizes: ProductSize[];
  ships_in: string;
}

export interface ProductsResponse {
  products: Product[];
}

export interface CreditPack {
  id: string;
  name: string;
  credits: number;
  price: number;
  currency: string;
  badge: string | null;
}

export interface CreditPacksResponse {
  packs: CreditPack[];
}

export interface UnlockRequest {
  method: "credit" | "pay";
  pack_id?: string;
}

export type UnlockResponse = { unlocked: true } | { pay_url: string };

export interface DownloadResponse {
  url: string;
  expires_at: string;
}

export interface BuyNowRequest {
  portrait_id: string;
  product_id: string;
  size_id: string;
  quantity: number;
  email: string;
}

export interface BuyNowResponse {
  order_id: string;
  pay_url: string;
}

export interface MeResponse {
  email: string;
  credits: number;
}

export interface UserPortrait {
  id: string;
  preview_url: string;
  style_id: string;
  created_at: string;
  hd_unlocked: boolean;
}

export interface UserOrder {
  id: string;
  status: "processing" | "printing" | "shipped" | "delivered" | "cancelled";
  product_name: string;
  tracking_url: string | null;
  created_at: string;
  portrait_preview_url: string;
}

export interface MagicLinkRequest {
  email: string;
  return_to: string;
}

export interface MagicVerifyRequest {
  token: string;
}

export interface OrderResponse extends UserOrder {}