import { useState } from "react";
import "./App.css";
import ExampleComponent from "./components/ExampleComponent";
import Copyright from "./components/Copyright";
import PropDisplayer from "./components/PropDisplayer";
import City from "./components/City";
import Pet from "./components/Pet";
import { FullName } from "./components/Fullname";
import ComplexComment from "./components/ComplexComment";
import Comment from "./components/comment/Comment";
import MovieLists from "./components/moviesList/MovieList";
import BirthdayTranslator from "./components/BirthdayTranslator";
import ExplodingBomb from "./components/Errors/ExplodingBomb";

function App() {
    const [count, setCount] = useState(0);
    const invalidJSX = (
        <>
            <p>paragraph 1</p>
            <p>paragraph 2</p>
        </>
    );

    const spiderman = {
        name: "Spiderman",
        alterEgo: "Peter Parker",
        catchPhrase: "With great power comes great responsibility",
    };
    const spideyFragment = (
        <>
            {" "}
            <h3>{spiderman.name}</h3>{" "}
            <blockquote>{spiderman.catchPhrase}</blockquote>
            <cite>{spiderman.alterEgo}</cite>
        </>
    );

    const comment = {
        date: new Date(),
        text: "I hope you enjoyed Learning React",
        author: {
            name: "C. Chamberlin",
            avatarUrl: "https://placehold.co/300",
        },
    };

    return (
        <>
            {/*             <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img
                        src={reactLogo}
                        className="logo react"
                        alt="React logo"
                    />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <button onClick={() => setCount(0)}>Reset Count</button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
            {invalidJSX}
            {spideyFragment}
            <ExampleComponent />
            <PropDisplayer myprops="First Prop"></PropDisplayer>
            <City name="Richmond">
                <p>I'm a child prop</p>
            </City>
            <Pet type="Feline" name="Bear" color="Black" />
            <FullName
                first="C"
                middle="D"
                last="C"
                style={{ fontSize: "3rem" }}
            />

            <Comment
                author={comment.author}
                date={comment.date}
                text={comment.text}
            />
            <MovieLists />
            */}
            {/* <BirthdayTranslator />
            <Copyright /> */}
            <ExplodingBomb />
        </>
    );
}

export default App;
