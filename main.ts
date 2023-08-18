import { Status } from "std/http/http_status.ts";
import { contentType } from "std/media_types/mod.ts";
import van from "minivan/van-plate";

const { a, body } = van.tags;

Deno.serve(() => {
  return new Response(
    van.html(
      body(
        a({ href: "https://example.com/" }, "Example"),
      ),
    ),
    { status: Status.OK, headers: { "Content-Type": contentType("html") } },
  );
});
