abstract class TakePhotos {
  constructor(
    public cameraMode: string = "portrait",
    public filter: string = "normal",
  ) {}
  abstract takePhoto(): void;
}

// difference between interface and abstract class is that abstract class can have implementation and interface cannot have implementation
// also abstract class can have constructor and interface cannot have constructor
class Youtube extends TakePhotos {
  constructor(
    // default values for cameraMode and filter
    public cameraMode: string = "landscape",
    public filter: string = "normal",
  ) {
    // super() is used to call the constructor of the parent class
    super(cameraMode, filter);
  }
  takePhoto() {
    console.log("Instagram photo taken");
  }
}
