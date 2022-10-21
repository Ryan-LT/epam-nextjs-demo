import { FunctionComponent } from "react";
import Image from "next/image";
import { Product } from "../types/product";
import { useRouter } from "next/router";

export type ProductCardProps = {
  product: Product;
};

export const ProductCard: FunctionComponent<ProductCardProps> = ({
  product,
}) => {
  const router = useRouter();

  const handleGoDetailPage = (title: string) => {
    const slug = title.split(" ").join("-").toLocaleLowerCase();

    router.push(`/detail/${slug}`);
  };

  const { id, title, slug, thumbnail, price } = product;

  return (
    <div key={id} className="flex flex-col items-center">
      <div className="group relative">
        <Image
          width={500}
          objectFit="cover"
          height={300}
          alt={title}
          className="rounded-xl transition group-hover:grayscale group-hover:blur-sm"
          src={thumbnail}
        />
        <button
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-cyan-500 px-6 py-3 font-bold text-white opacity-0 transition-opacity group-hover:opacity-100"
          onClick={() => handleGoDetailPage(slug)}
        >
          DETAIL
        </button>
      </div>
      <h3 className="mt-4 text-2xl font-medium text-cyan-500">{title}</h3>
      <p className="text-gray-600">${price}</p>
    </div>
  );
};
