import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pl-5 pr-5">
      <NavBar />
      Home
      <Footer />
    </main>
  );
}
