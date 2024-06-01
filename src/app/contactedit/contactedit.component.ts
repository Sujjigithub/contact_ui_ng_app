import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from './../contact.service';
import { Component } from '@angular/core';
import { Contact } from '../contact';

@Component({
  selector: 'app-contactedit',
  templateUrl: './contactedit.component.html',
  styleUrls: ['./contactedit.component.css']
})
export class ContacteditComponent {

  contact:Contact=new Contact();
  id:number=0;
constructor(private ContactService:ContactService,
  private router:Router,private activateRouter:ActivatedRoute){ }

  ngOnInit():void{
    this.getContact();
  }
  getContact(){
    this.id=this.activateRouter.snapshot.params['id'];
    console.log("UPDATED ID::"+this.id);
    this.ContactService.findContactById(this.id).subscribe(
      data=>{
        console.log("GETTING A CONTACT....");
        console.log(data);
        this.contact=data;
      },
      error=>{
        console.log("SOMETHING WENT WRONG DURING GETTING A CONTACT...");
        console.log(error);
      }
    );

    }
    updateContact(){
      console.log("UPDATED...");
      this.ContactService.createContact(this.contact).subscribe(
        data=>{
          console.log("UPDATING A CONTACT...");
          console.log(data);
          this.router.navigate(['/contacts'])
        },
        error=>{
          console.log("SOMETHING WENT WRONG DURING UPDATING A CONTACT...");
          console.log(error);
        }
      );
    }
  }




