import { Component } from "@angular/core";
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {


  grpAssetsResponse = []

  constructor() {
  }

  grpAssetsResponseExpandValue() {
    this.grpAssetsResponse.forEach((element, i) => {
      element.groupMap = Object.assign(element.groupMap, {
        expand: false
      })
      for (let key in element.groupMap) {
        if (key != 'expand') {
          Object.keys(
            element.groupMap[key] = Object.assign(element.groupMap[key], {
              expand: false
            })
          )
        }
      }
    });
  }

  ngOnInit() {
    this.grpAssetsResponseExpandValue();
  }

  checkChild(parent_i, i) {
    parent_i[i].expand = !parent_i[i].expand;
    parent_i[i].checked = !parent_i[i].checked;
  }

}
