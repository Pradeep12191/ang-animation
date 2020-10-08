import { trigger, transition, query, style, animate, group, animateChild, state } from '@angular/animations';


export const basicState = trigger('basic', [
    state('red', style({
        backgroundColor: 'yellow'
    })),
    state('blue', style({
        backgroundColor: 'blue'
    })),
    transition('red <=> blue', animate('1s'))
]);





export const moveState = trigger('move', [
    state('right', style({
        transform: 'translateX(250px)'
    })),
    state('start', style({
        transform: 'translate(0px)'
    })),
    transition('start <=> right', animate('1s')),
]);

// export const initialState = trigger('moveWith', [
//     state('right', style({
//         transform: 'translateX(250px)'
//     })),
//     state('start', style({
//         transform: 'translate(0px)'
//     })),
//     transition('start <=> right', [
//         style({
//             backgroundColor: 'yellow'
//         }),
//         animate('1s', style({
//             transform: 'translateX(250px)'
//         })),
//         style({
//             backgroundColor: 'yellow'
//         })
//     ]),
// ]);

export const initialState = trigger('moveWith', [
    state('right', style({
        transform: 'translate(250px, 250px)'
    })),
    state('start', style({
        transform: 'translate(0px)'
    })),
    transition('start <=> right', [
        style({
            backgroundColor: 'yellow'
        }),
        animate('1s', style({
            transform: 'translateX(250px)'
        })),
        animate('1s', style({
            transform: 'translate(250px, 250px)'
        })),
        style({
            backgroundColor: 'yellow'
        })
    ]),
]);

export const groupState = trigger('group', [
    state('shrink', style({
        height: '100px',
        width: '100px'
    })),
    state('expand', style({
        height: '200px',
        width: '200px'
    })),
    transition('shrink => expand', [
        animate('1s', style({
            height: '200px'
        })),
        animate('1s', style({
            width: '200px'
        })),
    ]),
    transition('expand => shrink', [
        animate('1s', style({
            height: '100px'
        })),
        animate('1s', style({
            width: '100px'
        })),
    ]),
]);


/**
 * not proper scenario
 */
// export const queryState = trigger('fold', [
//     state('shrink', style({
//         width: '64px'
//     })),
//     state('expand', style({
//         width: '350px'
//     })),
//     transition('shrink <=> expand', animate('1s')),
// ]);

export const queryState = trigger('fold', [
    state('shrink', style({
        width: '64px',
        overflow: 'hidden'
    })),
    state('expand', style({
        width: '350px'
    })),
    transition('shrink => expand', [
        query('.message-text', style({
            whiteSpace: 'nowrap'
        })),
        query('.message-text-box', style({
            overflow: 'hidden'
        })),
        style({ overflow: 'hidden' }),
        animate('1s'),
        style({ overflow: 'hidden' }),
    ]),
    transition('expand => shrink', [
        query('.message-text', style({
            whiteSpace: 'nowrap'
        })),
        query('.message-text-box', style({
            overflow: 'hidden'
        })),
        style({ overflow: 'hidden' }),
        animate('1s'),
    ]),
]);

export const fadeIn = trigger('fade', [
    transition(':enter', [
        style({
            transform: 'translateY(-25px)',
            opacity: 0
        }),
        animate('350ms')
    ]),
    transition(':leave', [
        animate('350ms', style({
            transform: 'translateY(-25px)',
            opacity: 0
        }))
    ]),
]);

export const panelExpand = trigger('panel', [
    state('collapsed', style({
        height: '0px', minHeight: '0'
    })),
    state('expanded', style({
        height: '*'
    })),
    transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
]);