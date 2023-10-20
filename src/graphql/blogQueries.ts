import gql from "graphql-tag";

export const GET_LATEST_POST = gql`
  query GetMirrorTransactions($wallet: String!) {
    transactions(
      {
        name:"App-Name",
        values:["MirrorXYZ"],
      },
      {
        name:"Contributor",
        values:[funkornaut.eth],
      }
    ], sort: HEIGHT_DESC, first: 1){
      edges {
        node {
          id
        }
      }
    }
  }
`;
