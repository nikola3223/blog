import GraphQL from "../scripts/graphql.js";

export const articlesList = await GraphQL.query(`
query {
  posts(sort: "id:desc") {
    data {
      id
      attributes {
        accent
        content
        slug
        name
        date
        categories{
          data{
            attributes{
              name
            }
          }
        }
        image {
          data {
            attributes {
              url
              width
              height
              alternativeText
            }
          }
        }
      }
    }
  }
}
`);
