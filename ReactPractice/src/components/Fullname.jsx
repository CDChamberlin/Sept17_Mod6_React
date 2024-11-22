function NamePart(props) {
    return <span>{props.value}</span>;
}

function FullName(props) {
    return (
        <div className="componentBox">
            <NamePart value={props.first} />
            {props.middle && <NamePart value={props.middle} />}
            <NamePart value={props.last} />
        </div>
    );
}

export { FullName, NamePart };