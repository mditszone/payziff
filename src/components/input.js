import '../styles/input.scss';


export default function PZInput(props) {
    return(
        <div className="pz-input-container">
            <div className="input">
                <input type={props.type} 
                    placeholder={props.placeholder} 
                    value={props.value} 
                    onChange={props.onChange}
                    onKeyDown={props.onKeyDown}
                    pattern={props.pattern}
                    maxLength={props.maxLength} 
                    disabled={props.disabled} />
            </div>
        </div>
    )
}