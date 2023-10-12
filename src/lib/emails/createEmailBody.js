import { convert } from "html-to-text";
import { DEFAULT_WORD_WRAP } from "./_emailConfig";

export const createFallback = (htmlContent) => (
    convert(htmlContent, { wordWrap: DEFAULT_WORD_WRAP})    
)


