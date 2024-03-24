import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const slice = createSlice({
  name: "tasks",
  initialState: {
    item: [],
    loading: false,
    error: false,
  },
  redusers: {
    fetchPending(state, action) {
      state.loading = true;
      state.error = false;
    },
    fetchSuccsess(state, action) {
      state.loading = false;
      state.error = false;
      state.items.push(...action.payload);
    },
    fetchError(state, action) {
      state.loading = state.loading = true;
      state.error = false;
    },
  },
});

const { fetchPending, fetchSuccsess, fetchError } = slice.actions;

export const fetchTasks = () => async (dispatch) => {
  try {
    dispatch(fetchPending());
    const response = await axios.get(
      "https://62584f320c918296a49543e7.mockapi.io/tasks"
    );
    dispatch(fetchSuccsess(response.data));
  } catch (error) {
    dispatch(fetchError());
  }
};

export default slice.reducer;
