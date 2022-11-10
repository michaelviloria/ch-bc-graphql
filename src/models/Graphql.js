import { buildSchema } from "graphql";
import crypto from "crypto";

const schema = buildSchema(`
  type Product {
    id: ID!
    name: String!
    price: Int!
    stock: Int!
  }
`);
