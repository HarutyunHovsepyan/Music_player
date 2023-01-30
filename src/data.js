import { v4 as uuid } from 'uuid'

function chilHop() {
    return [
        {
            name: "Moving on",
            artist: "Nymano, Suuna",
            img: "https://chillhop.com/wp-content/uploads/2022/10/0b99c64a1316ecfb990c546ba4a73f6de27cfde5-1024x1024.jpg",
            id: uuid(),
            active: true,
            color: ["#569BDE", "#E3E0F5"],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=42051'
        },
        {
            name: "Saved For Sunset",
            artist: "Allem Iversom, little blue",
            img: "https://chillhop.com/wp-content/uploads/2022/10/d2fc5032585b1d577f2bd59d5dba4766d99884f6-1024x1024.jpg",
            id: uuid(),
            active: false,
            color: ["#946338", "#DADADA"],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=42247'
        }, {
            name: " Making a Way",
            artist: "The BREED",
            img: "https://chillhop.com/wp-content/uploads/2022/07/e435a424c2a637c19d2241dea2399a4813d984b3-1024x1024.jpg",
            id: uuid(),
            active: false,
            color: ["#B58600", "#B7442D"],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=41956'
        },
        {
            name: "Stay Positive",
            artist: " Aves",
            img: "https://chillhop.com/wp-content/uploads/2022/04/73f23095038f6f023083520706f3e5345f5dd682-1024x1024.jpg",
            id: uuid(),
            active: false,
            color: ["#6FB1D7", "#ED8CB6"],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=32859'
        },
        {
            name: "Hold me Tight",
            artist: "Philanthrope, mommy",
            img: "https://chillhop.com/wp-content/uploads/2022/10/bde03d4549afe8464c919b89dcb02c2cea1ba676-1024x1024.jpg",
            id: uuid(),
            active: false,
            color: ["#AA8323", "#C1C1B4"],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=42445'
        },
        {
            name: "Pond Sketch ",
            artist: "Sleepy Fish",
            img: "https://chillhop.com/wp-content/uploads/2022/04/73f23095038f6f023083520706f3e5345f5dd682-1024x1024.jpg",
            id: uuid(),
            active: false,
            color: ["#6FB1D7", "#ED8CB6"],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=32838'
        },
        {
            name: "Zephyr",
            artist: "Makzo, jacuzzi jefferson",
            img: "https://chillhop.com/wp-content/uploads/2022/04/73f23095038f6f023083520706f3e5345f5dd682-1024x1024.jpg",
            id: uuid(),
            active: false,
            color: ["#6FB1D7", "#ED8CB6"],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=32865'
        },
    ]
}

export default chilHop