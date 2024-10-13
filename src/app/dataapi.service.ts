import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataapiService {

  constructor(
    public http: HttpClient
  ) { }

//ฟังก์ชันหรือเมธอด การเพิ่มที่ส่งไปยัง api
 addMember(data: any){
  console.log("ค่ามาจากแอพ",data);
    //ส่งข้อมูลไปที่ URL ของ API พร้อมข้อมูล
    return this.http.post('http://localhost/ionic_api_crud/insert_member.php',data);
 }

}
