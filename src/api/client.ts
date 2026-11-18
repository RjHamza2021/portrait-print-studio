import * as mock from "./mock";
import type {
  BuyNowRequest,
  BuyNowResponse,
  CreatePortraitRequest,
  CreditPacksResponse,
  DownloadResponse,
  MagicLinkRequest,
  MagicVerifyRequest,
  MeResponse,
  OrderResponse,
  PortraitCreatedResponse,
  PortraitResponse,
  ProductsResponse,
  StylesResponse,
  UnlockRequest,
  UnlockResponse,
  UploadSignRequest,
  UploadSignResponse,
  UserOrder,
  UserPortrait,
  VariationRequest,
} from "./types";

const API_BASE = (import.meta.env.VITE_API_BASE_URL || "/wp-json/portrait/v1").replace(/\/$/, "");
const useMock = import.meta.env.VITE_USE_MOCK !== "false";

function readStorage(key: string): string | null {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

function writeStorage(key: string, value: string): void {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    // The API remains usable when browser storage is disabled.
  }
}

function guestToken(): string {
  const existing = readStorage("portrait-guest-token");
  if (existing) return existing;
  const token = typeof crypto !== "undefined" && "randomUUID" in crypto
    ? crypto.randomUUID()
    : `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
  writeStorage("portrait-guest-token", token);
  return token;
}

async function request<T>(path: string, options: RequestInit = {}): Promise<T> {
  const headers = new Headers(options.headers);
  headers.set("X-Guest-Token", guestToken());
  headers.set("Accept", "application/json");
  if (options.body) headers.set("Content-Type", "application/json");
  const session = readStorage("portrait-session-token");
  if (session) headers.set("Authorization", `Bearer ${session}`);

  let response: Response;
  try {
    response = await fetch(`${API_BASE}${path}`, { ...options, headers });
  } catch {
    throw new Error("We couldn't reach the studio. Please check your connection and try again.");
  }
  const payload = await response.json().catch(() => null) as unknown;
  if (!response.ok) {
    const errorData = payload as { error?: { message?: string } } | null;
    throw new Error(errorData?.error?.message || "Something went wrong. Please try again.");
  }
  return payload as T;
}

const post = <T>(path: string, body: unknown) => request<T>(path, { method: "POST", body: JSON.stringify(body) });

export async function getStyles(): Promise<StylesResponse> {
  return useMock ? mock.mockStyles : request("/styles");
}

export async function signUpload(input: UploadSignRequest): Promise<UploadSignResponse> {
  return useMock ? mock.signUploadMock(input) : post("/uploads/sign", input);
}

export async function uploadPhoto(file: File, onProgress: (progress: number) => void = () => undefined): Promise<string> {
  const signed = await signUpload({ filename: file.name, content_type: file.type || "image/jpeg", size: file.size });
  if (useMock) {
    for (const progress of [18, 46, 72, 100]) {
      await new Promise((resolve) => window.setTimeout(resolve, 90));
      onProgress(progress);
    }
    return signed.file_key;
  }

  await new Promise<void>((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(signed.method, signed.upload_url);
    Object.entries(signed.headers).forEach(([name, value]) => xhr.setRequestHeader(name, value));
    xhr.upload.onprogress = (event) => {
      if (event.lengthComputable) onProgress(Math.round((event.loaded / event.total) * 100));
    };
    xhr.onload = () => xhr.status >= 200 && xhr.status < 300
      ? resolve()
      : reject(new Error("Your photo couldn't be uploaded. Please try again."));
    xhr.onerror = () => reject(new Error("Your photo couldn't be uploaded. Please try again."));
    xhr.send(file);
  });
  return signed.file_key;
}

export async function createPortrait(input: CreatePortraitRequest): Promise<PortraitCreatedResponse> {
  return useMock ? mock.createPortraitMock(input) : post("/portraits", input);
}

export async function getPortrait(id: string): Promise<PortraitResponse> {
  return useMock ? mock.getPortraitMock(id) : request(`/portraits/${encodeURIComponent(id)}`);
}

export async function createVariation(id: string, input: VariationRequest): Promise<PortraitCreatedResponse> {
  return useMock ? mock.createVariationMock(id, input) : post(`/portraits/${encodeURIComponent(id)}/variations`, input);
}

export async function unlockPortrait(id: string, input: UnlockRequest): Promise<UnlockResponse> {
  return useMock ? mock.unlockPortraitMock(id, input) : post(`/portraits/${encodeURIComponent(id)}/unlock`, input);
}

export async function downloadPortrait(id: string, format: "png" | "jpg" | "pdf"): Promise<DownloadResponse> {
  return useMock ? mock.downloadPortraitMock(id, format) : request(`/portraits/${encodeURIComponent(id)}/download?format=${format}`);
}

export async function getProducts(): Promise<ProductsResponse> {
  return useMock ? mock.getProductsMock() : request("/products");
}

export async function getCreditPacks(): Promise<CreditPacksResponse> {
  return useMock ? mock.getCreditPacksMock() : request("/credit-packs");
}

export async function buyNow(input: BuyNowRequest): Promise<BuyNowResponse> {
  return useMock ? mock.buyNowMock(input) : post("/orders/buy-now", input);
}

export async function sendMagicLink(input: MagicLinkRequest): Promise<{ sent: true }> {
  return useMock ? mock.sendMagicLinkMock(input) : post("/auth/magic-link", input);
}

export async function verifyMagicLink(input: MagicVerifyRequest): Promise<{ session_token: string; email: string }> {
  return useMock ? mock.verifyMagicLinkMock(input) : post("/auth/verify", input);
}

export async function getMe(): Promise<MeResponse> {
  return useMock ? mock.getMeMock() : request("/me");
}

export async function getMyPortraits(): Promise<{ portraits: UserPortrait[] }> {
  return useMock ? mock.getMyPortraitsMock() : request("/me/portraits");
}

export async function getMyOrders(): Promise<{ orders: UserOrder[] }> {
  return useMock ? mock.getMyOrdersMock() : request("/me/orders");
}

export async function getOrder(id: string): Promise<OrderResponse> {
  return useMock ? mock.getOrderMock(id) : request(`/orders/${encodeURIComponent(id)}`);
}

export function isMockMode(): boolean {
  return useMock;
}