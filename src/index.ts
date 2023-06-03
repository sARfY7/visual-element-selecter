import { generateUiForGeneratedSelector } from './ui';

if (module) {
    module?.hot?.accept(() => {
        window.location.reload();
    });
}

export default { generateUiForGeneratedSelector };
