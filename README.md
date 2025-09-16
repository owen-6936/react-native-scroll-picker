# 🧩 React Native Scroll Picker Monorepo

This monorepo houses the `react-native-scroll-picker` component and its test environments, powered by [Turborepo](https://turbo.build) for fast builds, shared tooling, and scalable DX.

---

## 📦 Packages

| Folder                      | Description                                      |
|----------------------------|--------------------------------------------------|
| `packages/scroll-picker`   | Core scroll picker component with snapping, fading, and ref access |
| `examples/expo-demo`       | Expo Go-compatible test app                     |
| `examples/rn-demo`         | Bare React Native test app                      |

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Build the scroll picker package

```bash
npx turbo run build
```

### 3. Run test apps

#### Expo

```bash
cd examples/expo-demo
npm install
npm start
```

#### React Native

```bash
cd examples/rn-demo
npm install
npx react-native run-ios
```

---

## 🧠 Why Turborepo?

- ⚡️ Fast, incremental builds
- 🧵 Task pipelining across packages
- 🗂 Shared tooling and config
- 🧪 Unified testing and linting
- 🧩 Scalable structure for future components

---

## 📐 Project Goals

- Build modular, reusable React Native components
- Test across Expo and bare RN environments
- Maintain contributor-safe DX with clear docs and examples
- Publish clean, typed packages to npm

---

## 🤝 Contributing

PRs welcome! If you're improving visuals, accessibility, or platform support, please include test cases in both `expo-demo` and `rn-demo`.

---

## 📦 License

MIT — use it, fork it, teach with it.

---

## 🧭 Maintained by Owen

Founder of Nexicore Digitals. Building tools that teach, empower, and invite collaboration.
