import { Component, OnInit } from '@angular/core';
import { DataapiService } from '../dataapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  //ประกาศตัวแปรเพื่อรับค่าในหน้าเพจ
  dataRegister: any={};
  txtTitle: string | undefined;
  txtName: string | undefined;
  txtSname: string | undefined;
  txtUsername: string | undefined;
  txtPassword: string | undefined;
  txtPosition: string | undefined;

  //ตัวแปรที่จะส่งไปที่ api
  postTitle: any;
  postName: any;
  postSname: any;
  postUsername: any;
  postPassword: any;
  postPosition: any;

  constructor(public dataapi: DataapiService, private route: Router) {}

  ngOnInit() {}

  //ฟังก์ชันเพิ่มสมาชิก
  addmember() {
    // console.log("ค่าที่กรอก",this.txtName);
    let data={
      postTitle: this.txtTitle,
      postName: this.txtName,
      postSname: this.txtSname,
      postUsername: this.txtUsername,
      postPassword: this.txtPassword,
      postPosition: this.txtPosition,
    };
    // console.log("ค่าที่กรอก",data);
    this.dataapi.addMember(data).subscribe(
      (res: any)=>{
        console.log("สำเร็จ",res);
      },
      (error: any)=>{
        console.log("เกิดข้อผิดพลาด",error);
      }
    );
    this.clsFrm();  //สั่งให้เคลียร์ช่องรับข้อมูล
  }

  clsFrm(){
    this.txtTitle = "";
    this.txtName= "";
    this.txtSname= "";
    this.txtUsername= "";
    this.txtPassword= "";
    this.txtPosition= "";
  }
}
