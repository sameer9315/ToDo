import { UserActions } from "./user-slice.js";

export const fetchUser = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");

      const response = await fetch("https://react-timer-app-backend.herokuapp.com/user", {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      if (!response.ok) {
        // console.log(response);
      }
      const data = response.json();
      return data;
    };

    try {
      const userData = await fetchData();
      const image = "https://react-timer-app-backend.herokuapp.com/" + userData.imageUrl;
      dispatch(
        UserActions.replaceUser({
          name: userData.name,
          image: image,
        })
      );
    } catch (err) {
      // console.log(err);
      throw err;
    }
  };
};
