<img src="https://cloud.githubusercontent.com/assets/478864/22186847/68223ce6-e0b1-11e6-8a62-0e3edc96725e.png" width=30> Pet Store Routes
===

Create a pet store app that uses react-router to manager page state!

You can either create a backend, or just hard code source data in the app. Use of `redux` for state management is up to you.

Implementation of the route-specific components should be to spec, but can be minimal.

# Routes and Wireframe of the App 

![fullsizerender 2](https://cloud.githubusercontent.com/assets/478864/24019680/31606d80-0a56-11e7-8c0b-67e27e829f93.jpg)

Notes:

* There is a common navigation bar across all pages
* "Home" page links to Stores
* Stores is a list of all stores. Click on a store to transition
* Store shows the name and location of a given store. It has two substates:
  * a list of pets at the store, clicking on a pet takes you to that pet:
  * pet detail - the detail for a particular pet
  
## Bonuses!

Add a client-side filter for the pets view: a drop down with "All" and then animal types ('cats', 'dogs', 'birds', etc.). 
If there is a filter, it should be added as a query parameter to the route

Create a "Buy" button that adds that pet to a shopping cart. The button should appear both in list of pets as
well as pet detail. If user clicks buy again, same pet should not be added twice (but not a user error).

Add another top-level page "Cart" that displays the lists of pets in the cart. (hint: you should be able to 
re-use your pet list components (but don't show the buy button here). Clicking on a pet in the list should still navigate
back to the `/stores/store_id/pets/pet_id` route (okay if has buy button, but shouldn't duplicate).

## Rubric *20pts*
- Routes and nested routes (pet list/pet detail) to spec *7pts*
- Navigation (moving between routes) *5pts*
- Idomatic use of react router *5pts*
- Idomatic `url`'s *3pts*
