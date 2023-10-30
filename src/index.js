import react from 'react';
import reactDOM from 'react-dom';
import Card from './components/card.jsx';
import Header from './components/header.jsx';
import Footer from './components/Footer.jsx';
import Count from './components/inceament/count.jsx';
import Detail from './components/Hover/hover_Q.jsx';
reactDOM.render(<div>
    {/* <h1 className="head">keeper app</h1> */}
    <Header /> 
    
    <Count title="count"/>
    <Detail/>
    <Card title="tittle" content="hwlllo" />
    <Card title="tittle" content="heloo" />
    <Card title="tittle" content="hwlllo" />
    <Card title="tittle" content="heloo" />
    
    <Footer className="footer" />

</div>, document.getElementById("root")); 