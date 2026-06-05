export function getPublicDomain(): string {
  const domain = import.meta.env.PUBLIC_DOMAIN;
  
  if (import.meta.env.PROD && !domain) {
    throw new Error("PUBLIC_DOMAIN environment variable is required for production builds!");
  }
  
  return domain;
}

export function getInstallCommand(): string {
  const domain = getPublicDomain();
  const baseUrl = domain || "http://localhost:4321";
  return `curl -fsSL ${baseUrl}/install.sh | sudo bash`;
}
