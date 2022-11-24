import './Header.css';

function Header() {
    return (
        <header className="Header">
            <h3>Hello There</h3>
            <h1>We Ware Glint</h1>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
            <section>
                <div>
                    <p>127</p>
                    <p>Award Received</p>
                </div>
                <div>
                    <p>1505</p>
                    <p>Cups of Coffee</p>
                </div>
                <div>
                    <p>109</p>
                    <p>Projects Completed</p>
                </div>
                <div>
                    <p>102</p>
                    <p>Happy Clients</p>
                </div>
            </section>
        </header>
    );
}

export default Header;