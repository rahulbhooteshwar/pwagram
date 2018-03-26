import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  promptForInstall(){
    if(window['defferedPromptToInstall']) {
      window['defferedPromptToInstall'].prompt();

      window['defferedPromptToInstall'].userChoice.then(function(choice){
        console.log(choice.outcome);
      })
      window['defferedPromptToInstall'] = null;
    }
  }

}
