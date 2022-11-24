import './footer.css';

let cards = [
    {
        name: "Fusce dictum finibus",
        img: './assets/img/salat.jpeg',
        desc: "Lorem Ipsum pimmel dolar sit amet, consectetuer adipiscing elit Aenan.",
        price: "$45 / 55$"
    },
    {
        name: "Fusce d finibus",
        img: '../../../assets/img/salat.jpeg',
        desc: "Lorem Ipsum pimmel dolar sit amet, consectetuer adipiscing elit Aenan.",
        price: "$45 / 55$"
    },
    {
        name: "Fusce d finibus",
        img: '../../../assets/img/salat.jpeg',
        desc: "Lorem Ipsum pimmel dolar sit amet, consectetuer adipiscing elit Aenan.",
        price: "$45 / 55$"
    },
    {
        name: "Fusce d finibus",
        img: '../../../assets/img/salat.jpeg',
        desc: "Lorem Ipsum pimmel dolar sit amet, consectetuer adipiscing elit Aenan.",
        price: "$45 / 55$"
    },
    {
        name: "Fusce d finibus",
        img: '../../../assets/img/salat.jpeg',
        desc: "Lorem Ipsum pimmel dolar sit amet, consectetuer adipiscing elit Aenan.",
        price: "$45 / 55$"
    },
    {
        name: "Fusce d finibus",
        img: '../../../assets/img/salat.jpeg',
        desc: "Lorem Ipsum pimmel dolar sit amet, consectetuer adipiscing elit Aenan.",
        price: "$45 / 55$"
    },
    {
        name: "Fusce d finibus",
        img: '../../../assets/img/salat.jpeg',
        desc: "Lorem Ipsum pimmel dolar sit amet, consectetuer adipiscing elit Aenan.",
        price: "$45 / 55$"
    },
    {
        name: "Fusce d finibus",
        img: '../../../assets/img/salat.jpeg',
        desc: "Lorem Ipsum pimmel dolar sit amet, consectetuer adipiscing elit Aenan.",
        price: "$45 / 55$"
    },

];
let img;
let nameCard;
let desc;
let price;
let turned = [];

function Footer() {
    for (let i = 0; i < cards.length; i++) {
        nameCard = cards[i].name;
        img = cards[i].img;
        desc = cards[i].desc;
        price = cards[i].price;
        console.log("first");
        turned.push(
            <div className="Card">
                <img src={img} alt="salat"></img>
                <p className="CardName">{nameCard}</p>
                <p className="CardDesc">{desc}</p>
                <p className="price">{price}</p>
            </div>
        );

    }
    return (
        <footer className='footer'>
            {turned}
        </footer>
    );
};


export default Footer;