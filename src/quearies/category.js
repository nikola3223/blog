import GraphQL from "../scripts/graphql.js";

export const categoryList = await GraphQL.query(`
query{
    categories{
      data{
        attributes{
          slug
              name
          bottomText
          image{
            data{
              attributes{
                alternativeText
                url
              }
            }
          }
          posts{
            data{
              id
            }
          }
          
        }
      }
    }
  }
`);