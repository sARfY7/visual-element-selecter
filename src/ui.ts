/**
 * Generates an UI for showing the unique selector generated for the element selected in the website
 * @param uniqueSelector Generated unique selector for the element selected in the website
 */
export const generateUiForGeneratedSelector = (
    uniqueSelector: string,
): void => {
    const container = document.createElement('div');
    container.innerText = uniqueSelector;
    document.body.appendChild(container);
};
