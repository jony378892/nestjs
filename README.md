<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Cats API - NestJS Application

A RESTful API application built with [NestJS](https://nestjs.com) for managing cat records. This project demonstrates a complete CRUD application with TypeScript, following NestJS best practices.

## Description

This project is a NestJS-based Cats API that provides endpoints for creating, reading, updating, and deleting cat records. It includes proper module organization, DTOs (Data Transfer Objects), entities, services, controllers, and comprehensive testing with unit and e2e tests.

## Features

- ✅ RESTful API with CRUD operations for cats
- ✅ Modular architecture with feature modules
- ✅ Comprehensive DTOs for request validation
- ✅ Entity definitions and interfaces
- ✅ Logger middleware for request tracking
- ✅ Unit and e2e tests
- ✅ TypeScript for type safety
- ✅ ESLint and Prettier for code quality

## Project Structure

```
src/
├── app.controller.ts       # Main application controller
├── app.module.ts          # Root module
├── app.service.ts         # Main application service
├── main.ts                # Application entry point
├── cats/                  # Cats feature module
│   ├── cats.controller.ts
│   ├── cats.module.ts
│   ├── cats.service.ts
│   ├── dto/
│   │   ├── create-cat.dto.ts
│   │   └── update-cat.dto.ts
│   ├── entities/
│   │   └── cat.entity.ts
│   └── interfaces/
│       └── cat.interface.ts
└── middlewares/
    └── logger.middleware.ts

test/
├── app.e2e-spec.ts        # End-to-end tests
└── jest-e2e.json
```

## Installation

### Prerequisites

- Node.js (v18+)
- pnpm

### Setup

```bash
$ pnpm install
```

## Running the Application

### Development

```bash
# Start in watch mode
$ pnpm run start:dev
```

### Production

```bash
# Build the application
$ pnpm run build

# Start in production mode
$ pnpm run start:prod
```

### Debug Mode

```bash
# Start with debugging enabled
$ pnpm run start:debug
```

## Testing

```bash
# Unit tests
$ pnpm run test

# Watch mode for tests
$ pnpm run test:watch

# Test coverage
$ pnpm run test:cov

# E2E tests
$ pnpm run test:e2e
```

## Code Quality

```bash
# Run ESLint with auto-fix
$ pnpm run lint

# Format code with Prettier
$ pnpm run format
```

## API Endpoints

The Cats API provides the following endpoints:

| Method | Endpoint    | Description      |
| ------ | ----------- | ---------------- |
| GET    | `/cats`     | Get all cats     |
| GET    | `/cats/:id` | Get cat by ID    |
| POST   | `/cats`     | Create a new cat |
| PUT    | `/cats/:id` | Update cat       |
| DELETE | `/cats/:id` | Delete cat       |

## Example Request

```bash
# Create a cat
curl -X POST http://localhost:3000/cats \
  -H "Content-Type: application/json" \
  -d '{"name":"Fluffy","age":3,"breed":"Persian"}'
```

## Documentation

For more information about NestJS, check out the following resources:

- [NestJS Documentation](https://docs.nestjs.com)
- [NestJS Repository](https://github.com/nestjs/nest)
- [Official NestJS Discord Community](https://discord.gg/G7Qnnhy)
