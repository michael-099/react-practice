import react from 'react';
import reactDom from 'react-dom';
function Footer() {

    const date = new Date().getFullYear;
    console.log(date);
    return <footer><p>Copyright © {date}</p></footer>
}
export default Footer;