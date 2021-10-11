import React from "react";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

import { ChackNorris } from "../index";
import { REQUEST_STATUS } from "../../../utils/storage";

import { render } from "@testing-library/react";
import configureMockStore from "redux-mock-store";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const initialState = {
  chack: {
    categories: [],
    created_at: "2020-01-05 13:42:21.179347",
    icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
    id: "WLb0v6k8TDCuZFJt2PRNHQ",
    updated_at: "2020-01-05 13:42:21.179347",
    url: "https://api.chucknorris.io/jokes/WLb0v6k8TDCuZFJt2PRNHQ",
    value: "Chuck Norris kills time. With two meat cleavers.",
  },
  request: {
    error: null,
    status: REQUEST_STATUS.SUCCESS,
  },
};

const store = mockStore(initialState);

describe("ChackNorrisPage matches snapshot", () => {
  it("similar to snap", () => {
    const component = render(
      <Provider store={store}>
        <ChackNorris />
      </Provider>
    );

    expect(component).toMatchSnapshot();
  });
});
