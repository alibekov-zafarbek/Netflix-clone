export default function selectionFilter({ series, films }) {
  const filter = (movie) => {
    const Variable1 = new Set();

    let Variable2 = movie.filter((obj) => {
      const Variable3 = Variable1.has(obj.slug);
      Variable1.add(obj.slug);
      return !Variable3;
    });
    return Variable2;
  };
  return {
    series: [
      {
        title: "Documentaries",
        data: filter(series.filter((item) => item.genre === "documentaries")),
      },
      {
        title: "Comedies",
        data: filter(series.filter((item) => item.genre === "comedies")),
      },
      {
        title: "Children",
        data: filter(series.filter((item) => item.genre === "children")),
      },
      {
        title: "Crime",
        data: filter(series.filter((item) => item.genre === "crime")),
      },

      {
        title: "Feel Good",
        data: filter(series.filter((item) => item.genre === "feel-good")),
      },
    ],
    films: [
      {
        title: "Drama",
        data: filter(films.filter((item) => item.genre === "drama")),
      },
      {
        title: "Thriller",
        data: filter(films.filter((item) => item.genre === "thriller")),
      },
      {
        title: "Children",
        data: filter(films.filter((item) => item.genre === "children")),
      },
      {
        title: "Suspense",
        data: filter(films.filter((item) => item.genre === "suspense")),
      },
      {
        title: "Romance",
        data: filter(films.filter((item) => item.genre === "romance")),
      },
    ],
  };
}
