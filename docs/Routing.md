# Routing

## A preamble on SPAs

Work Afiniti portal is a single-page application (SPA).

In traditional ASP.NET MVC websites, accessing a URL triggers a request to corresponding MVC controller action. That controller action executes business logic and passes data to a view, typically written using Razor, that processes the data and generates an HTML document. That document gets sent back to the browser that in turn displays it.

SPAs work differently in that only one HTML document is used throughout the lifetime of the application. That single HTML document typically loads a JavaScript bundle that takes care of creating and maintaining the UI, fetching data from APIs and modifying the DOM dynamically as the user interacts with the application. This has several advantages:

- Only strictly needed information (i.e. the underlying data) transits over the network, limiting latency
- The screen flow isn't interrupted by blank pages everytime a new page starts loading, resulting in a more fluid experience
- This makes creating offline apps easier - service workers can cache the JavaScript bundle once and for all and let it gracefully handle offline scenarios.

## Routing in SPAs

A drawback of SPAs is if implemented naively, they break navigation. As a user goes from place to place in the application, JavaScript code will indeed update the UI but this will all happen within the same, single HTML document making up the SPA. Pressing their browser's back button, users may find it disconcerting to find themselves redirected to whatever page they were consulting before they opened the SPA instead of whatever section of the SPA they were finding themselves in prior to hitting 'back'. Enter [React router](https://reactrouter.com/web/guides/quick-start).

React router uses the HTML5 `history` API to tightly couple URLs with the rendering of certain components in the React component tree. The website's [quick start guide](https://reactrouter.com/web/guides/quick-start) explains how this works in a very clear and succinct way, so we won't do that here. The basic ideas are the following:

- You link to a URL by wrapping an element in a `Link` or `NavigationLink` component
- You declare that a component should render at a certain URL by using a `Route` component. `Route` components have:
  - A `path` prop you can use to specify the URL(s) at which your component should render
  - A `component` prop you can use to specify what component to render. Alternatively, you can pass in a `render` function prop that will be rendered at matching URLs.
- Components rendered by `Route` notably receive:
  - a `match` prop containing information about the matching URL (for example, query string data can be found in `match.params`)
  - a `history` prop pointing to the HTML5 `history` instance being used by the router

React router enables the following things:

- Directly accessing a specific portion of the application by typing the corresponding URL (for example, if a user wants to share the URL of an account page, they can do that)
- Navigating back and forward within the application using the browser's 'back' and 'forward' buttons

Notice that IIS needs to be configured for this to work: when accessing a URL directly in the browser, we need to tell IIS not to try and load the resource, but instead return the index.html document in all cases. This is done using a `rewriteRule` in `web.config`.
