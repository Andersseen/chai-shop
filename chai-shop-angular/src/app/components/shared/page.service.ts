import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class PageService {

    toggleMenu() {
        let x = document.querySelector('#sidebar');
        x?.classList.toggle('open');
        console.log(x);


    }

}