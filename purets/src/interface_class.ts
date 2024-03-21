interface TakePhoto {
  cameraMode: string;
  filter: string;
  burst: boolean;
}

interface Story {
  createStory(): void;
}

class Instagram implements TakePhoto {
  constructor(
    public cameraMode: string = "portrait",
    public filter: string = "normal",
    public burst: boolean = false,
  ) {}
}

class YouTube implements TakePhoto, Story {
  constructor(
    public cameraMode: string = "landscape",
    public filter: string = "normal",
    public burst: boolean = false,
  ) {}
  createStory() {
    console.log("YouTube story created");
  }
}
