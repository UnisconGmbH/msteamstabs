import { PreventIframe } from "express-msteams-host";

/**
 * Used as place holder for the decorators
 */
@PreventIframe("/msteamsTab/index.html")
@PreventIframe("/msteamsTab/config.html")
@PreventIframe("/msteamsTab/remove.html")
export class MsteamsTab {
}
