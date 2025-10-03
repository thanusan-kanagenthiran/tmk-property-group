# Constants Directory

This directory contains reusable constants and utility values used throughout the application.

## Files

### `styles.ts`

Reusable style constants for common UI patterns. These utilities help reduce code duplication and maintain consistency across components.

#### Available Utilities

**`textEllipsis(lineClamp?: number)`**
- Truncates text with ellipsis after specified number of lines
- Default: 1 line
- Example:
  ```typescript
  import { textEllipsis } from '@/constants/styles';
  
  <Typography sx={textEllipsis(2)}>
    Long text that will be truncated after 2 lines...
  </Typography>
  ```

**`hideScrollbar`**
- Hides scrollbar while keeping scroll functionality
- Works in all major browsers (Webkit and Firefox)
- Example:
  ```typescript
  import { hideScrollbar } from '@/constants/styles';
  
  <Box sx={{ overflowX: 'auto', ...hideScrollbar }}>
    Content with hidden scrollbar
  </Box>
  ```

**`flexCenter`**
- Centers content using flexbox
- Sets display, justify-content, and align-items
- Example:
  ```typescript
  import { flexCenter } from '@/constants/styles';
  
  <Box sx={flexCenter}>
    Centered content
  </Box>
  ```

**`fullSize`**
- Sets element to full width and height (100%)
- Example:
  ```typescript
  import { fullSize } from '@/constants/styles';
  
  <Box sx={{ ...fullSize, minHeight: '50vh' }}>
    Full size container with minimum height
  </Box>
  ```

## Adding New Constants

When adding new constants:

1. **Keep them generic** - Constants should be reusable across multiple components
2. **Document them** - Add JSDoc comments explaining usage
3. **Use TypeScript** - Add proper type definitions
4. **Update this README** - Add documentation for new constants

## Usage Best Practices

- Import only what you need: `import { flexCenter, fullSize } from '@/constants/styles'`
- Use spread operator to combine with other styles: `sx={{ ...flexCenter, padding: 2 }}`
- Don't override core properties defined in constants - create new utilities instead
