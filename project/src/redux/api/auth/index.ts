import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    registerUserDoc: build.mutation<
      AUTH.RegisterUserDocResponse,
      AUTH.RegisterUserDocRequest
    >({
      query: (data) => ({
        url: "/users/register_doctor/",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["data"],
    }),

    registerUserPati: build.mutation<
    AUTH.RegisterUserPatiResponse,
    AUTH.RegisterUserPatiRequest
  >({
    query: (data) => ({
      url: "/users/register_patient/",
      method: "POST",
      body: data,
    }),
    invalidatesTags: ["data"],
  }),

  
  }),
});

export const { useRegisterUserDocMutation,useRegisterUserPatiMutation } = api;
