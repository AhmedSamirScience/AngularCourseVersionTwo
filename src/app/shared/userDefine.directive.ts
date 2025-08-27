import { Directive,  HostListener } from "@angular/core";
import { ElementRef } from "@angular/core";

@Directive ({
    selector: '.userdefine',    
    standalone: true, 
    inputs: [
       // { name: 'dynamicColor', required: true, alias: 'color' }
        { name: 'color', required: true },
        { name: 'padding', required: true , alias: 'pd'},
        { name: 'border', required: true },
        { name: 'bg', required: true },

    ],
})
export class UserDefineDirective {
    color!: string;
    padding!: string;
    border!: string;
    bg!: string;

    constructor(private elementRef: ElementRef) {}

    ngOnInit() {
    }

    @HostListener('mouseenter') onMouseEnter() {
        this.addStyle(this.color, this.padding, this.border, this.bg);
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.addStyle('', '', '', '');
    }

    @HostListener('click') onClick() {  
        this.addStyle('white', '20px', '2px solid red', 'red');
        console.log('Element clicked!');
    }

    
    addStyle(color: string,   padding: string,  border: string, bg: string) {
        this.elementRef.nativeElement.style.color = color;
        this.elementRef.nativeElement.style.padding = padding;
        this.elementRef.nativeElement.style.border = border;
        this.elementRef.nativeElement.style.backgroundColor = bg;
    }
}