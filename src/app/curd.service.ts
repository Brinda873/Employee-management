import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class CurdService {

  constructor(private hc:HttpClient) { }

  endpoint="http://localhost:3000/users/";

  addUser(data:any)
  {
    return this.hc.post(this.endpoint,data);
  }
  getAllUsers()
  {
    return this.hc.get(this.endpoint);
  }
  getSingleUser(id:number)
  {
    return this.hc.get(this.endpoint+id);
  }
  deleteUser(id:number)
  {
    return this.hc.delete(this.endpoint+id);
  }
  updateUser(id:number,data:any)
  {
    return this.hc.put(this.endpoint+id,data);
  }

}

