export const initialState = {
  basket: [
    {
      id: "1235",
      image: "https://m.media-amazon.com/images/I/71lUwxmW0PL._AC_UL320_.jpg",
      price: 9.99,
      rating: 4,
      title: "Gildan Women's Softstyle Cotton T-Shirt, Style G64000l, 2-Pack",
    },
  ],
  user: null,
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      // Logic for addding item for basket
      return { ...state, basket: [...state.basket, action.item] };
    case "REMOVE_FROM_BASKET":
      //logic for removing item from basket
      let newBasket = [...state.basket];
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index > -1) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: %{action.id}) as its not an item`
        );
      }
      return { ...state, basket: newBasket };
    default:
      return state;
  }
};

export default reducer;
