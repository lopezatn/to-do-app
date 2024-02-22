import { ExampleProps } from ".";


// This could be used when rendering the component for testing
const defaultExampleProps: ExampleProps = {
    message: 'Some message',
    optionalMessage2: undefined,
    numbersToSum: [4, 4]
}

describe('Example', () => {
    it('Passses', () => {
        expect(true).toBe(true)
    })    
})