import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrl: './new-post.component.css'
})
export class NewPostComponent {

  imgSrc: any ='./assets/image-placeholder-transparent.png' ;
  
 postForm:FormGroup

  // showPreview($event){
  //   const reader = new FileReader();
  //   reader.onload = (e) => {
  //     this.imgSrc = e.target.result 
  //   }

  //   reader.readAsDataURL($event.target.files[0]);
  //   this.selectedImg = ($event.target.files[0]);
  // }

  constructor(private fb:FormBuilder){
  this.postForm = this.fb.group({
 
    title: ['',[Validators.required, Validators.minLength(10)]],
    permalink: ['',Validators.required],
    exerpt: ['',[Validators.required, Validators.minLength(50)]],
    postImg: ['',Validators.required],
    content: ['', Validators.required],

    //category: [''],
  })

  

}

get fc(){
  return this.postForm.controls
}

}
