import { PaButtonComponent } from '@emmental/ui/button';

export default { title: 'My Button' };

export const withText = () => ({
    component: PaButtonComponent,
    props: {
        text: 'Hello Button',
    },
});

export const withEmoji = () => ({
    component: PaButtonComponent,
    props: {
        text: '😀 😎 👍 💯',
    },
});
