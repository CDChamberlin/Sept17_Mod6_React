export default function PropDisplayer(props, children) {
    const stringProps = JSON.stringify(props);

    return (
        <div className="componentBox">
            <h2>Check out my Props!</h2>
            <h3>{stringProps}</h3>
            {children}
        </div>
    );
}
