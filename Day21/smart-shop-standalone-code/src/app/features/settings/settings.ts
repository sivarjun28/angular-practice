import { Component } from '@angular/core';

import {

ReactiveFormsModule,

FormControl,

FormGroup,

Validators

}

from '@angular/forms';

@Component({

selector:'app-settings',

standalone:true,

imports:[ReactiveFormsModule],

templateUrl:'./settings.html',

styleUrl:'./settings.scss'

})

export class Settings{

settingsForm=new FormGroup({

name:new FormControl(

'',

Validators.required

),

email:new FormControl(

'',

[

Validators.required,

Validators.email

]

),

theme:new FormControl(

'Light'

)

});

saveSettings(){

console.log(

this.settingsForm.value

);

alert('Settings Saved');

}

}