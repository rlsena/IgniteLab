import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri:'https://api-sa-east-1.graphcms.com/v2/cl4rq4txc1h7n01z6dl2bee6r/master',
    cache: new InMemoryCache()
})