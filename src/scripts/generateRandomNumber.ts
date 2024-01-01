import { banners } from "@data/banners";

export function generateRandomNumber (numberRange: number): number {
  return Math.floor(Math.random() * numberRange);
}

export function generateRandomBanner (): string {
  return banners[generateRandomNumber(banners.length)];
}

export function applyBanner (): void {
  const banner = document.querySelector('#banner') as HTMLDivElement;
  if (banner instanceof HTMLDivElement) {
    banner.style.backgroundImage = `url(${generateRandomBanner()})`
  }
}
