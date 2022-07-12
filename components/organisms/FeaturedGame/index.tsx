import GameItem from "../../molecules/GameItem";

export default function FeaturedGame() {
  return (
    <section className="featured-game pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          Our Featured
          <br /> Games This Year
        </h2>
        <div
          className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4"
          data-aos="fade-up"
        >
          <GameItem
            image="Thumbnail-1.png"
            gameName="Super Mechs"
            device="Mobile"
          />
          <GameItem
            image="Thumbnail-2.png"
            gameName="Call of Duty: Modern"
            device="Mobile"
          />
          <GameItem
            image="Thumbnail-3.png"
            gameName="Mobile Legends"
            device="Mobile"
          />
          <GameItem
            image="Thumbnail-4.png"
            gameName="Clash of Clans"
            device="Mobile"
          />
          <GameItem
            image="Thumbnail-5.png"
            gameName="Valorant"
            device="Desktop"
          />
        </div>
      </div>
    </section>
  );
}
