import request from "supertest";
import app from "../../app.js";

describe("REST API Endpoints", () => {
      it("GET /api/search/pizza should return status 200 and an array", async () => {
            const response = await request(app).get("/api/search/pizza");

            console.log("REST API Response:", response.status, response.body);

            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty("places");
            expect(Array.isArray(response.body.places)).toBe(true);
            expect(response.body.places.length).toBeGreaterThan(0);
      });

      it("GET /api/search/juice should return status 200 and an array", async () => {
            const response = await request(app).get("/api/search/juice");

            console.log("REST API Response:", response.status, response.body);

            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty("places");
            expect(Array.isArray(response.body.places)).toBe(true);
            expect(response.body.places.length).toBeGreaterThan(0);
      });

      it("GET /api/search/combo should return status 200 and an array", async () => {
            const response = await request(app).get("/api/search/combo");

            console.log("REST API Response:", response.status, response.body);

            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty("places");
            expect(Array.isArray(response.body.places)).toBe(true);
            expect(response.body.places.length).toBeGreaterThan(0);
      });
});
