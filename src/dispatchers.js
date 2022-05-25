import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const Dispatchers = (props) => {

    const cardInfo = [
        { image: require('./images/d1.jpg'), title: "Robert Smith", text: "Two times highest TIP winner has highly gained experience in dispatching several trucks at a time.He is no doubt golden diSpatcher of DEG. " },
        { image: require('./images/d2.jpg'), title: "Michael Scott", text: "Michael aka MIKE is the king of power only truck. He has been dispatching for the past 4 years.U can easily count on him if u need dispatch services. " },
        { image: require('./images/d3.jpg'), title: "Jack Daniel", text: "Jack is the only dispatcher of DEG who can handle 6 trucks alone on daily basis.His good carrier relations made him a golden gem. " },

    ];

    const renderCard = (card, index) => {
        
        return (
            <>
                <div className="col-lg-4 col-md-6 col-sm-12">

                    <Card style={{ width: '18rem' }} key={index} >
                        <Card.Img variant="top" src={card.image} />
                        <Card.Body>
                            <Card.Title>{card.title}</Card.Title>
                            <Card.Text>
                                {card.text}
                            </Card.Text>
                            <Link className="btn btn-info" to="/show3" state={{image: card.image, title: card.title, text:card.text }}>Hire</Link>
                        </Card.Body>
                    </Card>

                </div>

            </>
        )
    }

    return (
        <div>
            <div className="row text-center m-5">
            <div id="123"><h1>Our Dispatchers</h1></div>
                {cardInfo.map(renderCard)}

            </div>




        </div>
    );
}

export default Dispatchers;