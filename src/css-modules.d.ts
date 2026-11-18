// Ambient typing for CSS modules. Hand-owned by ui-sdk (not copied by the sync
// script, which only clears components/ utils/ context/ hooks/).
declare module "*.module.css" {
  const classes: Record<string, string>;
  export default classes;
}
