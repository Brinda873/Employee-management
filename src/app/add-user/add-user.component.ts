import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CurdService } from '../curd.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  constructor(public cs:CurdService, public rt:Router) {}

  userObj={name:'',email:'',phone:''};

  addInfo()
  {
    this.cs.addUser(this.userObj).subscribe(res => {
      this.rt.navigate(['list']);
    });
  }

}
