// define layout
const routersAuth: string[] = [
  "/auth/sign-in",
  "/auth/forgot-password",
  "/auth/verify-email",
  "/auth/change-password",
];

const routersOther: string[] = [];

const routersProtected: string[] = ["/auth/profile", "/"];

const routersMain: string[] = ["/"];

export { routersAuth, routersOther, routersProtected, routersMain };
