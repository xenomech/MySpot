import Container from "../components/Container";
export default function Home() {
  return (
    <Container>
      <div className="py-10 px-2">
        <h1 className="py-1 font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
          Gokul Suresh
        </h1>
        <h2 className="py-1 text-gray-700 dark:text-gray-200 mb-4 text-2xl">
          Product Developer @ SurveySparrow
        </h2>
        {/* add social icons */}
        <p className="py-1 text-xl text-gray-700 dark:text-gray-200">
          Hey! 👋
          <br />
          Welcome to my spot on the web. I build and occasionally design
          websites and apps.
        </p>
        <div>
          <h1 className="py-5 font-bold text-2xl md:text-3xl tracking-tight mb-1 text-black dark:text-white">
            Latest posts
          </h1>
          <p>here goes the latest post cards</p>
        </div>
      </div>
    </Container>
  );
}
