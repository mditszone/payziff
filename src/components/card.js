import { IconContext } from "react-icons";

import '../styles/card.scss';


export default function Card(props) {
    return(
        <div className="pz-card">
            <div className="pz-card-icons" id={props.id}>
            <IconContext.Provider value={{ className: "pz-card-icon", size: 70}}>
                <>
                    {props.icon}
                </>
            </IconContext.Provider>
            </div>
            <div className="pz-card-data">
                <span className='pz-card-data-count'>{props.count}</span>
                <span className='pz-card-data-title'>{props.title}</span>
            </div>
        </div>
    )
}