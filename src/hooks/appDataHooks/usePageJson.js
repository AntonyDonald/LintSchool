import { defaultHomeJson } from "../../appBuilder/defaultPageJson";

export const usePageJson = (page = "home") => new Promise((resolve, reject) => {

    switch (page) {
        case 'home':
            resolve(defaultHomeJson)
            break;

        default:
            break;
    }
})