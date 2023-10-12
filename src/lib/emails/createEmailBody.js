import { htmlToText } from "html-to-text";
import { DEFAULT_WORD_WRAP } from "./_emailConfig";

export const createFallback = (htmlContent) => (
    htmlToText.fromString(htmlContent, { wordWrap: DEFAULT_WORD_WRAP})    
)


