import { Component, OnInit } from '@angular/core';
import { MeterService } from 'src/app/shared/meter.service';
import { Meter } from 'src/app/shared/model/meter.model';


@Component({
  selector: 'app-monitoring',
  templateUrl: './monitoring.component.html',
  styleUrls: ['./monitoring.component.css']
})
export class MonitoringComponent implements OnInit {

  //meter: Meter;
                      
  constructor(
    private meterService: MeterService,
    public meter: Meter
    ) { }

  ngOnInit(): void {
    //this.meter = this.meterService.getMeter();
    this.meterService.getMeter().subscribe(data => this.meter = data);
    console.log("Retorno -> " + this.meter);
  }

}
