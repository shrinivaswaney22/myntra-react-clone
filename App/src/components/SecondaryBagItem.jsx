import HomeItem from "./HomeItem";

const SecondaryBagItems = ({items}) => {
  return (
    <div className="Most_Viewed">
      <div className="display_most_viewed">
        {items.map((item) => (
          <HomeItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default SecondaryBagItems;
