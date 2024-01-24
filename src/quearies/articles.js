import GraphQL from "../scripts/graphql.js";

export const articlesList = await GraphQL.query(`
query{
  posts{
    data{
      attributes{
        slug
        name
        image{
          data{
            attributes{
              url
              alternativeText
            }
          }
        }
      }
    }
  }
}
`);
