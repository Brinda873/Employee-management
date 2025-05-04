import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CurdService } from '../curd.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {
  constructor(public cs:CurdService,public act:ActivatedRoute) {
    this.fetchSingleUser(this.eid);
  }
  
  ulist:any=[];
  eid=this.act.snapshot.params['id'];
  succ:string="";
  
  fetchSingleUser(uid:number)
  {
    this.cs.getSingleUser(uid).subscribe(res => {
      this.ulist=res;
    });
  }
  
  updateInfo(i:number,d:any)
  {
    this.cs.updateUser(i,d).subscribe();
    this.succ="Updated Successfully";
  }
  

}
