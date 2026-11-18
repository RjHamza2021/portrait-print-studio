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
  Product,
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
import styleExample1 from "../assets/style-example-1.jpg";
import styleExample2 from "../assets/style-example-2.jpg";
import styleExample3 from "../assets/style-example-3.jpg";
import styleExample4 from "../assets/style-example-4.jpg";
import styleExample5 from "../assets/style-example-5.jpg";
import styleExample6 from "../assets/style-example-6.jpg";
import royalTerrier from "../assets/royal-terrier.jpg";

const localStyleImages = [styleExample1, styleExample2, styleExample3, styleExample4, styleExample5, styleExample6];

export const mockStyles: StylesResponse = {
  groups: [
    { id: "classic", name: "Classic & Royal" },
    { id: "pop", name: "Pop & Graphic" },
    { id: "paint", name: "Watercolor & Sketch" },
    { id: "seasons", name: "Seasons & Occasions" },
    { id: "themes", name: "Movie & Character Themes" },
  ],
  styles: [
    { id: "royal-oil", group: "classic", name: "Royal Oil", description: "A timeless portrait with rich brushwork and heirloom detail.", thumb_url: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=360&h=360&fit=crop", human: true, pet: true, popular: true },
    { id: "renaissance", group: "classic", name: "Renaissance", description: "Museum-worthy golden light, stately pose, classical oils.", thumb_url: "https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?w=360&h=360&fit=crop", human: true, pet: true, popular: true },
    { id: "royal-velvet", group: "classic", name: "Velvet & Gold", description: "Deep velvet, gilded details, and a touch of grandeur.", thumb_url: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=360&h=360&fit=crop", human: true, pet: true, popular: false },
    { id: "baroque", group: "classic", name: "Baroque", description: "Dramatic chiaroscuro and richly layered old-master texture.", thumb_url: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=360&h=360&fit=crop", human: true, pet: true, popular: false },
    { id: "storybook-classic", group: "classic", name: "Storybook Classic", description: "A softly painted portrait straight from a beloved story.", thumb_url: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=360&h=360&fit=crop", human: true, pet: true, popular: false },
    { id: "pop-art", group: "pop", name: "Pop Art", description: "Joyful color, bold shapes, and a frame-worthy graphic feel.", thumb_url: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=360&h=360&fit=crop", human: true, pet: true, popular: true },
    { id: "comic-book", group: "pop", name: "Comic Book", description: "Energetic panels and bright illustrated character styling.", thumb_url: "https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?w=360&h=360&fit=crop", human: true, pet: true, popular: false },
    { id: "retro-poster", group: "pop", name: "Retro Poster", description: "A modern keepsake with mid-century poster charm.", thumb_url: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=360&h=360&fit=crop", human: true, pet: true, popular: false },
    { id: "neon-pop", group: "pop", name: "Neon Pop", description: "Luminous color and crisp graphic contrast.", thumb_url: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=360&h=360&fit=crop", human: true, pet: true, popular: false },
    { id: "geometric", group: "pop", name: "Modern Shapes", description: "Contemporary color blocking and clean shapes.", thumb_url: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=360&h=360&fit=crop", human: true, pet: true, popular: false },
    { id: "soft-watercolor", group: "paint", name: "Soft Watercolor", description: "Airy washes, gentle edges, and an original painted feel.", thumb_url: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=360&h=360&fit=crop", human: true, pet: true, popular: true },
    { id: "watercolor", group: "paint", name: "Watercolor", description: "Expressive pigment, delicate detail, and luminous paper.", thumb_url: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=360&h=360&fit=crop", human: true, pet: true, popular: false },
    { id: "pencil-sketch", group: "paint", name: "Pencil Sketch", description: "Fine graphite lines that make every whisker count.", thumb_url: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=360&h=360&fit=crop", human: true, pet: true, popular: false },
    { id: "ink-drawing", group: "paint", name: "Ink Drawing", description: "Confident ink contours with a hand-drawn sensibility.", thumb_url: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=360&h=360&fit=crop", human: true, pet: true, popular: false },
    { id: "impressionist", group: "paint", name: "Impressionist", description: "Soft light and lively, visible painterly strokes.", thumb_url: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=360&h=360&fit=crop", human: true, pet: true, popular: false },
    { id: "holiday", group: "seasons", name: "Holiday Keepsake", description: "Festive greenery and a little seasonal magic.", thumb_url: "https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?w=360&h=360&fit=crop", human: true, pet: true, popular: true },
    { id: "winter-wonder", group: "seasons", name: "Winter Wonder", description: "Soft snow, warm light, and a cozy winter palette.", thumb_url: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=360&h=360&fit=crop", human: true, pet: true, popular: false },
    { id: "spring-bloom", group: "seasons", name: "Spring Bloom", description: "Fresh flowers, bright skies, and gentle pastel color.", thumb_url: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=360&h=360&fit=crop", human: true, pet: true, popular: false },
    { id: "autumn-glow", group: "seasons", name: "Autumn Glow", description: "Warm copper leaves and golden-hour light.", thumb_url: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=360&h=360&fit=crop", human: true, pet: true, popular: false },
    { id: "birthday", group: "seasons", name: "Birthday Star", description: "A bright little celebration, with charm but no fuss.", thumb_url: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=360&h=360&fit=crop", human: true, pet: true, popular: false },
    { id: "storybook", group: "themes", name: "Storybook Hero", description: "Whimsical, hand-painted fantasy-book illustration.", thumb_url: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=360&h=360&fit=crop", human: true, pet: true, popular: true },
    { id: "space-explorer", group: "themes", name: "Space Explorer", description: "A playful cosmic adventure with starry details.", thumb_url: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=360&h=360&fit=crop", human: true, pet: true, popular: false },
    { id: "enchanted-garden", group: "themes", name: "Enchanted Garden", description: "A dreamy botanical world with gentle fantasy details.", thumb_url: "https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?w=360&h=360&fit=crop", human: true, pet: true, popular: false },
    { id: "storybook-adventure", group: "themes", name: "Adventure Tale", description: "A charming illustrated journey made for your favorite face.", thumb_url: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=360&h=360&fit=crop", human: true, pet: true, popular: false },
  ],
};

mockStyles.styles = mockStyles.styles.map((style, index) => ({
  ...style,
  thumb_url: localStyleImages[index % localStyleImages.length] ?? styleExample1,
}));

export const mockProducts: ProductsResponse = {
  products: [
    { id: "poster", name: "Fine art poster", description: "Museum-quality matte paper with rich, lasting color.", mockup_url: "https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?w=640&h=480&fit=crop", sizes: [{ id: "poster-12x16", label: "12 × 16 in", price: 19, currency: "USD" }, { id: "poster-18x24", label: "18 × 24 in", price: 29, currency: "USD" }], ships_in: "3–6 business days" },
    { id: "canvas", name: "Gallery canvas", description: "Gallery-wrapped canvas, ready to hang.", mockup_url: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=640&h=480&fit=crop", sizes: [{ id: "canvas-12x16", label: "12 × 16 in", price: 39, currency: "USD" }, { id: "canvas-16x20", label: "16 × 20 in", price: 59, currency: "USD" }], ships_in: "4–7 business days" },
    { id: "mug", name: "Ceramic mug", description: "A bright everyday keepsake, printed on both sides.", mockup_url: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=640&h=480&fit=crop", sizes: [{ id: "mug-11oz", label: "11 oz", price: 18, currency: "USD" }], ships_in: "3–6 business days" },
    { id: "shirt", name: "Classic T-shirt", description: "A soft, everyday tee with a crisp portrait print.", mockup_url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=640&h=480&fit=crop", sizes: [{ id: "shirt-s", label: "Small", price: 25, currency: "USD" }, { id: "shirt-m", label: "Medium", price: 25, currency: "USD" }, { id: "shirt-l", label: "Large", price: 25, currency: "USD" }], ships_in: "4–7 business days" },
    { id: "hoodie", name: "Cozy hoodie", description: "A relaxed layer for bringing your best friend along.", mockup_url: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=640&h=480&fit=crop", sizes: [{ id: "hoodie-s", label: "Small", price: 48, currency: "USD" }, { id: "hoodie-m", label: "Medium", price: 48, currency: "USD" }, { id: "hoodie-l", label: "Large", price: 48, currency: "USD" }], ships_in: "4–7 business days" },
    { id: "blanket", name: "Fleece blanket", description: "A plush personalized throw for cozy days.", mockup_url: "https://images.unsplash.com/photo-1600369672770-985fd30004eb?w=640&h=480&fit=crop", sizes: [{ id: "blanket-30x40", label: "30 × 40 in", price: 49, currency: "USD" }, { id: "blanket-50x60", label: "50 × 60 in", price: 79, currency: "USD" }], ships_in: "5–8 business days" },
    { id: "framed-print", name: "Framed print", description: "A finished gallery-ready print in a classic frame.", mockup_url: "https://images.unsplash.com/photo-1507643179773-3e975d7ac515?w=640&h=480&fit=crop", sizes: [{ id: "frame-12x16", label: "12 × 16 in", price: 49, currency: "USD" }, { id: "frame-18x24", label: "18 × 24 in", price: 79, currency: "USD" }], ships_in: "5–8 business days" },
    { id: "greeting-cards", name: "Greeting cards", description: "A small stack of portrait keepsakes to share.", mockup_url: "https://images.unsplash.com/photo-1525441799830-cc6c6ba0b3b0?w=640&h=480&fit=crop", sizes: [{ id: "cards-5x7", label: "Set of 10 · 5 × 7 in", price: 24, currency: "USD" }], ships_in: "3–6 business days" },
  ],
};

mockProducts.products = mockProducts.products.map((product, index) => ({
  ...product,
  mockup_url: localStyleImages[index % localStyleImages.length] ?? styleExample1,
}));

export const mockCreditPacks: CreditPacksResponse = {
  packs: [
    { id: "pack_1", name: "1 HD download", credits: 1, price: 2.99, currency: "USD", badge: null },
    { id: "pack_5", name: "5 HD downloads", credits: 5, price: 9.99, currency: "USD", badge: null },
    { id: "pack_10", name: "10 HD downloads", credits: 10, price: 19, currency: "USD", badge: "Best value" },
  ],
};

export const demoPortraitImage = royalTerrier;

const portraitProgress = new Map<string, { startedAt: number; styleId: string; subject: "human" | "pet" }>();
const savedPortraits: UserPortrait[] = [];
const savedOrders: UserOrder[] = [];

export async function signUploadMock(input: UploadSignRequest): Promise<UploadSignResponse> {
  await pause(180);
  return {
    upload_url: URL.createObjectURL(new Blob([], { type: input.content_type })),
    method: "PUT",
    headers: { "Content-Type": input.content_type },
    file_key: `uploads/mock-${Date.now()}-${encodeURIComponent(input.filename)}`,
  };
}

export async function createPortraitMock(input: CreatePortraitRequest): Promise<PortraitCreatedResponse> {
  await pause(260);
  const id = `p_${createId()}`;
  portraitProgress.set(id, { startedAt: Date.now(), styleId: input.style_id ?? "custom", subject: input.subject });
  savedPortraits.unshift({ id, preview_url: demoPortraitImage, style_id: input.style_id ?? "custom", created_at: new Date().toISOString(), hd_unlocked: false });
  return { id, status: "queued" };
}

export async function getPortraitMock(id: string): Promise<PortraitResponse> {
  await pause(100);
  const source = portraitProgress.get(id) ?? { startedAt: Date.now() - 6_000, styleId: "royal-oil", subject: "pet" as const };
  const progress = Math.min(100, Math.round(((Date.now() - source.startedAt) / 6_000) * 100));
  return { id, status: progress === 100 ? "done" : progress > 0 ? "processing" : "queued", progress, preview_url: demoPortraitImage, style_id: source.styleId, subject: source.subject, hd_unlocked: false, error: null };
}

export async function createVariationMock(id: string, input: VariationRequest): Promise<PortraitCreatedResponse> {
  const original = portraitProgress.get(id) ?? { startedAt: Date.now() - 6_000, styleId: "royal-oil", subject: "pet" as const };
  const nextId = `p_${createId()}`;
  const styleId = input.style_id ?? "custom";
  portraitProgress.set(nextId, { startedAt: Date.now(), styleId, subject: original.subject });
  savedPortraits.unshift({ id: nextId, preview_url: demoPortraitImage, style_id: styleId, created_at: new Date().toISOString(), hd_unlocked: false });
  return { id: nextId, status: "queued" };
}

export async function unlockPortraitMock(_id: string, input: UnlockRequest): Promise<UnlockResponse> {
  return input.method === "pay" ? { pay_url: "https://checkout.example.test/mock-credits" } : { unlocked: true };
}

export async function downloadPortraitMock(id: string, format: "png" | "jpg" | "pdf"): Promise<DownloadResponse> {
  return { url: `${demoPortraitImage}?download=${encodeURIComponent(id)}&format=${format}`, expires_at: new Date(Date.now() + 15 * 60_000).toISOString() };
}

export async function getProductsMock(): Promise<ProductsResponse> {
  return mockProducts;
}

export async function getCreditPacksMock(): Promise<CreditPacksResponse> {
  return mockCreditPacks;
}

export async function buyNowMock(input: BuyNowRequest): Promise<BuyNowResponse> {
  const product = mockProducts.products.find((entry) => entry.id === input.product_id);
  const size = product?.sizes.find((entry) => entry.id === input.size_id);
  const orderId = `o_${createId()}`;
  savedOrders.unshift({ id: orderId, status: "processing", product_name: `${product?.name ?? "Print"} · ${size?.label ?? "Custom"}`, tracking_url: null, created_at: new Date().toISOString(), portrait_preview_url: demoPortraitImage });
  return { order_id: orderId, pay_url: "https://checkout.example.test/mock-print" };
}

export async function sendMagicLinkMock(_input: MagicLinkRequest): Promise<{ sent: true }> {
  return { sent: true };
}

export async function verifyMagicLinkMock(_input: MagicVerifyRequest): Promise<{ session_token: string; email: string }> {
  return { session_token: "mock-session-token", email: "studio@example.test" };
}

export async function getMeMock(): Promise<MeResponse> {
  return { email: "studio@example.test", credits: 3 };
}

export async function getMyPortraitsMock(): Promise<{ portraits: UserPortrait[] }> {
  return { portraits: [...savedPortraits] };
}

export async function getMyOrdersMock(): Promise<{ orders: UserOrder[] }> {
  return { orders: [...savedOrders] };
}

export async function getOrderMock(id: string): Promise<OrderResponse> {
  const order = savedOrders.find((entry) => entry.id === id);
  if (!order) throw new Error("That order could not be found.");
  return order;
}

function createId(): string {
  return Math.random().toString(36).slice(2, 9);
}

function pause(milliseconds: number): Promise<void> {
  return new Promise((resolve) => window.setTimeout(resolve, milliseconds));
}

export type { Product };