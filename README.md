# BrowserGame

Сайт за браузърна игра. Напревих сървъра с Node.js и Express, font-end: Angular. 

## Home page

Canvas animation login and register form.

## News page

Lists all the news and if clicked shows details. If the user is admin he can create, edit and delete news, these are separate pages.

## Inventory page

Only logged in. Lists all of the items that the user has. There is a button addItems, which is for test purposes it adds a random item from all of the items that the admin created. When clicking on sertain item a Dialog Material opens from where you can put it for auction. The admin gets all of the items.

## Auction page

If there are ongoing auctions they will appear there. Everyone can bid even the author, if he has enough money. The auction is 20 seconds. You can have only one auction at a time. When the auction is done the item and money are transfered, if someone bid of course.

## Forms

I used template driven forms and one reactive for the dialog, because there was no way to use a template form there.
