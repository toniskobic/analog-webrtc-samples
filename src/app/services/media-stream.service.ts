import { createInjectable } from "ngxtension/create-injectable";

export const MediaStreamService = createInjectable(
  () => {
    async function getUserMedia(constraints?: MediaStreamConstraints) {
      try {
        return await navigator.mediaDevices.getUserMedia(constraints);
      } catch (error: any) {
        console.log(error.message, error.name);
        return undefined;
      }
    }
    return { getUserMedia };
  },
  { providedIn: "root" }
);
