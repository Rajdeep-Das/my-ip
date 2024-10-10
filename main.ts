import { Hono } from "hono";
import { html } from "hono/html";
import { getConnInfo } from "hono/deno";

const app = new Hono();

app.get("/", (c) => {
  const info = getConnInfo(c);
  return c.html(
    html`<!DOCTYPE html>
      <h1 style="text-align: center;">
        Your IP address is : ${info.remote.address}
      </h1>`
  );
});

Deno.serve(app.fetch);
