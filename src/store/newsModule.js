export const newsModule =  {
    state: {
      news: [
        {
          title: "NIO Earnings Are Coming. Investors Are Nervous.",
          description: "Wall Street expects a per-share loss of about 33 cents a share from $1.3 billion in sales.",
          Date: "2023-08-28",
        },
        {
          title: "Tesla's diner & drive-in theater supercharger station concept gets approved for West Hollywood",
          description: "Tesla’s retro-inspired supercharging diner & drive-in movie theater concept will begin construction soon after the Los Angeles Department of Building and Safety recently approved a planning permit for the company’s first Stantec-led design at 7001 Santa Monic…",
          Date: "2023-08-28",
        },
        {
            title: "Chinese electric carmaker BYD triples half-year profit",
            description: "BYD, China's leading electric carmaker, said on Monday its half-year net profit had tripled based on record demand.",
            Date: "2023-08-28",
        },
      ],
    },
    getters: {
      getAllNews(state) {
        return state.news;
      },
    },
  };
  