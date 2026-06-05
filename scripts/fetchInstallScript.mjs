import fs from "node:fs/promises";
import path from "node:path";

export function fetchInstallScript() {
  return {
    name: "fetch-install-script",
    hooks: {
      "astro:config:setup": async ({ logger, command }) => {
        if (command === "build" || command === "dev") {
          try {
            process.loadEnvFile(path.resolve(process.cwd(), ".env"));
          } catch (e) {
            // Ignore if .env doesn't exist
          }
          
          const url = process.env.SCRIPT_URL;

          if (command === "build" && !url) {
            throw new Error("SCRIPT_URL environment variable is required for production builds!");
          }

          if (!url) return;

          logger.info("Fetching install.sh script from GitHub...");
          try {
            const response = await fetch(url);
            if (!response.ok) {
              throw new Error(`Failed to fetch: ${response.statusText}`);
            }
            const scriptContent = await response.text();

            const publicDir = path.resolve("./public");
            await fs.mkdir(publicDir, { recursive: true });

            const outputPath = path.join(publicDir, "install.sh");
            await fs.writeFile(outputPath, scriptContent);
            logger.info(`Successfully saved install.sh to ${outputPath}`);
          } catch (error) {
            logger.error(`Error fetching install.sh: ${error.message}`);
          }
        }
      },
    },
  };
}
