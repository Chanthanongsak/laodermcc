import Image from "next/image";
import styles from "../styles/Home.module.css";
import mainBG from "../images/rooms.jpg";
import one_rooms from "../images/one-room-suit.jpg";
import two_rooms from "../images/two-room-suit.jpg";
import three_rooms from "../images/three-room-suit.jpg";
import bar_shop from "../images/bar-shop.png";
import bar_shop2 from "../images/bar-shop-2.jpg";
import gym from "../images/gym.jpg";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import scrollWhile from "./menu_navbar/scrollWhite";
import Link from "next/link";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function Rooms() {
  useEffect(() => {
    {
      scrollWhile();
    }

    document.querySelector(".Comps_logo_black__PFiee").style.display = "none";

    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  useEffect(() => {
    const container = document.querySelector(".Home_containerMain__wLP1Y");
    const header = document.querySelector(".Comps_fix__8yk6q");

    // console.log(container);
    document.addEventListener("scroll", () => {
      container.style.transform = `translateY(${window.scrollY * 0.7}px)`;
    });
  });

  // useEffect(() => {
  //   window.setInterval(function () {
  //     plusSlides(1);
  //   }, 5000);

  //   var slideIndex = 1;
  //   showSlides(slideIndex);

  //   function plusSlides(n) {
  //     showSlides((slideIndex += n));
  //   }

  //   function currentSlide(n) {
  //     showSlides((slideIndex = n));
  //   }

  //   function showSlides(n) {
  //     var i;
  //     var slides = document.getElementsByClassName("mySlides");
  //     if (n > slides.length) {
  //       slideIndex = 1;
  //     }
  //     if (n < 1) {
  //       slideIndex = slides.length;
  //     }
  //     for (i = 0; i < slides.length; i++) {
  //       slides[i].style.display = "none";
  //       slides[slideIndex - 1].style.display = "block";
  //     }

  //     // if (window.location.pathname !== "/") {
  //     //   if (slides[slideIndex - 1] === "undefined") {
  //     //     return;
  //     //   }
  //     // }
  //   }
  // }, []);

  const mainSlide = [
    "/rooms.jpg",
    "/roombg2.jpg",
    "/roombg3.jpg",
    "/roombg4.jpg",
  ];

  return (
    <>
      <div className={styles.bg}>
        <div className="main-cover">
          <Carousel
            autoPlay={true}
            infiniteLoop={true}
            showArrows={false}
            showStatus={false}
          >
            {mainSlide.map((s) => {
              return (
                <>
                  <div className={styles.bgImg}>
                    <Image alt="/" src={s} width="1000" height="1000" />
                  </div>
                </>
              );
            })}
          </Carousel>
        </div>

        <div className={styles.blur}>
          <div className={styles.containerMain}>
            <div className={styles.bg_main}>
              <div className={styles.content_main}>
                <div className={styles.adj}>
                  Welcome to Souphattra Serviced Apartments, Vientiane
                </div>
                <div className={styles.row_line}></div>
                <div className={styles.scroll}>
                  <p>SCROLL TO EXPLORE</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="wave">
          <Image
            alt=""
            src="/bg-wave.png"
            layout="fill"
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          />
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.create_space}></div>
        <div
          className={styles.textCenter}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h3 className={[styles.mg50, styles.fontGold].join(" ")}>
            THE ACCOMMODATION AT SOUPHATTRA SERVICE APARTMENTS IS WITHOUT
            COMPARE; EACH ROOM HAS BEEN EXQUISITELY DESIGNED, PROVIDING LIVING
            SPACES IN WHICH YOU CAN COMFORTABLY RELAX AND UNWIND.
          </h3>
          <p className={styles.mg50}>
            Generous ceiling heights, quality furnishings, and ample living
            space define Souphattra Apartments, unified under our ???Timeless
            Elegance??? design aesthetic. With a range of one, two, and
            three-bedroom room types, whether it???s for a one-person business
            trip or a longer family stay, you will find the ideal room to suit
            your needs.
          </p>
        </div>

        <div className={styles.create_space}></div>

        <div
          className={[
            styles.flexend,
            styles.posrelative,
            styles.mg,
            styles.mg50,
          ].join(" ")}
        >
          <div
            className={[
              styles.bg,
              styles.spanUnset,
              styles.absoluteRoomPic,
            ].join(" ")}
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <Image alt="/" src={one_rooms} width="1000" height="610" />
          </div>
          <div>
            <div
              className={[styles.absoluteRoomBox, styles.right].join(" ")}
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <h1 className={styles.fontGold}>One Bedroom Suite</h1>
              <p>
                The 1 bedroom suites are the perfect business accommodation,
                offering ample space for 1 or 2-person stays with up to 82 sqm.
                They are impeccably welldesigned and feature all the desired
                amenities for the modern traveler.
              </p>
              <button className={styles.btn_absolute}>
                <Link href="/rooms/oneBedRooms">DISCOVER MORE DETAILS</Link>
              </button>
            </div>
          </div>
        </div>

        <div className={styles.create_space}></div>

        <div
          className={[
            styles.flexend,
            styles.posrelative,
            styles.justifyEnd,
            styles.mg,
            styles.mg50,
          ].join(" ")}
        >
          <div>
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              className={styles.absoluteRoomBox}
            >
              <h1 className={styles.fontGold}>Two Bedroom Suite</h1>
              <p className={styles.mg}>
                The 2 bedroom suites are generously well-proportioned, with up
                to 114sqm of living space. Ideal for couples and families, the
                2-bedroom suites are exquisitely designed and provide a
                luxurious option for Vientiane accommodation.
              </p>
              <button className={styles.btn_absolute}>
                <Link href="/rooms/twoBedRooms">DISCOVER MORE DETAILS</Link>
              </button>
            </div>
          </div>
          <div
            className={[styles.inheritImg, styles.absoluteRoomPic].join(" ")}
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <Image alt="/" src={two_rooms} width="1000" height="620" />
          </div>
        </div>

        <div className={styles.create_space}></div>

        <div
          className={[
            styles.flexend,
            styles.posrelative,
            styles.mg,
            styles.mg50,
          ].join(" ")}
        >
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className={[styles.inheritImg, styles.absoluteRoomPic].join(" ")}
          >
            <Image alt="/" src={three_rooms} width="1000" height="620" />
          </div>
          <div>
            <div
              data-aos="fade-left"
              data-aos-duration="1000"
              className={[styles.absoluteRoomBox, styles.right].join(" ")}
            >
              <h1 className={styles.fontGold}>Three Bedroom Suite</h1>
              <p className={styles.mg}>
                The 3 bedroom suites are the pinnacle of luxury living in
                Vientiane. At 147 sqm, these rooms feature the finest in
                Souphattra design, with an extensive lounge area, spacious and
                luxurious master bedroom, and two further bedrooms.
              </p>
              <button className={styles.btn_absolute}>
                <Link href="/rooms/threeBedRooms">DISCOVER MORE DETAILS</Link>
              </button>
            </div>
          </div>
        </div>

        <div className={styles.create_space}></div>

        <div className={styles.textCenter}>
          <h1
            className={[styles.fontGold, styles.mg].join(" ")}
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            Amenities & Facilities
          </h1>
          <div
            className={[
              styles.flex,
              styles.unAlige,
              styles.mg,
              styles.justifyCenter,
            ].join(" ")}
          >
            <div
              className={styles.facility}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className={styles.bg}>
                <div className={styles.mini_pic}>
                  <Image alt="/" src={bar_shop} width="1000" height="900" />
                </div>
                <div className={styles.fontInPic}>
                  <p>Lobby Bar</p>
                </div>
              </div>
              <div className={styles.titleInMinipic}>
                <h1 className={[styles.fontGold].join(" ")}>First Floor</h1>
                <p>Lobby Bar</p>
                <p>English Garden</p>
                <p>Meeting Room</p>
              </div>
            </div>
            <div
              className={styles.facility}
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <div className={styles.bg}>
                <div className={styles.mini_pic}>
                  <Image alt="/" src={bar_shop2} width="1000" height="900" />
                </div>
                <div className={styles.fontInPic}>
                  <p>Cigar Private Room</p>
                </div>
              </div>
              <div className={styles.titleInMinipic}>
                <h1 className={[styles.fontGold].join(" ")}>Second Floor</h1>
                <p>Souphattra Restaurant</p>
                <p>Cigar Bar</p>
                <p>Spa</p>
              </div>
            </div>
            <div
              className={styles.facility}
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <div className={styles.bg}>
                <div className={styles.mini_pic}>
                  <Image alt="/" src={gym} width="1000" height="900" />
                </div>
                <div className={styles.fontInPic}>
                  <p>Fitness</p>
                </div>
              </div>
              <div className={styles.titleInMinipic}>
                <h1 className={[styles.fontGold].join(" ")}>Third Floor</h1>
                <p>Pool & Gym</p>
                <p>Steam & Sauna</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
