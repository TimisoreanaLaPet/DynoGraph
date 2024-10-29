import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import HttpMessageResponse from "../types/HttpMessageResponse.ts";
import ImportCsvRequest from "../types/ImportCsvRequest.ts";
import GraphModel from "../types/GraphModel.ts";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL,
  }),
  reducerPath: "api",
  tagTypes: [],
  endpoints: (build) => ({
    importCsv: build.mutation<HttpMessageResponse, ImportCsvRequest>({
      query: (body) => ({
        url: "csv",
        method: "POST",
        body: body
      })
    }),

    getGraph: build.query<GraphModel, undefined>({
      query: () => "graph"
    })
  })
})

export const {useImportCsvMutation, useGetGraphQuery} = api