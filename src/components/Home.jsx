import Produk from "./Produk";
import Footer from "./Footer";

export default function Home() {
    return (
        <>
            {/* Navbar */}
            <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white py-4 px-8 shadow-lg z-50">
                <div className="container mx-auto flex justify-between items-center">
                    <a href="/" className="text-2xl font-bold">Aleris</a>
                    <ul className="flex space-x-6">
                        <li><a href="/" className="hover:text-blue-400">Home</a></li>
                        <li><a href="/about" className="hover:text-blue-400">About</a></li>
                        <li><a href="/shop" className="hover:text-blue-400">Shop</a></li>
                    </ul>
                </div>
            </nav>

            {/* Hero Section */}
            <div className="relative flex items-center h-screen bg-gray-100 p-10 pt-24">
                <div className="absolute inset-0 bg-cover bg-center opacity-65"
                    style={{
                        backgroundImage: "url('https://plus.unsplash.com/premium_photo-1675982631977-0e4f08339bfb?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                    }}
                />
                <div className="relative z-10 text-left ml-20 text-black max-md:ml-0">
                    <h1 className="text-5xl font-bold mb-2">Style</h1>
                    <h2 className="text-5xl font-bold mb-2">Comfort &</h2>
                    <h2 className="text-5xl font-bold mb-4">Affordable</h2>
                    <a
                        href="/shop"
                        className="mt-6 inline-block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                    >
                        Explore Store
                    </a>
                </div>
            </div>
            <Produk />
            <Footer />
        </>
    );
}
