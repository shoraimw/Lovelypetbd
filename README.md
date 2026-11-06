# Lovely Pet BD — Premium Storefront

A responsive Next.js storefront redesign for Lovely Pet BD.

## Stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- Lucide icons
- Custom responsive CSS

## Run locally

1. Install Node.js 20.9 or newer.
2. Install dependencies with npm install.
3. Start the development server with npm run dev.
4. Open http://localhost:3000.

Build for production with npm run build and start with npm start.

## Project structure

- app/ — App Router entry, metadata and global styles.
- components/storefront.tsx — interactive storefront experience.
- data/catalog.ts — editable pet categories and collection content.
- public/ — static brand assets.

## Before production launch

The GitHub repository was empty when this redesign started. This commit establishes the new frontend foundation; it does not migrate an existing backend, checkout, customer accounts, inventory or order-management system.

The current live site's contact details and broad category structure were used as reference points. Collection cards are discovery/enquiry entry points, not live product listings. Connect the real product catalogue, product detail pages, inventory, cart, checkout, payment and order tracking before treating this as a transactional store.

Update the collection content and imagery in data/catalog.ts. The current photographs are remote Unsplash image URLs used as visual placeholders; replace them with Lovely Pet BD-owned or licensed product and pet photography before production.

WhatsApp enquiries currently open a pre-filled message to the existing primary contact number. Confirm that this number is still the correct order/support channel before launch.

## Design direction

The visual system uses warm ivory, forest green and soft pet-inspired accents, with responsive navigation, search/filterable collections, category discovery, contact actions and a mobile-friendly layout. It takes inspiration from the shopping patterns and content hierarchy of the supplied reference stores without copying their branding or assets.
