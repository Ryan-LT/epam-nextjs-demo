import { useEffect, useState } from "react";
import axios from "axios";
import { GetServerSideProps, NextPage } from "next";
import Image from "next/image";
import { BASE_API_URL } from "../../constants/api-endpoint";
import { Product } from "../../types/product";
import { ImageSlider } from "../../components/image-slider";
import { BreadCrumbs } from "../../components/bread-crumbs";

export type DetailProps = {
  product: Product;
};

const Detail: NextPage<DetailProps> = ({ product }) => {
  const { title, description, price, images } = product;

  return (
    <section>
      <BreadCrumbs
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Products Listing", href: "/products" },
          { name: "Detail" },
        ]}
      />
      <div className="mt-6 flex gap-10">
        <ImageSlider
          slides={images.map((url) => (
            <div key={url} className="keen-slider__slide">
              <Image
                width={500}
                height={300}
                objectFit="cover"
                alt={title}
                src={url}
              />
            </div>
          ))}
        />
        <div>
          <h2 className="mb-4 text-3xl font-bold text-cyan-600">{title}</h2>
          <p className="mb-2 w-72 text-sm text-gray-400">{description}</p>
          <p className="font-bold text-gray-500">${price}</p>
        </div>
      </div>
    </section>
  );
};

export default Detail;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const slug = query?.slug;

  if (!slug) {
    return {
      notFound: true,
    };
  }

  const fetchUrl = `${BASE_API_URL}/products?slug=${slug}`;

  const response = await axios.get(fetchUrl);

  return {
    props: { product: response.data[0] },
  };
};
