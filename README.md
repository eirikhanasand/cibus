# Cibus
## INFT2508 Semester project

### Project description
Cibus is a marketplace where users can buy items. The items are provided as lists with images, bookmark options and cart interaction methods to provide a seamless user experience. The focus of the application is on the display of the items. Therefore, the app does not edit the endpoint at any point. The reason this is implemented is due to it requiring both a CDN handler for images, and image upload feature, which would increase the time complexity of the application significantly, as explained in the limitations section. The user can checkout items and buy them, but there is no payment logic.

### Features
- View items
- Bookmark items
- Add items to cart
- Purchase cart
- Reset cart
- Filter items by text
- Filter items by category
- Support for Norwegian and English
- Toggle between light and dark theme
- API hosting advertisements and categories including subcategories

### Design decisions and main components
The app focuses on the display of items, and the interaction with items. Items can be viewed as a list, or found by clicking categories. Items can be displayed with detailed information, or little information, depending on the list.

#### API
The ‘main’ component of the application is the API. This is what makes the app possible, and provides the actual content. The backend is a node application written in TypeScript. There are 50 hard coded items provided by default, to show the idea I had in mind while creating this application. There are two endpoints, ads, and categories. Ads serves all 50 advertisements through a get endpoint. There are also put and delete endpoints, but these are not used by the frontend, due to listing items not being included in the scope of the assignment. More on this may be found in the limitations section at the bottom of this file. Furthermore, there is a category endpoint which provides all the categories available, as well as the subcategories of each category. The subcategories are scarcely used by the application, but would be necessary to grow the application, therefore they are included.

#### Landing screen
This is the main screen of the application, and the one the user lands on when opening the app. Here there is a list of categories, with an ability to see more. There are also two rows of suggested items where the user can find items they might be interested in. 

Whenever the user clicks one of the categories the screen is changed to display the item list, where each name will only have name and image, plus a bookmark option. The user can click the ad to enter a detailed view where all information for each ad is available.

The user can also bookmark the item, which we will get back to later. This view also consists of a filter option, where the user can filter both by text, and categories. The items are first filtered by category, then text. This allows the user to quickly find the items that are relevant to them.

The landingscreen also has a theme and language option that allows the user to change the UI of the application. There is a light mode consisting mainly of beige and white, and a dark mode consisting mainly of dark blue / green and black. The theme has been implemented with regard to keeping the color codes similar in both themes, so the contrasts will remain the same, and the app will feel the same regardless of which theme is selected. The landingscreen also has a language toggle, which allows the user to switch between Norwegian and English in an instant.

The header is maintained on all screens, except the item details screen (AdScreen). Here the search option was not natural, as the user has already selected an item that they are interested in, plus there is a similar items list below the item they are viewing.

Additionally, the landing screen features a category view, where the user can select categories, or a view more option, which displays all categories. This feature works by opening the item list, with the relevant categories checked. For example if the user clicks the “clothes” option on the landing screen, the clothes option will be selected in the category filter menu. This means that when the user clicks clothes, they will be presented with all the clothes on the market. The show all option works a bit differently, as nothing is selected, the view is just opened. This means that the user will see all categories available, as well as all items on the market displayed below.

#### Bookmark screen
The bookmark screen consists of a scrollable view similar to the item filtering list, just that it only displays the items that have been bookmarked. This allows the user to quickly find back to the items that they are interested in. Here the user can also remove the bookmark, if they are no longer interested in an item. Furthermore, the user can click an item on the bookmark screen to view its details, similar to how this functionality is implemented when searching or filtering items on the landing screen. The same header as on the landing screen is displayed.

#### Cart screen
The cart screen consists of three rows of recommended items if empty. Here large pictures are displayed, to gain the interest of the user. This screen also features a quick add mode, so any items clicked here will be directly added to cart instead of displaying the details. This means that the user can quickly buy items. This also allows the user to quickly add another item, if they for example forgot to add one when checking out, or suddenly realized that they wanted one of their bookmarked items anyway (more on the bookmark detail later).

When one or multiple items have been added to cart, the list of items in the cart is displayed, with only the title and price of each item. The total is calculated and displayed to the user. On the bottom of the screen, the user will now have two new options; reset, and pay. The first option empties the cart but persists the bookmarks, while the second (pay) option empties the cart, and removes any purchased bookmarked items from bookmarks. This is done because when the user has purchased an item there is no need for the item to be bookmarked after it has been purchased. (As an enhancement, this could be a feature in case the user repeatedly buys the same item, but this is not taken into account in this scenario). When paid or reset, the screen resets to its initial state of displaying three rows of recommended items.

#### Recommendations feature
This feature is what displays the recommendations to the user. This feature consists of an “algorithm” that takes into account what items the user has bookmarked, and the items the user has purchased. For example if the user is buying a sweater, it will recommend other sweaters, as well as other types of clothing. It will also take into consideration the bookmarks. If there is no relevant item to display to the user, random unrelated items will be displayed. Nothing relevant means that there is no other item with a similar name, nor a similar category or subcategory. Subcategories are a hidden feature that could be integrated into the app in a larger version, but I have not spent time on the subcategories feature for this assignment.

#### Header
The header is persisted on all screens except the AdScreen, as previously mentioned. The ad screen displays a search bar, theme toggle and language toggle by default. The theme and language icons are only available here, as there is no settings page. This is because the settings page would only have these two features, which are better integrated in other ways in my opinion. For example, I think it provides a bad user experience to hide the language toggle inside a menu, as the user will hardly be able to find it. This is a feature that you might need right away when downloading the app, therefore I think that you should be able to see it right away.

The search bar in the header changes the UI, by now providing a “go back” option to hide this new view. The new view hides the theme and language toggles, and instead show a filter icon. This is because when the user is searching for an item, they would likely also want a filter categories feature at the same time. This new UI can be dismissed by unfocusing the search input bar if no interaction is provided, or by using the go back feature.

When the user interacts with the filter of the header, the items in the list will change on the fly, without the user having to press an additional search button to prevent typos or other actions, as the user can see exactly what items are going to be returned no matter what the search input is, or what categories are filtered by.

### Limitations and assignment scope
This application could quickly grow out of size, therefore I limited meself to some features to make sure the app feels really smooth for the features that are there, instead of it being a ton of features where nothing really fits in. 

#### Map features
The map option has been skipped, as I did not feel like this fit into the application. There is a cart option where you can checkout, therefore from a business scenario you are likely not traveling around to get each item, but rather they are brought to you. There is no option to filter by location, as this is closely related to the map feature, which is an optional feature. When the map is integrated it is much easier to filter by distance. Since there are random locations, I felt like a list of 50 random locations would not really fit into the application. 

#### Payment handling
The payment handling was mostly skipped. There is a pay option, which empties the cart, removes relevant bookmarks and resets the screen to its original state. Here it would have been easy to integrate payment logic, which is also stated by a longer comment in this code stating how I would have implemented the payment logic if I was to do so.


#### Settings screen
As mentioned earlier, there is no setting screen. However, these features have **NOT** been skipped. They are integrated seamlessly in the header to provide a more smooth feel to the application. It interacts well with the user and these elements do not create noise when interacting with the rest of the application. This allows the user to change the theme or language on the fly, for example if they enter an environment that requires a brighter or darker screen, or if they are showing an item to someone else that does not speak the same language.

Note that if I was to implement further options such as an account and more languages, I would rework these options, so that language is only shown right away when opening the application for the first time, and then hidden away in the menu. Having two settings in the header is fine, but there is not space for more than this, therefore this is the limit.

#### Endpoint limitations
There is no interaction with the PUT or DELETE endpoints of the backend, as the application is already large for this limited time available, therefore I did not see it fit to add image CDN handling, image upload and ad preview features.

#### Assets
All images and logos in the application are either mine, or copyright free images from Pixabay, or similar no copyright restriction providers. Each advertisement provides only one image, as there are 50 advertisements. Finding multiple copyright free images of the same 50 items is an extremely time-intensive task, which is not the scope of this assignment. This provides a good idea of how the feature would be integrated, and would be handled by the user in ‘real life’, as they can take as many pictures as they would like of the item that they are selling.

#### Testing
The application was tested on a simulated iPhone 14, iPhone 14 Pro, and a physical iPhone 12 Pro. All of these devices have the same dimensions, but they are all I have available, therefore I have not been able to test with different dimensions. The application requires the backend to run to work initially, but can then be used remotely due to caching done through Redux. For data to be fetched from localhost, the backend and application must run on the same device. You can open this up manually by making the endpoints secure, mapping the localhost to the localhost of the device, or allowing the application to fetch from the IP the server is running on. I have not included this in the submitted version, as the IP will be different for you, therefore it has no use.

Application completed 07.11.23 by Eirik Hanasand.
