import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
// import { loadAll } from "@tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
import Link from "next/link";
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.
interface IBreadcrumb {
  title: string;
  path: string;
}
interface IProps {
  pageName: string;
  breadcrumbs: IBreadcrumb[];
}
const BannerCustom = ({ pageName, breadcrumbs }: IProps) => {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      autoPlay: true,
      background: {
        image:
          "url('https://webdesign-finder.com/skymax-demo/brobit/wp-content/uploads/2019/07/title.jpg')",
        size: "cover", // Hoặc "contain" tùy theo cách bạn muốn hình nền hiển thị
        position: "50% 50%", // Căn giữa hình nền
        repeat: "no-repeat", // Không lặp lại hình nền
      },
      backgroundMask: {
        composite: "destination-out",
        cover: {
          color: {
            value: "#9b9b9b",
          },
          opacity: 1,
        },
        enable: false,
      },
      clear: true,
      defaultThemes: {},
      delay: 0,
      fullScreen: {
        enable: true,
        zIndex: 0,
      },
      detectRetina: true,
      duration: 0,
      fpsLimit: 120,
      interactivity: {
        detectsOn: "window",
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onDiv: {
            selectors: [],
            enable: false,
            mode: [],
            type: "circle",
          },
          onHover: {
            enable: true,
            mode: "grab",
          },
          resize: {
            delay: 0.5,
            enable: true,
          },
        },
        modes: {
          trail: {
            delay: 1,
            pauseOnStop: false,
            quantity: 1,
          },
          attract: {
            distance: 200,
            duration: 0.4,
            easing: "ease-out-quad",
            factor: 1,
            maxSpeed: 50,
            speed: 1,
          },
          bounce: {
            distance: 200,
          },
          bubble: {
            distance: 400,
            duration: 2,
            mix: false,
            opacity: 0.8,
            size: 40,
            divs: {
              distance: 200,
              duration: 0.4,
              mix: false,
              selectors: [],
            },
          },
          connect: {
            distance: 80,
            links: {
              opacity: 0.5,
            },
            radius: 60,
          },
          grab: {
            distance: 400,
            links: {
              blink: false,
              consent: false,
              opacity: 1,
            },
          },
          push: {
            default: true,
            groups: [],
            quantity: 4,
          },
          remove: {
            quantity: 2,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
            factor: 100,
            speed: 1,
            maxSpeed: 50,
            easing: "ease-out-quad",
            divs: {
              distance: 200,
              duration: 0.4,
              factor: 100,
              speed: 1,
              maxSpeed: 50,
              easing: "ease-out-quad",
              selectors: [],
            },
          },
          slow: {
            factor: 3,
            radius: 200,
          },
          light: {
            area: {
              gradient: {
                start: {
                  value: "#9b9b9b",
                },
                stop: {
                  value: "#000000",
                },
              },
              radius: 1000,
            },
            shadow: {
              color: {
                value: "#000000",
              },
              length: 2000,
            },
          },
        },
      },
      manualParticles: [],
      particles: {
        bounce: {
          horizontal: {
            value: 1,
          },
          vertical: {
            value: 1,
          },
        },
        collisions: {
          absorb: {
            speed: 2,
          },
          bounce: {
            horizontal: {
              value: 1,
            },
            vertical: {
              value: 1,
            },
          },
          enable: false,
          maxSpeed: 50,
          mode: "bounce",
          overlap: {
            enable: true,
            retries: 0,
          },
        },
        color: {
          value: "#9b9b9b",
          animation: {
            enable: true,
            h: {
              count: 0,
              enable: false,
              speed: 1,
              decay: 0,
              delay: 0,
              sync: true,
              offset: 0,
            },
            s: {
              count: 0,
              enable: false,
              speed: 1,
              decay: 0,
              delay: 0,
              sync: true,
              offset: 0,
            },
            l: {
              count: 0,
              enable: false,
              speed: 1,
              decay: 0,
              delay: 0,
              sync: true,
              offset: 0,
            },
          },
        },
        effect: {
          close: true,
          fill: true,
          options: {},
          type: [],
        },
        groups: {},
        move: {
          angle: {
            offset: 0,
            value: 90,
          },
          attract: {
            distance: 200,
            enable: false,
            rotate: {
              x: 3000,
              y: 3000,
            },
          },
          center: {
            x: 50,
            y: 50,
            mode: "percent",
            radius: 0,
          },
          decay: 0,
          distance: {},
          direction: "none",
          drift: 0,
          enable: true,
          gravity: {
            acceleration: 9.81,
            enable: false,
            inverse: false,
            maxSpeed: 50,
          },
          path: {
            clamp: true,
            delay: {
              value: 0,
            },
            enable: false,
            options: {},
          },
          outModes: {
            default: "out",
            bottom: "out",
            left: "out",
            right: "out",
            top: "out",
          },
          random: false,
          size: false,
          speed: 2,
          spin: {
            acceleration: 0,
            enable: false,
          },
          straight: false,
          trail: {
            enable: false,
            length: 10,
            fill: {},
          },
          vibrate: false,
          warp: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          limit: {
            mode: "delete",
            value: 0,
          },
          value: 150,
        },
        opacity: {
          value: {
            min: 0.1,
            max: 0.5,
          },
          animation: {
            count: 0,
            enable: false,
            speed: 3,
            decay: 0,
            delay: 0,
            sync: false,
            mode: "auto",
            startValue: "random",
            destroy: "none",
          },
        },
        reduceDuplicates: false,
        shadow: {
          blur: 0,
          color: {
            value: "#000",
          },
          enable: false,
          offset: {
            x: 0,
            y: 0,
          },
        },
        shape: {
          close: true,
          fill: true,
          options: {},
          type: "circle",
        },
        size: {
          value: {
            min: 1,
            max: 4,
          },
          animation: {
            count: 0,
            enable: true,
            speed: 20,
            decay: 0,
            delay: 0,
            sync: false,
            mode: "auto",
            startValue: "random",
            destroy: "none",
          },
        },
        stroke: {
          width: 0,
        },
        zIndex: {
          value: 0,
          opacityRate: 1,
          sizeRate: 1,
          velocityRate: 1,
        },
        destroy: {
          bounds: {},
          mode: "none",
          split: {
            count: 1,
            factor: {
              value: 3,
            },
            rate: {
              value: {
                min: 4,
                max: 9,
              },
            },
            sizeOffset: true,
            particles: {},
          },
        },
        roll: {
          darken: {
            enable: false,
            value: 0,
          },
          enable: false,
          enlighten: {
            enable: false,
            value: 0,
          },
          mode: "vertical",
          speed: 25,
        },
        tilt: {
          value: 0,
          animation: {
            enable: true,
            speed: 0,
            decay: 0,
            sync: false,
          },
          direction: "clockwise",
          enable: false,
        },
        twinkle: {
          lines: {
            enable: false,
            frequency: 0.05,
            opacity: 1,
          },
          particles: {
            enable: false,
            frequency: 0.05,
            opacity: 1,
          },
        },
        wobble: {
          distance: 5,
          enable: false,
          speed: {
            angle: 50,
            move: 10,
          },
        },
        life: {
          count: 0,
          delay: {
            value: 0,
            sync: false,
          },
          duration: {
            value: 0,
            sync: false,
          },
        },
        rotate: {
          value: 0,
          animation: {
            enable: true,
            speed: 0,
            decay: 0,
            sync: false,
          },
          direction: "clockwise",
          path: false,
        },
        orbit: {
          animation: {
            count: 0,
            enable: true,
            speed: 1,
            decay: 0,
            delay: 0,
            sync: false,
          },
          enable: false,
          opacity: 1,
          rotation: {
            value: 45,
          },
          width: 1,
        },
        links: {
          blink: false,
          color: {
            value: "#9b9b9b",
          },
          consent: false,
          distance: 150,
          enable: true,
          frequency: 1,
          opacity: 0.4,
          shadow: {
            blur: 5,
            color: {
              value: "#000",
            },
            enable: false,
          },
          triangles: {
            enable: false,
            frequency: 1,
          },
          width: 1,
          warp: false,
        },
        repulse: {
          value: 0,
          enabled: false,
          distance: 1,
          duration: 1,
          factor: 1,
          speed: 1,
        },
      },
      pauseOnBlur: true,
      pauseOnOutsideViewport: true,
      responsive: [],
      smooth: false,
      style: {
        position: "relative",
        height: "450px",
        overflow: "hidden",
      },
      themes: [],
      zLayers: 100,
      name: "Parallax",
      motion: {
        disable: false,
        reduce: {
          factor: 4,
          value: true,
        },
      },
    }),
    []
  );

  if (init) {
    return (
      <div className="relative h-[450px] overflow-hidden mb-20">
        {/* <div className="absolute left-16 top-16 z-50">
          <span className="logo-text border-2 uppercase cursor-pointer border-white text-white text-2xl tracking-[0.5em] px-5 py-1 inline-block">
            <strong>Bro</strong>bit{" "}
          </span>
        </div> */}
        <div className="absolute top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%] z-50">
          <h2 className="text-white text-[60px] font-bold uppercase text-center -tracking-[-0.2em]">
            {pageName}
          </h2>
        </div>
        {/* breadcrumb */}
        <div className="absolute bottom-0 z-50 bg-[rgba(0,_0,_0,_0.1)] w-full h-[60px]">
          <div className="flex justify-center items-center h-full gap-5">
            {breadcrumbs.map((item, index) => {
              return (
                <>
                  <Link
                    href={item.path}
                    key={index}
                    className="text-white uppercase tracking-[0.4em] text-[12px] font-light"
                  >
                    {item.title}
                  </Link>
                  {breadcrumbs.length - 1 != index && (
                    <span className="text-white">{">"}</span>
                  )}
                </>
              );
            })}
          </div>
        </div>
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
          className="particles-container"
        />
      </div>
    );
  }

  return <div className="min-h-[450px]"></div>;
};

export default BannerCustom;
