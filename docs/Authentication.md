# Authentication

Work portal uses [Crowd SSO Tokens] for authentication. Crowd Tokens are fetched from the Portal API by calling `POST /API/User/Login` endpoint. The token with other user info is stored in localStorage of browser.

The login flow is implemented via the `Login` component. This component gets UserName or UserEmail with Password from user and checks whether a user exists in the api's response:

- If a user is fetched from API with Crowd information, it renders its own children components from Authorization section
- If not, it renders the login screen

Note:
All API calls are using `portal-token-key` in its request headers and portal API will validate this token at its side. If `portal-api-token-key` token from application request is not valid then API will return valid token in response headers with `portal-api-token-key` key.

# Authorization

- It fetches authorization details of user and display data for user according to his authorized role and rights for Left menu and for multiple screens.
