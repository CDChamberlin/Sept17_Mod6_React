export default function PropDisplayer(props) {
    const stringProps = JSON.stringify(
        { ...props, children: undefined },
        null,
        2
    );

    return (
        <div className="componentBox">
            <h2>Check out my Props!</h2>
            <h3>{stringProps}</h3>
        </div>
    );
}
