import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface PokemonType {
    name: string;
    // Các thuộc tính khác của Pokemon
}


export const pokemonApi = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
    endpoints: (builder) => ({
        getPokemonByName: builder.query<PokemonType, string>({
            query: (name) => `pokemon/${name}`,
        }),
        // Endpoint để gửi dữ liệu form lên server
        signup: builder.mutation({
            query: (formData) => ({
                url: 'https://65d466d93f1ab8c634350653.mockapi.io/users',
                method: 'POST',
                body: formData,
            }),
        }),
    }),
})



// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonByNameQuery, useLazyGetPokemonByNameQuery, useSignupMutation } = pokemonApi