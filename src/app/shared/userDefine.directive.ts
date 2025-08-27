import { Directive,  HostListener, Input } from "@angular/core";
import { ElementRef } from "@angular/core";
import { EventEmitter, Output } from "@angular/core";

@Directive ({
    selector: '.userdefine',    
    standalone: true
})
export class UserDefineDirective {

    @Input({ required: true , alias: 'pd'}) padding!: string;
    @Input({ required: true }) border!: string;
    @Input({ required: true }) bg!: string;
    @Input({ required: true }) color!: string;
 

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