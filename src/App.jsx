import Header from "./components/Header";
import Body from "./components/prices/Body";
import Footer from "./components/Footer";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <main className="min-h-screen dark:bg-gray-900 transition-colors duration-500">
        <Body />
      </main>
      <Footer />
    </QueryClientProvider>
  );
}
