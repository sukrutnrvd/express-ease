# Express Ease

Express Ease is a package that allows users to quickly set up an Express application using either JavaScript or TypeScript. It includes built-in templates for both languages and comes pre-configured with essential features like testing and a ready-to-use build environment.

## Features

- **JavaScript or TypeScript templates**: Choose between JavaScript (ES6) or TypeScript for your Express application.
- **Integrated testing setup**: Unit testing environment is pre-configured for immediate use.
- **Ready-to-build**: Easily create a production-ready build of your application.
- **Help command**: Display help information about the package and its usage.

## Installation

You can install Express Ease globally to use it from the command line:

```bash
npm install -g express-ease
```

## Usage

To create a new Express application, you can use either interactive prompts or command-line arguments.

### Interactive Prompts

Run the following command and follow the prompts:

```bash
npx express-ease my-express-app
```

### Command-Line Arguments

Alternatively, you can specify the template and project name directly using command-line arguments:

```bash
npx express-ease create -t [javascript|typescript] -n my-express-app
```

or

```bash
npx express-ease create --template [javascript|typescript] --name my-express-app
```

### Help Command

To display help information about the package and its usage, run:

```bash
npx express-ease -h
```

or

```bash
npx express-ease --help
```

This command will provide a brief overview of the available commands and options.

## Getting Started

Once your application is created, navigate to its directory and start the development server:

```bash
cd my-express-app
npm install  # Install dependencies
npm run dev  # Start the development server
```

For both templates, you can run this command to get the production code:

```bash
npm run build  # Create production build
npm start      # Start the production server
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

- `npm start`: Starts the production server.
- `npm run dev`: Starts the development server.
- `npm run build`: Creates a production build.
- `npm test`: Runs the tests.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your suggested improvements.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
