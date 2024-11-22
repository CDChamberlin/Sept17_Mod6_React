export default function Pet(props) {
    let type = "unknown";
    if (props.type) type = props.type;
    return (
        <div className="componentBox">
            <h2>My Pet</h2> <p>Type: {type}</p>
            {props.name ? (
                <p>
                    <strong>Name</strong>: {props.name}
                </p>
            ) : null}
            {props.color && (
                <p style={{ color: props.color }}>Color: {props.color}</p>
            )}
        </div>
    );
}
