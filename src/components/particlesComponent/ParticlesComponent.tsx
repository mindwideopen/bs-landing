// import { useCallback } from "react";
// import type { Container, Engine } from "tsparticles-engine";
// import Particles from "react-tsparticles";
// import { loadSlim } from "tsparticles-slim";
// import iconPC from "../../assets/images/icons8-computer-94.png"
//
// export const ParticlesComponent = () => {
//     const particlesInit = useCallback(async (engine: Engine) => {
//         await loadSlim(engine);
//     }, []);
//
//     const particlesLoaded = useCallback(async (container: Container | undefined) => {
//         console.log(container);
//     }, []);
//
//     return (
//         <Particles
//             id="tsparticles"
//             init={particlesInit}
//             loaded={particlesLoaded}
//             options={{
//                 fpsLimit: 120,
//                 interactivity: {
//                     events: {
//                         onClick: {
//                             enable: true,
//                             mode: "push" // изменено с "attract" на "push"
//                         },
//                         onHover: {
//                             enable: true,
//                             mode: "attract",
//
//                         },
//                         resize: true
//                     },
//                     modes: {
//                         push: {
//                             quantity: 1 // создаётся 1 частица на клик
//                         },
//                         repulse: {
//                             distance: 1000,
//                             duration: 0.4
//                         },
//
//                     }
//                 },
//                 particles: {
//                     color: {
//                         value: "#ffffff"
//                     },
//                     links: {
//                         color: "#ffffff",
//                         distance: 1000000,
//                         enable: true,
//                         opacity: 1,
//                         width: 2,
//
//                     },
//                     move: {
//                         direction: "none",
//                         enable: false,
//                         outModes: {
//                             default: "bounce",
//                             top:"destroy"
//                         },
//                         random: false,
//                         speed: 5,
//                         straight: false
//                     },
//                     number: {
//                         density: {
//                             enable: true,
//                             area: 10000000000000
//                         },
//                         value: 0,
//                         max:4
//                     },
//                     opacity: {
//                         value: 1
//                     },
//                     shape: {
//                         type: "image",
//                         image: {
//                             src: iconPC, // путь к иконке компьютера
//                             width: 32,
//                             height: 32
//                         }
//                     },
//                     size: {
//                         value: { min: 20, max: 20 }
//                     }
//                 },
//                 detectRetina: true
//             }}
//         />
//     );
// };


import { useCallback, useEffect, useRef } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import iconPC from "../../assets/images/icons8-computer-94.png";

export const ParticlesComponent = () => {
    const containerRef = useRef<Container | null>(null);  // Указываем тип рефа

    const particlesInit = useCallback(async (engine: Engine) => {
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        if (container) {
            containerRef.current = container;
        }
    }, []);

    // Слежение за количеством частиц
    useEffect(() => {
        const interval = setInterval(() => {
            if (containerRef.current) {
                const particleCount = containerRef.current.particles.count;
                console.log("Текущее количество частиц:", particleCount);
            }
        }, 1000); // Выводим количество раз в секунду

        return () => clearInterval(interval); // Очищаем интервал при размонтировании
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push", // добавляем частицу по клику
                        },
                        onHover: {
                            enable: true,
                            mode: "attract",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 1, // создаётся 1 частица на клик
                        },
                        repulse: {
                            distance: 10,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 1000000,
                        enable: true,
                        opacity: 1,
                        width: 2,
                    },
                    move: {
                        direction: "none",
                        enable: false,
                        outModes: {
                            default: "bounce",
                            top: "destroy",
                        },
                        random: false,
                        speed: 1,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 10000000000000,
                        },
                        value: 0,
                        max: 4,
                    },
                    opacity: {
                        value: 1,
                    },
                    shape: {
                        type: "image",
                        image: {
                            src: iconPC, // путь к иконке компьютера
                            width: 50,
                            height: 50,
                        },
                    },
                    size: {
                        value: { min: 50, max: 50 },
                    },
                },
                detectRetina: true,
            }}
        />
    );
};
