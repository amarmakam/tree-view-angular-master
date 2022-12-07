constructor() { }


  assetsNewResponseExpandValue() {

    //  new response code

    this.assetsNewResponse.forEach((element, i) => {
      element.taBusSoldID = Object.assign(element.taBusSoldID, {
        expand: false,
      });
      for (const key in element.taBusSoldID) {
        if (key !== "expand") {


          element.taBusSoldID[key].forEach((childElement, i) => {
            childElement = Object.assign(childElement, {
              expand: false,
            })
          })

        }

      }
    })
   
  }

  grpAssetsResponseExpandValue() {

    // old response code

    this.grpAssetsResponse.forEach((element, i) => {
      element.groupMap = Object.assign(element.groupMap, {
        expand: false,
      });
      for (const key in element.groupMap) {
        if (key !== "expand") {
          Object.keys(
            (element.groupMap[key] = Object.assign(element.groupMap[key], {
              expand: false,
            }))
          );
        }
      }
    });
  }



  ngOnInit() {
    this.assetsNewResponseExpandValue();
    this.grpAssetsResponseExpandValue();
  }
}
