import { Component } from '@angular/core';
import { CurdService } from '../curd.service';


@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent {
  constructor(public cs:CurdService) {
    this.fetchAllUsers();
  }
  
  ulist:any=[];
  
  fetchAllUsers()
  {
    this.cs.getAllUsers().subscribe(res => {
      this.ulist=res;
    });
  }
  
  removeUser(uid:number)
  {
    if(confirm("Are you delete this user?"))
    {
      this.cs.deleteUser(uid).subscribe(res => {
        this.fetchAllUsers();
      });
    }
  }
  

}
