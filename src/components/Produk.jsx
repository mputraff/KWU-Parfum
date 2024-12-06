export default function Produk() {
    const products = [
        {
            title: "Parfum",
            category: "Wangi",
            image: "https://images.unsplash.com/photo-1514348871858-1d3c20902571?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image URL
        },
        {
            title: "Parfum",
            category: "Wangi",
            image: "https://images.unsplash.com/photo-1631722670977-60c8b22dfcaf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image URL
            sale: true,
        },
        {
            title: "Parfum",
            category: "Wangi",
            image: "https://images.unsplash.com/photo-1643797517714-a273548abc3c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBhcmZ1bXxlbnwwfDB8MHx8fDA%3D", // Replace with actual image URL
        },
        {
            title: "Parfum",
            category: "Wangi",
            image: "https://images.unsplash.com/photo-1512777576244-b846ac3d816f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHBhcmZ1bXxlbnwwfDB8MHx8fDA%3D", // Replace with actual image URL
        },

        {
            title: "Parfum",
            category: "Wangi",
            image: "https://images.unsplash.com/photo-1512777576244-b846ac3d816f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHBhcmZ1bXxlbnwwfDB8MHx8fDA%3D", // Replace with actual image URL
        },

        {
            title: "Parfum",
            category: "Wangi",
            image: "https://images.unsplash.com/photo-1512777576244-b846ac3d816f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHBhcmZ1bXxlbnwwfDB8MHx8fDA%3D", // Replace with actual image URL
        },
    ];

    return (
        <div className="container mx-auto m-10">
            <h2 className="text-3xl font-bold text-center mb-6">Our Latest Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {products.map((product, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="relative">
                            <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
                            {product.sale && (
                                <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                                    Sale!
                                </span>
                            )}
                        </div>
                        <div className="p-4">
                            <h3 className="text-lg font-semibold">{product.title}</h3>
                            <p className="text-gray-500">{product.category}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
