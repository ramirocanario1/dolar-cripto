import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Body />
      </main>
      <Footer />
    </>
  );
}
