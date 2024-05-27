# R3F application debug

## React application debug

    StrictMode in React helps to warn us about potential problems like
        1. Unused imports.
        2. Infinite render loop.
        3. Forgotten useEffect dependencies.
        4. Deprecated practices.
        5. etc
    In /src/index.js, import StrictMode from react
    import {StrictMode} from 'react';

    StrictMode will be ignored once the application is built

## Browser Extenstions

    React Developer tools extention will help us check and modify react components live.

## Debug UI with Leva

    npm i leva

    Tweaking a value, will result in the component re-rendering.
    const controls = useControls({ position: -2})

    We can destructure it in order to get only the position.
    const { position } = useControls({ position : -2 })

    Now we can use this position variable in the position-x attribute of the sphere <mesh>

    Instead of adding a second range tweak, we can use a vector 2 tweak.

    value : {x : -2, y: 0}

    We can use colors. Add acolor property in the useControls and a color variable in the destructuring.
