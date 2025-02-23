import Image from "next/image";
import Bg from "@/components/BG";
import Cake from "../../public/Cake.png";
import Cookies from "../../public/Cookies.png";
import Eggs from "../../public/Eggs.png";
import Mushrooms from "../../public/Mushrooms.png";
import Prom from "../../public/Prom.png";
import Sushi from "../../public/Sushi.png";
import Link from "next/link";
import Partners from "../../public/Partners.jpg";
import Productuon from "../../public/Productuon.jpg";
import Team from "../../public/Team.jpg";
import UT84 from "../../public/UT-84.jpg";
import UT113 from "../../public/UT-113.jpg";
import UT152 from "../../public/UT-152.jpg";
import Sladial from "../../public/Sladial.png";
import Hlebprom from "../../public/Hlebprom.png";
import Palych from "../../public/Palych.png";
import Pyshma from "../../public/Pyshma.png";
import Mistery from "../../public/Mistery.png";
import DNS from "../../public/DNS.png";

export default function Home() {
  return (
    <Bg>
      <div className="flex flex-col gap-5">
        <table className="bg-[#D3D3D3] mt-8 text-[#202224] rounded-lg text-center text-black">
          <tbody>
            <tr>
              <td>
                <Link
                  href={"/catalog"}
                  className="gap-5 flex flex-col p-5 items-center"
                >
                  <Image src={Cake} alt="Cake" />
                  <p>Упаковка для тортов и пирожных</p>
                </Link>
              </td>
              <td>
                <Link
                  href={"/catalog"}
                  className="gap-5 flex flex-col p-5 items-center"
                >
                  <Image src={Cookies} alt="Cookies" />
                  <p>Коррексы для печенья и зефира </p>
                </Link>
              </td>
              <td>
                <Link
                  href={"/catalog"}
                  className="gap-5 flex flex-col p-5 items-center"
                >
                  <Image src={Eggs} alt="Eggs" />
                  <p>Контейнеры для яиц</p>
                </Link>
              </td>
              <td>
                <Link
                  href={"/catalog"}
                  className="gap-5 flex flex-col p-5 items-center"
                >
                  <Image src={Sushi} alt="Sushi" />
                  <p>Упаковка для японской кухни</p>
                </Link>
              </td>
              <td>
                <Link
                  href={"/catalog"}
                  className="gap-5 flex flex-col p-5 items-center"
                >
                  <Image src={Mushrooms} alt="Mushrooms" />
                  <p>Лотки для грибов, зелени и салата</p>
                </Link>
              </td>
              <td>
                <Link
                  href={"/catalog"}
                  className="gap-5 flex flex-col p-5 items-center"
                >
                  <Image src={Prom} alt="Prom" />
                  <p>Блистеры и пленки</p>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="flex flex-col gap-3 bg-[#D3D3D3] text-black rounded-lg p-7">
          <div className="flex flex-row items-center gap-5">
            <p className="text-[32px]  font-semibold text-[#00426f]">
              Компания
            </p>
            <div className="border w-full  h-0 border-[#00426f]"></div>
          </div>
          <p className="text-[#202224]">
            Наша компания была основана в 1994 году. Первым выпущенным изделием
            стала подложка для конфет «коррекс», что и дало название фирме.
            Проделав большой путь от первых ручных станков собственной
            разработки, до лучших европейских производственных линий, на сегодня
            Коррекс – предприятие полного цикла выпуска упаковки.
          </p>
          <p className="text-[#202224] mb-3">
            Мы готовы разработать пластиковую упаковку по любым требованиям,
            обеспечить выпуск нужных партий и своевременно доставить на склад
            клиенту где бы он ни находился. Всё это с использованием безотходных
            технологий, применяя лучшее полимерное сырье и так, чтобы именно ваш
            товар стал лучшим для покупателя!
          </p>
          <div className="grid-row-1 gap-10 grid grid-flow-col mb-5">
            <div className="border-2 bg-[#E9E8E8] border-[#E9E8E8] rounded-lg">
              <Image
                src={Productuon}
                alt="Productuon"
                className="p-5 mx-auto w-[300px]"
              />
              <p className="px-5 text-center text-[#00426f]">Производство</p>
              <p className="p-5 text-[#202224]">
                Ваш тираж пара тысяч упаковок или несколько миллионов? Вам нужно
                типовое решение или эксклюзивная разработка? Нужен логотип и
                фирменный цвет? Да, мы это можем. Современное оборудование, свой
                центр разработки и четкое выполнение заказов.
              </p>
            </div>
            <div className="border-2 bg-[#E9E8E8] border-[#E9E8E8] rounded-lg">
              <Image src={Team} alt="team" className="p-5 mx-auto w-[300px]" />
              <p className="px-5 text-center text-[#00426f]">Команда</p>
              <p className="p-5 text-[#202224]">
                Мы – профессионалы в сфере пластиков. Мы учимся и внедряем новые
                технологии. Каждый новый проект добавляет нам опыт, а
                сотрудничество с зарубежными партнерами позволяет предлагать
                уникальные решения.
              </p>
            </div>
            <div className="border-2 bg-[#E9E8E8] border-[#E9E8E8] rounded-lg">
              <Image
                src={Partners}
                alt="partners"
                className="p-5 mx-auto w-[300px]"
              />
              <p className="px-5 text-center text-[#00426f]">Партнеры</p>
              <p className="p-5 text-[#202224]">
                Мы сотрудничаем с передовыми компаниями, которые умеют делать
                первоклассное сырье, добавлять полимерам уникальные свойства,
                знают все о технологиях термоформования и о новых «фишках» в
                дизайне упаковки. Именно этими знаниями мы стараемся делиться со
                своими клиентами. Хотим, чтобы наше сотрудничество было
                долгосрочным!
              </p>
            </div>
          </div>
          <div>
            <div className="flex flex-row items-center gap-5">
              <p className="text-[32px] text-[#00426f] font-semibold">
                Новинки
              </p>
              <div className="border w-full h-0 border-[#00426f]"></div>
            </div>
            <p className="mt-5 text-[#202224]">
              Мы постоянно работаем над новыми видами упаковки. На сегодня,
              ассортимент насчитывает более 600 видов различных форм. Не все они
              попали на сайт. Поэтому, если вы не нашли то, что искали,
              пожалуйста свяжитесь с нами удобным вам способом и мы с радостью
              подберем для вашего продукта подходящую упаковку.
            </p>
            <div className="grid-row-1 gap-16 mt-5 grid grid-flow-col mb-5">
              <div className="bg-[#E9E8E8] rounded-lg">
                <Image
                  src={UT152}
                  alt="UT152"
                  className="pb-5 rounded-t-lg h-[200px]"
                />
                <p className="px-5 text-center">УТ-152</p>
              </div>
              <div className="bg-[#E9E8E8] rounded-lg">
                <Image
                  src={UT113}
                  alt="UT113"
                  className="pb-5 rounded-t-lg h-[200px]"
                />
                <p className="px-5 text-center ">УТ-113</p>
              </div>
              <div className=" bg-[#E9E8E8] rounded-lg">
                <Image
                  src={UT84}
                  alt="UT84"
                  className="pb-5 rounded-t-lg h-[200px]"
                />
                <p className="px-5 pb-5 text-center ">
                  Упаковка для пирожных прямоугольная УТ-84
                </p>
              </div>
            </div>
            <div>
              <div className="flex flex-row items-center mt-8 gap-5">
                <p className="text-[24px] w-[280px] text-[#00426f] font-semibold">
                  С нами работают
                </p>
                <div className="border w-full h-0 border-[#00426f]"></div>
              </div>
              <div className="flex flex-row gap-8 justify-center mt-5">
                <Image src={Sladial} alt="Sladial" />
                <Image src={Hlebprom} alt="Hlebprom" />
                <Image src={Palych} alt="Palych" />
                <Image src={Pyshma} alt="Pyshma" />
                <Image src={Mistery} alt="Mistery" />
                <Image src={DNS} alt="DNS" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Bg>
  );
}
