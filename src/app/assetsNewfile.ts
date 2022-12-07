import { AppUtils } from './../../../../shared/AppUtils';
import { NgbDate, NgbModal, NgbCalendar, NgbDateStruct, NgbDateAdapter,NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import { ClientDetailsComponent } from '../../client-details/client-details.component';
import { ClientDetailsModalComponent } from '../../client-details-modal/client-details-modal.component';
import { CustomAdapter,CustomDateParserFormatter, ClientService } from 'app/shared/services';

@Component({
  selector: 'assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.scss'],
  providers: [
    { provide: NgbDateAdapter, useClass: CustomAdapter },
    { provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter }
  ]
})
export class AssetsComponent extends AppUtils implements OnInit {

  assetsData;
  isDisabled: any;

  aseetsResponseData = [];

  todayDate: NgbDate | NgbDateStruct | string;
  selectedDateFormat = this.DATE_FORMATS.DAILY;
  filterObj = {
    id : '',
    activeSwitch : true,
    assetDate : '',
    dailyInd : '',
    // status : ''
  }
  maxDate: any;


  constructor(private modalService: NgbModal, private calendar: NgbCalendar, private clientService: ClientService,  private dateAdapter: NgbDateAdapter<string>) {
    super();
    const current = new Date();
    this.maxDate = {
      year: current.getFullYear(),
      month: current.getMonth() + 1,
      day: current.getDate()-1
    };
    this.clientService.selectedMonthlyDate$.subscribe((res) => {
      if (res) {
        const filteredRes = res.split('-');
        const currentYear = filteredRes[0];
        const currentMonth = filteredRes[1];
        this.filterObj.assetDate =  currentMonth + '-' + currentYear;
        if ( this.filterObj['id']) {
          this.getAssetsData(this.filterObj)
        }
      }
    })
    this.clientService.selectedDailyDate$.subscribe((res: NgbDate) => {
      if (res) {
        this.todayDate = this.convertNgbDateFormat(res);
        this.filterObj.assetDate = this.convertNgbDate(res);
        if ( this.filterObj['id']) {
          this.getAssetsData(this.filterObj)
        }
      }
    })
    this.clientService.selectedRadioValue$.subscribe( (res) => {
      if (res) {
        if(res == 'M'){
          const date = new Date();
          const currentMonth = ('0' + (date.getMonth() + 1)).slice(-2);
          const currentYear = date.getFullYear();
          this.filterObj.assetDate = currentYear + '-' + currentMonth;
        }else{
          this.setLastDay();
        }
        this.selectedDateFormat = res;
        this.filterObj.dailyInd = res;
      }
    })
    const date = new Date();
    const currentMonth = ('0' + (date.getMonth() + 1)).slice(-2);
    const currentYear = date.getFullYear();
    this.filterObj.assetDate = currentYear + '-' + currentMonth;
    this.clientService.assetsPropsFromIP$.subscribe( data => {
      if (data) {
        this.filterObj.id = data['id'];
        this.filterObj.activeSwitch = data['activeSwitch'];
        // this.filterObj.status = data['status'];
        this.filterObj.assetDate = (this.filterObj.dailyInd === 'D') ? 
        this.todayDate as string : this.filterObj.assetDate;
      }
      this.getAssetsData(this.filterObj)
    })
  }


  getAssetsData(reqBody) {
    this.clientService.fetchAssetsData(reqBody).subscribe( data => {
      if (data) {
        const responseArray = [data];
        responseArray.forEach(element => {
          if (element.taBusSoldID) {
            element.taBusSoldID['expand'] = false;
          }
        });
        this.assetsData = responseArray;
      } else {
        this.assetsData = [];
      }
    })
  }

  ngOnInit() {
    this.getDisabledDates();
    this.setLastDay();
  }

  expandAndCheckedValues() {
    this.aseetsResponseData.forEach((element, i) => {
      for (const key in element.taBusSoldID) {
        if (key !== 'expand') {
          Object.keys(
            element.taBusSoldID[key].map((childElement, childIndex) => {
              childElement = Object.assign(childElement, {
                expand: false,
                checked: false,
              });
            })
          );
        }
      }
    });
  }
  getDisabledDates() {
    const disable = [6, 7];

    this.setLastDay();
    this.isDisabled = (date: NgbDateStruct, current: { month: number, year: number }) =>
      disable.includes(this.calendar.getWeekday(new NgbDate(date.year, date.month, date.day))) ? true : false;
  }
  setLastDay() {
    let today = this.calendar.getToday();
    const day = this.calendar.getWeekday(today);
    if (day === 7) {
      today = this.calendar.getPrev(today, 'd', 2);
    } else if (day === 1) {
      today = this.calendar.getPrev(today, 'd', 3);
    } else {
      today = this.calendar.getPrev(today, 'd', 1);
    }

    this.todayDate = this.convertNgbDateFormat(today);
  }
  openModal(client) {
    const clientDetailsParams = {
      clientId : client['id'] ? client['id'] : 1,
      clientType : client['status'] ? client['status'] : 'CL'
    }
    this.clientService.clientDetailsParams.next(clientDetailsParams);
    const modalRef = this.modalService.open(ClientDetailsModalComponent, {
      windowClass: 'client-details-window-name', scrollable: true
    });
  }

  dateFormatChange(format: string) {
    this.clientService.selectedRadioValue.next(format)
    this.selectedDateFormat = format;
  }

  onDateSelection(date: NgbDate) {
    this.clientService.selectedDailyDate.next(date);
    if (this.filterObj.dailyInd === 'D') {
      this.todayDate = this.convertNgbDateFormat(date);
      this.filterObj.assetDate = this.convertNgbDate(date);
    }
    this.getAssetsData(this.filterObj);
  }

  private convertNgbDate = (date: NgbDate) => {
    if (date.month.toString().length === 1 && date.day.toString().length === 1) {
      const monthString = '0' + date.month;
      const dayString = '0' + date.day;
       return ( monthString + '-' + dayString + '-' + date.year.toString());
    } else if (date.month.toString().length === 1) {
      const monthString = '0' + date.month;
      return (monthString + '-' +  date.day.toString() + '-' + date.year.toString());
    } else if (date.day.toString().length === 1 ) {
      const dayString = '0' + date.day;
      return ( date.month.toString() + '-' + dayString + '-' + date.year.toString());
    } else {
      return ( date.month.toString() + '-' + date.day.toString() + '-' + date.year.toString());
    }
  }

  private convertNgbDateFormat = (date: NgbDate) => {
    if (date.month.toString().length === 1 && date.day.toString().length === 1) {
      const monthString = '0' + date.month;
      const dayString = '0' + date.day;
      return (dayString + '-' + monthString + '-' + date.year.toString());
    } else if (date.month.toString().length === 1) {
      const monthString = '0' + date.month;
      return (date.day.toString() + '-' + monthString + '-' + date.year.toString());
    } else if (date.day.toString().length === 1) {
      const dayString = '0' + date.day;
      return (dayString + '-' + date.month.toString() + '-' + date.year.toString());
    } else {
      return (date.day.toString() + '-' + date.month.toString() + '-' + date.year.toString());
    }
  }

  onMonthChange(eve) {
    this.clientService.selectedMonthlyDate.next(this.filterObj.assetDate);
    this.clientService.selectedMonthlyDate.next(this.filterObj.assetDate);
    this.getAssetsData(this.filterObj);
  }

}
