import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class MobileMenuService {
    public openMenuMobile() {
        const menuMobile = document.querySelector('.menu-mobile-container') as HTMLElement;
        menuMobile.style.left = '0';
    }

    public closeMenuMobile() {
        const menuMobile = document.querySelector('.menu-mobile-container') as HTMLElement;
        menuMobile.style.left = '-400px';
    }
}