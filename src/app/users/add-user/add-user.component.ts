import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Address } from 'src/app/models/address.model';
import { User } from 'src/app/models/user.models';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  userForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private userService: UsersService,
              private router: Router) { }

  ngOnInit(): void {
    this.initUserForm();
  }

  initUserForm(): void{
    this.userForm = this.formBuilder.group({
      firstname: this.formBuilder.control("", [Validators.required, Validators.minLength(5)]),
      lastname: this.formBuilder.control("", [Validators.required, Validators.minLength(5)]),
      email: this.formBuilder.control("", [Validators.required, Validators.email, Validators.minLength(5)]),
      description: this.formBuilder.control("", [Validators.required, Validators.minLength(15)]),
      dateBirth: this.formBuilder.control("", Validators.required),
      address: this.formBuilder.group({
        street:this.formBuilder.control("", Validators.required),
        state: this.formBuilder.control("", Validators.required),
        zip: this.formBuilder.control("", Validators.required),
        city: this.formBuilder.control("", Validators.required),
      })
    });
  }

  onSubmit(): void{
    const dataUser = this.userForm.value;
    const addresse = new Address(dataUser.street, dataUser.city, dataUser.state, dataUser.zip);
    const newUser = new User(dataUser.firstname,
                            dataUser.lastname,
                            dataUser.email,
                            addresse,
                            dataUser.description,
                            dataUser.dateBirth
                          );

    this.userService.addUser(newUser);
    this.router.navigate(["users"]);
    //console.log(this.userForm.value);
  }

}
