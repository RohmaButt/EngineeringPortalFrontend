# General architecture

Hermes is a [template based app](https://themeforest.net/item/metronic-responsive-admin-dashboard-template/4021469)

## Folder structure

The project's folder structure should feel pretty familiar to any developer used to React and Redux. The table below presents the main folders and files together with their description:

| File or folder                | Description                                                                                    |
| ------------------------------|------------------------------------------------------------------------------------------------|
| 📁  build                     | Build files. Not versioned.                                                                    |
| 📁  docs                      | Reference guides like the one you're currently reading.                                        |
| 📁  node_modules              | App dependencies. Not versioned.                                                               |
| 📁  public                    | Static files copied during build and accessible at the app's root                              |
| 📁  src                       | Actual source code. Compiled during build.                                                     |
|  ├─ 📁  _metronic             | Template related stuff                                                                         |
|  ├─ 📁  app                   | React components. Mostly functional ones                                                       |
|  ├─ 📁  setup                 | Template setup files                                                                           |
|  ├─ 📄 global.d.ts            | Template setup file                                                                            |
|  ├─ 📄  index.tsx             |                                                                                                |
|  ├─ 📄  react-app-env.d.ts    |                                                                                                |
|  ├─ 📄  reportWebVitals.ts    |                                                                                                |
|  ├─ 📄  setupTests.ts         |                                                                                                |
| 📄  .env                      | Application settings, with `development` / `production` / `staging` overwrites                 |
| 📄  package.json              | Package file describing the project and its dependencies, with its accompanying lock file      |

## General guidelines



