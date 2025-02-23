import request from "supertest";
import app from "../../app.js";




describe("GraphQL API", () => {
      test("Should fetch pizza places", async () => {
            const query = {
                  query: "{ searchPizza { name address rating phone } }",
            };
            const response = await request("http://localhost:5000")
                  .post("/graphql")
                  .send(query);

            console.log("GraphQL Response:", response.body);

            expect(response.status).toBe(200);
            expect(response.body.data.searchPizza).toBeInstanceOf(Array);
      });
});