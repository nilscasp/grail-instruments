// Lokaler Server für die Grail-Logo-Seiten (ES-Module und WebGL-Texturen laufen nicht über file://).
// Start über die Vorschau „grail-logo“ in ~/Code/.claude/launch.json oder: bun Marke/Logo/werkzeuge/vorschau-server.ts
// PUT /speichern/<pfad> schreibt eine Datei unter Marke/Logo/ (nur für die Werkzeug-Seiten, nur localhost).
const root = import.meta.dir + "/..";
Bun.serve({
  port: 4778,
  hostname: "127.0.0.1",
  async fetch(req) {
    let p = decodeURIComponent(new URL(req.url).pathname);
    if (p.includes("..")) return new Response("nein", { status: 400 });
    if (req.method === "PUT" && p.startsWith("/speichern/")) {
      const ziel = root + "/" + p.slice("/speichern/".length);
      await Bun.write(ziel, await req.arrayBuffer());
      return new Response("gespeichert " + ziel);
    }
    if (p === "/") return Response.redirect("/grail-stahl.html", 302);
    const f = Bun.file(root + p);
    return (await f.exists()) ? new Response(f) : new Response("nicht gefunden", { status: 404 });
  },
});
console.log("Grail-Logo auf http://localhost:4778");
