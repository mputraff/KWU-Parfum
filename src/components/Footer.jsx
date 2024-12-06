export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-lg font-bold mb-2">Product Links</h3>
                        <ul>
                            <li><a href="#" className="hover:underline">All Products</a></li>
                            <li><a href="#" className="hover:underline">Parfum</a></li>
                            <li><a href="#" className="hover:underline">Parfum</a></li>
                            <li><a href="#" className="hover:underline">Parfum</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-2">Parfum</h3>
                        <ul>
                            <li><a href="#" className="hover:underline">Parfum A</a></li>
                            <li><a href="#" className="hover:underline">Parfum B</a></li>
                            <li><a href="#" className="hover:underline">Parfum C</a></li>
                            <li><a href="#" className="hover:underline">Parfum D</a></li>
                        </ul>
                    </div>
                    
                </div>
                <div className="text-center mt-10">
                    <h3 className="text-lg font-bold mb-2">Connect with Us</h3>
                    <div className="flex justify-center space-x-4 flex-wrap">
                        <a href="#" className="hover:text-blue-400">Facebook</a>
                        <a href="#" className="hover:text-blue-400">Twitter</a>
                        <a href="#" className="hover:text-blue-400">Google</a>
                        <a href="#" className="hover:text-blue-400">Instagram</a>
                        <a href="#" className="hover:text-blue-400">Pinterest</a>
                    </div>
                </div>
                <div className="text-center mt-10">
                    <h3 className="text-lg font-bold mb-2">Have Questions?</h3>
                    <a href="#" className="inline-block bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600">Contact Us</a>
                </div>
            </div>
            <div className="text-center text-gray-400 mt-10">
                <p>Copyright © 2024 Aleris Store</p>
            </div>
        </footer>
    );
}
