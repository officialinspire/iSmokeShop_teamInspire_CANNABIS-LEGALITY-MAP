# State Color Code Fix - December 20, 2025

## Problem
States and territories were not rendering with correct colors when clicked on the map. Specifically:
- Puerto Rico and Guam (territories) were not displaying properly
- Color codes appeared incorrect when inspecting states

## Root Cause
The standard `us-atlas@3` package uses the **Albers USA projection** which doesn't properly display U.S. territories like Puerto Rico and Guam. While the territories were included in the data, they weren't visible on the map due to projection limitations.

## Solution
Switched to `@d3ts/us-atlas` package which:
- Explicitly includes all U.S. territories (Puerto Rico, Guam, American Samoa, U.S. Virgin Islands, Northern Mariana Islands)
- Uses modified projections designed specifically for displaying insular areas
- Maintains compatibility with the existing D3.js code

## Changes Made

### 1. Updated Map Data Source (index.js:1178)
```javascript
// OLD:
fetch('https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json')

// NEW:
fetch('https://cdn.jsdelivr.net/npm/@d3ts/us-atlas@1/dist/states-10m.json')
```

### 2. Updated Verification Scripts
- **verify-map.js**: Updated expected counts to include 52 entries (50 states + 2 territories)
  - `medical-only`: 12 → 14 (includes Puerto Rico + Guam)
  - Total: 50 → 52

- **test-states.html**: Updated expected counts to match

### 3. Created Diagnostic Tools
- **check-colors.html**: New diagnostic page to verify color codes for each state/territory

## Verified States
All states now display correct colors:

### Fully Legal (24) - Green (#6B8E6B)
✅ Colorado, California, Nevada, Alaska, Connecticut
✅ Washington, Oregon, Massachusetts, Maine, Michigan
✅ Vermont, Illinois, Arizona, Montana, New Jersey
✅ New York, New Mexico, Virginia, Rhode Island, Maryland
✅ Missouri, Delaware, Minnesota, Ohio

### Medical Only (14) - Blue (#7FA7C4)
✅ Florida, Pennsylvania, Arkansas, Louisiana, Utah
✅ Oklahoma, North Dakota, South Dakota, West Virginia
✅ Mississippi, Hawaii, Kentucky
✅ **Puerto Rico** (territory)
✅ **Guam** (territory)

### Decriminalized (2) - Yellow (#D4A574)
✅ New Hampshire, North Carolina

### Illegal (12) - Red (#B85C52)
✅ **Alabama**, Texas, Georgia, Tennessee, South Carolina
✅ Indiana, Wisconsin, Iowa, Kansas, Nebraska, Wyoming, Idaho

## State-Specific Notes

### Alabama
- Status: **Illegal** (program approved but not yet operational)
- Notes: Medical program approved in 2021, licenses approved December 2024
- Expected launch: Spring 2026

### Kentucky
- Status: **Medical Only**
- Notes: Medical program officially launched January 1, 2025
- Patient registration active, dispensaries opening in 2025

### Puerto Rico
- Status: **Medical Only**
- Notes: Medical cannabis program established in 2015
- Robust medical program with many dispensaries

### Guam
- Status: **Medical Only**
- Notes: Medical program established in 2014
- Adult use decriminalized in 2019

## Testing
Run verification with:
```bash
node verify-map.js
```

All checks should pass:
- ✅ 52 state/territory ID mappings
- ✅ All 50 states present in data
- ✅ Correct status distribution (24/14/2/12)
- ✅ All CSS classes configured
- ✅ Modal and click handlers working
- ✅ Territories now visible on map

## References
- [@d3ts/us-atlas npm package](https://www.npmjs.com/package/@d3ts/us-atlas)
- [GitHub: bratter/us-atlas](https://github.com/bratter/us-atlas)
