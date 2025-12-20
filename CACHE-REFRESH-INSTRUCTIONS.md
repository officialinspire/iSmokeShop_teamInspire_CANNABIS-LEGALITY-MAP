# Cache Refresh Instructions

## The Issue
Your browser is caching the old `index.js` file, so you're not seeing the updated state colors and new territories (Puerto Rico and Guam).

## Solution: Hard Refresh Your Browser

### Windows/Linux:
- **Chrome/Edge/Firefox**: `Ctrl + Shift + R` or `Ctrl + F5`
- **Alternative**: `Shift + F5`

### Mac:
- **Chrome/Edge**: `Cmd + Shift + R`
- **Safari**: `Cmd + Option + R`
- **Firefox**: `Cmd + Shift + R`

### Mobile Devices:

#### iOS (Safari):
1. Open Settings app
2. Scroll down to Safari
3. Tap "Clear History and Website Data"
4. Reload the page

#### Android (Chrome):
1. Tap the three dots menu
2. Tap Settings
3. Tap Privacy and Security
4. Tap "Clear browsing data"
5. Select "Cached images and files"
6. Tap "Clear data"
7. Reload the page

## Changes in This Update (v2.1)

✅ **Alabama**: Now correctly shows as "illegal" with notes about the medical program expected to launch spring 2026

✅ **Puerto Rico**: Added as "medical-only" territory with robust medical program (established 2015)

✅ **Guam**: Added as "medical-only" territory with decriminalized possession (medical since 2014)

✅ **All State Colors**: Fixed to display correct colors based on status:
- Green: Fully Legal (24 states)
- Blue: Medical Only (12 states + 2 territories)
- Yellow/Gold: Decriminalized (2 states)
- Red: Illegal (12 states)

## Verify the Fix Worked

After hard refreshing, open your browser's **Developer Console** (F12) and look for these messages:
```
Map loaded - Total features: 52
Rendered states: 52
Puerto Rico rendered: Yes
Guam rendered: Yes
```

If you still see issues, please:
1. Clear your browser cache completely
2. Close and reopen your browser
3. Try a different browser
4. Try incognito/private browsing mode

## Still Having Issues?

If you've tried all the above and states still show wrong colors or Puerto Rico/Guam aren't showing:
1. Check the browser console (F12) for any error messages
2. Take a screenshot of the console output
3. Report the issue with the console output included
