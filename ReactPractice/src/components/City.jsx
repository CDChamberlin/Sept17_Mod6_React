export default function City({
    name,
    state = "VA",
    country = "USA",
    children,
}) {
    return (
        <div className="componentBox">
            <strong>{name}</strong> is in {state}, {country}
            {children}
        </div>
    );
}
