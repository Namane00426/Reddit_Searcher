# Reddit_Searcher

The application will allow users to view and search posts and comments provided by the Reddit API.

# To Run

Run `npm start` in the project root and the app will be available on port 3000.

# State

The app's state is totally normalized, with slices for categories, subreddits, and topics.

# Routes

- `/edit-categories` – form to edit a new list of
  categories
- `/categories` - index of all categories
- `/categories/:categoryId` - page for an individual category
- `/search-subreddit` - search a subreddit from the category list
- `/subreddits` - index of all subreddits
- `/subreddits/:subredditId` - page for an individual subreddit

# To Test

1. Create/edit a new category list
2. Visit the page for search subreddit and select one of categories -> subreddits appear
3. Select one of subreddits of the category
4. Visit the page for an individual subreddit and extend and show comments

# Questions
