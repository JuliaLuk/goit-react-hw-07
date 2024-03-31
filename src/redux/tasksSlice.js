import { createSlice } from "@reduxjs/toolkit";
import { fetchTasks, deleteTask } from "./operations";

const slice = createSlice({
  name: "tasks",
  initialState: {
    items: [],
    loading: false,
    error: false,
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
        state.error = false;
      })
      .addCase(fetchTasks.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(deleteTask.pending, () => {})
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      })
      .addCase(deleteTask.rejected, () => {}),
});

export default slice.reducer;
