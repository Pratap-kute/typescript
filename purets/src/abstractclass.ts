// here we are creating an abstract class which is a class that cannot
// we can not create object of abstract class
abstract class TakePhotos {
  constructor(
    public cameraMode: string = "portrait",
    public filter: string = "normal",
  ) {}

  // abstract method
  abstract takePhoto(): void;

  // abstract method
  getReelTime(): number {
    // some complex logic
    return 10;
  }
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
  // implementation of abstract method from parent class
  takePhoto() {
    console.log("Instagram photo taken");
  }
}
