import { Component } from "@angular/core";
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  grpAssetsResponse = [ ];

  constructor() {}

  grpAssetsResponseExpandValue() {
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

          for (const childKey in element.groupMap[key]) {
            if (childKey == "summaryMap") {
              Object.keys(
                (element.groupMap[key][childKey] = Object.assign(element.groupMap[key][childKey], {
                  expand: false,
                }))
              );
            }
          }

        }
      }
    });
  }

  ngOnInit() {
    this.grpAssetsResponseExpandValue();
  }
}
