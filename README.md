# dcl-smart-stats
[3stat] smart item for Decentraland.

This item allow you to track users, visits, duration, transactions and bids on your Decentraland land for free.

# Usage

You don't need to register to use the analytics. Simply add the tracking to your scene, and the dashboard provided in the email will track your land  

## Decentraland Builder

Download `item.zip` and add it to the decentraland builder.

## Decentraland SDK

Copy the `lib/` folder and use `registerDclEvents()` in your `game.ts`

## Image tracking

Image tracking is an additional way to track your users. 

Simply add a texture using a 3pass provided url like:

`https://europe-west3-backend-339310.cloudfunctions.net/serve/USERID-ITEMID.jpg`

See `game.ts` for an example billboard.
