import GraphQL from "../scripts/graphql.js";

export const categoryList = await GraphQL.query(`
query {
  categories{
    data{
      id
      attributes{
        posts{
          data{
            id
          }
        }
        name
        slug
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