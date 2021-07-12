# Component-library

Experimental component-library with npm releases as an automated process and jest tests.

## Run project

```javascript
yarn storybook
```

## Create release

With changeset you will create a pullrequest in the Github, when merged it will also deploy a new release.

```javascript
yarn changeset
```

## Run component tests

```javascript
yarn test
```

Run test in runtime.

```javascript
yarn test:watch
```
