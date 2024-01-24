const token = import.meta.env.LOCAL_API_TOKEN;

const backendUrl = import.meta.env.LOCAL_URL; //STRAPI_URL

class GraphQL {
  static endpoint = backendUrl + "/graphql";

  static async query(query) {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };

    const response = await fetch(this.endpoint, {
      method: "POST",
      headers,
      body: JSON.stringify({ query }),
    });

    const json = await response.json();

    if (json.errors) {
      console.log(json.errors);
      throw new Error("GraphQL query failed.");
    }

    return json.data;
  }
}

export default GraphQL;
