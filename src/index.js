import react from 'react';
import reactDOM from 'react-dom';
import Card from './jsx/card.jsx';
import Header from './jsx/header.jsx';
import Footer from './jsx/Footer.jsx';
reactDOM.render(<div>
    {/* <h1 className="head">keeper app</h1> */}
    <Header /> 
    <Card title="tittle" content="hwlllo" />
    <Footer className="footer" />

</div>, document.getElementById("root")); 