# Online Clinic

This is a frontend web application for an online medical clinic platform. The project is a React-based web application that allows users to book and manage medical appointments, consult with doctors online, and access various medical services.

## Project Description

The Online Clinic platform offers the following features:
- Online medical consultations
- Appointment booking and management
- Various medical specialties (AGA treatment, diet/obesity treatment, skin care, etc.)
- Multilingual support (English and Japanese)
- User authentication and profile management

This project is built using modern web technologies and follows best practices for React development.

## Technology Stack

### Frontend Framework
- React 18
- TypeScript 4

### State Management
- Redux (with @reduxjs/toolkit)
- Redux Saga for side effects

### UI/Styling
- Styled Components
- Ant Design (UI components)
- Swiper (for carousel/slider components)

### Routing
- React Router DOM (v5.2.0)
- Redux First History

### Form Handling
- React Hook Form
- Yup (form validation)

### Internationalization
- i18next
- react-i18next

### HTTP Client
- Axios

### Other Tools
- Moment (date manipulation)
- Papaparse (CSV parsing)
- React Helmet Async (document head management)

## Development Tools

### Code Quality
- ESLint with multiple plugins (airbnb, prettier, etc.)
- Prettier
- TypeScript

### Testing
- Jest
- React Testing Library

## Getting Started

### Prerequisites
- Node.js version 16.x or higher
- Yarn (recommended) or npm

### Installation

1. Clone the repository
```
git clone https://github.com/lofadev/online-clinic.git
cd online-clinic
```

2. Install dependencies
```
yarn install
```

3. Start the development server
```
yarn start
```

The application will be available at [http://localhost:3000](http://localhost:3000).

### Available Scripts

- `yarn start` - Starts the development server
- `yarn build` - Creates a production build
- `yarn test` - Runs the test suite
- `yarn lint` - Runs ESLint to check for code issues
- `yarn lint:fix` - Automatically fixes ESLint issues where possible
- `yarn format` - Formats code using Prettier

## Disclaimer

**IMPORTANT:** This project is created for educational purposes only and is not intended for commercial use. The design and concept are inspired by [DMMオンラインクリニック](https://clinic.dmm.com/) for learning and skill development purposes. All rights to the original design and concept belong to their respective owners.

## License

This project is private and not licensed for public distribution or use.