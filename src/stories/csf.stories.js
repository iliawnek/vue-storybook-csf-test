import MyButton from '../components/MyButton.vue'

export default {
    title: 'CSF test',
}

export const csfTest = () => ({
    components: { MyButton },
    template: `<my-button>Using CSF</my-button>`,
})
