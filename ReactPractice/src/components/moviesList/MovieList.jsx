const movies = [
    {
        title: "Inception",
        year: 2010,
        synopsis:
            "A skilled thief enters the subconscious of others to extract or implant ideas but faces challenges in distinguishing dreams from reality.",
    },
    {
        title: "The Shawshank Redemption",
        year: 1994,
        synopsis:
            "Wrongfully imprisoned, a banker forms a friendship with a fellow inmate and plans an elaborate escape over decades.",
    },
    {
        title: "The Matrix",
        year: 1999,
        synopsis:
            "A computer hacker discovers the world is a simulation controlled by sentient machines and joins a rebellion to fight for freedom.",
    },
    {
        title: "The Dark Knight",
        year: 2008,
        synopsis:
            "Batman battles the Joker, a criminal mastermind who pushes Gotham City into chaos and challenges the hero's ethics.",
    },
    {
        title: "Forrest Gump",
        year: 1994,
        synopsis:
            "A simple yet kind-hearted man narrates his extraordinary life, witnessing and influencing significant events in American history.",
    },
    {
        title: "Parasite",
        year: 2019,
        synopsis:
            "A poor family schemes to infiltrate a wealthy household, but their plan spirals out of control with devastating consequences.",
    },
    {
        title: "Interstellar",
        year: 2014,
        synopsis:
            "A team of astronauts travels through a wormhole to find a new home for humanity as Earth faces ecological collapse.",
    },
    {
        title: "Jurassic Park",
        year: 1993,
        synopsis:
            "Scientists clone dinosaurs to create a theme park, but chaos ensues when the creatures escape their enclosures.",
    },
    {
        title: "The Lion King",
        year: 1994,
        synopsis:
            "A young lion prince flees his kingdom after his father's death but returns as an adult to reclaim his rightful place.",
    },
    {
        title: "Pulp Fiction",
        year: 1994,
        synopsis:
            "Interweaving crime stories in Los Angeles explore themes of redemption, loyalty, and the unpredictable nature of life.",
    },
];

export default function MovieLists({ movieList = movies }) {
    function Movie({ title, year, synopsis }) {
        return (
            <section>
                <h4>{title}</h4>
                <p>
                    Released in <strong>{year}</strong>
                </p>
                <p>Synopsis: {synopsis}</p>
            </section>
        );
    }
    return (
        <div className="MoviesList componentBox">
            <ul>
                {movieList.map((movie) => {
                    return (
                        <li key={movie.title}>
                            <Movie
                                title={movie.title}
                                synopsis={movie.synopsis}
                                year={movie.year}
                            />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
