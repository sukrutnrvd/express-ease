import { createServer } from "node:http";
import { availableParallelism } from "node:os";
import cluster from "node:cluster";
import "dotenv/config";
import app from "./app";

const port = process.env.PORT || 3000;

if (cluster.isPrimary) {
  const numCPUs = availableParallelism();
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork({
      PORT: +port + i,
    });
  }
} else {
  const server = createServer(app);

  server.listen(port, () => {
    console.log(`server running at http://localhost:${port}`);
  });
}
