const products = [
    {
      id: 1,
      name: "Professional DSLR Camera",
      price: 299.99,
      description: "High-quality digital camera perfect for photography enthusiasts and professionals.",
      category: "Electronics",
      stock: 10,
      rating: 4.5,
      image: "/images/camera.jpg"
    },
    {
      id: 2,
      name: "Wireless Audio Bundle", 
      price: 149.99,
      description: "Complete wireless audio solution with speakers and accessories for modern lifestyle.",
      category: "Electronics",
      stock: 15,
      rating: 4.2,
      image: "/images/audio-bundle.jpg"
    },
    {
      id: 3,
      name: "REMAX Portable Bluetooth Speaker",
      price: 79.99,
      description: "Compact wireless speaker with premium sound quality and portable design.",
      category: "Electronics", 
      stock: 8,
      rating: 4.8,
      image: "/images/speaker.jpg"
    },
    {
      id: 4,
      name: "Smart Fitness Roller",
      price: 89.99,
      description: "Advanced fitness recovery tool with smart technology for muscle therapy.",
      category: "Health & Fitness",
      stock: 12,
      rating: 4.3,
      image: "/images/fitness-roller.jpg"
    },
    {
      id: 5,
      name: "Baseus Tech Hub Station", 
      price: 199.99,
      description: "All-in-one charging and connectivity hub for modern workspaces and devices.",
      category: "Electronics",
      stock: 7,
      rating: 4.6,
      image: "/images/tech-hub.jpg"
    },
  ];
  
  export const getProductById = (id) => {
    return products.find((product) => product.id === parseInt(id, 10));
  };
  
  export const getAllProducts = () => {
    return products;
  };