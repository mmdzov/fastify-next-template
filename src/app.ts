import Fastify from "fastify";
import fastifyNext from "fastify-nextjs";

const fastify = Fastify({
  logger: false,
  pluginTimeout: 30000,
});

const dev = process.env.NODE_ENV !== "production";
const port = 3000;

fastify.register(fastifyNext, { dev, logLevel: "debug", noServeAssets: false });

fastify.after(() => {
  fastify.next("/index");
});

fastify.after(() => {
  fastify.next("/app");
});

fastify.get("/",(req,res) => {
    res.nextRender("/index")
})


fastify.listen(port, (err) => {
  if (err) return console.error(err);
  console.log(`Listening on port ${port}`);
});
