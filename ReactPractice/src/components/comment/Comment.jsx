import "./Comment.css";
export default function Comment({ author, text, date = Date.now() }) {
    console.log(`Author: ${author}. Text: ${text}. Date: ${date}`);
    return (
        <div className="Comment componentBox">
            <UserInfo user={author} />
            <CommentDetails text={text} date={date} />
        </div>
    );
}

function Avatar({ avatarUrl, name }) {
    return <img className="Avatar" src={avatarUrl} alt={name} />;
}

function UserInfo({ user }) {
    return (
        <div className="UserInfo">
            <Avatar avatarUrl={user.avatarUrl} name={user.name} />
            <div className="UserInfo-name">{user.name}</div>
        </div>
    );
}

function CommentDetails({ text, date }) {
    const formattedDate = new Date(date);
    return (
        <>
            <div className="Comment-text">{text}</div>
            <div className="Comment-date">{formattedDate.toLocaleString()}</div>
        </>
    );
}
