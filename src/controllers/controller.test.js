import app from "@/app";
import request from "supertest";

describe("first", () => {
  let req;
  beforeEach(() => {
    req = request(app);
  });

  it("should return Hello Express", async () => {
    const res = await req.get("/api/v1/hello-express");
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ message: "Hello Express" });
  });

  it("should return Hello Express to post request", async () => {
    const res = await req.post("/api/v1/hello-express");
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ message: "Hello Express" });
  });

  it("should return 404 error with This route does not exist message", async () => {
    const res = await req.post("/");
    expect(res.status).toBe(404);
    expect(res.body).toEqual({ message: "This route does not exist" });
  });
});
