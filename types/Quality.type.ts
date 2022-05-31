export type Quality = {
  [key: string]: QualityProps;
  iridium: QualityProps;
  gold: QualityProps;
  silver: QualityProps;
  normal: QualityProps;
};

interface QualityProps {
  processingTime?: number;
  sellsFor: number;
  caskPriceMultiplier?: number;
  restore: {
    energy: number | null;
    health: number | null;
  };
}
