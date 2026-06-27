import { Component } from '@angular/core';

interface CardItem{
    id: string;
    title: string;
    cover: string;
}

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    standalone: false
})
export class HomeComponent {
    readonly articles: CardItem[] = [
        { id: '1', title: 'Tokyo Revengers', cover: 'assets/image/img01.jpg' },
        { id: '2', title: 'High School DxD', cover: 'assets/image/img02.jpg' },
        { id: '3', title: 'Horimiya', cover: 'assets/image/img03.jpg' },
        { id: '4', title: 'Kuroko no Basket', cover: 'assets/image/img04.jpg' },
        { id: '5', title: 'Jujutsu Kaisen', cover: 'assets/image/img05.jpg' },
        { id: '6', title: 'Romantic Killer', cover: 'assets/image/img06.jpg' },
        { id: '7', title: 'Boku no Kokoro no Yabai Yatsu', cover: 'assets/image/img07.jpg' },
        { id: '8', title: 'Haikyuu!!', cover: 'assets/image/img08.jpg' },
        { id: '9', title: 'Dr.Stone', cover: 'assets/image/img09.jpg' },
        { id: '10', title: 'Solo Leveling', cover: 'assets/image/img10.jpg' },
        { id: '11', title: 'The Beginning After The End', cover: 'assets/image/img11.jpg' },
        { id: '12', title: 'Nano Machine', cover: 'assets/image/img12.jpg' },
        { id: '13', title: 'My Wife is a Demon Queen', cover: 'assets/image/img13.jpeg' },
        { id: '14', title: 'Tales of Demons and Gods', cover: 'assets/image/img14.jpg' },
        { id: '15', title: 'The Constellations Are My Disciples', cover: 'assets/image/img15.jpg' },
        { id: '16', title: 'Immortal Swordsman in The Reverse World', cover: 'assets/image/img16.jpg' },
        { id: '17', title: 'Nodabsonyeo-She\'s Hopeless', cover: 'assets/image/img17.jfif' },
        { id: '18', title: 'Mercenary Enrollment', cover: 'assets/image/img18.jfif' }
    ];
}
