import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import UseAuth from '../share/hook/UseAuth';


const MyBooking = () => {
    const [booking, setBooking] = useState([]);
    const { user } = UseAuth()
    useEffect(() => {
        fetch('http://localhost:5000/booking')
            .then(res => res.json())
            .then(data => setBooking(data))
    })
    const data = booking?.find(item => (user.email) == (item.email))
    return (
        <div>
            {data &&
                booking.map(book =>
                    <div className="d-flex border round p-2 m-2">
                        <div className="m-3  mx-auto">
                            <Card.Img variant="top" src={book.picture} style={{ width: '30rem' }} />
                        </div>
                        <div className="m-3  mx-auto">
                            <Card.Body style={{ width: '30rem' }}>
                                <Card.Title>{book.name}</Card.Title>
                                <Card.Title>Price: Only {book.price}Taka</Card.Title>
                                <Card.Title>Days: {book.days}</Card.Title>
                                <Card.Text> {book.about}</Card.Text>
                                {/* <Link to={`/package/${Package._id}`}> <Button className="btn btn-danger" variant="primary">Book Now</Button></Link> */}
                            </Card.Body>
                        </div>

                    </div>
                )
            }
        </div>
    );
};

export default MyBooking;