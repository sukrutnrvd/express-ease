# Express Ease

Express Ease is a package that allows users to quickly set up an Express application using either JavaScript or TypeScript. It includes built-in templates for both languages and comes pre-configured with essential features like testing and a ready-to-use build environment.

## Features

- **JavaScript or TypeScript templates**: Choose between JavaScript (ES6) or TypeScript for your Express application.
- **Integrated testing setup**: Unit testing environment is pre-configured for immediate use.
- **Ready-to-build**: Easily create a production-ready build of your application.

## Installation

You can install Express Ease globally to use it from the command line:

```bash
npm install -g express-ease
```

## Usage

To create a new Express application, run the following command:

```bash
npx express-ease create my-express-app
```

This command will prompt you to choose between JavaScript and TypeScript templates and then set up a basic Express application in the `my-express-app` directory.

## Getting Started

Once your application is created, navigate to its directory and start the development server:

```bash
cd my-express-app
npm run dev    # Start the development server
```

For both template you can run this command get production code

```bash
npm run build
npm start      # Starts the production
```

## Structure

The basic structure of the generated project will look like this:

```
my-express-app/
├── src/
│   ├── controllers/
│   │   └── ...
│   ├── routes/
│   │   └── ...
│   ├── middlewares/
│   │   └── ...
│   ├── utils/
│   │   └── utils.js (or utils.ts for TypeScript)
│   │   └── ...
│   ├── app.js (or app.ts for TypeScript)
│   └── server.js (or server.ts for TypeScript)
├── .gitignore
├── package.json
└── README.md
```

## Scripts

- `npm start`: Starts the development server.
- `npm run build`: Compiles TypeScript to JavaScript (for TypeScript template).
- `npm test`: Runs the tests.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your suggested improvements.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
