import("https://unpkg.com/@swan-io/boxed/dist/Boxed.esm.js").then((Boxed) => {
  window.Boxed = Boxed;
  console.log(
    "%cB%c Try Boxed right here!",
    "background-color:#D96151;color:#fff;border-radius:4px;padding:0 5px;height:1em;display:inline-block;font-weight: bold;font-size:18px;",
    "font-weight: bold;font-size:18px;",
  );
  console.log(
    "%ce.g. %cBoxed.Option.fromNullable(1).getWithDefault(0)",
    "color: #ccc;",
    "",
  );
  console.log("%c---", "color: #ccc;");
  console.log("%cLooking for a job? 👀", "font-weight: 700;");
  console.log(
    "👋 %cSwan is hiring: https://www.welcometothejungle.com/fr/companies/swan/jobs",
    "font-weight: 700;",
  );
});
