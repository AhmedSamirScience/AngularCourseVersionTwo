import { Directive,  HostBinding,  HostListener, Input } from "@angular/core";
import { EventEmitter, Output } from "@angular/core";

@Directive ({
    selector: '.userdefine',    
    standalone: true,
    exportAs: 'directive-user'
})
export class UserDefineDirective {

    @Input({ required: true , alias: 'pd'}) padding!: string;
    @Input({ required: true }) border!: string;
    @Input({ required: true }) bg!: string;
    @Input({ required: true }) color!: string;
 
    @Output () customEvent: EventEmitter<any> = new EventEmitter<any>();

    ngOnInit() {
    }

    @HostListener('mouseenter', ['$event']) onMouseEnter(e:any) {
        this.customEvent.emit(e);
        this.addStyle(this.color, this.padding, this.border, this.bg);
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.addStyle('', '', '', '');
    }

    @HostListener('click') onClick() {  
        this.addStyle('white', '20px', '2px solid red', 'red');
        console.log('Element clicked!');
    }

    
    @HostBinding('style.transition') transition: String = 'all 0.3s ease';
    @HostBinding('style') allStyles: String = '';
    addStyle(color: string,   padding: string,  border: string, bg: string) {
        this.allStyles = `color: ${color}; padding: ${padding}; border: ${border}; background-color: ${bg};`;
    }
}