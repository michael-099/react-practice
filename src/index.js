import react from 'react';
import reactDOM from 'react-dom';
import Card from './components/card.jsx';
import Header from './components/header.jsx';
import Footer from './components/Footer.jsx';
import Count from './components/count.jsx';
reactDOM.render(<div>
    {/* <h1 className="head">keeper app</h1> */}
    <Header /> 
    <Count title="count"/>
    <Card title="tittle" content="hwlllo" />
    <Card title="tittle" content="heloo" />
    <Card title="tittle" content="hwlllo" />
    <Card title="tittle" content="heloo" />
    
    <Footer className="footer" />

</div>, document.getElementById("root")); 