import * as sapper from "@sapper/server"; // eslint-disable-line import/no-unresolved
import { App } from "@tinyhttp/app";
import { logger } from "@tinyhttp/logger";
import sirv from "sirv";

const PORT = parseInt(process.env.PORT || "3000", 10); // eslint-disable-line prefer-destructuring
const mode = process.env.NODE_ENV;
const dev = mode === "development";

const app = new App();

const createSapper = async (): Promise<App> => {
	app.use(
		sirv("static", { dev }),
		logger(),
		sapper.middleware(),
	);

	return app;
};

// eslint-disable-next-line no-shadow
createSapper().then((app) => {
	app.listen(PORT, (err?: any): void => {
    // eslint-disable-line
		if (err) console.log("error", err);
	});
});
