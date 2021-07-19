import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class PageService {

    toggleMenu() {
        let sidebar = document.querySelector('#sidebar');
        sidebar?.classList.toggle('open');
    }

}