import '../styles/button.scss'
;
export default function PZButton(props) {
    return(
        <div className="pz-button-container">
            <div className={props.type}>
                <input type="submit" placeholder={props.placeholder} value={props.value} onClick={props.onClick} />
            </div>
        </div>
    );
}