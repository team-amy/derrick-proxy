# Supported by module

Displays user album reviews and avatars

## Related Projects

  - https://github.com/team-amy/ana-service
  - https://github.com/team-amy/Nam-s-Service

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

- Install mongoDB using homebrew before using the database seeding script
- Run `brew services start mongodb-community@4.0` and then `mongo` in the command line
- Then use the seed script located in the package.json

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 10.15.3

## Development

To start bundling run `npm run react-dev`

To start server run `npm run server-dev`

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

