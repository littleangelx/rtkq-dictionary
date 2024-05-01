import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.dictionaryapi.dev/api/v2/entries/en",
  }),
  tagTypes: ["Search"],
  endpoints: (builder) => ({
    getDefinition: builder.query({
      query: (word) => `/${word}`,
      providesTags: ["Search"],
    }),
  }),
});

export const { useGetDefinitionQuery } = apiSlice;
