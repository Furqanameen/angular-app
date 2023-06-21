import { Component } from '@angular/core';
import { SlotService } from '../service/slot.service';
@Component({
  selector: 'app-slots',
  templateUrl: './slots.component.html',
  styleUrls: ['./slots.component.scss']
})
export class SlotsComponent {
  slots:any;
  constructor(private slotsService:SlotService){
  }

  ngOnInit(){
    this.SlotsList
  }
  SlotsList(){
    this.slots = this.slotsService.listSlot().subscribe(slots =>{
      this.slots = slots
      console.log(this.slots)
    }

      )
  }
}
