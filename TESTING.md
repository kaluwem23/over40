# Testing Guide for Inkitt Takehome App

This project includes comprehensive testing setup with both unit tests and end-to-end (E2E) tests.

## Testing Framework

- **Unit Tests**: Jest + React Native Testing Library
- **E2E Tests**: Detox (React Native E2E testing framework)

## Prerequisites

Before running tests, make sure you have the following installed:

```bash
# Install dependencies
npm install

# For iOS E2E tests, you need Xcode and iOS Simulator
# For Android E2E tests, you need Android Studio and Android Emulator
```

## Running Tests

### Unit Tests

```bash
# Run all unit tests
npm test

# Run tests with coverage
npm test -- --coverage

# Run tests in watch mode
npm test -- --watch

# Run specific test file
npm test -- __tests__/data/server.test.ts
```

### End-to-End Tests

#### Setup E2E Tests

```bash
# Build the app for testing (iOS)
npm run test:e2e:build

# Build the app for testing (Android)
cd android && ./gradlew assembleDebug assembleAndroidTest -DtestBuildType=debug
```

#### Run E2E Tests

```bash
# Run all E2E tests (iOS)
npm run test:e2e:ios

# Run all E2E tests (Android)
npm run test:e2e:android

# Run specific E2E test file
npm run test:e2e -- --testNamePattern="Modal"
```

## Test Structure

### Unit Tests

Located in `__tests__/` directory:

- `__tests__/data/server.test.ts` - Tests for data fetching and filtering logic
- `__tests__/components/people-list.test.tsx` - Tests for PeopleList component

### E2E Tests

Located in `e2e/` directory:

- `e2e/app.test.js` - Tests for main app functionality (list display, filtering, sorting)
- `e2e/modal.test.js` - Tests for modal functionality
- `e2e/interaction.test.js` - Tests for user interactions and performance

## Test Coverage

The unit tests cover:

- ✅ Data fetching and filtering logic
- ✅ Component rendering and props
- ✅ User interactions (tap, modal opening/closing)
- ✅ State management
- ✅ Type safety

The E2E tests cover:

- ✅ Complete user workflows
- ✅ UI interactions across the entire app
- ✅ Modal functionality
- ✅ Scrolling behavior
- ✅ Performance under rapid interactions
- ✅ Cross-platform compatibility

## Key Test Scenarios

### Unit Tests

1. **Data Server Tests**:
   - Verify fetchPeople returns correct data structure
   - Test filtering for people 40+ years old
   - Validate unique IDs and data integrity

2. **Component Tests**:
   - Test PeopleList rendering with empty and populated data
   - Verify modal opening/closing functionality
   - Test user interactions and state changes

### E2E Tests

1. **App Flow Tests**:
   - Loading state → Data display
   - List filtering (only shows people 40+ years old)
   - Sorting by surname then name
   - Results counter accuracy

2. **Modal Tests**:
   - Opening modal by tapping list items
   - Displaying correct person details
   - Closing modal via close button and tap outside
   - Multiple modal interactions

3. **Interaction Tests**:
   - Scrolling through the list
   - Touch feedback and responsiveness
   - Background and header visibility
   - Performance with rapid interactions

## Test Configuration

### Jest Configuration (`jest.config.js`)
- React Native preset
- TypeScript support
- Coverage reporting
- Module path mapping for `@/` imports

### Detox Configuration (`.detoxrc.js`)
- iOS and Android configurations
- Simulator and emulator setup
- Build commands for both platforms

## Test IDs

The app includes test IDs for reliable E2E testing:

- `app-background` - Main app background
- `people-scroll-view` - People list scroll view
- `results-container` - Results counter container
- `modal-overlay` - Modal background overlay
- `modal-content` - Modal content container
- `modal-close-button` - Modal close button
- `modal-scroll-view` - Modal scroll view

## Debugging Tests

### Unit Tests
```bash
# Run with verbose output
npm test -- --verbose

# Run specific test with debugging
npm test -- --testNamePattern="fetchPeople" --verbose
```

### E2E Tests
```bash
# Run with debug logging
npm run test:e2e:ios -- --loglevel trace

# Run single test file
npm run test:e2e:ios -- e2e/modal.test.js
```

## Continuous Integration

The tests are designed to run in CI/CD environments:

- Unit tests run quickly and don't require device/simulator
- E2E tests can be configured to run on CI platforms like GitHub Actions
- Coverage reports are generated for code quality tracking

## Best Practices

1. **Unit Tests**: Focus on business logic, component behavior, and edge cases
2. **E2E Tests**: Cover complete user workflows and critical paths
3. **Test IDs**: Use consistent, descriptive test IDs for reliable element selection
4. **Async Testing**: Properly handle async operations with `waitFor` and timeouts
5. **Mocking**: Mock external dependencies and platform-specific modules

## Troubleshooting

### Common Issues

1. **E2E tests failing**: Ensure simulator/emulator is running and app is built
2. **Import errors**: Check Jest configuration and module mapping
3. **Timeout issues**: Increase timeout values for slow operations
4. **Platform differences**: Test on both iOS and Android for compatibility

### Getting Help

- Check Detox documentation: https://github.com/wix/Detox
- React Native Testing Library docs: https://callstack.github.io/react-native-testing-library/
- Jest documentation: https://jestjs.io/docs/getting-started
