import { Test, Orange } from "https://x.nest.land/Orange@0.0.1/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import ops from "../src/app.ts";

export class Tests {
  @Test({
    name: "การบวกตัวเลขจำนวนเต็ม",
  })
  public add_1_and_2_should_3() {
    assertEquals(ops.add(1, 2), 3);
  }
}
