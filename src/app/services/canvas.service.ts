import { createInjectable } from "ngxtension/create-injectable";

export const CanvasService = createInjectable(
  () => {
    function drawImage(canvas: HTMLCanvasElement, video: HTMLVideoElement) {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      canvas.getContext("2d")
        ?.drawImage(video, 0, 0, canvas.width, canvas.height);
    }
    return { drawImage };
  },
  { providedIn: "root" }
);
