import { Component, ElementRef, HostListener } from '@angular/core';
import { Search } from '../../services/services.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  title = 'prueba';

  isDropdownOpen = false;
  isMobileMenuOpen = false;

  constructor(private el: ElementRef) {}

  // ... método para el dropdown del perfil ...
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  closeDropdown() {
    this.isDropdownOpen = false;
  }

  @HostListener('document:click', ['$event'])
  handleClickOutside(event: Event) {
    if (!this.el.nativeElement.contains(event.target)) {
      this.closeDropdown();
    }
  }

  // ... método para el menu mobile ...

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isDropdownOpen = false;
  }
}
