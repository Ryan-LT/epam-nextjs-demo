import { useEffect, useState } from "react";
import type { GetServerSideProps, NextPage } from "next";
import axios from "axios";
import { Product } from "../types/product";
import { BASE_API_URL } from "../constants/api-endpoint";
import { ProductCard } from "../components/product-card";
import Link from "next/link";

export type HomeProps = {
  featuredProducts: Product[];
};

const Home: NextPage<HomeProps> = ({ featuredProducts }) => {
  return (
    <section>
      <h2 className="mb-10 inline-block bg-gray-400 py-1 pr-2 pl-64 text-4xl text-white">
        Feature Products
      </h2>
      {featuredProducts.length > 0 && (
        <div className="grid grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          <Link href="/products">
            <a className="flex h-[240px] items-center justify-center text-2xl text-gray-400 transition-all hover:text-gray-800 hover:underline">
              Browse All
            </a>
          </Link>
        </div>
      )}
    </section>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await axios.get(`${BASE_API_URL}/products?featured=true`);

  return {
    props: { featuredProducts: response.data.slice(0, 3) },
  };
};
