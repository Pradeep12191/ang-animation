import { trigger, transition, query, style, animate, group, animateChild } from '@angular/animations';


export const sliderState = trigger('routeAnimations', [
    transition('listPage => detailPage, detailPage => editPage', [
        query(':enter', [
            style({
                position: 'absolute',
                top: 0,
                width: '100%',
                height: '100%',
                boxShadow: '1px 1px 5px 1px #ccc',
                zIndex: 1
            })
        ]),
        query(':leave', [
            style({
                position: 'absolute',
                top: 0,
                width: '100%',
                height: '100%'
            })
        ]),
        query(':enter', [
            style({
                right: '-100%'
            })
        ]),
        query(':leave', [
            style({
                right: 0
            })
        ]),
        group(
            [query(':leave', [
                animate('1s ease', style({ right: '100%' }))
            ], { optional: true }),
            query(':enter', [
                animate('400ms ease', style({ right: '0%' }))
            ], { optional: true })
            ]
        )
    ]),
    transition('detailPage => listPage, editPage => detailPage', [
        query(':enter', [
            style({
                position: 'absolute',
                top: 0,
                width: '100%',
                height: '100%',
                boxShadow: '-1px 1px 5px 1px #ccc',
                zIndex: 1
            })
        ]),
        query(':leave', [
            style({
                position: 'absolute',
                top: 0,
                width: '100%',
                height: '100%'
            })
        ]),
        query(':enter', [
            style({
                left: '-100%'
            })
        ]),
        query(':leave', [
            style({
                left: 0
            })
        ]),
        group(
            [
                query(':leave', [
                    animate('1s ease', style({ left: '100%' }))
                ], { optional: true }),
                query(':enter', [
                    animate('400ms ease', style({ left: '0%' }))
                ], { optional: true })
            ]
        )
    ]),
]);
