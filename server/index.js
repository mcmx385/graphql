import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema/schema.js";

const app = express();
const port = 8000;

app.use("/graphql", graphqlHTTP({ schema, graphiql: true }));

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => console.log("Listening to", port));