import React from 'react'
import BootstrapCard from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const Card = (props) => {
    return (
        <div>
            <CardGroup>
                <BootstrapCard class="card text-center">
                    <BootstrapCard.Img variant="top" src={props.src} />
                    <BootstrapCard.Body>
                        <BootstrapCard.Title>{props.title}</BootstrapCard.Title>
                        <BootstrapCard.Text>
                            {props.description}
                        </BootstrapCard.Text>
                    </BootstrapCard.Body>
                </BootstrapCard>
            </CardGroup>
        </div>

    )
}

export default Card