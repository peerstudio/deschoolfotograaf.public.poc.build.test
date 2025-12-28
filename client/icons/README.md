# Product Icons

This directory contains product icons downloaded from the external site.

## Downloading Icons

There are two ways to download the icons:

### Option 1: Download Common Icons (Quick Start)

Download a predefined list of common product icons:

```bash
pnpm icons:download
```

This downloads common icon names like `book_medium.png`, `photo_medium.png`, etc.

### Option 2: Fetch All Icons from Database (Recommended)

Download all icons referenced in your database:

```bash
pnpm icons:fetch-all
```

This connects to your database, fetches all unique icon paths from the `ProductIcons` table, and downloads them automatically.

## Icon Format

Icons are stored in the format:
- Database: `~/Images/Icons/book_medium.png`
- Local: `static/icons/book_medium.png`
- URL: `/icons/book_medium.png`

The application automatically converts the database paths to local URLs.

## Manual Download

If you need to download a specific icon manually:

```bash
# Example: Download book_medium.png
curl https://test.shop.deschoolfotograaf.be/Images/Icons/book_medium.png -o static/icons/book_medium.png
```

## Notes

- Icons are downloaded from: `https://test.shop.deschoolfotograaf.be/Images/Icons/`
- Local icons are served from the `static/icons/` directory
- The `.gitkeep` file ensures the directory is tracked in git
- You may want to add `static/icons/*.png` to `.gitignore` if icons are large or frequently updated
