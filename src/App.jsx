import Navbar from './components/Navbar'
import Products from './components/Product';

function App() {

  const productList = [
    {
      id: 1,
      name: "Nike Blazzer 77",
      description: "Mens Shoes",
      image: "https://images.unsplash.com/photo-1605408499391-6368c628ef42?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bmlrZSUyMHNob2VzfGVufDB8fDB8fHww",
      price: 19.99,
      colors: ["red", "blue", "green"],
    },
    {
      id: 2,
      name: "Nike Samba",
      description: "Woman Shoes",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmlrZXxlbnwwfHwwfHx8MA%3D%3D",
      price: 40,
      colors: ["red", "blue", "green", "white"],
    },
    {
      id: 3,
      name: "Nike Dunk ",
      description: "Mens Shoes",
      image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fG5pa2V8ZW58MHx8MHx8fDA%3D",
      price: 12,
      colors: ["red", "blue"],
    },
  ];

  return (
    <div>
      <Navbar />
      <Products productList={productList} />
    </div>
  )
}

export default App
