/**
 * Reusable style constants for common UI patterns
 */

/**
 * Text ellipsis styles for truncating text with ellipsis
 * @param lineClamp - Number of lines to show before truncating (default: 1)
 */
export const textEllipsis = (lineClamp = 1) => ({
  overflow: "hidden",
  display: "-webkit-box",
  WebkitLineClamp: lineClamp,
  WebkitBoxOrient: "vertical" as const,
  height: "auto",
});

/**
 * Hide scrollbar while keeping scroll functionality
 */
export const hideScrollbar = {
  scrollbarWidth: "none" as const,
  "&::-webkit-scrollbar": { display: "none" },
};

/**
 * Center content flex styles
 */
export const flexCenter = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

/**
 * Full width and height styles
 */
export const fullSize = {
  height: "100%",
  width: "100%",
};
