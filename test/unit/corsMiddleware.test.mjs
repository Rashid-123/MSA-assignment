import resolvers from "../../src/graphql/resolvers.js";

describe("GraphQL Resolvers", () => {
      test("searchPizza should return an array", async () => {
            const result = await resolvers.Query.searchPizza();
            expect(Array.isArray(result)).toBe(true);
      });

      test("searchJuice should return an array", async () => {
            const result = await resolvers.Query.searchJuice();
            expect(Array.isArray(result)).toBe(true);
      });
});
