import {SET_PRODUCTS} from "../types";
import { doc, setDoc } from "firebase/firestore";
import {db} from "../../utils/firebase";

const products = [
    {
        name: "Samurai King Restling",
        slug: "samurai-king-restling",
        category: "landmarks",
        price: 101,
        currency: "USD",
        image: {
            src: "https://images.pexels.com/photos/57690/pexels-photo-57690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            alt: "Samurai King Restling"
        },
        bestseller: false,
        featured: false,
        label: {
            status: false,
            text: ""
        },
        details: {
            dimmentions: {
                width: 1020,
                height: 1020
            },
            size: 15000,
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab, ad amet aperiam assumenda consequatur consequuntur culpa cupiditate delectus dignissimos eveniet harum hic id ipsam maiores minima molestiae nemo nihil nisi nobis non numquam odio officia provident quaerat quia quidem quos recusandae reprehenderit sed soluta suscipit tempora ut! Nihil, repellendus?",
            recommendations: [
                {
                    src: "https://images.pexels.com/photos/1005417/pexels-photo-1005417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    alt: "prod-1"
                },
                {
                    src: "https://images.pexels.com/photos/916339/pexels-photo-916339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    alt: "prod-2"
                },
                {
                    src: "https://images.pexels.com/photos/4099388/pexels-photo-4099388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    alt: "prod-3"
                }
            ]
        }
    },
    {
        name: "Red Bench",
        slug: "red-bench",
        category: "people",
        price: 120,
        currency: "USD",
        image: {
            src: "https://images.pexels.com/photos/12419386/pexels-photo-12419386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            alt: "Red Bench"
        },
        bestseller: true,
        featured: false,
        label: {
            status: false,
            text: ""
        },
        details: {
            dimmentions: {
                width: 550,
                height: 550
            },
            size: 6500,
            description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.",
            recommendations: [
                {
                    src: "https://images.pexels.com/photos/12340883/pexels-photo-12340883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    alt: "prod-1"
                },
                {
                    src: "https://images.pexels.com/photos/12139617/pexels-photo-12139617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    alt: "prod-2"
                },
                {
                    src: "https://images.pexels.com/photos/10345617/pexels-photo-10345617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    alt: "prod-3"
                }
            ]
        }
    },
    {
        name: "Egg Balloon",
        slug: "egg-balloon",
        category: "food",
        price: 93.89,
        currency: "USD",
        image: {
            src: "https://images.pexels.com/photos/5332934/pexels-photo-5332934.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            alt: "Egg Balloon"
        },
        bestseller: false,
        featured: false,
        label: {
            status: false,
            text: ""
        },
        details: {
            dimmentions: {
                width: 900,
                height: 450
            },
            size: 10500,
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            recommendations: [
                {
                    src: "https://images.pexels.com/photos/12489555/pexels-photo-12489555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    alt: "prod-1"
                },
                {
                    src: "https://images.pexels.com/photos/12629400/pexels-photo-12629400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    alt: "prod-2"
                },
                {
                    src: "https://images.pexels.com/photos/4878621/pexels-photo-4878621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    alt: "prod-3"
                }
            ]
        }
    },
    {
        name: "Man",
        slug: "man",
        category: "people",
        price: 100,
        currency: "USD",
        image: {
            src: "https://images.pexels.com/photos/12329480/pexels-photo-12329480.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            alt: "Man"
        },
        bestseller: false,
        featured: false,
        label: {
            status: false,
            text: ""
        },
        details: {
            dimmentions: {
                width: 150,
                height: 150
            },
            size: 600,
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            recommendations: [
                {
                    src: "https://images.pexels.com/photos/10757870/pexels-photo-10757870.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    alt: "prod-1"
                },
                {
                    src: "https://images.pexels.com/photos/11539114/pexels-photo-11539114.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    alt: "prod-2"
                },
                {
                    src: "https://images.pexels.com/photos/11847042/pexels-photo-11847042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    alt: "prod-3"
                }
            ]
        }
    },
    {
        name: "Architecture",
        slug: "architecture",
        category: "landmarks",
        price: 250,
        currency: "USD",
        image: {
            src: "https://images.pexels.com/photos/12578016/pexels-photo-12578016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            alt: "Architecture"
        },
        bestseller: false,
        featured: false,
        label: {
            status: false,
            text: ""
        },
        details: {
            dimmentions: {
                width: 850,
                height: 850
            },
            size: 6000,
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            recommendations: [
                {
                    src: "https://images.pexels.com/photos/10836627/pexels-photo-10836627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    alt: "prod-1"
                },
                {
                    src: "https://images.pexels.com/photos/11577405/pexels-photo-11577405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    alt: "prod-2"
                },
                {
                    src: "https://images.pexels.com/photos/9278713/pexels-photo-9278713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    alt: "prod-3"
                }
            ]
        }
    },
    {
        name: "Dogs",
        slug: "dogs",
        category: "Pets",
        price: 300,
        currency: "USD",
        image: {
            src: "https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            alt: "Dogs"
        },
        bestseller: true,
        featured: false,
        label: {
            status: false,
            text: ""
        },
        details: {
            dimmentions: {
                width: 850,
                height: 850
            },
            size: 6000,
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            recommendations: [
                {
                    src: "https://images.pexels.com/photos/1364729/pexels-photo-1364729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    alt: "prod-1"
                },
                {
                    src: "https://images.pexels.com/photos/2318990/pexels-photo-2318990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    alt: "prod-2"
                },
                {
                    src: "https://images.pexels.com/photos/1390784/pexels-photo-1390784.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    alt: "prod-3"
                }
            ]
        }
    },
    {
        name: "London",
        slug: "london",
        category: "Cities",
        price: 1500,
        currency: "USD",
        image: {
            src: "https://images.pexels.com/photos/1427581/pexels-photo-1427581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            alt: "London"
        },
        bestseller: false,
        featured: false,
        label: {
            status: false,
            text: ""
        },
        details: {
            dimmentions: {
                width: 1000,
                height: 600
            },
            size: 1200,
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            recommendations: [
                {
                    src: "https://images.pexels.com/photos/77171/pexels-photo-77171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    alt: "prod-1"
                },
                {
                    src: "https://images.pexels.com/photos/1427578/pexels-photo-1427578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    alt: "prod-2"
                },
                {
                    src: "https://images.pexels.com/photos/2214035/pexels-photo-2214035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    alt: "prod-3"
                }
            ]
        }
    },
    {
        name: "Flowers",
        slug: "flowers",
        category: "Nature",
        price: 1300,
        currency: "USD",
        image: {
            src: "https://images.pexels.com/photos/1697912/pexels-photo-1697912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            alt: "Flowers"
        },
        bestseller: false,
        featured: false,
        label: {
            status: false,
            text: ""
        },
        details: {
            dimmentions: {
                width: 1000,
                height: 600
            },
            size: 1200,
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            recommendations: [
                {
                    src: "https://images.pexels.com/photos/2058498/pexels-photo-2058498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    alt: "prod-1"
                },
                {
                    src: "https://images.pexels.com/photos/1166869/pexels-photo-1166869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    alt: "prod-2"
                },
                {
                    src: "https://images.pexels.com/photos/4622976/pexels-photo-4622976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    alt: "prod-3"
                }
            ]
        }
    },
    {
        name: "Trees",
        slug: "trees",
        category: "Nature",
        price: 800,
        currency: "USD",
        image: {
            src: "https://images.pexels.com/photos/247160/pexels-photo-247160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            alt: "Trees"
        },
        bestseller: false,
        featured: true,
        label: {
            status: false,
            text: ""
        },
        details: {
            dimmentions: {
                width: 750,
                height: 750
            },
            size: 2000,
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            recommendations: [
                {
                    src: "https://images.pexels.com/photos/1179229/pexels-photo-1179229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    alt: "prod-1"
                },
                {
                    src: "https://images.pexels.com/photos/775201/pexels-photo-775201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    alt: "prod-2"
                },
                {
                    src: "https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    alt: "prod-3"
                }
            ]
        }
    },
    {
        name: "Cars",
        slug: "cars",
        category: "Premium",
        price: 2500,
        currency: "USD",
        image: {
            src: "https://images.pexels.com/photos/3156482/pexels-photo-3156482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            alt: "Cars"
        },
        bestseller: true,
        featured: false,
        label: {
            status: false,
            text: ""
        },
        details: {
            dimmentions: {
                width: 750,
                height: 750
            },
            size: 2000,
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            recommendations: [
                {
                    src: "https://images.pexels.com/photos/1974520/pexels-photo-1974520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    alt: "prod-1"
                },
                {
                    src: "https://images.pexels.com/photos/2834653/pexels-photo-2834653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    alt: "prod-2"
                },
                {
                    src: "https://images.pexels.com/photos/1164778/pexels-photo-1164778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    alt: "prod-3"
                }
            ]
        }
    },
    {
        name: "Animal",
        slug: "animal",
        category: "Nature",
        price: 350.62,
        currency: "USD",
        image: {
            src: "https://images.unsplash.com/photo-1656299882838-de57aede97e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
            alt: "animal"
        },
        bestseller: true,
        featured: false,
        label: {
            status: false,
            text: ""
        },
        details: {
            dimmentions: {
                width: 750,
                height: 750
            },
            size: 2000,
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            recommendations: [
                {
                    src: "https://images.pexels.com/photos/1974520/pexels-photo-1974520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    alt: "prod-1"
                },
                {
                    src: "https://images.pexels.com/photos/2834653/pexels-photo-2834653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    alt: "prod-2"
                },
                {
                    src: "https://images.pexels.com/photos/1164778/pexels-photo-1164778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    alt: "prod-3"
                }
            ]
        }
    },
    {
        name: "Bird",
        slug: "bird",
        category: "Nature",
        price: 615,
        currency: "USD",
        image: {
            src: "https://images.unsplash.com/photo-1655874184076-c75fce971b46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80",
            alt: "bird"
        },
        bestseller: true,
        featured: false,
        label: {
            status: false,
            text: ""
        },
        details: {
            dimmentions: {
                width: 750,
                height: 750
            },
            size: 2000,
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            recommendations: [
                {
                    src: "https://images.pexels.com/photos/1974520/pexels-photo-1974520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    alt: "prod-1"
                },
                {
                    src: "https://images.pexels.com/photos/2834653/pexels-photo-2834653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    alt: "prod-2"
                },
                {
                    src: "https://images.pexels.com/photos/1164778/pexels-photo-1164778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    alt: "prod-3"
                }
            ]
        }
    },
    {
        name: "Rabbit",
        slug: "rabbit",
        category: "Nature",
        price: 100,
        currency: "USD",
        image: {
            src: "https://images.unsplash.com/photo-1655988880656-cd2eed3dcea5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
            alt: "bird"
        },
        bestseller: true,
        featured: false,
        label: {
            status: false,
            text: ""
        },
        details: {
            dimmentions: {
                width: 750,
                height: 750
            },
            size: 2000,
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            recommendations: [
                {
                    src: "https://images.pexels.com/photos/1974520/pexels-photo-1974520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    alt: "prod-1"
                },
                {
                    src: "https://images.pexels.com/photos/2834653/pexels-photo-2834653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    alt: "prod-2"
                },
                {
                    src: "https://images.pexels.com/photos/1164778/pexels-photo-1164778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    alt: "prod-3"
                }
            ]
        }
    },
    {
        name: "Moon",
        slug: "moon",
        category: "Nature",
        price: 900,
        currency: "USD",
        image: {
            src: "https://images.unsplash.com/photo-1655752800011-1248ed2d0640?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
            alt: "moon"
        },
        bestseller: true,
        featured: false,
        label: {
            status: false,
            text: ""
        },
        details: {
            dimmentions: {
                width: 750,
                height: 750
            },
            size: 2000,
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            recommendations: [
                {
                    src: "https://images.pexels.com/photos/1974520/pexels-photo-1974520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    alt: "prod-1"
                },
                {
                    src: "https://images.pexels.com/photos/2834653/pexels-photo-2834653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    alt: "prod-2"
                },
                {
                    src: "https://images.pexels.com/photos/1164778/pexels-photo-1164778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    alt: "prod-3"
                }
            ]
        }
    },
    {
        name: "Model",
        slug: "model",
        category: "People",
        price: 12000,
        currency: "USD",
        image: {
            src: "https://images.unsplash.com/photo-1656002277655-d725fa996b1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80",
            alt: "moon"
        },
        bestseller: true,
        featured: false,
        label: {
            status: false,
            text: ""
        },
        details: {
            dimmentions: {
                width: 750,
                height: 750
            },
            size: 2000,
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            recommendations: [
                {
                    src: "https://images.pexels.com/photos/1974520/pexels-photo-1974520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    alt: "prod-1"
                },
                {
                    src: "https://images.pexels.com/photos/2834653/pexels-photo-2834653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    alt: "prod-2"
                },
                {
                    src: "https://images.pexels.com/photos/1164778/pexels-photo-1164778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    alt: "prod-3"
                }
            ]
        }
    },
    {
        name: "Portrait",
        slug: "portrait",
        category: "People",
        price: 5200,
        currency: "USD",
        image: {
            src: "https://images.unsplash.com/photo-1654707264308-286492443b37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80",
            alt: "portrait"
        },
        bestseller: true,
        featured: false,
        label: {
            status: false,
            text: ""
        },
        details: {
            dimmentions: {
                width: 750,
                height: 750
            },
            size: 2000,
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            recommendations: [
                {
                    src: "https://images.pexels.com/photos/1974520/pexels-photo-1974520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    alt: "prod-1"
                },
                {
                    src: "https://images.pexels.com/photos/2834653/pexels-photo-2834653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    alt: "prod-2"
                },
                {
                    src: "https://images.pexels.com/photos/1164778/pexels-photo-1164778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    alt: "prod-3"
                }
            ]
        }
    }
]

export const setProducts = ()=>{
    return async function(dispatch){
        for (let i = 0; i < products.length; i++) {
            await setDoc(doc(db, "products", products[i].name), products[i]);
        }

        dispatch(setProductsAction())
    }
}


const setProductsAction = ()=>{

    return {
        type: SET_PRODUCTS
    }
}
