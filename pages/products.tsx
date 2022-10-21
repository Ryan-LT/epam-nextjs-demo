import axios from "axios";
import { GetServerSideProps, NextPage } from "next";
import { BASE_API_URL } from "../constants/api-endpoint";
import { ProductCard } from "../components/product-card";
import { BreadCrumbs } from "../components/bread-crumbs";
import { Product } from "../types/product";

export type ProductsProps = {
  products: Product[];
};

const Products: NextPage<ProductsProps> = ({ products }) => {
  return (
    <section>
      <BreadCrumbs
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Products Listing", href: "/products" },
        ]}
      />
      <div className="mt-6 grid grid-cols-3 gap-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Products;

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await axios.get(`${BASE_API_URL}/products`);

  return {
    props: { products: response.data },
  };
};
