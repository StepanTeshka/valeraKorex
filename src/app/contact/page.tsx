import Bg from "@/components/BG";
import Image from "next/image";
import Velta from "../../../public/Velta_K.png";
import Konditer from "../../../public/Konditersnab.png";
import Jiv from "../../../public/JiV_Grupp.png";
export default function ContactPage() {
  return (
    <Bg>
      <div className="bg-[#D3D3D3] text-black rounded-lg p-7">
        <div className="flex flex-col">
          <div className="flex flex-row items-center gap-5">
            <p className="text-[32px] text-[#00426f] font-semibold">Контакты</p>
            <div className="border w-full h-0 border-[#00426f]"></div>
          </div>
        </div>
        <div className="grid grid-cols-2 mt-8 ">
          <div className="flex flex-col gap-3 ">
            <p className="text-[24px] text-[#00426f]">Центральный Офис</p>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-2">
                <Image
                  src={"Map Pin.svg"}
                  width={24}
                  height={24}
                  alt="Map"
                  className="w-[24px] h-[24px]"
                />
                <p>г. Екатеринбург, ул Бориса Ельцина, д. 1а, оф. 9.7</p>
              </div>
              <div className="flex flex-row gap-2">
                <Image
                  src={"PhoneBlu.svg"}
                  width={24}
                  height={24}
                  alt="phone"
                  className="w-[24px] h-[24px] "
                />
                <p>8-800-500-57-70</p>
              </div>
              <div className="flex flex-row gap-2">
                <Image
                  src={"Letter.svg"}
                  width={24}
                  height={24}
                  alt="letter"
                  className="w-[24px] h-[24px]"
                />
                <p>info@korrex.ru</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-row items-center gap-5 mt-10">
            <p className="text-[32px] text-[#00426f] font-semibold">
              Представители
            </p>
            <div className="border w-full h-0 border-[#00426f]"></div>
          </div>
          <p className="my-5 text-[18px] font-semibold">Партнеры в Москве</p>
          <div className="flex flex-row justify-between">
            <Image src={Velta} alt="Velta" />
            <p className="font-semibold">ООО «Велта К»</p>
            <p>г. Москва, Подольское шоссе д.8/5</p>
            <p>Марьяна</p>
            <div className="flex flex-col items-end">
              <p>+7 (495) 783-97-55</p>
              <p>+7 (905) 780-85-55</p>
              <p>velta@velta-k.ru</p>
            </div>
          </div>
          <p className="my-5 text-[18px] font-semibold">Республика Беларусь</p>
          <div className="flex flex-row justify-between">
            <Image src={Jiv} alt="Jiv" />
            <p className="font-semibold">ООО «ЖиВ групп»</p>
            <p>г. Минск, ул. Передовая 6, корпус 12, пом. 21</p>
            <p>Роман Гунько</p>
            <div className="flex flex-col items-end">
              <p>+375 44 458-07-13</p>
              <p>r.hunko@zhivgroup.by</p>
            </div>
          </div>
          <p className="my-5 text-[18px] font-semibold">Казахстан</p>
          <div className="flex flex-row justify-between">
            <Image src={Konditer} alt="Konditer" />
            <p className="font-semibold">Кондитерснаб</p>
            <p>г. Караганда, ул. Молокова 106-112, склад 8-9</p>
            <p>Эдуард</p>
            <div className="flex flex-col items-end">
              <p>87010817304</p>
              <p>konditersnab.info@mail.ru</p>
            </div>
          </div>
        </div>
      </div>
    </Bg>
  );
}
