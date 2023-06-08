import Card from "../Cards";
let dataObj = {
  image: "https://picsum.photos/300/200",
  title: "Event Title",
  description: "Event Description",
  type: "filled",
};
const feauxData = [];
feauxData.length = 10;
feauxData.fill(dataObj, 0, 10);


const CardList = () =>
  feauxData.map(({ image, title, description, type }, i) => (
    <div className="carousel-item" key={i}>
      <Card
        key={i}
        image={image}
        title={title}
        description={description}
        type={type}
      />
    </div>
  ));

export default function Carousel({ children, ...props }) {
  return <div className="carousel space-x-3">{CardList()}</div>;
}
