export function pickNextImageIndex(
  currentIndex: number,
  imageCount: number,
  randomValue = Math.random(),
) {
  if (imageCount <= 1) return currentIndex;

  const offset = 1 + Math.floor(randomValue * (imageCount - 1));
  return (currentIndex + offset) % imageCount;
}
