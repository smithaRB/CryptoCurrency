import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
    'X-RapidAPI-Key': 'd034f69466msh949ff746b4fba86p104e9djsn1999d233a3de',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl  =  'https://coinranking1.p.rapidapi.com'
const createRequest = (url)=>({url,headers:cryptoApiHeaders})

export const  cryptoApi = createApi({
   reducerPath:'cryptoApi',
   baseQuery: fetchBaseQuery({baseUrl}),
   endpoints : (builder)=>({
      getCryptos:builder.query({
        query:(count)=>createRequest(`/coins?limit=${count}`),
      }),
      getCryptoDetails: builder.query({
        query: (coinId) => createRequest(`/coin/${coinId}`),
      }),
      getCryptoHistory: builder.query({
        query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
      }),
   })
});
export const {
    useGetCryptosQuery, useGetCryptoDetailsQuery , useGetCryptoHistoryQuery
} = cryptoApi;
// const options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/exchanges',
//     params: {
//       referenceCurrencyUuid: 'yhjMzLPhuIDl',
//       limit: '50',
//       offset: '0',
//       orderBy: '24hVolume',
//       orderDirection: 'desc'
//     },
//     headers: {
//       'X-RapidAPI-Key': 'd034f69466msh949ff746b4fba86p104e9djsn1999d233a3de',
//       'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
//     }
//   };