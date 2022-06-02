interface NoItemsContainerProps {}

const NoItemsContainer: React.FC<NoItemsContainerProps> = () => {
  return (
    <div
      className="App-no-items"
      style={{ backgroundImage: `url('./wood.png')` }}
    >
      <h2>Welcome to The Stardew Valley Helper!</h2>
      <p>
        This app was designed to help calculate daily earnings for various crops
        and craftable items in Stardew Valley.
      </p>
      <p>
        By default, the app will auto calculate everything for you, however, you
        can toggle on &ldquo;Enter Values Myself&ldquo; if you would like to
        enter your own prices. This feature is for those that prefer self
        discovery and would like to figure out prices on their own (with just a
        little help).
      </p>
      <p>
        Add some items and sort by specific criteria, or click on specific items
        to view more details.
      </p>
    </div>
  );
};

export default NoItemsContainer;
