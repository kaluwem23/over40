# over 40 📚

A React Native application built with Expo that displays a filtered and sorted list of people, featuring a modern UI with modal interactions and comprehensive testing.

## 🚀 Features

- **People List Display**: Shows people aged 40+ years with alternating row colors
- **Smart Filtering**: Automatically filters people by age (40+ years old)
- **Intelligent Sorting**: Sorts by surname, then by first name
- **Interactive Modals**: Tap any person to view detailed information
- **Modern UI Design**:
  - Custom header with highlighted text
  - Background image covering the entire app
  - Rounded list items with alternating colors
  - Professional modal design
  - Clean footer with branding
- **Responsive Design**: Optimized for both iOS and Android
- **Comprehensive Testing**: Unit tests and E2E tests included

## 🛠️ Tech Stack

- **Framework**: React Native with Expo
- **Navigation**: Expo Router (file-based routing)
- **Language**: TypeScript
- **Styling**: React Native StyleSheet
- **Testing**:
  - Jest for unit tests
  - Detox for E2E tests
  - React Native Testing Library
- **State Management**: React Hooks (useState, useEffect)

## 📱 Screenshots

The app features:
- A dark header with "People over 40 years" title
- A scrollable list showing filtered people
- Modal popups with detailed person information
- A results counter at the bottom
- Professional footer with branding

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Expo CLI (`npm install -g @expo/cli`)
- iOS Simulator (for iOS development) or Android Studio (for Android development)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd inkitt-takehome
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   npx expo start
   ```

4. **Run on device/simulator**
   - Press `i` for iOS Simulator
   - Press `a` for Android Emulator
   - Scan QR code with Expo Go app on your phone

## 🧪 Testing

### Unit Tests
```bash
# Run all unit tests
npm test

# Run with coverage
npm test -- --coverage

# Run in watch mode
npm test -- --watch
```

### End-to-End Tests
```bash
# Build for testing
npm run test:e2e:build

# Run E2E tests (iOS)
npm run test:e2e:ios

# Run E2E tests (Android)
npm run test:e2e:android
```

For detailed testing information, see [TESTING.md](./TESTING.md).

## 📁 Project Structure

```
inkitt-takehome/
├── app/                    # App screens and navigation
│   ├── (tabs)/            # Tab-based navigation
│   │   ├── index.tsx      # Home screen
│   │   └── _layout.tsx    # Tab layout
│   ├── modal.tsx          # Modal screen
│   └── _layout.tsx        # Root layout
├── components/            # Reusable components
│   ├── footer.tsx         # Footer component
│   ├── header.tsx         # Header component
│   ├── people-list.tsx    # People list component
│   ├── person-list-item.tsx # Individual list item
│   ├── person-modal.tsx   # Person details modal
│   └── ui/               # UI components
├── data/                 # Data layer
│   └── server.ts         # Mock data and API
├── e2e/                  # End-to-end tests
├── __tests__/            # Unit tests
├── assets/               # Images and static assets
└── constants/            # App constants
```

## 🎨 Design System

### Colors
- **Header Background**: `#0E2122` (Dark greenish-gray)
- **Highlighted Text**: `#6BDB81` (Green)
- **List Item 1**: `#081515` (Dark)
- **List Item 2**: `#0E2122` (Darker)
- **Footer Background**: `#0E2122` (Dark greenish-gray)
- **Text**: `#FFFFFF` (White)

### Typography
- **Header Title**: 32px, bold
- **Header Subtitle**: 16px, regular
- **List Items**: 16px, medium weight
- **Footer**: 14px, regular

## 🔧 Available Scripts

```bash
npm start          # Start development server
npm run android    # Run on Android
npm run ios        # Run on iOS
npm run web        # Run on web
npm run lint       # Run ESLint
npm test           # Run unit tests
npm run test:e2e   # Run E2E tests
```

## 📊 Data Structure

The app works with the following person data structure:

```typescript
interface Person {
  id: string;
  age: number;
  name: string;
  surname: string;
  gender: string;
}
```

## 🎯 Key Features Explained

### Filtering Logic
- Automatically filters people who are 40 years old or older
- Uses `Array.filter()` with age comparison

### Sorting Algorithm
- Primary sort: By surname (alphabetical)
- Secondary sort: By first name (alphabetical)
- Uses `localeCompare()` for proper string comparison

### Modal System
- Tap any list item to open detailed modal
- Shows all person information in organized layout
- Multiple ways to close: close button or tap outside
- Smooth fade animations

## 🚀 Deployment

### Building for Production

```bash
# Build for iOS
npx expo build:ios

# Build for Android
npx expo build:android

# Build for web
npx expo build:web
```

### App Store Deployment
Follow the [Expo deployment guide](https://docs.expo.dev/distribution/app-stores/) for detailed instructions.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is part of the Inkitt takehome assignment.

## 🆘 Troubleshooting

### Common Issues

1. **Metro bundler issues**: Clear cache with `npx expo start --clear`
2. **iOS Simulator not opening**: Ensure Xcode is installed and simulator is available
3. **Android build fails**: Check Android Studio setup and SDK versions
4. **Tests failing**: Ensure all dependencies are installed with `npm install`

### Getting Help

- Check the [Expo documentation](https://docs.expo.dev/)
- Review the [TESTING.md](./TESTING.md) for testing issues
- Open an issue in the repository

## 🎉 Acknowledgments

- Built with [Expo](https://expo.dev)
- UI components inspired by modern mobile design patterns
- Testing setup follows React Native best practices
