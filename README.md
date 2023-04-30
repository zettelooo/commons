# Zettel: Web Application

This solution consists of a root project which is responsible to manage dependencies, linting, building, and other management aspects of its sub-projects.

The sub-projects are placed in independent folders directly under the main project, and some of them are dependent to other ones. They include:

1. **Web**, the web application for note taking
1. **Desktop**, the Electeron implementation for the browser and to wrap the **Web** application on desktop devices
1. **Shared**, a set of shared implementations between the two above
1. **Extension**, the NPM package of web extension API, also used by **Web**

## Installation & Development

> Currently, we have removed **cypress** for performance issues. We may add it again in the future. So, the following documentations addressing that package will not be applicable unil then.

To be able to run **cypress**, follow [this link](https://docs.cypress.io/guides/guides/continuous-integration.html#Advanced-setup). In *Ubuntu/Debian* run this:

```bash
$ sudo apt-get install libgtk2.0-0 libgtk-3-0 libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb
```

Clone the projects:

```bash
$ git clone git@gitlab.com:zettelproject/frontend.git
```

Install the dependencies (both root and sub-projects):

```bash
$ npm install
```

> The script doesn't install **Desktop** dependencies for efficiency reasons. For more dependency management options, see `install-dependencies.js` script documentation below.

Verify **cypress** installation (and install if required):

```bash
$ npm run cypress -- verify
```

```bash
$ npm run cypress -- install
```

You may need to open the cypress UI once:

```bash
$ npm run cypress -- open
```

## Development

It's recommended to use **VS Code** to develop this project.
You need to have **Prettier** and **ESLint** extensions to be installed on your IDE.
This project uses a modified version of the **Airbnb** style.

Start the development server on `http://localhost:9712/` and watch for changes:

```bash
$ npm run develop:web   # Or, for short:   npm run .d
```

Commit messages have to follow [commit conventions](https://commitlint.js.org/).

Lint all the staged files:

```bash
$ npm run lint.check:staged   # Or, for short:   npm run .l
```

> Linting will be called _automatically_ before committing. Any linting error will abort the process. Therefore, you possibly need to lint the staged changes manualy before trying to commit them yourself and fix all the errors and as much as possible of warnings first.

Lint all the source files:

```bash
$ npm run lint.check
```

> **To Do:** It has to be called in the **CI/CD** pipelines. Because, linting can be bypassed during `git commit` by using `--no-verify` flag.

## Backend API

Update **Web**'s `@zettelproject/api` dependency to the latest available version:

```bash
$ npm run .a
```

## Testing

No tests are setup for this project yet.

## Build

Build **Web** for Stage environment (output goes to `./dist/web-stage`):

```bash
$ npm run build.web:stage
```

Build **Web** for Live environment (output goes to `./dist/web-live`):

```bash
$ npm run build.web:live
```

## Versioning

Versioning is only possible on the `develop` branch. In fact, all the new implementations are meant to be merged first to that branch.

After making a new version, we may merge the branch `develop` into `stage`. This will cause an automatic deployment to the [Stage environment](https://stage.zettel.co). We may also merge the branch `stage` into `master`. This will cause an automatic deployment to the [Live environment](https://app.zettel.co).

In order to create a new version, after merging all the implementation to the `develop` branch, when the branch is clean, we can use the NPM default versioning script:

```bash
$ npm version patch
$ npm version minor
$ npm version major
$ npm version <arbitrary-version>
```

## Misc

Check for all the updates available on the dependencies of the root project only:

```bash
$ npm run updates.check
```

Actually, upgrade all the dependencies of the root project only:

```bash
$ npm run updates.install
```

> The two above commands are also available inside all the sub-project independently as well.

View GIT history visualized:

```bash
$ npm run gource
```

> You probably need to install `gource` locally first.<br/>
See this link: [Gource.id](https://gource.io/)

Summarize the size of the code base in lines of code:

```bash
$ npm run status
```

## Scripts

There are a few Node scripts provided to make things easier in some certain cases.

To (re)install or clean dependencies of both the root project and its sub-project, even including **Desktop**, you may use the `scripts/install-dependencies.js` script. For more detaild information about how to use it, run the following command:

```bash
$ node ./scripts/install-dependencies.js help
```

The following script builds the **Web** for the Stage environment with a random new version into the `./dist/web-stage` folder, just for test purposes:

```bash
$ node ./scripts/build-web-for-test.js [<version-postfix> [stage]]
```

This one does the same as above, but for the Live environment, with the build artifacts going to the `/dist/web-live` folder:

```bash
$ node ./scripts/build-web-for-test.js <version-postfix> live
```

> Deploying a testing version to the Live environment should probably never happen, unless in a very rare situation or under a very special condition. Please, make sure you don't use it unless you're pretty sure about what you're doing.

## Ejection

`create-react-app`'s eject command ([shouldn't be used as long as possible!](https://medium.com/curated-by-versett/dont-eject-your-create-react-app-b123c5247741)):

```bash
$ npm run eject
```

------------------

# Forget about all above! Here are the instructions you need:

Run web and server locally for browser:

```bash
$ npm run .dw
```

Run web, server, and desktop locally for develop:

```bash
$ npm run .d
```

Make for stage environment:

```bash
# Initialize, only once:
$ git clone git@gitlab.com:zettelproject/frontend.git
$ cd frontend
$ git checkout -b stage origin/stage

# Get the latest updates, on each update:
$ git pull
$ npm install
$ npm run build.web:stage

# Run:
$ APP_PORT=4000 API_PORT=4001 PRIVATE_API_PORT=4002 npm run server:stage
```

Make for live environment:

```bash
# Initialize, only once:
$ git clone git@gitlab.com:zettelproject/frontend.git
$ cd frontend
$ git checkout -b live origin/live

# Get the latest updates, on each update:
$ git pull
$ npm install
$ npm run build.web:live

# Run:
$ APP_PORT=3000 API_PORT=3001 PRIVATE_API_PORT=3002 npm run server:live
```

------------------

Copyright: **Zettel, 2020-22**
