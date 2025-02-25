"use client";

import Bg from "@/components/BG";
import Image from "next/image";
import { useEffect, useState } from "react";

type Product = {
  id: number;
  name: string;
  image_url: string;
  dimensions: string;
  price: number;
  min_quantity: number;
  created_at: string;
};

export default function CatalogPage() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("http://65.109.5.159:5055/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Ошибка при получении товаров");
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <Bg>
      <div className="flex flex-col mt-8 gap-3 bg-[#D3D3D3] text-black rounded-lg p-7">
        <div className="flex flex-row items-center gap-5">
          <p className="text-[32px] text-[#00426f] font-semibold">Каталог</p>
          <div className="border w-full h-0 border-[#00426f]"></div>
        </div>
        <p>
          Пластиковые подложки помогают надежно защитить продукт от лома и
          потери товарного вида. В нашем каталоге представлены лишь некоторые
          виды кювет под печенье, зефир и лотки для зелени. Практически все,
          представленные в каталоге упаковки, могут быть выполнены в прозрачном,
          полупрозрачном и цветном варианте, а их жесткость может быть
          скорректирована в зависимости от веса фасуемого продукта.
        </p>
        <div className="border w-[90%] mx-auto my-5 border-[#00426f]"></div>
        <div className="grid-row-1 gap-x-10 gap-y-5 mt-5 grid grid-cols-3 mb-5">
          {products.map((items, index) => (
            <div
              className="bg-[#E9E8E8] rounded-lg pb-5 border-2 border-[#BFBFBF]"
              key={index}
            >
              <Image
                src={items.image_url}
                alt="UT152"
                width={358}
                height={198}
                className="pb-5 rounded-t-lg h-[200px]"
              />
              <div className="px-5 text-center flex flex-col gap-2 justify-between">
                <p>{items.name}</p>
                <p className="text-[#717171] text-[14px]">
                  Габариты: {items.dimensions}
                </p>
                <p className="text-[#717171] text-[14px]">
                  Заказ от: {items.min_quantity}
                </p>
                <p className="text-[14px]">Цена: {items.price}</p>
                <button className="bg-[#00426f] text-white rounded-lg hover:opacity-50">Купить</button>
              </div>
            </div>
          ))}
          {/* <div className="bg-[#E9E8E8] rounded-lg pb-5 border-2 border-[#BFBFBF]">
            <Image
              src={UT152}
              alt="UT152"
              className="pb-5 rounded-t-lg h-[200px] "
            />
            <div className="px-5 text-center flex flex-col gap-2">
              <p>УТ-152</p>
              <p className="text-[#717171] text-[14px]">
                Габаритные размеры: 109 x 137 x 60 мм.
              </p>
            </div>
          </div>
          <div className="bg-[#E9E8E8] rounded-lg  pb-5 border-2 border-[#BFBFBF]">
            <Image
              src={UT152}
              alt="UT152"
              className="pb-5 rounded-t-lg h-[200px] "
            />
            <div className="px-5 text-center flex flex-col gap-2">
              <p>УТ-152</p>
              <p className="text-[#717171] text-[14px]">
                Габаритные размеры: 109 x 137 x 60 мм.
              </p>
            </div>
          </div>
          <div className="bg-[#E9E8E8] rounded-lg pb-5 border-2 border-[#BFBFBF]">
            <Image
              src={UT152}
              alt="UT152"
              className="pb-5 rounded-t-lg h-[200px] "
            />
            <div className="px-5 text-center flex flex-col gap-2">
              <p>УТ-152</p>
              <p className="text-[#717171] text-[14px]">
                Габаритные размеры: 109 x 137 x 60 мм.
              </p>
            </div>
          </div>
          <div className="bg-[#E9E8E8] rounded-lg pb-5 border-2 border-[#BFBFBF]">
            <Image
              src={UT152}
              alt="UT152"
              className="pb-5 rounded-t-lg h-[200px] "
            />
            <div className="px-5 text-center flex flex-col gap-2">
              <p>УТ-152</p>
              <p className="text-[#717171] text-[14px]">
                Габаритные размеры: 109 x 137 x 60 мм.
              </p>
            </div>
          </div>
          <div className="bg-[#E9E8E8] rounded-lg pb-5 border-2 border-[#BFBFBF]">
            <Image
              src={UT152}
              alt="UT152"
              className="pb-5 rounded-t-lg h-[200px] "
            />
            <div className="px-5 text-center flex flex-col gap-2">
              <p>УТ-152</p>
              <p className="text-[#717171] text-[14px]">
                Габаритные размеры: 109 x 137 x 60 мм.
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </Bg>
  );
}
