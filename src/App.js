import GlobalStyle from "./GlobalStyles";
import Hero from "./components/Hero/Hero";
import Product from "./components/Products/Products";
import Feature from "./components/Features/Features";
import { productData, productDataTwo } from "./components/Products/data";
function App() {
  return (
    <>
      <GlobalStyle />
      <Hero />
      <Product heading="Choose Your Favourite" data={productData} />
      <Feature />
      <Product heading="Sweet Treats for you" data={productDataTwo} />
    </>
  );
}

export default App;
